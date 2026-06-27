<?php
require_once 'includes/schema.php';
$seoKey = 'knowledge';
include 'includes/header.php';

$copy = __t('knowledge_page');
$articles = $copy['articles'];

// Map schema from the translated articles
$schemaArticles = [];
foreach ($articles as $art) {
    $schemaArticles[] = ["cat" => $art['cat'], "title" => $art['title']];
}
echo schema_render_scripts(schema_collection_page('knowledge', $lang, $schemaArticles));
?>

    <main class="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div class="w-full bg-[#0a192f] py-24 text-center text-white px-4 mt-20">
          <h1 class="text-4xl md:text-6xl font-bold mb-4"><?= htmlspecialchars($copy['title']) ?></h1>
          <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto"><?= htmlspecialchars($copy['summary']) ?></p>
      </div>

      <section class="w-full max-w-7xl px-8 py-20">
         <!-- Category Filter Placeholder -->
         <div class="flex flex-wrap gap-4 mb-16 justify-center">
            <?php 
               $categories = $copy['categories'];
               foreach($categories as $idx => $cat): 
                 $btnClass = ($idx === 0) ? 'bg-[#8a1c1c] text-white' : 'bg-white text-[#0a192f] border border-gray-200 hover:border-[#8a1c1c]';
            ?>
               <button class="px-6 py-2 rounded-full font-bold transition <?php echo $btnClass; ?>">
                 <?php echo htmlspecialchars($cat); ?>
               </button>
            <?php endforeach; ?>
         </div>

         <!-- Featured Article -->
         <div class="w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition mb-16 flex flex-col md:flex-row group">
            <div class="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
               <img src="assets/images/news1.webp" alt="Featured" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="w-full md:w-1/2 p-10 flex flex-col justify-center">
               <span class="text-[#8a1c1c] font-bold text-sm tracking-widest uppercase mb-4"><?= htmlspecialchars($copy['featuredLabel']) ?></span>
               <h2 class="text-3xl font-bold text-[#0a192f] mb-4"><?= htmlspecialchars($copy['featuredTitle']) ?></h2>
               <p class="text-gray-600 mb-8 text-lg"><?= htmlspecialchars($copy['featuredDesc']) ?></p>
               <a href="#" class="text-[#8a1c1c] font-bold flex items-center hover:text-[#a32222] transition uppercase text-sm"><?= htmlspecialchars($copy['featuredReadMore']) ?> <span class="ml-2">&rarr;</span></a>
            </div>
         </div>

         <!-- Grid Articles -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach($articles as $article): ?>
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div class="h-48 relative w-full overflow-hidden">
                     <img src="<?php echo $article['img']; ?>" alt="<?php echo htmlspecialchars($article['title']); ?>" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div class="p-6">
                     <span class="text-xs text-[#8a1c1c] font-bold uppercase mb-2 block"><?php echo htmlspecialchars($article['cat']); ?></span>
                     <h3 class="text-xl font-bold text-[#0a192f] mb-3 line-clamp-2"><?php echo htmlspecialchars($article['title']); ?></h3>
                     <a href="#" class="mt-4 inline-flex text-[#8a1c1c] font-bold items-center hover:text-[#a32222] transition text-sm"><?= htmlspecialchars($copy['readMoreLabel']) ?> <span class="ml-2">&rarr;</span></a>
                  </div>
                </div>
            <?php endforeach; ?>
         </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
