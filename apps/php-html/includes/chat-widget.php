<?php
$chatCopy = [
    'title' => __t('chat.title'),
    'intro' => __t('chat.intro'),
    'placeholder' => __t('chat.placeholder'),
    'status_online' => __t('chat.status_online'),
    'status_offline' => __t('chat.status_offline'),
];
?>
<!-- Floating Chat Widget -->
<div id="chatWidget" class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    
    <!-- Chat Window -->
    <div id="chatWindow" class="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col transition-all duration-300 transform scale-0 origin-bottom-right pointer-events-auto" style="height: 500px; max-height: 80vh;">
        <!-- Header -->
        <div class="bg-navy text-white p-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-burgundy rounded-full flex justify-center items-center">
                    <span class="text-xl">💬</span>
                </div>
                <div>
                    <h4 class="font-bold"><?= htmlspecialchars($chatCopy['title']) ?></h4>
                    <p class="text-xs text-gray-300" id="adminStatusText"><?= htmlspecialchars($chatCopy['status_offline']) ?></p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span id="adminOnlineDot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#6b7280;transition:background 0.3s;" title="Yükleniyor..."></span>
                <button onclick="toggleChat()" class="text-white hover:text-gray-300 border-none bg-transparent text-xl leading-none">&times;</button>
            </div>
        </div>
        
        <!-- Messages Body -->
        <div id="chatMessages" class="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
            <!-- Initial Message -->
            <div class="flex gap-2 w-full">
                <div class="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm flex-shrink-0">💬</div>
                <div class="bg-white border border-gray-200 text-gray-800 p-3 rounded-2xl rounded-tl-sm text-sm" style="max-width: 80%;">
                    <?= htmlspecialchars($chatCopy['intro']) ?>
                </div>
            </div>
        </div>
        
        <!-- Input Area -->
        <div class="p-3 bg-white border-t border-gray-200">
            <form id="chatForm" class="flex items-center gap-2" onsubmit="handleChatSubmit(event)">
                <input type="text" id="chatInput" placeholder="<?= htmlspecialchars($chatCopy['placeholder']) ?>" required class="flex-1 py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy/50 text-sm">
                <button type="submit" class="w-10 h-10 bg-burgundy hover:bg-burgundy-light text-white rounded-full flex justify-center items-center transition-colors">
                    <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                </button>
            </form>
        </div>
    </div>

    <!-- Floating Button with Unread Badge -->
    <div style="position:relative;">
        <span id="chatUnreadBadge" style="display:none;position:absolute;top:-4px;right:-4px;background:#ef4444;color:#fff;font-size:10px;font-weight:700;border-radius:999px;padding:2px 6px;z-index:10;min-width:18px;text-align:center;"></span>
        <button onclick="toggleChat()" class="w-16 h-16 bg-burgundy hover:bg-burgundy-light shadow-2xl rounded-full text-white flex justify-center items-center transition-transform hover:scale-110 pointer-events-auto">
            <svg id="chatIconOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <svg id="chatIconClose" class="w-8 h-8 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
    </div>
</div>

<script>
    let isChatOpen = false;
    let lastMessageId = 0;
    let pollInterval = null;
    let unreadCount = 0;
    const $lang = document.documentElement.lang || 'tr';
    const chatCopy = <?= json_encode($chatCopy, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?>;

    function getChatStorageKey(lang, suffix) {
        const safeLang = (lang || 'tr').trim().toLowerCase() || 'tr';
        return `chat_${suffix}_${safeLang}`;
    }

    function migrateLegacyChatStorage(lang) {
        const legacyId = localStorage.getItem('chat_id');
        const legacyDate = localStorage.getItem('chat_session_date');
        const today = new Date().toISOString().slice(0, 10);

        if (legacyId && legacyDate === today) {
            const idKey = getChatStorageKey(lang, 'id');
            const dateKey = getChatStorageKey(lang, 'session_date');
            localStorage.setItem(idKey, legacyId);
            localStorage.setItem(dateKey, legacyDate);
            localStorage.removeItem('chat_id');
            localStorage.removeItem('chat_session_date');
            return legacyId;
        }

        if (legacyId || legacyDate) {
            localStorage.removeItem('chat_id');
            localStorage.removeItem('chat_session_date');
        }

        return null;
    }

    // Her gün ve her dil için yeni oturum: farklı gündeyse yeni chat_id üret
    function getOrCreateChatId(lang) {
        const today = new Date().toISOString().slice(0, 10);
        const idKey = getChatStorageKey(lang, 'id');
        const dateKey = getChatStorageKey(lang, 'session_date');
        const stored = localStorage.getItem(idKey);
        const storedDate = localStorage.getItem(dateKey);
        if (stored && storedDate === today) return stored;
        const migratedLegacy = migrateLegacyChatStorage(lang);
        if (migratedLegacy) return migratedLegacy;
        const id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
        localStorage.setItem(idKey, id);
        localStorage.setItem(dateKey, today);
        return id;
    }

    let chatId = getOrCreateChatId($lang);

    // Admin çevrimiçi durumunu güncelle
    function setAdminStatus(online) {
        const dot = document.getElementById('adminOnlineDot');
        const text = document.getElementById('adminStatusText');
        if (!dot || !text) return;
        if (online) {
            dot.style.background = '#22c55e';
            dot.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.25)';
            dot.title = chatCopy.status_online;
            text.textContent = chatCopy.status_online;
        } else {
            dot.style.background = '#6b7280';
            dot.style.boxShadow = 'none';
            dot.title = chatCopy.status_offline;
            text.textContent = chatCopy.status_offline;
        }
    }

    // Okunmamış badge güncelle
    function updateUnreadBadge(count) {
        const badge = document.getElementById('chatUnreadBadge');
        if (!badge) return;
        if (count > 0 && !isChatOpen) {
            badge.style.display = 'inline-block';
            badge.textContent = count > 9 ? '9+' : String(count);
        } else {
            badge.style.display = 'none';
            badge.textContent = '';
        }
    }

    function toggleChat() {
        isChatOpen = !isChatOpen;
        const windowEl = document.getElementById('chatWindow');
        const iconOpen = document.getElementById('chatIconOpen');
        const iconClose = document.getElementById('chatIconClose');
        
        if (isChatOpen) {
            windowEl.classList.remove('scale-0');
            windowEl.classList.add('scale-100');
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
            document.getElementById('chatInput').focus();
            // Okunmamış sayacı sıfırla
            unreadCount = 0;
            updateUnreadBadge(0);
            startPolling();
        } else {
            windowEl.classList.remove('scale-100');
            windowEl.classList.add('scale-0');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            stopPolling();
        }
    }

    async function handleChatSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text) return;
        
        // Kullanıcı mesajını anında göster
        addMessage(text, 'user');
        input.value = '';
        input.disabled = true;

        try {
            await fetch('/api/chat/send.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    message: text,
                    lang: $lang
                })
            });
            pollChat();
        } catch(err) {
            console.error(err);
        }
        
        input.disabled = false;
        input.focus();
    }
    
    function startPolling() {
        if (!pollInterval) {
            pollChat();
            pollInterval = setInterval(pollChat, 2000);
        }
    }
    
    function stopPolling() {
        if (pollInterval) {
            clearInterval(pollInterval);
            pollInterval = null;
        }
    }

    async function pollChat() {
        try {
            const res = await fetch('/api/chat/poll.php?chat_id=' + chatId + '&last_id=' + lastMessageId + '&is_user=1');
            const data = await res.json();

            // Admin çevrimiçi durumunu güncelle
            if (data.admin_online !== undefined) {
                setAdminStatus(!!data.admin_online);
            } else if (data.status === 'active') {
                setAdminStatus(true);
            }
            
            if (data.messages && data.messages.length > 0) {
                // İlk yüklemede HTML karşılama mesajını temizle
                if (lastMessageId === 0) {
                    document.getElementById('chatMessages').innerHTML = '';
                }

                let newAdminMsgCount = 0;
                data.messages.forEach(msg => {
                    addMessage(msg.message, msg.sender_type);
                    lastMessageId = Math.max(lastMessageId, parseInt(msg.id));
                    // Pencere kapalıyken gelen admin mesajlarını say
                    if (msg.sender_type === 'admin' && !isChatOpen) {
                        newAdminMsgCount++;
                    }
                });

                if (newAdminMsgCount > 0) {
                    unreadCount += newAdminMsgCount;
                    updateUnreadBadge(unreadCount);
                }
            }
        } catch (err) {
            console.error('Polling error', err);
        }
    }

    function addMessage(text, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const isUser = sender === 'user';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'flex gap-2 w-full' + (isUser ? ' justify-end' : '');
        
        let html = '';
        if (isUser) {
            html = `<div class="bg-navy text-white p-3 rounded-2xl rounded-tr-sm text-sm" style="max-width:80%;">${escapeHtml(text)}</div>`;
        } else {
            html = `
                <div class="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm flex-shrink-0">💬</div>
                <div class="bg-white border border-gray-200 text-gray-800 p-3 rounded-2xl rounded-tl-sm text-sm" style="max-width:80%;">${escapeHtml(text)}</div>
            `;
        }
        
        wrapper.innerHTML = html;
        chatMessages.appendChild(wrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function escapeHtml(unsafe) {
        return String(unsafe)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Sayfa açılırken admin durumunu kontrol et (chat penceresi kapalıyken bile)
    (async function checkInitialAdminStatus() {
        try {
            const res = await fetch('/api/chat/poll.php?chat_id=' + chatId + '&last_id=0');
            const data = await res.json();
            if (data.admin_online !== undefined) {
                setAdminStatus(!!data.admin_online);
            } else if (data.status === 'active') {
                setAdminStatus(true);
            }
        } catch(e) {}
    })();

    // "Canlı Destek" içeren butonlara tıklandığında widget'ı aç
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('button, a').forEach(b => {
            if (b.textContent.trim().includes('Canlı Destek') || b.textContent.trim().includes('Canlı Sohbet') || b.textContent.trim().includes('Live Chat')) {
                b.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!isChatOpen) toggleChat();
                });
            }
        });
    });
</script>
