<?php
require_once 'includes/schema.php';
$seoKey = 'news';
include 'includes/header.php';

$copy = __t('news_page');
$articles = $copy['articles'];
echo schema_render_scripts(schema_collection_page('news', $lang, $articles));
?>

    <main class="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div class="w-full bg-[#0a192f] py-24 text-center text-white px-4 mt-20">
          <h1 class="text-4xl md:text-6xl font-bold mb-4"><?= htmlspecialchars($copy['title']) ?></h1>
          <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto"><?= htmlspecialchars($copy['summary']) ?></p>
      </div>

      <section class="w-full max-w-7xl px-8 py-20 flex flex-col md:flex-row gap-12">
          <!-- Sidebar filters -->
          <div class="w-full md:w-1/4">
             <div class="bg-white p-8 rounded-3xl shadow-sm sticky top-32">
                <h3 class="text-xl font-bold text-[#0a192f] mb-6 border-b pb-4"><?= htmlspecialchars($copy['categoriesTitle']) ?></h3>
                <ul class="space-y-4 text-gray-600 font-medium">
                   <li class="text-[#8a1c1c] font-bold cursor-pointer"><?= htmlspecialchars($copy['allLabel']) ?></li>
                   <?php foreach ($copy['categories'] as $cat): ?>
                      <li class="hover:text-[#8a1c1c] cursor-pointer transition"><?= htmlspecialchars($cat) ?></li>
                   <?php endforeach; ?>
                </ul>
             </div>
          </div>

          <!-- Content -->
          <div class="w-full md:w-3/4">
             <div class="flex flex-col space-y-8">
                <?php foreach($articles as $article): ?>
                   <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col sm:flex-row group cursor-pointer">
                     <div class="h-56 sm:h-auto sm:w-1/3 relative w-full overflow-hidden">
                        <img src="<?php echo $article['img']; ?>" alt="<?php echo htmlspecialchars($article['title']); ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div class="p-8 sm:w-2/3 flex flex-col justify-center">
                       <div class="flex justify-between items-center mb-2">
                         <span class="text-xs text-[#8a1c1c] font-bold uppercase"><?php echo htmlspecialchars($article['cat']); ?></span>
                         <span class="text-xs text-gray-400"><?php echo htmlspecialchars($article['date']); ?></span>
                       </div>
                       <h3 class="text-2xl font-bold text-[#0a192f] mb-3 group-hover:text-[#8a1c1c] transition"><?php echo htmlspecialchars($article['title']); ?></h3>
                       <p class="text-gray-600 mb-4"><?php echo htmlspecialchars($article['summary']); ?></p>
                       <span class="mt-auto text-[#8a1c1c] font-bold text-sm"><?= htmlspecialchars($copy['readMoreLabel']) ?> &rarr;</span>
                     </div>
                   </div>
                <?php endforeach; ?>
             </div>
                
             <!-- Pagination Placeholder -->
             <div class="mt-12 flex justify-center gap-2">
                <button class="w-10 h-10 rounded-full bg-[#8a1c1c] text-white font-bold flex items-center justify-center">1</button>
                <button class="w-10 h-10 rounded-full bg-white text-[#0a192f] font-bold flex items-center justify-center hover:bg-gray-100">2</button>
                <button class="w-10 h-10 rounded-full bg-white text-[#0a192f] font-bold flex items-center justify-center hover:bg-gray-100">3</button>
             </div>
          </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
