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
?>
    <footer class="bg-navy text-gray-300 py-12 border-t border-white/10 mt-auto relative z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.05fr_0.8fr_0.9fr_1.45fr] gap-8">
          <div class="col-span-1">
             <span class="font-bold text-2xl text-white block mb-4">Citizenship<span class="text-burgundy-light">Web</span></span>
             <p class="text-sm text-gray-400"><?= $ft['desc'] ?></p>
             <div class="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
               <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400"><?= htmlspecialchars($locationTitle) ?></p>
               <p class="mt-3 text-sm leading-relaxed text-gray-300"><?= htmlspecialchars($addressLine1) ?></p>
               <p class="mt-1 text-sm leading-relaxed text-gray-400"><?= htmlspecialchars($addressLine2) ?></p>
             </div>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4"><?= $ft['col1'] ?></h4>
            <ul class="space-y-2 text-sm">
              <li><a href="<?= seo_page_href('home', $lang) ?>" class="hover:text-white transition"><?= $ft['home'] ?></a></li>
              <li><a href="<?= seo_page_href('services', $lang) ?>" class="hover:text-white transition"><?= $ft['services'] ?></a></li>
              <li><a href="<?= seo_page_href('knowledge', $lang) ?>" class="hover:text-white transition"><?= $ft['knowledge'] ?></a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4"><?= $ft['col2'] ?></h4>
            <ul class="space-y-2 text-sm">
              <li><a href="<?= seo_page_href('questions', $lang) ?>" class="hover:text-white transition"><?= $ft['faq'] ?></a></li>
              <li><a href="<?= seo_page_href('contact', $lang) ?>" class="hover:text-white transition"><?= $ft['contact'] ?></a></li>
              <li><a href="<?= seo_page_href('privacy', $lang) ?>" class="hover:text-white transition"><?= $ft['privacy'] ?></a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4"><?= $ft['col3'] ?></h4>
            <div class="space-y-4 text-sm text-gray-400">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-500"><?= htmlspecialchars($phoneLabel) ?></p>
                <a href="tel:+905324494728" class="mt-2 block text-gray-300 transition hover:text-white">+90 532 449 47 28</a>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-500"><?= htmlspecialchars($emailLabel) ?></p>
                <a href="mailto:info@turkeyinvestmentcitizenship.com" class="mt-2 block break-all text-gray-300 transition hover:text-white">info@turkeyinvestmentcitizenship.com</a>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-500"><?= htmlspecialchars($hoursTitle) ?></p>
                <p class="mt-2"><?= htmlspecialchars($hoursWeekdays) ?></p>
                <p class="mt-1"><?= htmlspecialchars($hoursWeekend) ?></p>
              </div>
            </div>
          </div>
          <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div class="mb-4 flex items-center justify-between gap-4">
              <div>
                <h4 class="text-lg font-bold text-white"><?= htmlspecialchars($locationTitle) ?></h4>
                <p class="mt-1 text-sm text-gray-400">
                  <?= htmlspecialchars($addressLine1) ?><br/>
                  <?= htmlspecialchars($addressLine2) ?>
                </p>
              </div>
              <a href="<?= htmlspecialchars($mapLinkUrl) ?>" target="_blank" rel="noreferrer" class="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-white/10">
                <?= htmlspecialchars($mapButton) ?>
              </a>
            </div>
            <div class="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Office map"
                src="<?= htmlspecialchars($mapEmbedUrl) ?>"
                loading="lazy"
                class="h-64 w-full border-0"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          &copy; 2026 CitizenshipWeb. <?= $ft['rights'] ?>
        </div>
      </div>
    </footer>
    <?php include __DIR__ . '/chat-widget.php'; ?>
</body>
</html>
