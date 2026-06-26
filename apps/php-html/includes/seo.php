<?php

function seo_locale_code_map(): array {
    return [
        'tr' => 'tr_TR',
        'en' => 'en_US',
        'ru' => 'ru_RU',
        'ar' => 'ar_AR',
        'fa' => 'fa_IR',
    ];
}

function seo_catalog(): array {
    return [
        'home' => [
            'path' => '/',
            'titles' => [
                'tr' => 'Uluslararası Vatandaşlık ve Göçmenlik Danışmanlığı',
                'en' => 'International Citizenship and Immigration Consultancy',
                'ru' => 'Международный консалтинг по гражданству и иммиграции',
                'ar' => 'استشارات دولية في المواطنة والهجرة',
                'fa' => 'مشاوره بین المللی شهروندی و مهاجرت',
            ],
            'descriptions' => [
                'tr' => 'Vatandaşlık, oturum izni ve göçmenlik süreçlerinizde uzman kadromuzla yanınızdayız. Dünya çapında güvenilir danışmanlık hizmetleri için ücretsiz ön görüşme ayarlayın.',
                'en' => 'Our expert team supports your citizenship, residence permit, and immigration journey. Book a free initial consultation for reliable global guidance.',
                'ru' => 'Наша команда сопровождает процессы гражданства, ВНЖ и иммиграции. Запишитесь на бесплатную первичную консультацию для надежного международного сопровождения.',
                'ar' => 'فريقنا المتخصص يرافقك في مسارات الجنسية والإقامة والهجرة. احجز استشارة أولية مجانية للحصول على دعم دولي موثوق.',
                'fa' => 'تیم متخصص ما در مسیرهای شهروندی، اقامت و مهاجرت کنار شماست. برای دریافت مشاوره بین المللی مطمئن، یک جلسه اولیه رایگان رزرو کنید.',
            ],
        ],
        'about' => [
            'path' => '/about.php',
            'titles' => [
                'tr' => 'Hakkımızda — Biz Kimiz',
                'en' => 'About Us — Who We Are',
                'ru' => 'О нас — Кто мы',
                'ar' => 'من نحن — عن الشركة',
                'fa' => 'درباره ما — ما کی هستیم',
            ],
            'descriptions' => [
                'tr' => 'Necmettin Barman & Associates Hukuk Bürosu ve uzman kadromuz hakkında detaylı bilgi edinin.',
                'en' => 'Learn more about Necmettin Barman & Associates Law Firm and our expert team.',
                'ru' => 'Узнайте больше о юридической фирме Necmettin Barman & Associates и нашей команде экспертов.',
                'ar' => 'تعرف على المزيد حول مكتب المحاماة نجم الدين بارمان وشركاؤه وفريقنا المتخصص.',
                'fa' => 'درباره دفتر حقوقی نجم‌الدین بارمان و شرکا ve تیم متخصص ما بیشتر بدانید.',
            ],
        ],
        'services' => [
            'path' => '/services.php',
            'titles' => [
                'tr' => 'Profesyonel Vatandaşlık ve Oturum İzni Hizmetlerimiz',
                'en' => 'Professional Citizenship and Residence Permit Services',
                'ru' => 'Профессиональные услуги по гражданству и ВНЖ',
                'ar' => 'خدماتنا الاحترافية في الجنسية وتصاريح الإقامة',
                'fa' => 'خدمات حرفه ای شهروندی و اجازه اقامت ما',
            ],
            'descriptions' => [
                'tr' => 'Yatırım yoluyla vatandaşlık, global çalışma izinleri ve aile birleşimi dahil tüm göçmenlik hizmetlerimizi inceleyin. Profesyonel rehberlikle hedefinize ulaşın.',
                'en' => 'Explore our immigration services including citizenship by investment, global work permits, and family reunification. Reach your goal with professional guidance.',
                'ru' => 'Изучите наши иммиграционные услуги: гражданство за инвестиции, международные разрешения на работу и воссоединение семьи. Двигайтесь к цели с профессиональной поддержкой.',
                'ar' => 'تعرّف على خدماتنا في الهجرة، بما في ذلك الجنسية عبر الاستثمار، وتصاريح العمل الدولية، ولمّ شمل الأسرة. حقق هدفك بإرشاد احترافي.',
                'fa' => 'خدمات مهاجرتی ما از جمله شهروندی از طریق سرمایه گذاری، مجوزهای کار بین المللی و الحاق خانواده را بررسی کنید. با راهنمایی حرفه ای به هدف خود برسید.',
            ],
        ],
        'citizenship' => [
            'path' => '/citizenship.php',
            'titles' => [
                'tr' => 'Adım Adım Vatandaşlık Başvuru Süreci',
                'en' => 'Step-by-Step Citizenship Application Process',
                'ru' => 'Пошаговый процесс подачи на гражданство',
                'ar' => 'خطوات التقديم على الجنسية خطوة بخطوة',
                'fa' => 'فرآیند گام به گام درخواست شهروندی',
            ],
            'descriptions' => [
                'tr' => 'Vatandaşlık başvuru sürecinin tüm adımlarını, gerekli hukuki belgeleri ve uzman tavsiyelerini öğrenin. Sürecinizi hızlandıracak ve güçlendirecek ipuçlarını keşfedin.',
                'en' => 'Learn every stage of the citizenship application process, the required legal documents, and expert guidance. Discover tips that will accelerate and strengthen your case.',
                'ru' => 'Узнайте все этапы подачи на гражданство, необходимые юридические документы и рекомендации экспертов. Откройте советы, которые ускорят и усилят ваше досье.',
                'ar' => 'تعرّف على جميع مراحل طلب الجنسية، والوثائق القانونية المطلوبة، وإرشادات الخبراء. اكتشف نصائح تساعد على تسريع وتقوية ملفك.',
                'fa' => 'همه مراحل درخواست شهروندی، مدارک حقوقی لازم و توصیه های تخصصی را بشناسید. نکاتی را ببینید که پرونده شما را سریع تر و قوی تر می کند.',
            ],
        ],
        'knowledge' => [
            'path' => '/knowledge.php',
            'titles' => [
                'tr' => 'Kapsamlı Vatandaşlık ve Göçmenlik Bilgi Bankası',
                'en' => 'Comprehensive Citizenship and Immigration Knowledge Library',
                'ru' => 'Полная база знаний по гражданству и иммиграции',
                'ar' => 'مكتبة معرفية شاملة للجنسية والهجرة',
                'fa' => 'کتابخانه جامع دانش شهروندی و مهاجرت',
            ],
            'descriptions' => [
                'tr' => 'Oturum izni şartları, gayrimenkul yatırımı ve sosyal haklar hakkında detaylı rehberler, güncel prosedür bilgileri ve uzman makaleleri bilgi bankamızda.',
                'en' => 'Access detailed guides, up-to-date procedures, and expert articles on residence permits, real estate investment, and social rights in our knowledge library.',
                'ru' => 'В нашей базе знаний вы найдете подробные гайды, актуальные процедуры и экспертные статьи о ВНЖ, инвестициях в недвижимость и социальных правах.',
                'ar' => 'اكتشف أدلة تفصيلية وإجراءات محدثة ومقالات خبراء حول الإقامة، والاستثمار العقاري، والحقوق الاجتماعية داخل مكتبتنا المعرفية.',
                'fa' => 'در کتابخانه دانش ما به راهنماهای دقیق، رویه های به روز و مقالات تخصصی درباره اقامت، سرمایه گذاری ملکی و حقوق اجتماعی دسترسی دارید.',
            ],
        ],
        'news' => [
            'path' => '/news.php',
            'titles' => [
                'tr' => 'Güncel Vatandaşlık ve Göçmenlik Haberleri',
                'en' => 'Latest Citizenship and Immigration News',
                'ru' => 'Актуальные новости о гражданстве и иммиграции',
                'ar' => 'أحدث أخبار الجنسية والهجرة',
                'fa' => 'جدیدترین اخبار شهروندی و مهاجرت',
            ],
            'descriptions' => [
                'tr' => 'Uluslararası göçmenlik yasalarındaki değişiklikler, yeni vatandaşlık programları ve yatırımcı vizesi güncellemeleri hakkında en son haberleri takip edin.',
                'en' => 'Follow the latest updates on international immigration law changes, new citizenship programs, and investor visa developments.',
                'ru' => 'Следите за последними новостями об изменениях в иммиграционном законодательстве, новых программах гражданства и обновлениях по инвесторским визам.',
                'ar' => 'تابع أحدث التحديثات حول تغييرات قوانين الهجرة الدولية، وبرامج الجنسية الجديدة، وتطورات تأشيرات المستثمرين.',
                'fa' => 'آخرین به روزرسانی های مربوط به تغییرات قوانین مهاجرت بین المللی، برنامه های جدید شهروندی و ویزاهای سرمایه گذاری را دنبال کنید.',
            ],
        ],
        'questions' => [
            'path' => '/questions.php',
            'titles' => [
                'tr' => 'Vatandaşlık Süreçleri Hakkında Sıkça Sorulan Sorular',
                'en' => 'Frequently Asked Questions About Citizenship Processes',
                'ru' => 'Часто задаваемые вопросы о процессах получения гражданства',
                'ar' => 'الأسئلة الشائعة حول إجراءات الجنسية',
                'fa' => 'پرسش های متداول درباره فرآیندهای شهروندی',
            ],
            'descriptions' => [
                'tr' => 'Göçmenlik ve oturum izni süreçleri hakkında aklınıza takılan soruların referans yanıtlarını bulun veya uzman danışmanlarımıza doğrudan sorunuzu iletin.',
                'en' => 'Find reference answers to your immigration and residence permit questions, or send your question directly to our expert advisors.',
                'ru' => 'Найдите ответы на вопросы об иммиграции и ВНЖ или направьте свой вопрос напрямую нашим экспертам.',
                'ar' => 'اعثر على إجابات مرجعية لأسئلتك حول الهجرة والإقامة، أو أرسل سؤالك مباشرة إلى خبرائنا.',
                'fa' => 'پاسخ های مرجع برای پرسش های مهاجرت و اقامت خود را پیدا کنید یا سوالتان را مستقیما برای مشاوران متخصص ما بفرستید.',
            ],
        ],
        'contact' => [
            'path' => '/contact.php',
            'titles' => [
                'tr' => 'Küresel Göçmenlik Hedefleriniz İçin Bize Ulaşın',
                'en' => 'Contact Us for Your Global Immigration Goals',
                'ru' => 'Свяжитесь с нами для ваших международных иммиграционных целей',
                'ar' => 'تواصل معنا لتحقيق أهدافك في الهجرة العالمية',
                'fa' => 'برای اهداف مهاجرتی بین المللی خود با ما تماس بگیرید',
            ],
            'descriptions' => [
                'tr' => 'Vatandaşlık planlarınız için uzman ve lisanslı danışmanlarımızla iletişime geçin. Size ve ailenize özel global çözümler sunmak için her zaman buradayız.',
                'en' => 'Contact our expert licensed advisors for your citizenship plans. We are here to deliver global solutions tailored to you and your family.',
                'ru' => 'Свяжитесь с нашими лицензированными экспертами по вопросам гражданства. Мы предлагаем международные решения, адаптированные под вас и вашу семью.',
                'ar' => 'تواصل مع مستشارينا المرخصين والخبراء من أجل خطط الجنسية الخاصة بك. نحن هنا لنقدم حلولاً عالمية مناسبة لك ولعائلتك.',
                'fa' => 'برای برنامه های شهروندی خود با مشاوران متخصص و دارای مجوز ما تماس بگیرید. ما برای ارائه راهکارهای بین المللی متناسب با شما و خانواده تان در کنار شما هستیم.',
            ],
        ],
        'privacy' => [
            'path' => '/privacy.php',
            'titles' => [
                'tr' => 'Gizlilik ve KVKK Bilgilendirmesi',
                'en' => 'Privacy and Personal Data Notice',
                'ru' => 'Уведомление о конфиденциальности и персональных данных',
                'ar' => 'إشعار الخصوصية والبيانات الشخصية',
                'fa' => 'اطلاعیه حریم خصوصی و داده های شخصی',
            ],
            'descriptions' => [
                'tr' => 'CitizenshipWeb üzerinde çerezler, formlar, canlı chat ve soru içerikleri kapsamında hangi verilerin nasıl işlendiğini öğrenin.',
                'en' => 'Learn how CitizenshipWeb processes cookies, form submissions, live chat data, and published question content.',
                'ru' => 'Узнайте, как CitizenshipWeb обрабатывает cookie, формы, данные онлайн-чата и публикуемые вопросы.',
                'ar' => 'تعرّف على كيفية معالجة CitizenshipWeb لملفات تعريف الارتباط والنماذج وبيانات الدعم المباشر والأسئلة المنشورة.',
                'fa' => 'ببینید CitizenshipWeb چگونه کوکی ها، فرم ها، داده های گفتگوی آنلاین و سوالات منتشرشده را پردازش می کند.',
            ],
        ],
        'gayrimenkul-yatirimi' => [
            'path' => '/gayrimenkul-yatirimi.php',
            'titles' => [
                'tr' => 'Gayrimenkul Yatırımı Yoluyla Türk Vatandaşlığı',
                'en' => 'Turkish Citizenship by Real Estate Investment',
                'ru' => 'Гражданство Турции за инвестиции в недвижимость',
                'ar' => 'الجنسية التركية عبر الاستثمار العقاري',
                'fa' => 'شهروندی ترکیه از طریق سرمایه گذاری ملکی',
            ],
            'descriptions' => [
                'tr' => 'Taşınmaz satın alım yoluyla Türk vatandaşlığı edinme süreci, gerekli belgeler, tapu işlemleri ve yasal limitler hakkında kapsamlı bilgi edinin.',
                'en' => 'Learn about the process of obtaining Turkish citizenship through real estate investment, requirements, title deed procedures, and legal thresholds.',
                'ru' => 'Узнайте о процессе получения гражданства Турции при покупке недвижимости, требованиях, процедурах оформления ТАПУ и инвестиционных порогах.',
                'ar' => 'تعرف على إجراءات الحصول على الجنسية التركية من خلال شراء عقار، والوثائق المطلوبة، ومعاملات الطابو، والحدود القانونية للاستثمار.',
                'fa' => 'درباره فرآیند اخذ شهروندی ترکیه از طریق خرید ملک، مدارک لازم، مراحل سند زدن و حداقل میزان سرمایه‌گذاری اطلاعات کسب کنید.',
            ],
        ],
        'mevduat-hesabi' => [
            'path' => '/mevduat-hesabi.php',
            'titles' => [
                'tr' => 'Mevduat Hesabı ile Türk Vatandaşlığı',
                'en' => 'Turkish Citizenship by Bank Deposit',
                'ru' => 'Гражданство Турции через банковский депозит',
                'ar' => 'الجنسية التركية عبر الوديعة المصرفية',
                'fa' => 'شهروندی ترکیه از طریق سپرده بانکی',
            ],
            'descriptions' => [
                'tr' => 'Türk bankalarında en az 500.000 USD mevduat hesabı açarak 3 yıl tutma taahhüdü ile Türk vatandaşlığı edinme süreci.',
                'en' => 'Process of obtaining Turkish citizenship by opening a bank deposit account of at least $500,000 and holding it for 3 years.',
                'ru' => 'Процесс получения гражданства Турции путем открытия банковского депозита на сумму от $500 000 сроком на 3 года.',
                'ar' => 'إجراءات الحصول على الجنسية التركية عبر فتح حساب وديعة مصرفية بقيمة لا تقل عن 500,000 دولار والاحتفاظ بها لمدة 3 سنوات.',
                'fa' => 'فرآیند اخذ شهروندی ترکیه از طریق افتتاح حساب سپرده بانکی به مبلغ حداقل ۵۰۰,۰۰۰ دلار و نگهداری آن به مدت ۳ سال.',
            ],
        ],
        'istihdam-olusturmak' => [
            'path' => '/istihdam-olusturmak.php',
            'titles' => [
                'tr' => 'İstihdam Oluşturma ile Türk Vatandaşlığı',
                'en' => 'Turkish Citizenship by Job Creation',
                'ru' => 'Гражданство Турции через создание рабочих мест',
                'ar' => 'الجنسية التركية عبر توظيف العمالة',
                'fa' => 'شهروندی ترکیه از طریق ایجاد اشتغال',
            ],
            'descriptions' => [
                "tr" => "Türkiye'de en az 50 kişilik istihdam oluşturarak Çalışma ve Sosyal Güvenlik Bakanlığı onayıyla Türk vatandaşlığı edinme süreci.",
                'en' => 'Process of obtaining Turkish citizenship by creating employment for at least 50 people with the approval of the Ministry of Labour.',
                'ru' => 'Процесс получения гражданства Турции путем создания рабочих мест как минимум для 50 человек с одобрения Министерства труда.',
                'ar' => 'إجراءات الحصول على الجنسية التركية عبر توظيف 50 شخصاً على الأقل في تركيا بموافقة وزارة العمل والضمان الاجتماعي.',
                'fa' => 'فرآیند اخذ شهروندی ترکیه از طریق ایجاد اشتغال برای حداقل ۵۰ نفر با تایید وزارت کار ve تامین اجتماعی.',
            ],
        ],
        'gayrimenkul-yatirim-fonu' => [
            'path' => '/gayrimenkul-yatirim-fonu.php',
            'titles' => [
                'tr' => 'Gayrimenkul Yatırım Fonu ile Türk Vatandaşlığı',
                'en' => 'Turkish Citizenship by Real Estate Investment Fund',
                'ru' => 'Гражданство Турции через Инвестиционный фонд недвижимости',
                'ar' => 'الجنسية التركية عبر صندوق الاستثمار العقاري',
                'fa' => 'شهروندی ترکیه از طریق صندوق سرمایه گذاری ملکی',
            ],
            'descriptions' => [
                "tr" => "Türkiye'de gayrimenkul yatırım fonu (GYF) veya girişim sermayesi yatırım fonu (GSYF) katılma payı satın alarak Türk vatandaşlığı edinme süreci.",
                'en' => 'Process of obtaining Turkish citizenship by purchasing shares in a real estate investment fund (GYF) or venture capital investment fund (GSYF).',
                'ru' => 'Процесс получения гражданства Турции путем приобретения паев в инвестиционном фонде недвижимости (GYF) или фонде венчурного капитала (GSYF).',
                'ar' => 'إجراءات الحصول على الجنسية التركية عبر شراء حصص في صندوق الاستثمار العقاري أو صندوق رأس المال الاستثماري في تركيا.',
                'fa' => 'فرآیند اخذ شهروندی ترکیه از طریق خرید واحدهای صندوق سرمایه گذاری ملکی یا صندوق سرمایه گذاری جسورانه.',
            ],
        ],
        'devlet-borclanma-araclari' => [
            'path' => '/devlet-borclanma-araclari.php',
            'titles' => [
                'tr' => 'Devlet Borçlanma Araçları ile Türk Vatandaşlığı',
                'en' => 'Turkish Citizenship by Government Bonds',
                'ru' => 'Гражданство Турции через государственные облигации',
                'ar' => 'الجنسية التركية عبر سندات الدين الحكومية',
                'fa' => 'شهروندی ترکیه از طریق اوراق قرضه دولتی',
            ],
            'descriptions' => [
                'tr' => 'En az 500.000 USD tutarında Devlet borçlanma aracını satın alıp 3 yıl süreyle elde tutarak istisnai yoldan Türk vatandaşlığı kazanma süreci.',
                'en' => 'Process of obtaining Turkish citizenship by purchasing government bonds of at least $500,000 and holding them for 3 years.',
                'ru' => 'Процесс получения гражданства Турции путем приобретения государственных облигаций на сумму не менее $500 000 сроком на 3 года.',
                'ar' => 'إجراءات الحصول على الجنسية التركية عبر شراء سندات الدين الحكومية بقيمة لا تقل عن 500,000 دولار والاحتفاظ بها لمدة 3 سنوات.',
                'fa' => 'فرآیند اخذ شهروندی ترکیه از طریق خرید اوراق قرضه دولتی به مبلغ حداقل ۵۰۰,۰۰۰ دلار و نگهداری آن به مدت ۳ سال.',
            ],
        ],
        'evlilik-yoluyla-vatandaslik' => [
            'path' => '/evlilik-yoluyla-vatandaslik.php',
            'titles' => [
                'tr' => 'Evlilik Yoluyla Türk Vatandaşlığı Başvurusu',
                'en' => 'Turkish Citizenship by Marriage',
                'ru' => 'Гражданство Турции через брак',
                'ar' => 'الجنسية التركية عن طريق الزواج',
                'fa' => 'شهروندی ترکیه از طریق ازدواج',
            ],
            'descriptions' => [
                'tr' => 'Türk vatandaşı ile en az 3 yıldır evli olan yabancı eşlerin istisnai yoldan Türk vatandaşlığı kazanma süreci ve başvuru şartları.',
                'en' => 'Process of obtaining Turkish citizenship through marriage with a Turkish citizen for at least 3 years, requirements and steps.',
                'ru' => 'Процесс получения гражданства Турции через брак с гражданином Турции в течение не менее 3 лет.',
                'ar' => 'إجراءات الحصول على الجنسية التركية عن طريق الزواج من مواطن تركي لمدة 3 سنوات على الأقل والشروط المطلوبة.',
                'fa' => 'فرآیند اخذ شهروندی ترکیه از طریق ازدواج با یک شهروند ترک به مدت حداقل ۳ سال و شرایط لازم.',
            ],
        ],
        'genel-yolla-vatandaslik' => [
            'path' => '/genel-yolla-vatandaslik.php',
            'titles' => [
                'tr' => 'Genel Yolla Türk Vatandaşlığı Başvurusu',
                'en' => 'Turkish Citizenship by General Way (5 Years Residence)',
                'ru' => 'Гражданство Турции в общем порядке (5 лет проживания)',
                'ar' => 'الجنسية التركية بالطريق العام (إقامة 5 سنوات)',
                'fa' => 'شهروندی ترکیه از طریق عمومی (۵ سال اقامت)',
            ],
            'descriptions' => [
                'tr' => 'Türkiye’de 5 yıl yasal ve kesintisiz ikamet sonrasında genel hükümler kapsamında Türk vatandaşlığı edinme şartları ve başvuru süreci.',
                'en' => 'Requirements and application process for obtaining Turkish citizenship under general provisions after 5 years of legal and continuous residence in Turkey.',
                'ru' => 'Требования и process подачи документов на гражданство Турции на общих основаниях после 5 лет легального и непрерывного проживания в Турции.',
                'ar' => 'الشروط وإجراءات طلب الحصول على الجنسية التركية بموجب الأحكام العامة بعد إقامة قانونية ومتواصلة لمدة 5 سنوات في تركيا.',
                'fa' => 'شرایط و فرآیند درخواست اخذ شهروندی ترکیه طبق مقررات عمومی پس از ۵ سال اقامت قانونی و بدون وقفه در ترکیه.',
            ],
        ],
    ];
}

function seo_page_href(string $pageKey, string $locale): string {
    $catalog = seo_catalog();
    $entry = $catalog[$pageKey] ?? $catalog['home'];
    $path = $entry['path'];
    $lang = urlencode($locale);

    if ($path === '/') {
        return '/?lang=' . $lang;
    }

    return $path . '?lang=' . $lang;
}

function seo_page_url(string $pageKey, string $locale): string {
    return 'https://citizenshipweb.com' . seo_page_href($pageKey, $locale);
}

function seo_page_meta(string $pageKey, string $locale): array {
    $catalog = seo_catalog();
    $safePageKey = array_key_exists($pageKey, $catalog) ? $pageKey : 'home';
    $safeLocale = array_key_exists($locale, $catalog[$safePageKey]['titles']) ? $locale : 'tr';
    $entry = $catalog[$safePageKey];

    $alternates = ['x-default' => seo_page_url($safePageKey, 'en')];
    foreach (array_keys($entry['titles']) as $altLocale) {
        $alternates[$altLocale] = seo_page_url($safePageKey, $altLocale);
    }

    return [
        'title' => $entry['titles'][$safeLocale],
        'description' => $entry['descriptions'][$safeLocale],
        'canonical' => seo_page_url($safePageKey, $safeLocale),
        'alternates' => $alternates,
        'ogLocale' => seo_locale_code_map()[$safeLocale] ?? 'tr_TR',
        'image' => 'https://citizenshipweb.com/assets/images/hero.webp',
    ];
}
