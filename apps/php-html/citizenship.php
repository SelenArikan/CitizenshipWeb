<?php
require_once 'includes/schema.php';
$seoKey = 'citizenship';
include 'includes/header.php';
?>

    <main class="flex flex-col items-center w-full min-h-screen bg-white">
      <div class="w-full bg-[#0a192f] py-24 text-center text-white px-4 mt-20">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Adım Adım Vatandaşlık Başvuru Süreci</h1>
          <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">Hayalinizdeki pasaporta ulaşırken hiçbir sürprizle karşılaşmayın.</p>
      </div>

<?php
$steps = [
    ["num" => 1, "title" => "Stratejik Değerlendirme", "desc" => "Durumunuza uygun vatandaşlık programının (yatırım, fon, bağış) analiz edilmesi.", "pills" => ["Pasaport Kopyası", "Özgeçmiş"]],
    ["num" => 2, "title" => "Ön Onay ve Evrak Hazırlığı", "desc" => "Seçilen programa göre resmi başvuru evraklarının tercüme ve noter süreçleri.", "pills" => ["Adli Sicil", "Doğum Belgesi", "Banka Dekontu"]],
    ["num" => 3, "title" => "Yatırımın Tamamlanması", "desc" => "Emlak alımı, fon yatırımı veya bağış işlemlerinin resmi kanallarla yapılması.", "pills" => ["Tapu/Hisse", "Değerleme Raporu"]],
    ["num" => 4, "title" => "Resmi Başvurunun İletilmesi", "desc" => "Dosyanızın ilgili ülkenin Vatandaşlık ve Göçmenlik ofisine teslim edilmesi.", "pills" => ["Eksiksiz Dosya Onayı"]],
    ["num" => 5, "title" => "Güvenlik Soruşturması", "desc" => "İlgili ülke makamlarınca yapılan geçmiş arka plan araştırması sürecinin takibi.", "pills" => ["Bekleme Süreci"]],
    ["num" => 6, "title" => "Pasaport Teslimatı", "desc" => "Onay sertifikasının alınması ve ailenizin pasaport/kimlik teslimatının yapılması.", "pills" => ["Vatandaşlık Sertifikası", "Pasaport"]]
];
echo schema_render_scripts(schema_citizenship_page($lang, $steps));
?>

      <section class="w-full max-w-5xl px-8 py-24 overflow-hidden">
         <div class="relative border-l-4 border-gray-200 ml-6 md:ml-0 md:border-none">
            <!-- For desktop, vertical line through middle -->
            <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -ml-[2px]"></div>

            <div class="flex flex-col space-y-16 py-10">
              <?php foreach ($steps as $idx => $step): ?>
                <div class="relative flex flex-col md:flex-row items-center <?php echo ($idx % 2 === 0) ? 'md:flex-row-reverse' : ''; ?> group">
                   <!-- Circle node -->
                   <div class="absolute left-[-11px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-6 h-6 bg-[#8a1c1c] rounded-full border-4 border-white shadow-md z-10 group-hover:scale-150 transition-transform duration-300"></div>
                   
                   <!-- Content Box -->
                   <div class="w-full md:w-1/2 <?php echo ($idx % 2 === 0) ? 'pl-8 md:pl-16' : 'pl-8 md:pr-16 text-left md:text-right'; ?>">
                      <div class="bg-[#f4f6f8] p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
                        <span class="text-[#8a1c1c] font-bold text-lg mb-2 block">Aşama <?php echo $step['num']; ?></span>
                        <h3 class="text-2xl font-bold text-[#0a192f] mb-3"><?php echo $step['title']; ?></h3>
                        <p class="text-gray-600 mb-4"><?php echo $step['desc']; ?></p>
                        <div class="flex flex-wrap gap-2 <?php echo ($idx % 2 === 0) ? 'justify-start' : 'justify-start md:justify-end'; ?>">
                          <?php foreach ($step['pills'] as $pill): ?>
                            <span class="bg-white px-3 py-1 text-xs font-bold text-[#0a192f] border border-gray-200 rounded-full"><?php echo $pill; ?></span>
                          <?php endforeach; ?>
                        </div>
                      </div>
                   </div>
                </div>
              <?php endforeach; ?>
            </div>
         </div>
      </section>
      
      <!-- AI / Contact CTA mapping -->
      <section class="w-full bg-[#0a192f] py-24 border-t border-gray-200 flex flex-col items-center text-center px-4 relative overflow-hidden">
         <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8a1c1c] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
         <h2 class="text-3xl font-bold text-white mb-6 z-10">Dosyanızı Uzmanımızla Değerlendirin</h2>
         <p class="text-gray-300 mb-8 max-w-xl text-lg z-10">Sürecinizin ne kadar süreceğini ve hangi adımların size özel olacağını ücretsiz analiz edelim.</p>
         <a href="<?= seo_page_href('contact', $lang) ?>" class="px-10 py-4 bg-[#8a1c1c] hover:bg-[#a32222] text-white rounded-full font-bold text-lg shadow-lg transition z-10">Hemen Bize Ulaşın &rarr;</a>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
