<?php
require_once 'includes/schema.php';
$seoKey = 'knowledge';
include 'includes/header.php';

$schemaArticles = [
    ["cat" => "Mülkiyet", "title" => "Yabancılar İçin Mülk Edinme Yasası Değişiklikleri"],
    ["cat" => "Aile", "title" => "Eş ve Çocuklar İçin Eşzamanlı Başvuru Stratejisi"],
    ["cat" => "Yatırım", "title" => "Global Fon Yatırımlarıyla AB Oturum İzni"],
    ["cat" => "Seyahat", "title" => "Vizesiz Seyahat Gücü Yüksek En İyi 5 Pasaport"],
    ["cat" => "Vatandaşlık", "title" => "Çifte Vatandaşlık Kabul Eden ve Etmeyen Ülkeler"],
    ["cat" => "Oturum", "title" => "Dijital Göçebe (Digital Nomad) Vizeleri 2026"]
];
echo schema_render_scripts(schema_collection_page('knowledge', $lang, $schemaArticles));
?>

    <main class="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div class="w-full bg-[#0a192f] py-24 text-center text-white px-4 mt-20">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Bilgi Bankası</h1>
          <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">Vatandaşlık, oturum ve global yatırım hakları hakkında akademik seviyede hazırlanmış referans rehberler.</p>
      </div>

      <section class="w-full max-w-7xl px-8 py-20">
         <!-- Category Filter Placeholder -->
         <div class="flex flex-wrap gap-4 mb-16 justify-center">
            <?php 
               $categories = ["Tümü", "Vatandaşlık", "Oturum", "Mülkiyet", "Yatırım", "Aile", "Seyahat"];
               foreach($categories as $idx => $cat): 
                 $btnClass = ($idx === 0) ? 'bg-[#8a1c1c] text-white' : 'bg-white text-[#0a192f] border border-gray-200 hover:border-[#8a1c1c]';
            ?>
               <button class="px-6 py-2 rounded-full font-bold transition <?php echo $btnClass; ?>">
                 <?php echo $cat; ?>
               </button>
            <?php endforeach; ?>
         </div>

         <!-- Featured Article -->
         <div class="w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition mb-16 flex flex-col md:flex-row group">
            <div class="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
               <img src="assets/images/news1.png" alt="Featured" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="w-full md:w-1/2 p-10 flex flex-col justify-center">
               <span class="text-[#8a1c1c] font-bold text-sm tracking-widest uppercase mb-4">Öne Çıkan Rehber</span>
               <h2 class="text-3xl font-bold text-[#0a192f] mb-4">Avrupa ve Karayipler: 2026 Yatırımcı Pasaportu Kıyaslaması</h2>
               <p class="text-gray-600 mb-8 text-lg">Hangi pasaportlar sınır ötesi vergi planlamasında en uygun çözümü sunuyor? En güncel ikili anlaşmalarla tam liste analizimiz.</p>
               <a href="#" class="text-[#8a1c1c] font-bold flex items-center hover:text-[#a32222] transition uppercase text-sm">Makaleyi Oku <span class="ml-2">&rarr;</span></a>
            </div>
         </div>

         <!-- Grid Articles -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php 
               $articles = [
                  ["cat" => "Mülkiyet", "title" => "Yabancılar İçin Mülk Edinme Yasası Değişiklikleri", "img" => "assets/images/news2.png"],
                  ["cat" => "Aile", "title" => "Eş ve Çocuklar İçin Eşzamanlı Başvuru Stratejisi", "img" => "assets/images/news3.png"],
                  ["cat" => "Yatırım", "title" => "Global Fon Yatırımlarıyla AB Oturum İzni", "img" => "assets/images/news1.png"],
                  ["cat" => "Seyahat", "title" => "Vizesiz Seyahat Gücü Yüksek En İyi 5 Pasaport", "img" => "assets/images/hero.png"],
                  ["cat" => "Vatandaşlık", "title" => "Çifte Vatandaşlık Kabul Eden ve Etmeyen Ülkeler", "img" => "assets/images/news2.png"],
                  ["cat" => "Oturum", "title" => "Dijital Göçebe (Digital Nomad) Vizeleri 2026", "img" => "assets/images/news3.png"]
               ];
               foreach($articles as $article):
            ?>
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div class="h-48 relative w-full overflow-hidden">
                     <img src="<?php echo $article['img']; ?>" alt="<?php echo $article['title']; ?>" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div class="p-6">
                    <span class="text-xs text-[#8a1c1c] font-bold uppercase mb-2 block"><?php echo $article['cat']; ?></span>
                    <h3 class="text-xl font-bold text-[#0a192f] mb-3 line-clamp-2"><?php echo $article['title']; ?></h3>
                    <a href="#" class="mt-4 inline-flex text-[#8a1c1c] font-bold items-center hover:text-[#a32222] transition text-sm">Oku <span class="ml-2">&rarr;</span></a>
                  </div>
                </div>
            <?php endforeach; ?>
         </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
