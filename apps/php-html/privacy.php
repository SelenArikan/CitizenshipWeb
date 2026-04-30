<?php
$seoKey = 'privacy';
include 'includes/header.php';

$privacy = __t('privacy_page');
$cards = isset($privacy['cards']) && is_array($privacy['cards']) ? $privacy['cards'] : [];
?>

    <main class="min-h-screen bg-[#f4f6f8] text-[#0a192f]">
      <section class="relative overflow-hidden bg-[#0a192f] px-6 py-24 text-white sm:px-8 mt-20">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,34,34,0.28),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]"></div>
        <div class="relative mx-auto flex max-w-5xl flex-col gap-6">
          <span class="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
            <?= htmlspecialchars($privacy['eyebrow'] ?? '') ?>
          </span>
          <h1 class="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            <?= htmlspecialchars($privacy['title'] ?? '') ?>
          </h1>
          <p class="max-w-3xl text-base leading-7 text-gray-200 sm:text-lg">
            <?= htmlspecialchars($privacy['intro'] ?? '') ?>
          </p>
        </div>
      </section>

      <section class="px-6 py-16 sm:px-8">
        <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <?php foreach ($cards as $card): ?>
            <article class="rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(10,25,47,0.08)]">
              <h2 class="text-2xl font-bold text-[#0a192f]"><?= htmlspecialchars($card['title'] ?? '') ?></h2>
              <p class="mt-4 text-[15px] leading-7 text-gray-600"><?= htmlspecialchars($card['desc'] ?? '') ?></p>
            </article>
          <?php endforeach; ?>
        </div>

        <div class="mx-auto mt-8 flex max-w-5xl justify-start">
          <a
            href="<?= htmlspecialchars(seo_page_href('contact', $lang)) ?>"
            class="inline-flex items-center justify-center rounded-full bg-[#8a1c1c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a32222]"
          >
            <?= htmlspecialchars($privacy['contact_cta'] ?? '') ?>
          </a>
        </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
