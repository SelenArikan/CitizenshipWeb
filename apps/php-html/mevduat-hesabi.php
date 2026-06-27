<?php
require_once 'includes/schema.php';
$seoKey = 'mevduat-hesabi';
include 'includes/header.php';

// Resolve backLabel dynamically matching Next.js
$backLabel = __t('services_page.detail_back');
if (strpos($backLabel, '{') === 0) {
    $backLabel = __t('nav.services');
    if (strpos($backLabel, '{') === 0) {
        $backLabel = 'Hizmetler';
    }
}

$consultationLabels = [
    'tr' => 'Danışmanlık',
    'en' => 'Consultation',
    'ru' => 'Консультация',
    'ar' => 'استشارة',
    'fa' => 'مشاوره',
];
$consultationLabel = $consultationLabels[$lang] ?? 'Danışmanlık';
?>

    <main dir="<?= $dict['dir'] ?? 'ltr' ?>" class="bg-white">

      <!-- ── BREADCRUMB + HERO ── -->
      <section class="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
        <div class="relative mx-auto max-w-6xl px-6">
          <!-- Breadcrumb -->
          <nav class="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <a href="index.php?lang=<?= $lang ?>" class="transition hover:text-gray-700"><?= htmlspecialchars(__t('nav.home') ?? 'Anasayfa') ?></a>
            <span>/</span>
            <a href="services.php?lang=<?= $lang ?>" class="transition hover:text-gray-700"><?= htmlspecialchars($backLabel) ?></a>
            <span>/</span>
            <span class="text-gray-700 font-medium"><?= htmlspecialchars(__t('mevduat_page.hero.breadcrumbLabel') ?? '') ?></span>
          </nav>

          <!-- Başlık -->
          <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-4xl">
            <?= htmlspecialchars(__t('mevduat_page.hero.breadcrumbLabel') ?? '') ?>
          </h1>
          <?php if ($summary = __t('mevduat_page.hero.summary')): ?>
            <p class="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              <?= htmlspecialchars($summary) ?>
            </p>
          <?php endif; ?>
        </div>
      </section>

      <!-- ── ANA İÇERİK + SIDEBAR ── -->
      <section class="bg-white py-16">
        <div class="mx-auto max-w-6xl px-6">
          <div class="flex flex-col gap-16 lg:flex-row lg:gap-20">

            <!-- SOL: İçerik Bölümleri -->
            <div class="min-w-0 flex-1">
              <?php
              $copy = __t('mevduat_page');
              
              // 1. Süreç (process)
              if (!empty($copy['process'])) {
                  echo render_numbered_section($copy['process'], $lang);
              }
              
              // 2. Kritik Riskler (risks)
              if (!empty($copy['risks'])) {
                  echo render_bullet_section($copy['risks'], $lang);
              }
              
              // 3. BES Yöntemi (bes)
              if (!empty($copy['bes'])) {
                  $bes = $copy['bes'];
                  echo render_intro_section($bes, $lang);
                  
                  if (!empty($bes['restrictions'])) {
                      echo render_plain_bullet_section([
                          'title' => $bes['restrictionsTitle'] ?? '',
                          'items' => $bes['restrictions']
                      ], $lang);
                  }
                  
                  if (!empty($bes['officeRole'])) {
                      $items = [];
                      foreach ($bes['officeRole'] as $role) {
                          $items[] = ['title' => $role];
                      }
                      echo render_numbered_section([
                          'title' => $bes['officeRoleTitle'] ?? '',
                          'items' => $items
                      ], $lang);
                  }
              }
              
              // 4. Uygunluk Belgesi Sonrası (postApproval)
              if (!empty($copy['postApproval'])) {
                  $postApproval = $copy['postApproval'];
                  echo render_intro_section($postApproval, $lang);
                  
                  if (!empty($postApproval['bullets'])) {
                      echo render_plain_bullet_section([
                          'items' => $postApproval['bullets']
                      ], $lang);
                  }
              }
              
              // 5. Kimler Başvurabilir (whoCanApply)
              if (!empty($copy['whoCanApply'])) {
                  $wca = $copy['whoCanApply'];
                  
                  if (!empty($wca['conditions'])) {
                      echo render_plain_bullet_section([
                          'eyebrow' => $wca['eyebrow'] ?? '',
                          'title' => $wca['conditionsTitle'] ?? '',
                          'items' => $wca['conditions']
                      ], $lang);
                  }
                  
                  if (!empty($wca['family'])) {
                      echo render_plain_bullet_section([
                          'title' => $wca['familyTitle'] ?? '',
                          'items' => $wca['family']
                      ], $lang);
                  }
                  
                  if (!empty($wca['cannot'])) {
                      echo render_plain_bullet_section([
                          'title' => $wca['cannotTitle'] ?? '',
                          'items' => $wca['cannot']
                      ], $lang);
                  }
                  
                  if (!empty($wca['special'])) {
                      echo render_plain_bullet_section([
                          'title' => $wca['specialTitle'] ?? '',
                          'items' => $wca['special']
                      ], $lang);
                  }
              }
              
              // 6. Hizmet Kapsamı (serviceScope)
              if (!empty($copy['serviceScope'])) {
                  echo render_plain_bullet_section([
                      'eyebrow' => $copy['serviceScope']['eyebrow'] ?? '',
                      'title' => $copy['serviceScope']['title'] ?? '',
                      'items' => $copy['serviceScope']['items'] ?? []
                  ], $lang);
              }
              ?>

              <!-- İletişim Notu -->
              <div class="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  <?= htmlspecialchars(__t('mevduat_page.cta.description') ?? '') ?>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="border-b border-gray-400 pb-px font-bold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    <?= htmlspecialchars(__t('mevduat_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
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
                    <?= htmlspecialchars($consultationLabel) ?>
                  </p>
                  <p class="mb-5 text-sm leading-relaxed text-gray-600">
                    <?= htmlspecialchars(__t('mevduat_page.cta.title') ?? '') ?>
                  </p>
                  <a
                    href="contact.php?lang=<?= $lang ?>"
                    class="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    <?= htmlspecialchars(__t('mevduat_page.cta.primaryCta') ?? 'Ücretsiz Danışın') ?>
                  </a>
                  <?php if ($secCta = __t('mevduat_page.cta.secondaryCta')): ?>
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
