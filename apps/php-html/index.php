<?php
require_once 'includes/schema.php';
$seoKey = 'home';
include 'includes/header.php';
echo schema_render_scripts(schema_home_page($lang, __t('faq.list')));
?>

    <main class="flex flex-col items-center w-full min-h-screen relative">
      <!-- Hero Section -->
      <!-- Hero Slider Section -->
      <?php
        $heroSlides = __t('hero.slides');
        if (!is_array($heroSlides) || count($heroSlides) === 0) {
          $heroSlides = [
            ['label' => 'Gayrimenkul Yatırımı Yoluyla Türk Vatandaşlığı', 'image' => 'assets/images/hero_slide1.png'],
            ['label' => 'Banka Yatırımı Yoluyla Türk Vatandaşlığı', 'image' => 'assets/images/hero_slide2.png'],
            ['label' => 'Yatırımcı İkamet İzni', 'image' => 'assets/images/hero_slide3.png'],
            ['label' => 'Gayrimenkul İkamet İzni', 'image' => 'assets/images/hero_slide4.png'],
            ['label' => 'Vergi Muafiyeti', 'image' => 'assets/images/hero_slide5.png'],
          ];
        } else {
          // Fix image paths for PHP (use assets/images/ prefix)
          foreach ($heroSlides as &$slide) {
            // Convert /hero_slideN.png -> assets/images/hero_slideN.png
            $slide['image'] = 'assets/images/' . ltrim($slide['image'], '/');
          }
          unset($slide);
        }
      ?>
      <section 
        id="heroSlider"
        class="relative w-full flex items-end justify-center bg-[#0a192f] text-white overflow-hidden mt-20"
        style="height: 700px;"
      >
        <!-- Slides -->
        <?php foreach ($heroSlides as $idx => $slide): ?>
        <div
          class="hero-slide absolute inset-0 transition-opacity duration-700"
          style="background-image: url('<?= htmlspecialchars($slide['image']) ?>'); background-size: cover; background-position: center; opacity: <?= $idx === 0 ? '1' : '0' ?>; z-index: <?= $idx === 0 ? '1' : '0' ?>;"
          data-index="<?= $idx ?>"
        ></div>
        <?php endforeach; ?>

        <!-- Overlay gradient -->
        <div class="absolute inset-0 z-10" style="background: linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.60) 50%, rgba(10,25,47,0.30) 100%);"></div>

        <!-- Slide label badge (top-left or top-right for RTL) -->
        <div class="absolute top-8 z-30 px-4" style="<?= __t('dir') === 'rtl' ? 'right: 2rem;' : 'left: 2rem;' ?>">
          <span
            id="heroLabel"
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
            style="transition: opacity 0.5s, transform 0.5s;"
          >
            <span class="inline-block w-2 h-2 rounded-full bg-[#8a1c1c] animate-pulse"></span>
            <span id="heroLabelText"><?= htmlspecialchars($heroSlides[0]['label']) ?></span>
          </span>
        </div>

        <!-- Hero content -->
        <div class="z-20 flex flex-col items-center text-center px-4 max-w-4xl pb-16 reveal reveal-fade-up" style="position: relative;">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl">
            <?= __t('hero.title_1') ?><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
              <?= __t('hero.title_2') ?>
            </span>
          </h1>
          <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
            <?= __t('hero.desc') ?>
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/services.php?lang=<?= $lang ?>" class="px-8 py-4 bg-[#8a1c1c] hover:bg-[#a32222] transition rounded-full font-medium text-white shadow-lg">
              <?= __t('hero.btn_primary') ?>
            </a>
            <a href="/questions.php?lang=<?= $lang ?>" class="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition rounded-full font-medium text-white border border-white/30">
              <?= __t('hero.btn_secondary') ?>
            </a>
          </div>
        </div>

        <!-- Dot navigation -->
        <div id="heroDots" class="absolute bottom-6 left-1/2 z-30 flex gap-3" style="transform: translateX(-50%);"></div>

        <!-- Progress bar -->
        <div class="absolute bottom-0 left-0 z-30 w-full bg-white/10" style="height: 3px;">
          <div id="heroProgress" class="h-full bg-[#8a1c1c]" style="width: 0%;"></div>
        </div>
      </section>

      <script>
      (function() {
        var slides = <?= json_encode($heroSlides) ?>;
        var totalSlides = slides.length;
        var current = 0;
        var animating = false;
        var intervalMs = 3000;
        var progressStart = null;
        var progressRaf = null;

        var slideEls = document.querySelectorAll('.hero-slide');
        var labelEl = document.getElementById('heroLabel');
        var labelTextEl = document.getElementById('heroLabelText');
        var dotsContainer = document.getElementById('heroDots');
        var progressBar = document.getElementById('heroProgress');

        // Build dots
        slides.forEach(function(_, idx) {
          var btn = document.createElement('button');
          btn.setAttribute('aria-label', 'Slide ' + (idx + 1));
          btn.style.cssText = 'padding:0; background:none; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;';
          var dot = document.createElement('span');
          dot.style.cssText = 'display:block; height:8px; border-radius:9999px; transition: width 0.3s, background-color 0.3s;';
          dot.style.width = idx === 0 ? '28px' : '8px';
          dot.style.backgroundColor = idx === 0 ? '#8a1c1c' : 'rgba(255,255,255,0.4)';
          btn.appendChild(dot);
          btn.addEventListener('click', function() { if (!animating) goTo(idx); });
          dotsContainer.appendChild(btn);
        });

        function updateDots(idx) {
          var dots = dotsContainer.querySelectorAll('span');
          dots.forEach(function(d, i) {
            d.style.width = i === idx ? '28px' : '8px';
            d.style.backgroundColor = i === idx ? '#8a1c1c' : 'rgba(255,255,255,0.4)';
          });
        }

        function goTo(index) {
          if (animating || index === current) return;
          animating = true;
          // hide label
          labelEl.style.opacity = '0';
          labelEl.style.transform = 'translateY(-8px)';
          // fade out current
          slideEls[current].style.opacity = '0';
          slideEls[current].style.zIndex = '0';
          current = index;
          // fade in new
          slideEls[current].style.zIndex = '1';
          setTimeout(function() {
            slideEls[current].style.opacity = '1';
            labelTextEl.textContent = slides[current].label;
            labelEl.style.opacity = '1';
            labelEl.style.transform = 'translateY(0)';
            updateDots(current);
            animating = false;
            startProgress();
          }, 100);
        }

        function startProgress() {
          if (progressRaf) cancelAnimationFrame(progressRaf);
          progressStart = null;
          progressBar.style.width = '0%';
          function animate(ts) {
            if (!progressStart) progressStart = ts;
            var elapsed = ts - progressStart;
            var pct = Math.min((elapsed / intervalMs) * 100, 100);
            progressBar.style.width = pct + '%';
            if (pct < 100) {
              progressRaf = requestAnimationFrame(animate);
            } else {
              var next = (current + 1) % totalSlides;
              goTo(next);
            }
          }
          progressRaf = requestAnimationFrame(animate);
        }

        startProgress();
      })();
      </script>
      
      <!-- Sayılarla Biz (Numbers/Stats Block) -->
      <section class="w-full py-20 bg-[#0a192f] text-white flex justify-center border-t border-white/10 relative z-20">
        <div class="max-w-7xl w-full px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <?php $idx=0; foreach(__t('stats') as $st): ?>
          <div class="flex flex-col items-center justify-center p-4 reveal reveal-fade-up delay-<?= $idx*100 ?>">
            <span class="text-5xl font-bold mb-2 text-[#8a1c1c]"><?= $st['num'] ?></span>
            <span class="text-sm uppercase tracking-widest text-gray-400 font-bold mt-2"><?= $st['text'] ?></span>
          </div>
          <?php $idx++; endforeach; ?>
        </div>
      </section>

      <!-- NEW: Biz Kimiz (Who Are We) -->
      <section class="w-full py-24 bg-white text-[#0a192f] flex justify-center border-b border-gray-100">
         <div class="max-w-7xl w-full px-8 flex flex-col md:flex-row items-center gap-16">
            <div class="w-full md:w-1/2 flex flex-col reveal reveal-slide-left">
               <span class="text-[#8a1c1c] font-bold uppercase tracking-wider mb-2 text-sm"><?= __t('about.tag') ?></span>
               <h2 class="text-4xl font-bold mb-6"><?= __t('about.title') ?></h2>
               <p class="text-gray-600 text-lg mb-6 leading-relaxed"><?= __t('about.p1') ?></p>
               <p class="text-gray-600 text-lg mb-8 leading-relaxed"><?= __t('about.p2') ?></p>
            </div>
            <div class="w-full md:w-1/2 relative h-[450px] rounded-3xl overflow-hidden shadow-xl group reveal reveal-scale-in delay-200">
               <img src="assets/images/news2.png" alt="Our Team" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div class="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
         </div>
      </section>
      <!-- COMBINED PARALLAX SECTION: Image Background CTA + Why Choose Us -->
      <div 
        class="w-full relative bg-fixed bg-center bg-cover"

        style="background-image: url('assets/images/news3.png')"
      >
        <!-- Combined Dark Overlay -->
        <div class="absolute inset-0 bg-[#0a192f]/90 mix-blend-multiply" style="backdrop-filter: blur(2px);"></div>
        
        <!-- Top Half: AI / Knowledge Base CTA -->
        <section class="w-full py-24 flex items-center justify-center relative z-10">
          <div class="max-w-4xl w-full px-8 flex flex-col items-center text-center text-white reveal reveal-fade-up">
           <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md"><?= __t('cta.title') ?></h2>
           <p class="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl drop-shadow-sm">
             <?= __t('cta.desc') ?>
           </p>
           <div class="flex flex-col sm:flex-row gap-5 w-full justify-center">
             <button class="px-8 py-4 bg-[#8a1c1c] hover:bg-[#a32222] rounded-2xl font-bold transition shadow-2xl hover:shadow-[#8a1c1c]/50 text-white flex items-center justify-center text-lg">
                <?= __t('cta.btn_ai') ?>
             </button>
             <a href="/knowledge.php?lang=<?= $lang ?>" class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl font-bold transition border border-white/20 text-white flex items-center justify-center text-lg">
                <?= __t('cta.btn_lib') ?>
             </a>
           </div>
          </div>
        </section>

        <!-- Bottom Half: Neden Bizi Tercih Etmelisiniz? (Why Choose Us) -->
        <section class="w-full pb-24 text-white flex flex-col items-center relative z-10 overflow-hidden">
         <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8a1c1c] rounded-full blur-[150px] opacity-20 pointer-events-none -mr-40 -mt-40"></div>
         <div class="max-w-7xl w-full px-8 flex flex-col">
            <h2 class="text-4xl font-bold mb-12 text-center drop-shadow-md relative z-10 reveal reveal-fade-down"><?= __t('features.title') ?></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               <?php $idx=0; foreach(__t('features.list') as $feat): ?>
               <div class="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition shadow-xl reveal reveal-fade-up delay-<?= $idx*100 ?>">
                  <div class="text-[#8a1c1c] mb-6">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  </div>
                  <h3 class="text-2xl font-bold mb-4"><?= $feat['title'] ?></h3>
                  <p class="text-gray-300"><?= $feat['desc'] ?></p>
               </div>
               <?php $idx++; endforeach; ?>
            </div>
         </div>
        </section>
      </div>

      <!-- NEW: Hizmetlerimiz (Our Services Cards) -->
      <section class="w-full py-24 bg-[#f4f6f8] text-[#0a192f] flex flex-col items-center border-b border-gray-200">
         <div class="max-w-7xl w-full px-8 flex flex-col">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 reveal reveal-slide-left">
               <div>
                  <span class="text-[#8a1c1c] font-bold uppercase tracking-wider mb-2 text-sm block"><?= __t('services.tag') ?></span>
                  <h2 class="text-4xl font-bold"><?= __t('services.title') ?></h2>
               </div>
               <a href="/services.php?lang=<?= $lang ?>" class="text-[#8a1c1c] font-bold flex items-center hover:text-[#a32222] transition uppercase text-sm mt-4 md:mt-0"><?= __t('services.view_all') ?> <span class="ml-2">&rarr;</span></a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php 
                $serviceList = __t('services.list');
                $idx = 0;
                foreach ($serviceList as $s): 
                  $delayClass = 'delay-' . (($idx % 3) * 100);
                  $idx++;
                ?>
                  <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition flex gap-4 items-start border border-gray-100 group cursor-default reveal reveal-fade-up <?php echo $delayClass; ?>">
                     <div class="bg-[#f4f6f8] w-14 h-14 shrink-0 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-[#8a1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                     <div class="flex flex-col">
                        <h3 class="text-xl font-bold text-[#0a192f] mb-2"><?php echo $s['title']; ?></h3>
                        <p class="text-gray-600 text-sm leading-relaxed"><?php echo $s['desc']; ?></p>
                     </div>
                  </div>
                <?php endforeach; ?>
            </div>
         </div>
      </section>

      <!-- Advanced Timeline Component -->
      <?php $tl = __t('timeline'); ?>
      <section id="timelineContainer" class="w-full h-[250vh] bg-white text-[#0a192f] border-t border-gray-100 relative">
        <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center"><?= $tl['title'] ?></h2>
          <p class="text-gray-500 mb-20 max-w-2xl text-lg text-center"><?= $tl['desc'] ?></p>
          
          <div class="relative w-full max-w-4xl flex items-center justify-between">
             <div class="absolute left-0 top-1/2 w-full h-1 -translate-y-1/2 bg-gray-200 rounded-full"></div>
             
             <div id="timelineProgress" class="absolute top-1/2 h-1 -translate-y-1/2 bg-[#8a1c1c] rounded-full timeline-progress-line" style="width: 0%; will-change: width;"></div>

             <?php foreach($tl['steps'] as $step): ?>
             <div class="timeline-node relative z-10 flex flex-col items-center">
                 <div class="node-circle w-6 h-6 md:w-8 md:h-8 rounded-full border-4 shadow bg-white border-gray-300 scale-100" style="transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.4s, border-color 0.4s"></div>
                 <h4 class="node-text mt-8 md:mt-10 font-bold absolute text-center w-32 whitespace-nowrap text-gray-400 opacity-0 translate-y-4" style="transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"><?= $step ?></h4>
             </div>
             <?php endforeach; ?>
          </div>
        </div>
      </section>

      <!-- News & Media Grid -->
      <section class="w-full py-24 bg-[#f4f6f8] text-[#0a192f] flex flex-col items-center">
        <div class="max-w-7xl w-full px-8 flex flex-col">
           <h2 class="text-4xl font-bold mb-12 text-center reveal reveal-slide-right"><?= __t('news_block.title') ?></h2>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Card 1 -->
              <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition reveal reveal-fade-up">
                <div class="h-56 relative w-full overflow-hidden">
                  <img src="assets/images/news1.png" alt="News 1" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6">
                  <span class="text-sm text-[#8a1c1c] font-bold uppercase mb-2 block">Vatandaşlık</span>
                  <h3 class="text-xl font-bold mb-3">Türkiye Yatırım Programı</h3>
                  <p class="text-gray-600 mb-4 line-clamp-2">2026 yılı itibarıyla yürürlüğe giren yeni gayrimenkul değerleme yasaları hakkında uzman görüşlerimiz...</p>
                </div>
              </div>
              
              <!-- Card 2 -->
              <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition reveal reveal-fade-up delay-100">
                <div class="h-56 relative w-full overflow-hidden">
                   <img src="assets/images/news2.png" alt="News 2" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6">
                  <span class="text-sm text-[#8a1c1c] font-bold uppercase mb-2 block">Kültür ve Yaşam</span>
                  <h3 class="text-xl font-bold mb-3">Kültürel Entegrasyon</h3>
                  <p class="text-gray-600 mb-4 line-clamp-2">Yeni bir ülkede hayata başlarken aileniz için en kaliteli eğitim ve kültürel adaptasyon adımları...</p>
                </div>
              </div>
              
              <!-- Card 3 -->
              <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition md:col-span-2 lg:col-span-1 reveal reveal-fade-up delay-200">
                <div class="h-56 relative w-full overflow-hidden">
                   <img src="assets/images/news3.png" alt="News 3" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6">
                  <span class="text-sm text-[#8a1c1c] font-bold uppercase mb-2 block">Oturum İzni</span>
                  <h3 class="text-xl font-bold mb-3">Altın Vize Rekabeti</h3>
                  <p class="text-gray-600 mb-4 line-clamp-2">Avrupa ve global altın vize programlarının karşılaştırmalı analizi yayında.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Sıkça Sorulan Sorular -->
      <section class="w-full py-24 bg-white text-[#0a192f] flex flex-col items-center">
         <div class="max-w-4xl w-full px-8 flex flex-col items-center reveal reveal-scale-in">
            <span class="text-[#8a1c1c] font-bold uppercase tracking-wider mb-2 text-sm text-center"><?= __t('faq.tag') ?></span>
            <h2 class="text-4xl font-bold mb-12 text-center"><?= __t('faq.title') ?></h2>
            <div class="w-full flex flex-col space-y-4">
               <?php 
               foreach(__t('faq.list') as $faq): ?>
                  <details class="group bg-[#f4f6f8] rounded-2xl cursor-pointer">
                     <summary class="flex justify-between items-center font-bold text-[#0a192f] p-6 group-open:border-b border-gray-200 focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                        <?php echo $faq['q']; ?>
                        <span class="text-[#8a1c1c] transition-transform group-open:rotate-45 text-2xl">+</span>
                     </summary>
                     <p class="text-gray-600 p-6 leading-relaxed bg-white rounded-b-2xl border-x border-b border-[#f4f6f8]">
                        <?php echo $faq['a']; ?>
                     </p>
                  </details>
               <?php endforeach; ?>
            </div>
            <a href="/questions.php?lang=<?= $lang ?>" class="text-[#8a1c1c] mt-10 font-bold flex items-center hover:text-[#a32222] transition uppercase text-sm"><?= __t('faq.view_all') ?> <span class="ml-2">&rarr;</span></a>
         </div>
      </section>

      <!-- Advanced Newsletter Component -->
      <?php $nl = __t('newsletter'); ?>
      <?php
      $questionSubmitted = ($_GET['question_submitted'] ?? '') === '1';
      $questionError = $_GET['question_error'] ?? '';
      if ($questionSubmitted) {
        $questionMessage = $nl['success'];
        $questionMessageClass = 'text-sm text-emerald-300';
      } elseif ($questionError === 'required') {
        $questionMessage = $nl['error_required'];
        $questionMessageClass = 'text-sm text-rose-300';
      } elseif ($questionError !== '') {
        $questionMessage = $nl['error_generic'];
        $questionMessageClass = 'text-sm text-rose-300';
      } else {
        $questionMessage = $nl['helper'];
        $questionMessageClass = 'text-sm text-gray-400';
      }
      ?>
      <section id="newsletterContainer" class="w-full py-32 bg-[#0a192f] flex justify-center text-white relative overflow-hidden group cursor-crosshair">
         <!-- Interactive Glowing Blob -->
         <div id="newsletterBlob" class="absolute w-[600px] h-[600px] bg-[#8a1c1c] rounded-full blur-[140px] opacity-30 pointer-events-none" style="left: 50%; top: 50%; transform: translate(-50%, -50%); will-change: left, top;"></div>

         <div class="max-w-4xl w-full px-8 flex flex-col items-center text-center z-10 p-16 rounded-3xl border border-white/10 shadow-2xl relative reveal reveal-fade-up" style="background: rgba(10, 25, 47, 0.4); backdrop-filter: blur(24px);">
            <h2 class="text-4xl font-bold mb-4 drop-shadow-md"><?= $nl['title'] ?> <span class="font-light text-[#8a1c1c]"><?= $nl['title_bold'] ?></span></h2>
            <p class="text-gray-300 mb-8 max-w-xl text-lg"><?= $nl['desc'] ?></p>
            <form class="w-full max-w-2xl flex flex-col gap-4" method="POST" action="api/ask_question.php">
               <textarea name="question" rows="4" placeholder="<?= htmlspecialchars($nl['placeholder']) ?>" class="w-full px-6 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8a1c1c]/50 backdrop-blur-sm transition placeholder:text-gray-400 resize-none" required></textarea>
               <input type="hidden" name="lang" value="<?= htmlspecialchars($lang) ?>">
               <input type="hidden" name="redirect" value="<?= htmlspecialchars(seo_page_href('home', $lang)) ?>">
               <button type="submit" class="px-8 py-4 bg-[#8a1c1c] hover:bg-[#a32222] rounded-full font-bold transition shadow-lg hover:shadow-[#8a1c1c]/50">
                 <?= $nl['btn'] ?>
               </button>
               <p class="<?= $questionMessageClass ?>"><?= htmlspecialchars($questionMessage) ?></p>
            </form>
         </div>
      </section>

    </main>

    <script>
      document.addEventListener("DOMContentLoaded", () => {
        // --- Scroll Reveal Logic ---
        const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
             if(entry.isIntersecting) {
               entry.target.classList.add('is-revealed');
             }
           });
        }, { threshold: 0.05, rootMargin: '50px 0px -20px 0px' });

        const observeElements = () => {
           document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => observer.observe(el));
        };
        observeElements();
        setInterval(observeElements, 1000);

        // --- Timeline Sticky Animation (Smooth Lerp) ---
        const timelineContainer = document.getElementById('timelineContainer');
        const progressLine = document.getElementById('timelineProgress');
        const nodes = document.querySelectorAll('.timeline-node');
        
        let targetProgress = 0;
        let currentProgress = 0;

        const handleScroll = () => {
          if (!timelineContainer) return;
          const rect = timelineContainer.getBoundingClientRect();
          const scrollableDistance = rect.height - window.innerHeight;
          const scrolledDistance = -rect.top;
          
          if (scrolledDistance < 0) {
            targetProgress = 0;
          } else if (scrolledDistance > scrollableDistance) {
            targetProgress = 1;
          } else {
            targetProgress = scrolledDistance / scrollableDistance;
          }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // --- Newsletter Hover Blob Animation (Smooth Lerp) ---
        const newsletterContainer = document.getElementById('newsletterContainer');
        const newsletterBlob = document.getElementById('newsletterBlob');
        
        let targetX = 50;
        let targetY = 50;
        let currentX = 50;
        let currentY = 50;

        if(newsletterContainer && newsletterBlob) {
          newsletterContainer.addEventListener('mousemove', (e) => {
            const rect = newsletterContainer.getBoundingClientRect();
            targetX = ((e.clientX - rect.left) / rect.width) * 100;
            targetY = ((e.clientY - rect.top) / rect.height) * 100;
          }, { passive: true });
        }

        // --- Master Render Loop for 60fps Smoothness ---
        const renderLoop = () => {
           // Lerp Timeline
           currentProgress += (targetProgress - currentProgress) * 0.05;
           if(progressLine) {
             progressLine.style.width = (currentProgress * 100) + '%';
           }

           nodes.forEach((node, index) => {
             const threshold = index / (nodes.length - 1);
             const isActive = currentProgress >= (threshold - 0.05);
             const circle = node.querySelector('.node-circle');
             const text = node.querySelector('.node-text');
             
             if (isActive) {
                circle.style.transform = 'scale(1.3)';
                circle.style.backgroundColor = '#8a1c1c';
                circle.style.borderColor = '#8a1c1c';
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
                text.style.color = '#0a192f';
             } else {
                circle.style.transform = 'scale(1)';
                circle.style.backgroundColor = '#ffffff';
                circle.style.borderColor = '#d1d5db';
                text.style.opacity = '0';
                text.style.transform = 'translateY(1rem)';
                text.style.color = '#9ca3af';
             }
           });

           // Lerp Blob
           currentX += (targetX - currentX) * 0.08;
           currentY += (targetY - currentY) * 0.08;
           if(newsletterBlob) {
             newsletterBlob.style.left = currentX + '%';
             newsletterBlob.style.top = currentY + '%';
           }

           requestAnimationFrame(renderLoop);
        };
        
        requestAnimationFrame(renderLoop);
      });
    </script>

<?php include 'includes/consent-banner.php'; ?>
<?php include 'includes/footer.php'; ?>
