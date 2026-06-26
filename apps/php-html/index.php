<?php
require_once 'includes/schema.php';
$seoKey = 'home';
include 'includes/header.php';
echo schema_render_scripts(schema_home_page($lang, __t('faq.list')));
?>

    <main class="flex flex-col items-center w-full min-h-screen relative bg-white">
      <!-- 1. HERO SLIDER -->
      <?php
        $heroSlides = __t('hero.slides');
        if (!is_array($heroSlides) || count($heroSlides) === 0) {
          $heroSlides = [
            ['label' => 'Gayrimenkul Yatırımı Yoluyla Türk Vatandaşlığı', 'image' => 'assets/images/hero_slide1.webp'],
            ['label' => 'Banka Yatırımı Yoluyla Türk Vatandaşlığı', 'image' => 'assets/images/hero_slide2.webp'],
            ['label' => 'Yatırımcı İkamet İzni', 'image' => 'assets/images/hero_slide3.webp'],
            ['label' => 'Gayrimenkul İkamet İzni', 'image' => 'assets/images/hero_slide4.jpeg'],
            ['label' => 'Vergi Muafiyeti', 'image' => 'assets/images/hero_slide5.jpeg'],
          ];
        } else {
          foreach ($heroSlides as &$slide) {
            $slide['image'] = ltrim($slide['image'], '/');
          }
          unset($slide);
        }
      ?>
      <section 
        id="heroSlider"
        class="relative w-full bg-[#0a192f] text-white overflow-hidden"
        style="height: clamp(520px, 65vh, 720px);"
        dir="<?= __t('dir') === 'rtl' ? 'rtl' : 'ltr' ?>"
      >
        <!-- Slides -->
        <?php foreach ($heroSlides as $idx => $slide): 
          $slideHref = isset($slide['href']) ? str_replace('/tr/', '/' . $lang . '/', $slide['href']) : '/services.php?lang=' . $lang;
          if (strpos($slideHref, '/services/gayrimenkul-yatirimi') !== false) {
              $slideHref = '/services.php?lang=' . $lang;
          } else if (strpos($slideHref, '/services/mevduat-hesabi') !== false) {
              $slideHref = '/services.php?lang=' . $lang;
          } else if (strpos($slideHref, '/ikamet-izni/') !== false) {
              $slideHref = '/services.php?lang=' . $lang;
          } else if (strpos($slideHref, '/services') !== false) {
              $slideHref = '/services.php?lang=' . $lang;
          }
        ?>
        <a
          href="<?= htmlspecialchars($slideHref) ?>"
          class="hero-slide absolute inset-0 block transition-opacity duration-500 ease-in-out"
          style="opacity: <?= $idx === 0 ? '1' : '0' ?>; z-index: <?= $idx === 0 ? '1' : '0' ?>; pointer-events: <?= $idx === 0 ? 'auto' : 'none' ?>;"
          data-index="<?= $idx ?>"
          aria-hidden="<?= $idx === 0 ? 'false' : 'true' ?>"
          tabindex="<?= $idx === 0 ? '0' : '-1' ?>"
        >
          <img
            src="<?= htmlspecialchars($slide['image']) ?>"
            alt="<?= htmlspecialchars($slide['label']) ?>"
            class="w-full h-full object-cover object-center"
          />
        </a>
        <?php endforeach; ?>

        <!-- Overlay gradient -->
        <div class="absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        <!-- Slide label badge (top-left or top-right for RTL) -->
        <div class="absolute top-6 z-30 px-4" style="<?= __t('dir') === 'rtl' ? 'right: 1.5rem;' : 'left: 1.5rem;' ?>">
          <span
            id="heroLabel"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
            style="background-color: #9b1c1c; transition: opacity 0.4s, transform 0.4s;"
          >
            <span class="inline-block w-2 h-2 rounded-full bg-white/80"></span>
            <span id="heroLabelText"><?= htmlspecialchars($heroSlides[0]['label']) ?></span>
          </span>
        </div>

        <!-- Visually hidden H1 for SEO -->
        <h1 class="sr-only">
          <?= htmlspecialchars(__t('hero.title_1') . ' ' . __t('hero.title_2')) ?>
        </h1>

        <!-- Left Arrow -->
        <button
          id="heroPrev"
          aria-label="Önceki slayt"
          class="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55 hover:scale-110 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <!-- Right Arrow -->
        <button
          id="heroNext"
          aria-label="Sonraki slayt"
          class="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55 hover:scale-110 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <!-- Dot navigation -->
        <div id="heroDots" class="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1" role="tablist"></div>
      </section>

      <!-- 2. HAKKIMIZDA -->
      <section id="about" class="w-full border-b border-gray-100 bg-white py-20 flex justify-center text-[#0a192f]">
        <div class="mx-auto max-w-6xl px-6 w-full">
          <div class="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
            <!-- Sol — metin -->
            <div class="reveal reveal-slide-left flex-1">
              <p class="mb-5 text-base leading-8 text-gray-600">
                <?= htmlspecialchars(__t('about.p1')) ?>
              </p>
              <p class="mb-8 text-base leading-8 text-gray-600">
                <?= htmlspecialchars(__t('about.p2')) ?>
              </p>
              <a
                href="<?= seo_page_href('about', $lang) ?>"
                class="inline-block border-b border-gray-800 pb-0.5 text-sm font-semibold uppercase tracking-widest text-gray-800 transition hover:border-red-700 hover:text-red-700"
              >
                Devamını Oku
              </a>
            </div>

            <!-- Sağ — görsel -->
            <div class="reveal reveal-scale-in delay-200 relative h-80 w-full md:h-96 md:w-[420px] flex-shrink-0 overflow-hidden">
              <img
                src="assets/images/news2.webp"
                alt="Necmettin Barman & Associates Attorneys at Law"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 3. VATANDAŞLIK PROGRAMLARI -->
      <?php
        $services = __t('services.list');
      ?>
      <section class="w-full border-b border-gray-100 bg-white py-20 flex justify-center text-[#0a192f]">
        <div class="mx-auto max-w-6xl px-6 w-full">
          <div class="reveal reveal-fade-up mb-10 flex items-end justify-between">
            <div>
              <p class="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                <?= htmlspecialchars(__t('services.tag') ?? "Vatandaşlık Programları") ?>
              </p>
              <h2 class="text-3xl font-light tracking-tight text-red-800">
                Yatırım Yoluyla Vatandaşlık
              </h2>
            </div>
            <a
              href="/services.php?lang=<?= $lang ?>"
              class="hidden text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-4 transition hover:text-red-700 hover:underline md:block"
            >
              Tümünü Gör
            </a>
          </div>

          <ul class="divide-y divide-gray-100 border-y border-gray-100">
            <?php 
            $idx = 0;
            foreach ($services as $srv): 
              $idx++;
            ?>
              <li>
                <a
                  href="/services.php?lang=<?= $lang ?>"
                  class="reveal reveal-fade-up group flex items-center justify-between py-5 transition-colors duration-150 hover:text-red-700"
                >
                  <div class="flex items-center gap-5">
                    <span class="w-5 text-center text-xs font-bold tabular-nums text-gray-300">
                      <?= str_pad((string)$idx, 2, "0", STR_PAD_LEFT) ?>
                    </span>
                    <div>
                      <h3 class="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                        <?= htmlspecialchars($srv['title']) ?>
                      </h3>
                    </div>
                  </div>
                  <svg class="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </section>

      <!-- 4. İKAMET PROGRAMLARI -->
      <section class="w-full border-b border-gray-100 bg-gray-50 py-20 flex justify-center text-[#0a192f]">
        <div class="mx-auto max-w-6xl px-6 w-full">
          <div class="reveal reveal-fade-up mb-10 flex items-end justify-between">
            <div>
              <p class="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                İkamet Programları
              </p>
              <h2 class="text-3xl font-light tracking-tight text-red-800">
                İkamet Türleri
              </h2>
            </div>
            <a
              href="/services.php?lang=<?= $lang ?>"
              class="hidden text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-4 transition hover:text-red-700 hover:underline md:block"
            >
              Tümünü Gör
            </a>
          </div>

          <ul class="divide-y divide-gray-200 border-y border-gray-200">
            <?php 
            $residencePrograms = [
                ["program" => "Yatırımcı İkamet İzni"],
                ["program" => "Gayrimenkul İkamet İzni"],
                ["program" => "Aile İkamet İzni"],
                ["program" => "Uzun Dönem İkamet İzni"]
            ];
            $idx = 0;
            foreach ($residencePrograms as $prog): 
              $idx++;
            ?>
              <li>
                <a
                  href="/services.php?lang=<?= $lang ?>"
                  class="reveal reveal-fade-up group flex items-center justify-between py-5 transition-colors duration-150 hover:text-red-700"
                >
                  <div class="flex items-center gap-5">
                    <span class="w-5 text-center text-xs font-bold tabular-nums text-gray-300">
                      <?= str_pad((string)$idx, 2, "0", STR_PAD_LEFT) ?>
                    </span>
                    <div>
                      <h3 class="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                        <?= htmlspecialchars($prog['program']) ?>
                      </h3>
                    </div>
                  </div>
                  <svg class="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </section>

      <!-- 5. HUKUKİ HİZMETLER -->
      <section class="w-full border-b border-gray-100 bg-white py-20 flex justify-center text-[#0a192f]">
        <div class="mx-auto max-w-6xl px-6 w-full">
          <div class="reveal reveal-fade-up mb-10 flex items-end justify-between">
            <div>
              <p class="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                Hukuki Hizmetler
              </p>
              <h2 class="text-3xl font-light tracking-tight text-red-800">
                Hukuki Hizmetler
              </h2>
            </div>
            <a
              href="/services.php?lang=<?= $lang ?>"
              class="hidden text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-4 transition hover:text-red-700 hover:underline md:block"
            >
              Tümünü Gör
            </a>
          </div>

          <ul class="divide-y divide-gray-100 border-y border-gray-100">
            <?php 
            $legalServices = [
                ["title" => "Hukuk Davaları"],
                ["title" => "Tapu ve Vergi İşlemleri"],
                ["title" => "Diğer Hizmetler"]
            ];
            $idx = 0;
            foreach ($legalServices as $item): 
              $idx++;
            ?>
              <li>
                <a
                  href="/services.php?lang=<?= $lang ?>"
                  class="reveal reveal-fade-up group flex items-center justify-between py-5 transition-colors duration-150 hover:text-red-700"
                >
                  <div class="flex items-center gap-5">
                    <span class="w-5 text-center text-xs font-bold tabular-nums text-gray-300">
                      <?= str_pad((string)$idx, 2, "0", STR_PAD_LEFT) ?>
                    </span>
                    <div>
                      <h3 class="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                        <?= htmlspecialchars($item['title']) ?>
                      </h3>
                    </div>
                  </div>
                  <svg class="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </section>

      <!-- 6. CTA / İLETİŞİM ŞERİDİ -->
      <section class="w-full bg-gray-900 py-16 flex justify-center">
        <div class="mx-auto max-w-6xl px-6 w-full">
          <div class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-2xl font-light text-white md:text-3xl">
                <?= htmlspecialchars(__t('cta.title') ?? "Hangi yatırım modeli size uygun?") ?>
              </h2>
              <p class="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
                <?= htmlspecialchars(__t('cta.desc')) ?>
              </p>
            </div>
            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/services.php?lang=<?= $lang ?>"
                class="inline-block border border-white/20 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-widest text-gray-900 transition hover:bg-gray-100"
              >
                <?= htmlspecialchars(__t('cta.btn_ai') ?? "Yatırım Türlerini Gör") ?>
              </a>
              <a
                href="/contact.php?lang=<?= $lang ?>"
                class="inline-block border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. SIKÇA SORULAN SORULAR -->
      <?php
      $faqs = __t('faq.list');
      $homeFaqs = is_array($faqs) ? array_slice($faqs, 0, 5) : [];
      if (count($homeFaqs) > 0):
      ?>
        <section id="sss" class="w-full border-b border-gray-100 bg-white py-20 flex justify-center text-[#0a192f]">
          <div class="mx-auto max-w-4xl px-6 w-full">
            <div class="reveal reveal-fade-up mb-10 text-center">
              <p class="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                <?= htmlspecialchars(__t('faq.tag') ?? "Sık Sorulan Sorular") ?>
              </p>
              <h2 class="text-3xl font-light tracking-tight text-gray-900">
                <?= htmlspecialchars(__t('faq.title')) ?>
              </h2>
            </div>

            <div class="divide-y divide-gray-100">
              <?php foreach ($homeFaqs as $idx => $faq): ?>
                <details class="reveal reveal-fade-up group py-5 cursor-pointer">
                  <summary class="flex cursor-pointer list-none items-center justify-between text-base font-medium text-gray-900 focus:outline-none [&::-webkit-details-marker]:hidden">
                    <?= htmlspecialchars($faq['q']) ?>
                    <span class="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-open:border-red-700 group-open:text-red-700">
                      <svg class="h-3.5 w-3.5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p class="mt-4 text-sm leading-relaxed text-gray-500"><?= htmlspecialchars($faq['a']) ?></p>
                </details>
              <?php endforeach; ?>
            </div>

            <div class="mt-8 text-center">
              <a
                href="/questions.php?lang=<?= $lang ?>"
                class="inline-block border-b border-gray-400 pb-0.5 text-xs font-semibold uppercase tracking-widest text-gray-500 transition hover:border-red-700 hover:text-red-700"
              >
                <?= htmlspecialchars(__t('faq.view_all') ?? "Tüm Soruları Gör") ?>
              </a>
            </div>
          </div>
        </section>
      <?php endif; ?>

    </main>

    <script>
      (function() {
        var slides = <?= json_encode($heroSlides) ?>;
        var totalSlides = slides.length;
        var current = 0;
        var animating = false;

        var slideEls = document.querySelectorAll('.hero-slide');
        var labelEl = document.getElementById('heroLabel');
        var labelTextEl = document.getElementById('heroLabelText');
        var dotsContainer = document.getElementById('heroDots');

        // Build dots
        slides.forEach(function(_, idx) {
          var btn = document.createElement('button');
          btn.setAttribute('aria-label', 'Slide ' + (idx + 1));
          btn.style.cssText = 'padding:0; background:none; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; width: 44px; height: 44px;';
          var dot = document.createElement('span');
          dot.style.cssText = 'display:block; height:8px; border-radius:9999px; transition: width 0.3s, background-color 0.3s;';
          dot.style.width = idx === 0 ? '28px' : '8px';
          dot.style.backgroundColor = idx === 0 ? '#9b1c1c' : 'rgba(255,255,255,0.6)';
          btn.appendChild(dot);
          btn.addEventListener('click', function() { if (!animating) goTo(idx); });
          dotsContainer.appendChild(btn);
        });

        function updateDots(idx) {
          var dots = dotsContainer.querySelectorAll('span');
          dots.forEach(function(d, i) {
            d.style.width = i === idx ? '28px' : '8px';
            d.style.backgroundColor = i === idx ? '#9b1c1c' : 'rgba(255,255,255,0.6)';
          });
        }

        function goTo(index) {
          if (animating || index === current) return;
          animating = true;
          labelEl.style.opacity = '0';
          labelEl.style.transform = 'translateY(6px)';
          slideEls[current].style.opacity = '0';
          slideEls[current].style.pointerEvents = 'none';
          slideEls[current].setAttribute('aria-hidden', 'true');
          slideEls[current].setAttribute('tabindex', '-1');
          
          var prev = current;
          current = index;
          slideEls[current].style.zIndex = '1';
          slideEls[prev].style.zIndex = '0';
          
          slideEls[current].style.opacity = '1';
          slideEls[current].style.pointerEvents = 'auto';
          slideEls[current].setAttribute('aria-hidden', 'false');
          slideEls[current].setAttribute('tabindex', '0');
          
          setTimeout(function() {
            labelTextEl.textContent = slides[current].label;
            labelEl.style.opacity = '1';
            labelEl.style.transform = 'translateY(0)';
            updateDots(current);
            animating = false;
          }, 400);
        }

        // Add Click Handlers for Left/Right Arrows
        var prevBtn = document.getElementById('heroPrev');
        var nextBtn = document.getElementById('heroNext');
        if (prevBtn) {
          prevBtn.addEventListener('click', function() {
            if (!animating) {
              var prevIdx = (current - 1 + totalSlides) % totalSlides;
              goTo(prevIdx);
            }
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener('click', function() {
            if (!animating) {
              var nextIdx = (current + 1) % totalSlides;
              goTo(nextIdx);
            }
          });
        }
      })();
    </script>

<?php include 'includes/consent-banner.php'; ?>
<?php include 'includes/footer.php'; ?>
