<?php
require_once 'includes/schema.php';
$seoKey = 'about';
include 'includes/header.php';

// Fetch translations
$d_hero_tag = __t('about_page.hero_tag');
if ($d_hero_tag === '{about_page.hero_tag}') $d_hero_tag = 'Hakkımızda';

$d_hero_title = __t('about_page.hero_title');
if ($d_hero_title === '{about_page.hero_title}') $d_hero_title = 'Biz Kimiz';

$d_story_tag = __t('about_page.story_tag');
if ($d_story_tag === '{about_page.story_tag}') $d_story_tag = 'Hikayemiz';

$d_story_title = __t('about_page.story_title');
if ($d_story_title === '{about_page.story_title}') $d_story_title = "2013'ten Bugüne Güvenilir Danışmanlık";

$d_story_p1 = __t('about_page.story_p1');
if ($d_story_p1 === '{about_page.story_p1}') $d_story_p1 = "Necmettin Barman & Associates Attorneys at Law, kurulduğu günden itibaren Türkiye'nin vatandaşlık hukuku alanında faaliyet gösteren saygın avukatlık bürolarından biri olarak tanınmaktadır.";

$d_story_p2 = __t('about_page.story_p2');
if ($d_story_p2 === '{about_page.story_p2}') $d_story_p2 = "Vatandaşlık hukuku üzerine uzmanlaşmış olan ofisimizde müvekkillerimizin vatandaşlık süreçlerini titizlikle yürütmekteyiz. Müvekkillerimizin vatandaşlık süreçlerini en verimli ve hızlı şekilde sonuçlandırmak amacıyla ofisimiz, çalışma alanlarına göre uzmanlaşmış departmanlara ayrılarak organize olmuştur.";

$d_story_p3 = __t('about_page.story_p3');
if ($d_story_p3 === '{about_page.story_p3}') $d_story_p3 = "Dinamik, genç ve çözüm odaklı kadrosunun sağladığı avantaj sayesinde müvekkillerimizin her türlü ihtiyacına hızlı ve etkin bir şekilde cevap vererek kusursuz bir hizmet vermekteyiz.";

$d_values_tag = __t('about_page.values_tag');
if ($d_values_tag === '{about_page.values_tag}') $d_values_tag = 'Değerlerimiz';

$d_values_title = __t('about_page.values_title');
if ($d_values_title === '{about_page.values_title}') $d_values_title = 'Çalışma Felsefemiz';

$d_values = __t('about_page.values');
if (!is_array($d_values)) {
    $d_values = [
        ["title" => "Şeffaflık", "desc" => "Müvekkillerimizle şeffaf ve güçlü bir iletişim kurarız."],
        ["title" => "Güvenilirlik", "desc" => "Her adımda müvekkillerimizin yanında, güvenle hizmet veririz."],
        ["title" => "Ekip Çalışması", "desc" => "Uzman ekibimiz her süreçte titizlikle çalışır."]
    ];
}

$d_stats = __t('about_page.stats');
if (!is_array($d_stats)) {
    $d_stats = [
        ["num" => "2013", "label" => "Kuruluş"],
        ["num" => "13", "label" => "Uzman"],
        ["num" => "1000+", "label" => "Dosya"],
        ["num" => "5", "label" => "Dil"]
    ];
}

$d_team_tag = __t('about_page.team_tag');
if ($d_team_tag === '{about_page.team_tag}') $d_team_tag = 'Ekibimiz';

$d_team_title = __t('about_page.team_title');
if ($d_team_title === '{about_page.team_title}') $d_team_title = 'Her Adımda Uzman Kadromuz';

$d_cta_title = __t('about_page.cta_title');
if ($d_cta_title === '{about_page.cta_title}') $d_cta_title = 'Dosyanızı Bizimle Başlatın';

$d_cta_desc = __t('about_page.cta_desc');
if ($d_cta_desc === '{about_page.cta_desc}') $d_cta_desc = 'Aile yapınız, bütçeniz ve süre beklentinize göre en uygun seçeneği belirlemek için bize ulaşın.';

$d_cta_btn = __t('about_page.cta_btn');
if ($d_cta_btn === '{about_page.cta_btn}') $d_cta_btn = 'Ücretsiz Ön Değerlendirme';

$team_headers = [
    'tr' => 'Ekibimiz',
    'en' => 'Our Team',
    'ru' => 'Наша команда',
    'ar' => 'فريقنا',
    'fa' => 'تیم ما'
];
$team_header = $team_headers[$lang] ?? $team_headers['tr'];

$hotlines_headers = [
    'tr' => 'İrtibat Hatları',
    'en' => 'Hotlines',
    'ru' => 'Горячие линии',
    'ar' => 'خطوط الاتصال',
    'fa' => 'خطوط ارتباطی'
];
$hotlines_header = $hotlines_headers[$lang] ?? $hotlines_headers['tr'];

$faq_labels = [
    'tr' => 'SSS',
    'en' => 'FAQ',
    'ru' => 'FAQ',
    'ar' => 'الأسئلة Şaika',
    'fa' => 'سوالات متداول'
];
$faq_label = $faq_labels[$lang] ?? $faq_labels['tr'];

$contact_lines_all = [
  'tr' => [
    [ 'label' => "Kurucu Avukat Necmettin Barman (Arapça, Türkçe)", 'phone' => "+90 532 175 18 29", 'info' => "" ],
    [ 'label' => "Rusça İrtibat Hattı", 'phone' => "+90 535 245 14 55", 'info' => "Ariadna Tülay" ],
    [ 'label' => "Arapça İrtibat Hattı", 'phone' => "+90 532 449 47 28", 'info' => "Fatima Zahraa Sekkaki" ],
    [ 'label' => "Türkçe İrtibat Hattı", 'phone' => "+90 532 175 18 29", 'info' => "Av. Necmettin Barman" ],
    [ 'label' => "İngilizce İrtibat Hattı", 'phone' => "+90 530 153 10 41", 'info' => "Av. Ceyda Selin Gündüz" ],
  ],
  'en' => [
    [ 'label' => "Founding Atty. Necmettin Barman (Arabic, Turkish)", 'phone' => "+90 532 175 18 29", 'info' => "" ],
    [ 'label' => "Russian Hotline", 'phone' => "+90 535 245 14 55", 'info' => "Ariadna Tülay" ],
    [ 'label' => "Arabic Hotline", 'phone' => "+90 532 449 47 28", 'info' => "Fatima Zahraa Sekkaki" ],
    [ 'label' => "Turkish Hotline", 'phone' => "+90 532 175 18 29", 'info' => "Atty. Necmettin Barman" ],
    [ 'label' => "English Hotline", 'phone' => "+90 530 153 10 41", 'info' => "Atty. Ceyda Selin Gündüz" ],
  ],
  'ru' => [
    [ 'label' => "Учредитель Некметтин Барман (арабский, турецкий)", 'phone' => "+90 532 175 18 29", 'info' => "" ],
    [ 'label' => "Горячая линия на русском", 'phone' => "+90 535 245 14 55", 'info' => "Ариадна Тюлай" ],
    [ 'label' => "Горячая линия на арабском", 'phone' => "+90 532 449 47 28", 'info' => "Фатима Захра Секкаки" ],
    [ 'label' => "Горячая линия на турецком", 'phone' => "+90 532 175 18 29", 'info' => "Адв. Некметтин Барман" ],
    [ 'label' => "Горячая линия на английском", 'phone' => "+90 530 153 10 41", 'info' => "Адв. Джейда Селин Гюндюз" ],
  ],
  'ar' => [
    [ 'label' => "المحامي المؤسس نجم الدين بارمان (العربية، التركية)", 'phone' => "+90 532 175 18 29", 'info' => "" ],
    [ 'label' => "خط الاتصال بالروسية", 'phone' => "+90 535 245 14 55", 'info' => "أريادنا تولاي" ],
    [ 'label' => "خط الاتصال بالعربية", 'phone' => "+90 532 449 47 28", 'info' => "فاطمة الزهراء سكاكي" ],
    [ 'label' => "خط الاتصال بالتركية", 'phone' => "+90 532 175 18 29", 'info' => "المحامي نجم الدين بارمان" ],
    [ 'label' => "خط الاتصال بالإنجليزية", 'phone' => "+90 530 153 10 41", 'info' => "المحامية جيدة سيلين غوندوز" ],
  ],
  'fa' => [
    [ 'label' => "وکیل مؤسس نجم‌الدین بارمان (عربی، ترکی)", 'phone' => "+90 532 175 18 29", 'info' => "" ],
    [ 'label' => "خط ارتباطی روسی", 'phone' => "+90 535 245 14 55", 'info' => "آریادنا تویلی" ],
    [ 'label' => "خط ارتباطی عربی", 'phone' => "+90 532 449 47 28", 'info' => "فاطمه زهرا سکاکی" ],
    [ 'label' => "خط ارتباطی ترکی", 'phone' => "+90 532 175 18 29", 'info' => "وکیل نجم‌الدین بارمان" ],
    [ 'label' => "خط ارتباطی انگلیسی", 'phone' => "+90 530 153 10 41", 'info' => "وکیل جیدا سلین گوندوز" ],
  ],
];
$contact_lines = $contact_lines_all[$lang] ?? $contact_lines_all['tr'];

$team_translations = [
  'tr' => [
    [ 'name' => "Av. Necmettin Barman",        'title' => "Kurucu Avukat",        'langs' => "EN · AR" ],
    [ 'name' => "Büşra Barman",                'title' => "Genel Müdür",          'langs' => "" ],
    [ 'name' => "Av. Nurten İnan",             'title' => "Avukat",               'langs' => "EN" ],
    [ 'name' => "Av. Ceyda Selin Gündüz",      'title' => "Avukat",               'langs' => "EN · DE · FR" ],
    [ 'name' => "Av. Cankut Aydemir",          'title' => "Avukat",               'langs' => "EN" ],
    [ 'name' => "Ariadna Tülay",               'title' => "Tercüman",             'langs' => "RU · EN" ],
    [ 'name' => "Fatima Zahraa Sekkaki",       'title' => "Tercüman",             'langs' => "AR · EN · FR" ],
    [ 'name' => "Madina Fıdun",                'title' => "Tercüman",             'langs' => "RU" ],
    [ 'name' => "Mesut Salman",                'title' => "İş Takip Görevlisi",   'langs' => "EN" ],
    [ 'name' => "Abdullah Sağlam",             'title' => "İş Takip Görevlisi",   'langs' => "AR" ],
    [ 'name' => "Selda Akkaya",                'title' => "Mali Müşavir",         'langs' => "" ],
    [ 'name' => "Mürüvet Kazıcı",              'title' => "Muhasebe",             'langs' => "" ],
    [ 'name' => "Fatma Odabaş",                'title' => "Hukuk Asistanı",       'langs' => "" ],
    [ 'name' => "Eren Memiş",                  'title' => "IT Uzmanı",            'langs' => "" ],
    [ 'name' => "Talip Sağlam",                'title' => "Ulaşım Sorumlusu",     'langs' => "" ],
  ],
  'en' => [
    [ 'name' => "Atty. Necmettin Barman",      'title' => "Founding Attorney",    'langs' => "EN · AR" ],
    [ 'name' => "Büşra Barman",                'title' => "General Manager",      'langs' => "" ],
    [ 'name' => "Atty. Nurten İnan",             'title' => "Attorney",             'langs' => "EN" ],
    [ 'name' => "Atty. Ceyda Selin Gündüz",      'title' => "Attorney",             'langs' => "EN · DE · FR" ],
    [ 'name' => "Atty. Cankut Aydemir",          'title' => "Attorney",             'langs' => "EN" ],
    [ 'name' => "Ariadna Tülay",               'title' => "Translator",           'langs' => "RU · EN" ],
    [ 'name' => "Fatima Zahraa Sekkaki",       'title' => "Translator",           'langs' => "AR · EN · FR" ],
    [ 'name' => "Madina Fıdun",                'title' => "Translator",           'langs' => "RU" ],
    [ 'name' => "Mesut Salman",                'title' => "Operations Officer",   'langs' => "EN" ],
    [ 'name' => "Abdullah Sağlam",             'title' => "Operations Officer",   'langs' => "AR" ],
    [ 'name' => "Selda Akkaya",                'title' => "Financial Advisor",    'langs' => "" ],
    [ 'name' => "Mürüvet Kazıcı",              'title' => "Accounting",           'langs' => "" ],
    [ 'name' => "Fatma Odabaş",                'title' => "Legal Assistant",      'langs' => "" ],
    [ 'name' => "Eren Memiş",                  'title' => "IT Specialist",        'langs' => "" ],
    [ 'name' => "Talip Sağlam",                'title' => "Transportation",       'langs' => "" ],
  ],
  'ru' => [
    [ 'name' => "Адв. Некметтин Барман",        'title' => "Учредитель / Адвокат", 'langs' => "EN · AR" ],
    [ 'name' => "Бюшра Барман",                'title' => "Генеральный директор", 'langs' => "" ],
    [ 'name' => "Адв. Нуртен Инан",             'title' => "Адвокат",              'langs' => "EN" ],
    [ 'name' => "Адв. Джейда Селин Гюндюз",      'title' => "Адвокат",              'langs' => "EN · DE · FR" ],
    [ 'name' => "Адв. Джанкут Айдемир",          'title' => "Адвокат",              'langs' => "EN" ],
    [ 'name' => "Ариадна Тюлай",               'title' => "Переводчик",           'langs' => "RU · EN" ],
    [ 'name' => "Фатима Захра Секкаки",        'title' => "Переводчик",           'langs' => "AR · EN · FR" ],
    [ 'name' => "Мадина Фидун",                'title' => "Переводчик",           'langs' => "RU" ],
    [ 'name' => "Месут Салман",                'title' => "Специалист по сопровождению", 'langs' => "EN" ],
    [ 'name' => "Абдулла Саглам",              'title' => "Специалист по сопровождению", 'langs' => "AR" ],
    [ 'name' => "Сельда Аккая",                'title' => "Финансовый консультант", 'langs' => "" ],
    [ 'name' => "Мюрювет Казыджи",              'title' => "Бухгалтерия",          'langs' => "" ],
    [ 'name' => "Фатма Одабаш",                'title' => "Ассистент юриста",     'langs' => "" ],
    [ 'name' => "Эрен Мемиш",                  'title' => "IT-специалист",        'langs' => "" ],
    [ 'name' => "Талип Саглам",                'title' => "Координатор по транспорту", 'langs' => "" ],
  ],
  'ar' => [
    [ 'name' => "المحامي نجم الدين بارمان",      'title' => "المحامي المؤسس",       'langs' => "EN · AR" ],
    [ 'name' => "بشرى بارمان",                'title' => "المدير العام",          'langs' => "" ],
    [ 'name' => "المحامية نورتين إينان",         'title' => "محامي",                'langs' => "EN" ],
    [ 'name' => "المحامية جيدة سيلين غوندوز",      'title' => "محامي",                'langs' => "EN · DE · FR" ],
    [ 'name' => "المحامي جانكوت أيديمير",         'title' => "محامي",                'langs' => "EN" ],
    [ 'name' => "أريادنا تولاي",               'title' => "مترجم",                'langs' => "RU · EN" ],
    [ 'name' => "فاطمة الزهراء سكاكي",        'title' => "مترجم",                'langs' => "AR · EN · FR" ],
    [ 'name' => "مادينا فيدون",                'title' => "مترجم",                'langs' => "RU" ],
    [ 'name' => "مسعود سلمان",                'title' => "مسؤول متابعة المعاملات", 'langs' => "EN" ],
    [ 'name' => "عبد الله sağlam",             'title' => "مسؤول متابعة المعاملات", 'langs' => "AR" ],
    [ 'name' => "سيلدا أكايا",                'title' => "مستشار مالي",          'langs' => "" ],
    [ 'name' => "موروفت كازيتشي",              'title' => "المحاسبة",             'langs' => "" ],
    [ 'name' => "فاطمة أوداباش",               'title' => "مساعد قانوني",         'langs' => "" ],
    [ 'name' => "إرين ميميش",                  'title' => "أخصائي تكنولوجيا المعلومات", 'langs' => "" ],
    [ 'name' => "طالب sağlam",                 'title' => "مسؤول النقل",          'langs' => "" ],
  ],
  'fa' => [
    [ 'name' => "وکیل نجم‌الدین بارمان",         'title' => "وکیل مؤسس",            'langs' => "EN · AR" ],
    [ 'name' => "بشرا بارمان",                 'title' => "مدیر عامل",            'langs' => "" ],
    [ 'name' => "وکیل نورتن اینان",            'title' => "وکیل",                 'langs' => "EN" ],
    [ 'name' => "وکیل جیدا سلین گوندوز",       'title' => "وکیل",                 'langs' => "EN · DE · FR" ],
    [ 'name' => "وکیل جانکوت آیدمیر",          'title' => "وکیل",                 'langs' => "EN" ],
    [ 'name' => "آریادنا تویلی",               'title' => "مترجم",                'langs' => "RU · EN" ],
    [ 'name' => "فاطمه زهرا سکاکی",            'title' => "مترجم",                'langs' => "AR · EN · FR" ],
    [ 'name' => "مدینه فیدون",                 'title' => "مترجم",                'langs' => "RU" ],
    [ 'name' => "مسعود سلمان",                 'title' => "مسئول پیگیری امور",   'langs' => "EN" ],
    [ 'name' => "عبدالله sağlam",              'title' => "مسئول پیگیری امور",   'langs' => "AR" ],
    [ 'name' => "سلدا آکایا",                 'title' => "مشاور مالی",            'langs' => "" ],
    [ 'name' => "موروت کازیچی",                'title' => "حسابداری",             'langs' => "" ],
    [ 'name' => "فاطمه اوداباش",               'title' => "دستیار حقوقی",         'langs' => "" ],
    [ 'name' => "ارن ممیش",                    'title' => "متخصص IT",             'langs' => "" ],
    [ 'name' => "طالب sağlam",                 'title' => "مسئول حمل و نقل",      'langs' => "" ],
  ]
];
$team = $team_translations[$lang] ?? $team_translations['tr'];

$value_icons = [
  // index 0
  '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>',
  // index 1
  '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>',
  // index 2
  '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>'
];

$dir = isset($dict['dir']) ? $dict['dir'] : 'ltr';
$isRtl = $dir === 'rtl';
?>

    <main dir="<?= $isRtl ? 'rtl' : 'ltr' ?>" class="overflow-hidden">

      <!-- ══════════════════════════════════════════════════
          HERO — split layout
      ══════════════════════════════════════════════════ -->
      <section
        class="relative min-h-[75vh] overflow-hidden"
        id="about-hero"
        style="background: linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%)"
      >
        <!-- Background Video -->
        <video
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 h-full w-full object-cover pointer-events-none z-0"
        >
          <source src="hero/Plan_Sekans_Ofis_v2.mp4" type="video/mp4" />
        </video>

        <!-- Light Overlay for Text Readability -->
        <div
          class="pointer-events-none absolute inset-0 bg-[#EEF2F8]/40 backdrop-blur-[1px] z-0"
          aria-hidden="true"
        ></div>

        <!-- Subtle dot grid -->
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.06] z-10"
          aria-hidden="true"
          style="background-image: radial-gradient(#0a192f 1px, transparent 1px); background-size: 28px 28px;"
        ></div>
        <!-- Right burgundy wash — lighter -->
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-1/2 z-10"
          aria-hidden="true"
          style="background: radial-gradient(ellipse 80% 70% at 80% 50%, rgba(138,28,28,0.07) 0%, transparent 70%);"
        ></div>

        <div class="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-36 sm:px-6 lg:flex-row lg:items-center lg:pb-0 lg:px-8 z-20">
          <!-- Left: text -->
          <div class="flex-1 lg:pr-16">
            <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/30 bg-[#8a1c1c]/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              <span class="h-1.5 w-1.5 rounded-full bg-[#8a1c1c]"></span>
              <?= htmlspecialchars($d_hero_tag) ?>
            </span>
            <h1 class="mt-4 text-5xl font-extrabold leading-[1.1] text-[#0a192f] sm:text-6xl md:text-7xl lg:text-8xl">
              <?= htmlspecialchars($team_header) ?>
            </h1>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-[#0a192f]/60">
              <?= htmlspecialchars($d_story_p1) ?>
            </p>
          </div>

          <!-- Right: quote card -->
          <div class="mt-12 flex-shrink-0 lg:mt-0 lg:w-80">
            <div class="relative rounded-3xl border border-[#0a192f]/10 bg-white/70 p-8 shadow-md backdrop-blur-md">
              <div class="mb-5 h-1 w-12 rounded-full bg-[#8a1c1c]"></div>
              <p class="text-base leading-relaxed text-[#0a192f]/70 italic">
                "Müvekkillerimizin vatandaşlık süreçlerini en verimli ve hızlı şekilde sonuçlandırmak amacıyla uzmanlaşmış departmanlarla çalışıyoruz."
              </p>
              <p class="mt-5 text-sm font-bold text-[#0a192f]">Av. Necmettin Barman</p>
              <p class="text-xs text-[#8a1c1c]">Kurucu Avukat</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
          STORY — timeline-style
      ══════════════════════════════════════════════════ -->
      <section class="relative bg-white py-24 lg:py-32 overflow-hidden" id="about-story">
        <!-- Background shadow image -->
        <div class="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="hero/story-bg.jpeg"
            alt=""
            class="h-full w-full object-cover object-center opacity-[0.15] pointer-events-none"
          />
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <!-- Left sticky header -->
            <div class="lg:sticky lg:top-28">
              <span class="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                <?= htmlspecialchars($d_story_tag) ?>
              </span>
              <h2 class="text-4xl font-extrabold leading-tight text-[#0a192f] sm:text-5xl">
                <?= htmlspecialchars($d_story_title) ?>
              </h2>
              <div class="mt-6 h-1 w-16 rounded-full bg-[#8a1c1c]"></div>
            </div>

            <!-- Right paragraphs with vertical accent -->
            <div class="relative space-y-8 border-l-2 border-gray-100 pl-8">
              <?php foreach (array_filter([$d_story_p1, $d_story_p2, $d_story_p3]) as $para): ?>
                <div class="relative">
                  <!-- dot -->
                  <span
                    class="absolute -left-[calc(2rem+1px)] flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#8a1c1c] bg-white"
                    aria-hidden="true"
                  ></span>
                  <p class="text-base leading-relaxed text-gray-600"><?= htmlspecialchars($para) ?></p>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════════ -->
      <section class="bg-white py-24 lg:py-32 border-t border-gray-100" id="about-team">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-16 text-center">
            <span class="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              <?= htmlspecialchars($d_team_tag) ?>
            </span>
            <h2 class="text-4xl font-extrabold text-[#0a192f] sm:text-5xl">
              <?= htmlspecialchars($d_team_title) ?>
            </h2>
          </div>

          <!-- Simplified Side-by-Side Grid -->
          <div class="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
            <?php foreach ($team as $idx => $m): ?>
              <div
                class="reveal reveal-fade-up flex flex-col items-center text-center group"
                style="transition-delay: <?= ($idx % 5) * 50 ?>ms;"
              >
                <p class="font-bold text-[#0a192f] text-base leading-snug"><?= htmlspecialchars($m['name']) ?></p>
                <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-[#8a1c1c]"><?= htmlspecialchars($m['title']) ?></p>
                
                <!-- Languages -->
                <?php if ($m['langs']): ?>
                  <p class="mt-1 text-xs text-gray-500 font-medium">
                    <?= htmlspecialchars($m['langs']) ?>
                  </p>
                <?php endif; ?>
              </div>
            <?php endforeach; ?>
          </div>

          <!-- İrtibat Hatları / Hotline Lines Section -->
          <div class="mt-20 max-w-4xl mx-auto rounded-3xl border border-gray-100 bg-gray-50/50 p-8 sm:p-10 shadow-sm">
            <h3 class="text-xl font-bold text-[#0a192f] text-center mb-8 flex items-center justify-center gap-2">
              <svg class="h-5 w-5 text-[#8a1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <?= htmlspecialchars($hotlines_header) ?>
            </h3>
            
            <div class="grid gap-4 sm:grid-cols-2">
              <?php foreach ($contact_lines as $idx => $line): ?>
                <div 
                  class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-white bg-white shadow-sm hover:border-[#8a1c1c]/20 transition-all duration-200 <?= $idx === 0 ? 'sm:col-span-2 bg-[#8a1c1c]/5 border-[#8a1c1c]/10' : '' ?>"
                >
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <?= htmlspecialchars($line['label']) ?>
                    </p>
                    <?php if ($line['info']): ?>
                      <p class="text-sm font-semibold text-[#0a192f] mt-0.5">
                        <?= htmlspecialchars($line['info']) ?>
                      </p>
                    <?php endif; ?>
                  </div>
                  <a 
                    href="tel:<?= str_replace(' ', '', $line['phone']) ?>"
                    class="mt-2 sm:mt-0 inline-flex items-center gap-2 text-base font-bold text-[#8a1c1c] hover:text-[#a32222] transition-colors"
                  >
                    <span><?= htmlspecialchars($line['phone']) ?></span>
                  </a>
                </div>
              <?php endforeach; ?>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
          CTA — full-bleed dark with diagonal cut
      ══════════════════════════════════════════════════ -->
      <section
        class="relative py-24"
        id="about-cta"
        style="background: linear-gradient(135deg, #F5F8FD 0%, #EEF2F8 60%, #E8EEF6 100%)"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style="background-image: linear-gradient(rgba(10,25,47,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(10,25,47,0.6) 1px,transparent 1px); background-size: 40px 40px;"
        ></div>
        <div
          class="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style="background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(138,28,28,0.08) 0%, transparent 70%);"
        ></div>
        <div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 class="text-4xl font-extrabold leading-tight text-[#0a192f] sm:text-5xl">
            <?= htmlspecialchars($d_cta_title) ?>
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-lg text-[#0a192f]/60"><?= htmlspecialchars($d_cta_desc) ?></p>
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="<?= seo_page_href('contact', $lang) ?>"
              class="inline-block rounded-full bg-[#8a1c1c] px-10 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#a32222] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(138,28,28,0.35)]"
            >
              <?= htmlspecialchars($d_cta_btn) ?>
            </a>
            <a
              href="<?= seo_page_href('questions', $lang) ?>"
              class="inline-block rounded-full border border-[#0a192f]/20 px-10 py-4 text-base font-bold text-[#0a192f] transition hover:border-[#8a1c1c] hover:bg-[#8a1c1c]/5"
            >
              <?= htmlspecialchars($faq_label) ?>
            </a>
          </div>
        </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
