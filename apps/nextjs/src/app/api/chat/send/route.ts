import { NextRequest, NextResponse } from 'next/server';

// ─── WhatsApp Cloud API config (Meta) ────────────────────────────
// Bu değerleri .env.local dosyanıza ekleyin:
//   WA_PHONE_NUMBER_ID   = WhatsApp Business Phone Number ID (Meta'dan alınır)
//   WA_ACCESS_TOKEN      = Meta Cloud API erişim tokeni
//   WA_DEST_NUMBER       = Mesajların gideceği numara (uluslararası format, + olmadan)
// ─────────────────────────────────────────────────────────────────
const WA_PHONE_NUMBER_ID = process.env.WA_PHONE_NUMBER_ID ?? '';
const WA_ACCESS_TOKEN    = process.env.WA_ACCESS_TOKEN    ?? '';
const WA_DEST_NUMBER     = process.env.WA_DEST_NUMBER     ?? '905301531041';

async function sendWhatsApp(userMessage: string, lang: string): Promise<void> {
    if (!WA_PHONE_NUMBER_ID || !WA_ACCESS_TOKEN) {
        // Env değişkenleri yoksa sessizce geç (geliştirme ortamı)
        console.warn('[WA] WA_PHONE_NUMBER_ID veya WA_ACCESS_TOKEN eksik — WhatsApp iletimi atlandı.');
        return;
    }

    const langLabel: Record<string, string> = {
        tr: '🇹🇷 Türkçe',
        en: '🇬🇧 İngilizce',
        ru: '🇷🇺 Rusça',
        ar: '🇸🇦 Arapça',
        fa: '🇮🇷 Farsça',
    };

    const body = {
        messaging_product: 'whatsapp',
        to: WA_DEST_NUMBER,
        type: 'text',
        text: {
            body: `📩 *Yeni Site Mesajı* (${langLabel[lang] ?? lang})\n\n${userMessage}`,
        },
    };

    const res = await fetch(
        `https://graph.facebook.com/v20.0/${WA_PHONE_NUMBER_ID}/messages`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${WA_ACCESS_TOKEN}`,
            },
            body: JSON.stringify(body),
        }
    );

    if (!res.ok) {
        const err = await res.text();
        console.error('[WA] Gönderim hatası:', err);
    }
}

const AUTO_REPLIES: Record<string, string> = {
    tr: 'Mesajınız alındı! En kısa sürede size geri döneceğiz. 🙏',
    en: 'Your message has been received! We will get back to you shortly. 🙏',
    ru: 'Ваше сообщение получено! Мы свяжемся с вами в ближайшее время. 🙏',
    ar: 'تم استلام رسالتك! سنرد عليك في أقرب وقت ممكن. 🙏',
    fa: 'پیام شما دریافت شد! به زودی با شما تماس خواهیم گرفت. 🙏',
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message, lang = 'tr' } = body;

        if (!message?.trim()) {
            return NextResponse.json({ success: false, error: 'Mesaj boş olamaz.' }, { status: 400 });
        }

        // WhatsApp'a arka planda gönder (await — hata olsa bile kullanıcıya yanıt dönecek)
        await sendWhatsApp(message.trim(), lang).catch((err) =>
            console.error('[WA] sendWhatsApp hatası:', err)
        );

        // Kullanıcıya otomatik yanıt döndür
        const reply = AUTO_REPLIES[lang] ?? AUTO_REPLIES.tr;
        return NextResponse.json({ success: true, reply });

    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ success: false, error: msg }, { status: 500 });
    }
}
