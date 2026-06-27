<?php
require_once 'includes/schema.php';
$seoKey = 'questions';
include 'includes/header.php';
$formCopy = __t('newsletter');
$questionSubmitted = ($_GET['question_submitted'] ?? '') === '1';
$questionError = $_GET['question_error'] ?? '';
if ($questionSubmitted) {
    $questionMessage = $formCopy['success'];
    $questionMessageClass = 'text-xs text-emerald-600 mt-2 text-center font-semibold';
} elseif ($questionError === 'required') {
    $questionMessage = $formCopy['error_required'];
    $questionMessageClass = 'text-xs text-rose-500 mt-2 text-center font-semibold';
} elseif ($questionError !== '') {
    $questionMessage = $formCopy['error_generic'];
    $questionMessageClass = 'text-xs text-rose-500 mt-2 text-center font-semibold';
} else {
    $questionMessage = $formCopy['helper'];
    $questionMessageClass = 'text-xs text-slate-400 mt-2 text-center';
}
?>

    <main class="flex flex-col items-center w-full min-h-screen bg-white">
      <div class="w-full bg-[#0a192f] py-24 text-center text-white px-4 mt-20">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Soru-Cevap</h1>
          <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">Sıkça sorulan sorulara göz atabilir veya uzmanlarımıza doğrudan sorunuzu iletebilirsiniz.</p>
      </div>

<?php 
$faqs = [
    ["q" => "Yatırım yoluyla vatandaşlık süreci ortalama ne kadar sürer?", "a" => "Süreç, seçilen ülkenin programına ve yasal makamların yoğunluğuna göre ortalama 3 ile 8 ay arasında değişmektedir."],
    ["q" => "Aile bireylerim de benimle aynı anda pasaport alabilir mi?", "a" => "Evet, çoğu yatırım programı eşleri ve 18 (bazen 28) yaş altı bağımlı çocukları ile 65 yaş üstü ebeveynleri aynı başvuruya dahil etmeye izin verir."],
    ["q" => "Yatırım fonları geri alınabilir mi?", "a" => "Programların şartlarına göre değişiklik gösterir. Gayrimenkul yatırımları genellikle 3-5 yıl sonra satılabilirken, doğrudan hibe programları geri dönüşsüzdür."],
    ["q" => "Birden fazla ülkenin vatandaşı olabilir miyim?", "a" => "Türkiye dahil birçok ülke çifte veya çoklu vatandaşlığa izin vermektedir. Süreçlerinizi her iki ülkenin anayasasına uygun şekilde yürütüyoruz."]
];
echo schema_render_scripts(schema_questions_page($lang, $faqs));
?>

      <section class="mx-auto w-full max-w-7xl px-8 py-20 flex flex-col md:flex-row gap-16">
         <div class="w-full md:w-2/3">
            <h2 class="text-3xl font-bold text-[#0a192f] mb-8">Sıkça Sorulan Sorular</h2>
            <div class="space-y-4">
               <?php foreach($faqs as $faq): ?>
                  <details class="group bg-[#f4f6f8] rounded-2xl cursor-pointer">
                     <summary class="flex justify-between items-center font-bold text-[#0a192f] p-6 group-open:border-b border-gray-200 focus:outline-none">
                        <?php echo $faq['q']; ?>
                        <span class="text-[#8a1c1c] transition-transform group-open:rotate-45 text-2xl">+</span>
                     </summary>
                     <p class="text-gray-600 p-6 leading-relaxed bg-white rounded-b-2xl border-x border-b border-[#f4f6f8]">
                        <?php echo $faq['a']; ?>
                     </p>
                  </details>
               <?php endforeach; ?>
            </div>
         </div>

         <div class="w-full md:w-1/3">
            <div id="newsletterContainer" class="relative rounded-3xl p-8 shadow-xl lg:sticky lg:top-32 border border-[#0a192f]/10 bg-white text-[#0a192f]">
               <h3 class="text-2xl font-bold mb-4 text-[#0a192f]">Uzmana Sorun</h3>
               <p class="text-gray-500 mb-6 text-sm">Sorularınızı iletişime geçmeden önce bize anonim olarak iletebilirsiniz. Uzmanlarımız sorunuzu yanıtlayarak bu ekranda yayımlayacaktır.</p>
               <form class="flex flex-col space-y-4" method="POST" action="api/ask_question.php">
                  <input type="text" name="name" placeholder="Adınız (İsteğe bağlı)" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-[#8a1c1c] placeholder-slate-400" />
                  <textarea name="question" placeholder="<?= htmlspecialchars($formCopy['placeholder']) ?>" rows="4" class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-[#8a1c1c] placeholder-slate-400" required></textarea>
                  <input type="hidden" name="lang" value="<?= htmlspecialchars($lang) ?>">
                  <input type="hidden" name="redirect" value="<?= htmlspecialchars(seo_page_href('questions', $lang)) ?>">
                  <button type="submit" class="w-full py-4 bg-[#8a1c1c] hover:bg-[#a32222] rounded-full font-bold transition shadow-lg hover:shadow-[#8a1c1c]/20 text-white">
                     <?= htmlspecialchars($formCopy['btn']) ?>
                  </button>
                  <p class="<?= $questionMessageClass ?>"><?= htmlspecialchars($questionMessage) ?></p>
               </form>
            </div>
         </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
