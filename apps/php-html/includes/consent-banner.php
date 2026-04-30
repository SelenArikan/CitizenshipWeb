<?php
$consent = __t('consent_banner');
?>
<div
    id="consentBanner"
    class="fixed bottom-4 left-4 right-24 z-40 hidden sm:bottom-6 sm:left-6 sm:right-28"
    role="dialog"
    aria-labelledby="consent-banner-title"
    aria-describedby="consent-banner-description"
>
    <div class="relative overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(10,25,47,0.94)] text-white shadow-[0_30px_90px_rgba(10,25,47,0.45)] backdrop-blur-xl">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,34,34,0.24),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]"></div>
        <div class="relative p-5 sm:p-6">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div class="max-w-3xl">
                    <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                        <?= htmlspecialchars($consent['badge'] ?? 'Cookies and Privacy Notice') ?>
                    </p>
                    <h2 id="consent-banner-title" class="mt-2 text-lg font-semibold sm:text-2xl">
                        <?= htmlspecialchars($consent['title'] ?? '') ?>
                    </h2>
                    <p id="consent-banner-description" class="mt-3 text-sm leading-6 text-gray-200 sm:text-[15px]">
                        <?= htmlspecialchars($consent['description'] ?? '') ?>
                    </p>

                    <?php if (!empty($consent['items']) && is_array($consent['items'])): ?>
                        <ul class="mt-4 grid gap-2 text-sm leading-6 text-gray-200">
                            <?php foreach ($consent['items'] as $item): ?>
                                <li class="flex items-start gap-3">
                                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-burgundy"></span>
                                    <span><?= htmlspecialchars((string) $item) ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>

                    <a
                        href="<?= htmlspecialchars(seo_page_href('privacy', $lang)) ?>"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-gray-200 hover:decoration-white/70"
                    >
                        <?= htmlspecialchars($consent['link_label'] ?? 'Detailed privacy notice') ?>
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

                <div class="flex shrink-0 items-center justify-end">
                    <button
                        type="button"
                        id="consentBannerAccept"
                        class="inline-flex min-w-[180px] items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-white shadow-lg shadow-burgundy/30 transition hover:bg-burgundy-light"
                    >
                        <?= htmlspecialchars($consent['accept_label'] ?? 'I Agree') ?>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    (function () {
        const storageKey = 'cw_privacy_consent_v1';
        const banner = document.getElementById('consentBanner');
        const acceptButton = document.getElementById('consentBannerAccept');

        if (!banner || !acceptButton) {
            return;
        }

        try {
            const storedConsent = window.localStorage.getItem(storageKey);
            if (!storedConsent) {
                banner.classList.remove('hidden');
            }
        } catch (error) {
            banner.classList.remove('hidden');
        }

        acceptButton.addEventListener('click', function () {
            try {
                window.localStorage.setItem(storageKey, JSON.stringify({
                    status: 'accepted',
                    acceptedAt: new Date().toISOString()
                }));
            } catch (error) {
                // localStorage kullanılamasa da banner kapatılsın
            }

            banner.remove();
        });
    })();
</script>
