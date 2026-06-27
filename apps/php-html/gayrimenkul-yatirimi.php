<?php
require_once 'includes/schema.php';
$seoKey = 'gayrimenkul-yatirimi';
include 'includes/header.php';

// Resolve backLabel dynamically matching Next.js
$backLabel = __t('services_page.detail_back');
if (strpos($backLabel, '{') === 0) {
    $backLabel = __t('nav.services');
    if (strpos($backLabel, '{') === 0) {
        $backLabel = 'Hizmetler';
    }
}
?>

    <main dir="<?= $dict['dir'] ?? 'ltr' ?>" class="bg-white">

      <!-- ── BREADCRUMB + HERO ── -->
      <section class="relative overflow-hidden min-h-[450px] md:min-h-[540px] flex flex-col justify-between pt-10 pb-16 bg-slate-950">
        <img
          src="gayrimenkul-hero.webp"
          alt="<?= htmlspecialchars(__t('gayrimenkul_page.hero.imageAlt')) ?>"
          aria-hidden="true"
          class="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-opacity duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/60"></div>
        
        <div class="relative mx-auto w-full max-w-6xl px-6 flex flex-col justify-between flex-1">
          <!-- Breadcrumb -->
          <nav class="mb-auto flex items-center gap-1.5 text-xs text-white/70" aria-label="Breadcrumb">
            <a href="index.php?lang=<?= $lang ?>" class="transition hover:text-white"><?= __t('nav.home') ?? 'Anasayfa' ?></a>
            <span>/</span>
            <a href="services.php?lang=<?= $lang ?>" class="transition hover:text-white"><?= htmlspecialchars($backLabel) ?></a>
            <span>/</span>
            <span class="text-white font-medium"><?= __t('gayrimenkul_page.hero.breadcrumbLabel') ?></span>
          </nav>

          <!-- Başlık -->
          <div class="mt-20">
            <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-md">
              <?= __t('gayrimenkul_page.hero.breadcrumbLabel') ?>
            </h1>
            <?php if ($summary = __t('gayrimenkul_page.hero.summary')): ?>
              <p class="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 drop-shadow">
                <?= htmlspecialchars($summary) ?>
              </p>
            <?php endif; ?>
          </div>
        </div>
      </section>

      <!-- ── ANA İÇERİK + SIDEBAR ── -->
      <section class="bg-white py-16">
        <div class="mx-auto max-w-6xl px-6">
          <div class="flex flex-col gap-16 lg:flex-row lg:gap-20">

            <!-- SOL: İçerik Bölümleri -->
            <div class="min-w-0 flex-1">
              <?php
              // 1. Intro
              echo render_intro_section(__t('gayrimenkul_page.intro'), $lang);
              
              // 2. Süreç (process) - Birinci Bölüm
              echo render_numbered_section(__t('gayrimenkul_page.process'), $lang);
              
              // 3. Gereksinimler (requirements) - İkinci Bölüm
              echo render_numbered_section(__t('gayrimenkul_page.requirements'), $lang);
              
              // 4. Mülk Türleri (propertyTypes) - Üçüncü Bölüm
              if ($propertyTypes = __t('gayrimenkul_page.propertyTypes')) {
                  if (!empty($propertyTypes['items'])) {
                      echo render_bullet_section($propertyTypes, $lang);
                  }
              }
              
              // 5. Belgeler (documents) - Dördüncü Bölüm
              if ($documents = __t('gayrimenkul_page.documents')) {
                  if (!empty($documents['items'])) {
                      echo render_numbered_section($documents, $lang);
                  }
              }
              
              // 6. Hukuki (legal)
              if ($legal = __t('gayrimenkul_page.legal')) {
                  if (!empty($legal['items'])) {
                      echo render_legal_section($legal, $lang);
                  }
              }
              ?>

              <!-- İletişim Notu -->
              <div class="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  <?= htmlspecialchars(__t('gayrimenkul_page.cta.description') ?? '') ?>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="border-b border-gray-400 pb-px font-bold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    <?= htmlspecialchars(__t('gayrimenkul_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
                  </a>
                </p>
              </div>
            </div>

            <!-- SAĞ: Sticky Sidebar -->
            <aside class="w-full lg:w-64 lg:shrink-0">
              <div class="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-2 scrollbar-thin space-y-5">

                <!-- Danışmanlık Kutusu -->
                <div class="border border-gray-100 p-5">
                  <p class="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                    <?= htmlspecialchars(__t('gayrimenkul_page.strip.eyebrow') ?? 'Danışmanlık') ?>
                  </p>
                  <p class="mb-5 text-sm leading-relaxed text-gray-600">
                    <?= htmlspecialchars(__t('gayrimenkul_page.cta.title') ?? '') ?>
                  </p>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    <?= htmlspecialchars(__t('gayrimenkul_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
                  </a>
                  <?php if ($secCta = __t('gayrimenkul_page.cta.secondaryCta')): ?>
                    <a
                      href="questions.php?lang=<?= $lang ?>"
                      class="mt-2 block border border-gray-200 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-gray-600 transition hover:border-gray-400"
                    >
                      <?= htmlspecialchars($secCta) ?>
                    </a>
                  <?php endif; ?>
                </div>

                <!-- Diğer Seçenekler -->
                <div class="border border-gray-100">
                  <div class="border-b border-gray-100 bg-gray-50 px-5 py-3">
                    <p class="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                      <?= htmlspecialchars(__t('services_page.detail_others') ?? 'Diğer Seçenekler') ?>
                    </p>
                  </div>
                  <ul class="divide-y divide-gray-100">
                    <?php
                                        $allPrograms = [
                        ['label' => __t('nav.investment_real_estate') ?? 'Gayrimenkul Yatırımı', 'href' => 'gayrimenkul-yatirimi.php?lang=' . $lang, 'slug' => 'gayrimenkul-yatirimi'],
                        ['label' => __t('nav.investment_deposit') ?? 'Mevduat Hesabı', 'href' => 'mevduat-hesabi.php?lang=' . $lang, 'slug' => 'mevduat-hesabi'],
                        ['label' => __t('nav.investment_bes') ?? 'BES Yatırımı', 'href' => 'bes-yatirimi.php?lang=' . $lang, 'slug' => 'bes-yatirimi'],
                        ['label' => __t('nav.investment_employment') ?? 'İstihdam Oluşturmak', 'href' => 'istihdam-olusturmak.php?lang=' . $lang, 'slug' => 'istihdam-olusturmak'],
                        ['label' => __t('nav.investment_fund') ?? 'Gayrimenkul Yatırım Fonu', 'href' => 'gayrimenkul-yatirim-fonu.php?lang=' . $lang, 'slug' => 'gayrimenkul-yatirim-fonu'],
                        ['label' => __t('nav.investment_bonds') ?? 'Devlet Borçlanma Araçları', 'href' => 'devlet-borclanma-araclari.php?lang=' . $lang, 'slug' => 'devlet-borclanma-araclari'],
                        ['label' => __t('nav.item_cit_gen') ?? 'Genel Yolla Vatandaşlık', 'href' => 'genel-yolla-vatandaslik.php?lang=' . $lang, 'slug' => 'genel-yolla-vatandaslik'],
                        ['label' => __t('nav.item_cit_marriage') ?? 'Evlilik Yoluyla Vatandaşlık', 'href' => 'evlilik-yoluyla-vatandaslik.php?lang=' . $lang, 'slug' => 'evlilik-yoluyla-vatandaslik'],
                        ['label' => __t('nav.item_cit_process') ?? 'Vatandaşlık Başvuru Süreci', 'href' => 'basvuru-sureci.php?lang=' . $lang, 'slug' => 'basvuru-sureci'],
                        ['label' => __t('nav.item_cit_passport') ?? 'Türk Pasaportunun Avantajları', 'href' => 'pasaport.php?lang=' . $lang, 'slug' => 'pasaport'],
                    ];
                    foreach ($allPrograms as $prog):
                        if ($prog['slug'] === $seoKey) continue;
                    ?>
                      <li>
                        <a
                          href="<?= htmlspecialchars($prog['href']) ?>"
                          class="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-red-700"
                        >
                          <?= htmlspecialchars($prog['label']) ?>
                          <svg class="h-3.5 w-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7-7" />
                          </svg>
                        </a>
                      </li>
                    <?php endforeach; ?>
                  </ul>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
