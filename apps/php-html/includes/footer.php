<?php $ft = __t('footer'); ?>
<?php
$locationTitle = $ft['location_title'] ?? 'Office Location';
$addressLine1 = $ft['address_line_1'] ?? 'Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2';
$addressLine2 = $ft['address_line_2'] ?? 'GINZA PLAZA, 34015 Zeytinburnu / Istanbul';
$phoneLabel = $ft['phone_label'] ?? 'Phone';
$emailLabel = $ft['email_label'] ?? 'Email';
$hoursTitle = $ft['hours_title'] ?? 'Working Hours';
$hoursWeekdays = $ft['hours_weekdays'] ?? 'Monday - Friday: 08:30 - 18:00';
$hoursWeekend = $ft['hours_weekend'] ?? 'Saturday - Sunday: Closed';
$mapButton = $ft['map_button'] ?? 'Open in Google Maps';
$mapQuery = rawurlencode('Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2 GINZA PLAZA, 34015 Zeytinburnu, Istanbul');
$mapEmbedUrl = 'https://maps.google.com/maps?q=' . $mapQuery . '&z=15&output=embed';
$mapLinkUrl = 'https://www.google.com/maps/search/?api=1&query=' . $mapQuery;

$isRtl = $lang === 'ar' || $lang === 'fa';
?>
    <footer class="relative z-20 mt-auto border-t border-[#0A2550] bg-[#0a192f] py-10 text-blue-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div class="sm:col-span-1">
            <a href="<?= seo_page_href('home', $lang) ?>" class="mb-4 block max-w-xs">
              <img
                src="logo/necmettin-barman-logo.png"
                alt="Necmettin Barman & Associates"
                class="h-auto w-full max-h-20 bg-transparent object-contain object-left brightness-0 invert"
              />
            </a>
            <p class="text-sm leading-relaxed text-blue-200/70"><?= $ft['desc'] ?></p>
          </div>

          <div>
            <h4 class="mb-4 text-xs font-bold uppercase tracking-wider text-white"><?= $ft['col1'] ?></h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="<?= seo_page_href('home', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white"><?= $ft['home'] ?></a></li>
              <li><a href="<?= seo_page_href('services', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white"><?= $ft['services'] ?></a></li>
              <li><a href="<?= seo_page_href('citizenship', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white">Adımlar</a></li>
              <li><a href="<?= seo_page_href('knowledge', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white">Bilgi Bankası</a></li>
              <li><a href="<?= seo_page_href('news', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white">Haberler</a></li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 text-xs font-bold uppercase tracking-wider text-white"><?= $ft['col2'] ?></h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="<?= seo_page_href('questions', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white"><?= $ft['faq'] ?></a></li>
              <li><a href="<?= seo_page_href('contact', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white"><?= $ft['contact'] ?></a></li>
              <li><a href="<?= seo_page_href('privacy', $lang) ?>" class="text-blue-200/70 transition no-underline hover:text-white"><?= $ft['privacy'] ?></a></li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 text-xs font-bold uppercase tracking-wider text-white"><?= $ft['col3'] ?></h4>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-2">
                <svg class="h-3.5 w-3.5 shrink-0 text-blue-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905324494728" class="text-blue-200/70 transition hover:text-white" dir="ltr">
                  +90 532 449 47 28
                </a>
              </div>
              <div class="flex items-start gap-2">
                <svg class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@turkeyinvestmentcitizenship.com" class="break-all text-blue-200/70 transition hover:text-white" dir="ltr">
                  info@turkeyinvestmentcitizenship.com
                </a>
              </div>
              <?php if ($hoursWeekdays): ?>
                <div class="flex items-start gap-2">
                  <svg class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div class="text-blue-200/70">
                    <p><?= htmlspecialchars($hoursWeekdays) ?></p>
                    <?php if ($hoursWeekend): ?>
                      <p><?= htmlspecialchars($hoursWeekend) ?></p>
                    <?php endif; ?>
                  </div>
                </div>
              <?php endif; ?>
            </div>
          </div>

          <div class="sm:col-span-2 lg:col-span-1">
            <div class="mb-2 flex items-center justify-between gap-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white"><?= htmlspecialchars($locationTitle) ?></h4>
              <a
                href="<?= htmlspecialchars($mapLinkUrl) ?>"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="shrink-0 rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-200 transition hover:bg-white/10 hover:text-white"
              >
                <?= htmlspecialchars($mapButton) ?>
              </a>
            </div>
            <p class="mb-2 text-xs leading-snug text-blue-200/60" dir="<?= $isRtl ? 'rtl' : 'ltr' ?>">
              <?= htmlspecialchars($addressLine1) ?>
              <br />
              <?= htmlspecialchars($addressLine2) ?>
            </p>
            <div class="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Office map"
                src="<?= htmlspecialchars($mapEmbedUrl) ?>"
                loading="lazy"
                class="h-36 w-full border-0"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-white/10 pt-6 text-center text-sm text-blue-200/50">
          &copy; 2026 Necmettin Barman & Associates. <?= $ft['rights'] ?>
        </div>
      </div>
    </footer>
    <?php include __DIR__ . '/chat-widget.php'; ?>
    <script>
      (function() {
        if (!('IntersectionObserver' in window)) {
          document.querySelectorAll('.reveal').forEach(function(el) {
            el.classList.add('is-revealed');
          });
          return;
        }
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
            }
          });
        }, { threshold: 0.05, rootMargin: '80px 0px -10px 0px' });

        function observeElements() {
          document.querySelectorAll('.reveal:not(.is-revealed)').forEach(function(el) {
            observer.observe(el);
          });
        }
        
        observeElements();
        var interval = setInterval(observeElements, 800);

        var fallback = setTimeout(function() {
          document.querySelectorAll('.reveal:not(.is-revealed)').forEach(function(el) {
            el.classList.add('is-revealed');
          });
        }, 2000);

        window.addEventListener('beforeunload', function() {
          clearInterval(interval);
          clearTimeout(fallback);
          observer.disconnect();
        });
      })();
    </script>
</body>
</html>
