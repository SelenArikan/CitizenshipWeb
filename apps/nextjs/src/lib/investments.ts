export type ServiceIconKey = "realEstate" | "deposit" | "employment" | "bonds" | "fund";

export type InvestmentType = {
  slug: string;
  icon: ServiceIconKey;
  thresholdTr: string;
  thresholdEn: string;
  thresholdRu: string;
  thresholdAr: string;
  thresholdFa: string;
  authorityTr: string;
  authorityEn: string;
  authorityRu: string;
  authorityAr: string;
  authorityFa: string;
  titleTr: string;
  titleEn: string;
  titleRu: string;
  titleAr: string;
  titleFa: string;
  descTr: string;
  descEn: string;
  descRu: string;
  descAr: string;
  descFa: string;
  shortDescTr: string;
  shortDescEn: string;
  shortDescRu: string;
  shortDescAr: string;
  shortDescFa: string;
  bulletsTr: string[];
  bulletsEn: string[];
  bulletsRu: string[];
  bulletsAr: string[];
  bulletsFa: string[];
};

export const INVESTMENTS: InvestmentType[] = [
  {
    slug: "gayrimenkul-yatirimi",
    icon: "realEstate",
    thresholdTr: "En az 400.000 USD",
    thresholdEn: "Min. $400,000 USD",
    thresholdRu: "Мин. $400 000 USD",
    thresholdAr: "حد أدنى 400,000 دولار",
    thresholdFa: "حداقل ۴۰۰٬۰۰۰ دلار",
    authorityTr: "Tapu ve Kadastro Süreci",
    authorityEn: "Title Deed & Cadastre Process",
    authorityRu: "Процесс ТАПУ и кадастра",
    authorityAr: "إجراءات سند الملكية والمساحة",
    authorityFa: "فرآیند سند مالکیت و کاداستر",
    titleTr: "Gayrimenkul Yatırımı",
    titleEn: "Real Estate Investment",
    titleRu: "Инвестиции в недвижимость",
    titleAr: "الاستثمار العقاري",
    titleFa: "سرمایه‌گذاری در ملک",
    descTr: "Bir veya birden fazla taşınmazla toplam asgari değer sağlanarak, tapuya üç yıl satılamaz şerhi konulması sonrasında vatandaşlık başvurusu yapılabilir. Tapuya kayıtlı değer, satış vaadi sözleşmesi veya tescil edilmiş anlaşmalar üzerinden de kurgu mümkündür.",
    descEn: "By purchasing one or more properties with a combined minimum value and registering a 3-year no-sale annotation on the title deed, a citizenship application can be filed. A pre-sale agreement registered with the land registry is also eligible.",
    descRu: "Приобретение одного или нескольких объектов недвижимости с суммарной стоимостью не менее минимума и регистрация 3-летней отметки о запрете продажи даёт право на подачу заявления на гражданство.",
    descAr: "يمكن تقديم طلب الجنسية عبر شراء عقار أو أكثر بقيمة إجمالية لا تقل عن الحد الأدنى مع تسجيل تحفظ عدم البيع لمدة 3 سنوات في سند الملكية.",
    descFa: "با خرید یک یا چند ملک با ارزش اجمالی حداقل و ثبت تحدید فروش ۳ ساله در سند مالکیت، می‌توان درخواست شهروندی داد.",
    shortDescTr: "En az 400.000 USD değerinde taşınmaz alımı ve üç yıl satılamaz şerhi ile başvuru yapılabilir.",
    shortDescEn: "Purchase one or more properties worth at least $400K with a 3-year no-sale annotation.",
    shortDescRu: "Покупка недвижимости не менее чем на $400K с 3-летним запретом продажи.",
    shortDescAr: "شراء عقار بقيمة لا تقل عن 400K دولار مع تحفظ عدم البيع لمدة 3 سنوات.",
    shortDescFa: "خرید ملک به ارزش حداقل ۴۰۰ هزار دلار با تحدید فروش ۳ ساله.",
    bulletsTr: [
      "Tek taşınmaz veya birden fazla taşınmazın toplam değeri birlikte kullanılabilir.",
      "Tapuya vatandaşlık dosyası için en az üç yıl satılamaz şerhi işlenmelidir.",
      "Satış vaadi sözleşmesi tescil edilerek de başvuru kurgulanabilir.",
      "Yatırım sonrasında uygunluk belgesi için ilgili tapu birimlerine başvuru yapılır.",
    ],
    bulletsEn: [
      "Multiple properties allowed if total value meets the threshold.",
      "A 3-year no-sale annotation on the title deed is mandatory.",
      "A pre-sale agreement with notarial registration is also eligible.",
      "Eligibility certificate application is filed with the land registry after investment.",
    ],
    bulletsRu: [
      "Допускается несколько объектов, если совокупная стоимость достигает порога.",
      "3-летняя отметка о запрете продажи в ТАПУ обязательна.",
      "Предварительный договор купли-продажи с нотариальной регистрацией принимается.",
      "После инвестиции подаётся заявление на сертификат соответствия в земельный кадастр.",
    ],
    bulletsAr: [
      "يجوز الجمع بين عقارات متعددة إذا بلغت قيمتها الإجمالية الحد الأدنى المطلوب.",
      "يُشترط تسجيل تحفظ عدم البيع لمدة 3 سنوات في سند الملكية.",
      "يُقبل عقد الوعد بالبيع المُسجَّل رسمياً.",
      "بعد الاستثمار يُقدَّم طلب شهادة الأهلية لدى وحدات التسجيل المختصة.",
    ],
    bulletsFa: [
      "استفاده از چند ملک در صورت رسیدن به حداقل مجاز است.",
      "تحدید فروش ۳ ساله در سند مالکیت الزامی است.",
      "قرارداد وعده فروش با ثبت نزد دفترخانه نیز قابل قبول است.",
      "پس از سرمایه‌گذاری، درخواست گواهی صلاحیت به واحدهای ثبت مربوطه ارسال می‌شود.",
    ],
  },
  {
    slug: "mevduat-hesabi",
    icon: "deposit",
    thresholdTr: "En az 500.000 USD",
    thresholdEn: "Min. $500,000 USD",
    thresholdRu: "Мин. $500 000 USD",
    thresholdAr: "حد أدنى 500,000 دولار",
    thresholdFa: "حداقل ۵۰۰٬۰۰۰ دلار",
    authorityTr: "BDDK Uygunluk Belgesi",
    authorityEn: "BRSA Eligibility Certificate",
    authorityRu: "Сертификат соответствия BDDK",
    authorityAr: "شهادة أهلية BDDK",
    authorityFa: "گواهی صلاحیت BDDK",
    titleTr: "Mevduat Hesabı",
    titleEn: "Bank Deposit",
    titleRu: "Банковский депозит",
    titleAr: "الوديعة المصرفية",
    titleFa: "سپرده بانکی",
    descTr: "Türkiye'de faaliyet gösteren bir bankada açılan hesaba mevzuata uygun şekilde aktarılan tutarın en az üç yıl çekilmemesi taahhüt edilir. BDDK bünyesindeki banka, tutarı resmi süreç dahilinde onaylar ve uygunluk belgesi düzenlenir.",
    descEn: "Funds transferred to an account at a bank operating in Turkey must be committed to remain for at least 3 years without withdrawal. The bank, supervised by BRSA, verifies the amount through the official process and issues the eligibility certificate.",
    descRu: "Средства, перечисленные на счёт в банке, действующем в Турции, должны быть обязательно размещены на срок не менее 3 лет без права снятия. Банк под надзором BDDK подтверждает сумму в официальном порядке и выдаёт сертификат соответствия.",
    descAr: "يجب التعهد بإبقاء الأموال المحوَّلة إلى حساب في بنك يعمل في تركيا لمدة لا تقل عن 3 سنوات دون سحب. ويُصدر البنك الخاضع لإشراف BDDK شهادة الأهلية بعد التحقق من المبلغ.",
    descFa: "وجوه منتقل‌شده به حسابی در بانک فعال در ترکیه باید حداقل ۳ سال بدون برداشت نگه داشته شود. بانک تحت نظارت BDDK مبلغ را از طریق فرآیند رسمی تأیید کرده و گواهی صلاحیت صادر می‌کند.",
    shortDescTr: "Türk bankasında en az 500.000 USD'yi üç yıl tutarak uygunluk belgesi alabilirsiniz.",
    shortDescEn: "Keep at least $500K in a Turkish bank for 3 years to receive the eligibility certificate.",
    shortDescRu: "Держите не менее $500K в турецком банке 3 года для получения сертификата соответствия.",
    shortDescAr: "احتفظ بما لا يقل عن 500K دولار في بنك تركي لمدة 3 سنوات للحصول على شهادة الأهلية.",
    shortDescFa: "حداقل ۵۰۰ هزار دلار را به مدت ۳ سال در بانک ترکیه نگه دارید تا گواهی صلاحیت دریافت کنید.",
    bulletsTr: [
      "Birden fazla banka hesabındaki toplam tutar ile eşik sağlanabilir.",
      "Hesap açılış tarihindeki Merkez Bankası kuru esas alınarak işlem yapılır.",
      "Üç yıl çekilmeme taahhüdü resmi incelemeye tabi tutulur.",
      "Uygunluk belgesi sonrasında ikamet izni ve vatandaşlık başvurusuna geçilir.",
    ],
    bulletsEn: [
      "Total across multiple bank accounts may meet the threshold.",
      "Central Bank exchange rate on account opening date applies.",
      "3-year no-withdrawal commitment is formally reviewed.",
      "Citizenship application follows after the eligibility certificate.",
    ],
    bulletsRu: [
      "Совокупный остаток на нескольких счетах может составить необходимый порог.",
      "Применяется курс ЦБ на дату открытия счёта.",
      "Обязательство о 3-летнем неснятии средств проверяется официально.",
      "После получения сертификата соответствия — ВНЖ и гражданство.",
    ],
    bulletsAr: [
      "قد يُعادَل الحد الأدنى بإجمالي أرصدة حسابات متعددة.",
      "يُطبَّق سعر صرف البنك المركزي في تاريخ فتح الحساب.",
      "يُراجَع رسمياً التعهد بعدم السحب لمدة 3 سنوات.",
      "بعد شهادة الأهلية تُستكمل خطوات الإقامة والجنسية.",
    ],
    bulletsFa: [
      "جمع موجودی حساب‌های مختلف می‌تواند حداقل را پوشش دهد.",
      "نرخ ارز بانک مرکزی در تاریخ افتتاح حساب اعمال می‌شود.",
      "تعهد عدم برداشت ۳ ساله به طور رسمی بررسی می‌شود.",
      "پس از گواهی صلاحیت، مراحل اقامت و شهروندی طی می‌شود.",
    ],
  },
  {
    slug: "istihdam-olusturmak",
    icon: "employment",
    thresholdTr: "En az 50 kişilik istihdam",
    thresholdEn: "Min. 50 employees",
    thresholdRu: "Мин. 50 сотрудников",
    thresholdAr: "حد أدنى 50 موظفاً",
    thresholdFa: "حداقل ۵۰ نفر",
    authorityTr: "Çalışma ve Sosyal Güvenlik Bakanlığı",
    authorityEn: "Ministry of Labour & Social Security",
    authorityRu: "Министерство труда и социальной защиты",
    authorityAr: "وزارة العمل والضمان الاجتماعي",
    authorityFa: "وزارت کار و تأمین اجتماعی",
    titleTr: "İstihdam Oluşturmak",
    titleEn: "Employment Creation",
    titleRu: "Создание рабочих мест",
    titleAr: "توفير فرص العمل",
    titleFa: "ایجاد اشتغال",
    descTr: "Türkiye'de kurulu veya faaliyet gösteren yapınız üzerinden en az 50 kişilik düzenli istihdam oluşturulması hâlinde vatandaşlık başvuru zemini oluşabilir. Çalışma Bakanlığı'nın resmi belgesiyle süreç tamamlanır.",
    descEn: "Creating regular employment of at least 50 people through a company established or operating in Turkey may form the basis for a citizenship application, completed with an official document from the Ministry of Labour.",
    descRu: "Создание постоянных рабочих мест для не менее 50 человек через зарегистрированную в Турции компанию может стать основанием для подачи на гражданство, подтверждённым официальным документом Министерства труда.",
    descAr: "قد يُشكِّل توفير 50 وظيفة على الأقل عبر شركة مسجَّلة في تركيا أساساً لتقديم طلب الجنسية، ويُستكمَل بوثيقة رسمية من وزارة العمل.",
    descFa: "ایجاد اشتغال دائم برای حداقل ۵۰ نفر از طریق شرکتی ثبت‌شده در ترکیه می‌تواند مبنای درخواست شهروندی باشد که با سند رسمی وزارت کار تکمیل می‌شود.",
    shortDescTr: "Türkiye'de 50 kişilik istihdam oluşturarak vatandaşlık başvurusu için uygunluk belgesi alabilirsiniz.",
    shortDescEn: "Create at least 50 jobs in Turkey to qualify for a citizenship application.",
    shortDescRu: "Создайте не менее 50 рабочих мест в Турции для получения права на подачу на гражданство.",
    shortDescAr: "وفّر 50 وظيفة على الأقل في تركيا للتأهل لتقديم طلب الجنسية.",
    shortDescFa: "با ایجاد حداقل ۵۰ شغل در ترکیه، واجد شرایط درخواست شهروندی شوید.",
    bulletsTr: [
      "İlk aşamada uygunluk belgesi süreci tamamlanır.",
      "Şirketin son altı aylık istihdam sürekliliği resmi incelemede dikkate alınır.",
      "İstihdam edilen personelin mevzuata uygun kayıt ve bildirimi aranır.",
      "Dosya öncesinde operasyonel ve mali yapının ayrıntılı kontrolü gerekir.",
    ],
    bulletsEn: [
      "The eligibility certificate process is completed first.",
      "Last 6 months of continuous employment continuity is reviewed.",
      "All employees must be registered per applicable regulations.",
      "Detailed operational and financial review is required before filing.",
    ],
    bulletsRu: [
      "Первый этап — получение сертификата соответствия.",
      "Рассматривается непрерывность занятости за последние 6 месяцев.",
      "Все сотрудники должны быть официально оформлены согласно требованиям.",
      "Перед подачей досье необходима детальная проверка операционной и финансовой структуры.",
    ],
    bulletsAr: [
      "يُستكمَل أولاً إجراء شهادة الأهلية.",
      "تُراجَع استمرارية التوظيف خلال الأشهر الستة الأخيرة.",
      "يجب تسجيل جميع الموظفين وفقاً للأنظمة السارية.",
      "تُجرى مراجعة تفصيلية للهيكل التشغيلي والمالي قبل تقديم الملف.",
    ],
    bulletsFa: [
      "ابتدا فرآیند گواهی صلاحیت تکمیل می‌شود.",
      "استمرار اشتغال در ۶ ماه اخیر بررسی می‌شود.",
      "ثبت رسمی کارکنان طبق مقررات الزامی است.",
      "قبل از تشکیل پرونده، بررسی عملیاتی و مالی دقیق لازم است.",
    ],
  },
  {
    slug: "devlet-borclanma-araclari",
    icon: "bonds",
    thresholdTr: "En az 500.000 USD",
    thresholdEn: "Min. $500,000 USD",
    thresholdRu: "Мин. $500 000 USD",
    thresholdAr: "حد أدنى 500,000 دولار",
    thresholdFa: "حداقل ۵۰۰٬۰۰۰ دلار",
    authorityTr: "Hazine ve Maliye Bakanlığı",
    authorityEn: "Ministry of Treasury and Finance",
    authorityRu: "Министерство финансов",
    authorityAr: "وزارة الخزانة والمالية",
    authorityFa: "وزارت خزانه‌داری و مالیه",
    titleTr: "Devlet Borçlanma Araçları",
    titleEn: "Government Bonds",
    titleRu: "Государственные облигации",
    titleAr: "السندات الحكومية",
    titleFa: "اوراق بدهی دولتی",
    descTr: "Devlet borçlanma araçlarına yapılan ve en az üç yıl boyunca korunan yatırım, Hazine ve Maliye Bakanlığı'nın resmi uygunluk incelemesinden sonra vatandaşlık başvurusunda kullanılabilir.",
    descEn: "Investment made into government debt instruments and held for at least 3 years can be used for a citizenship application following an official eligibility review by the Ministry of Treasury and Finance.",
    descRu: "Инвестиции в государственные долговые инструменты, удерживаемые не менее 3 лет, могут быть использованы для подачи на гражданство после официальной проверки со стороны Министерства финансов.",
    descAr: "يمكن استخدام الاستثمار في أدوات الدين الحكومية والاحتفاظ بها لمدة 3 سنوات على الأقل لتقديم طلب الجنسية بعد مراجعة رسمية من وزارة الخزانة والمالية.",
    descFa: "سرمایه‌گذاری در ابزارهای بدهی دولتی و نگهداری آن‌ها حداقل ۳ سال، پس از بررسی رسمی وزارت خزانه‌داری، قابل استفاده برای درخواست شهروندی است.",
    shortDescTr: "500.000 USD tutarında devlet tahviline yatırım yaparak üç yıl elde tutunuz.",
    shortDescEn: "Invest $500K in government bonds and hold them for 3 years to qualify.",
    shortDescRu: "Инвестируйте $500K в государственные облигации и держите их 3 года для получения права.",
    shortDescAr: "استثمر 500K دولار في السندات الحكومية واحتفظ بها 3 سنوات للتأهل.",
    shortDescFa: "۵۰۰ هزار دلار در اوراق دولتی سرمایه‌گذاری کنید و ۳ سال نگه دارید.",
    bulletsTr: [
      "Yatırım hesabı Türkiye'de faaliyet gösteren bir bankada açılır.",
      "Yatırımın üç yıl korunacağına dair taahhüt sisteme işlenir.",
      "Banka, işlemi ilgili bakanlığa resmi yazı ile bildirir.",
      "Bakanlık incelemesi tamamlandıktan sonra vatandaşlık dosyasına geçilir.",
    ],
    bulletsEn: [
      "Investment account is opened at a bank operating in Turkey.",
      "3-year hold commitment is recorded in the system.",
      "The bank officially notifies the relevant ministry.",
      "Citizenship file opens after ministry review is complete.",
    ],
    bulletsRu: [
      "Инвестиционный счёт открывается в банке, действующем в Турции.",
      "3-летнее обязательство удержания регистрируется в системе.",
      "Банк официально уведомляет соответствующее министерство.",
      "Досье на гражданство открывается после завершения проверки.",
    ],
    bulletsAr: [
      "يُفتح حساب الاستثمار في بنك يعمل في تركيا.",
      "يُسجَّل التعهد بالاحتفاظ لمدة 3 سنوات في النظام.",
      "يُبلغ البنك الوزارة المختصة رسمياً.",
      "يُفتح ملف الجنسية بعد اكتمال المراجعة الوزارية.",
    ],
    bulletsFa: [
      "حساب سرمایه‌گذاری در بانک فعال در ترکیه افتتاح می‌شود.",
      "تعهد نگهداری ۳ ساله در سیستم ثبت می‌شود.",
      "بانک وزارت مربوطه را به طور رسمی مطلع می‌کند.",
      "پرونده شهروندی پس از اتمام بررسی وزارت باز می‌شود.",
    ],
  },
  {
    slug: "gayrimenkul-yatirim-fonu",
    icon: "fund",
    thresholdTr: "En az 500.000 USD",
    thresholdEn: "Min. $500,000 USD",
    thresholdRu: "Мин. $500 000 USD",
    thresholdAr: "حد أدنى 500,000 دولار",
    thresholdFa: "حداقل ۵۰۰٬۰۰۰ دلار",
    authorityTr: "SPK ve MKK Süreci",
    authorityEn: "CMB & Central Registry (MKK)",
    authorityRu: "CMB и Центральный реестр (MKK)",
    authorityAr: "هيئة أسواق رأس المال والسجل المركزي",
    authorityFa: "SPK و فرآیند ثبت مرکزی (MKK)",
    titleTr: "Gayrimenkul Yatırım Fonu",
    titleEn: "Real Estate Investment Fund",
    titleRu: "Фонд недвижимости",
    titleAr: "صندوق الاستثمار العقاري",
    titleFa: "صندوق سرمایه‌گذاری ملکی",
    descTr: "Gayrimenkul yatırım fonu veya girişim sermayesi yatırım fonu katılma paylarının asgari tutarda satın alınıp en az üç yıl tutulması ile başvuru planlanabilir. SPK ve MKK süreçleri dosyanın temelini oluşturur.",
    descEn: "Purchasing participation shares in a real estate or venture capital investment fund of at least the minimum amount and holding for 3 years allows for citizenship planning. CMB and MKK processes form the core of the file.",
    descRu: "Приобретение паёв фонда недвижимости или венчурного фонда на минимальную сумму и удержание не менее 3 лет позволяет спланировать получение гражданства. Процессы CMB и MKK составляют основу досье.",
    descAr: "شراء حصص في صندوق استثمار عقاري أو صندوق رأس المال المخاطر بالحد الأدنى والاحتفاظ بها 3 سنوات يتيح التخطيط للحصول على الجنسية. وتُشكِّل إجراءات CMB وMKK أساس الملف.",
    descFa: "خرید سهام صندوق سرمایه‌گذاری ملکی یا صندوق سرمایه ریسک‌پذیر به حداقل مبلغ و نگهداری حداقل ۳ سال، برنامه‌ریزی شهروندی را ممکن می‌سازد. فرآیندهای CMB و MKK پایه پرونده را تشکیل می‌دهند.",
    shortDescTr: "GYF veya GSYF katılma payı alarak en az üç yıl elde tutunuz, vatandaşlık başvurusu yapabilirsiniz.",
    shortDescEn: "Buy REIT or venture fund shares worth at least $500K and hold for 3 years.",
    shortDescRu: "Купите паи фонда недвижимости или венчурного фонда на $500K и держите 3 года.",
    shortDescAr: "اشترِ حصصاً في صندوق عقاري أو مخاطر بقيمة 500K دولار واحتفظ بها 3 سنوات.",
    shortDescFa: "سهام صندوق ملکی یا ریسک‌پذیر به ارزش ۵۰۰ هزار دلار بخرید و ۳ سال نگه دارید.",
    bulletsTr: [
      "Eşik tutar birden fazla fon payı ile birlikte sağlanabilir.",
      "Tüm fon alımları aynı vatandaşlık başvurusu içinde kurgulanır.",
      "Gerekli belgelerle uygunluk süreci için resmi başvuru yapılır.",
      "Merkezi kayıt ve sermaye piyasası incelemeleri dosyanın temel parçasıdır.",
    ],
    bulletsEn: [
      "Threshold may be met across multiple fund shares.",
      "All fund purchases are structured under one citizenship file.",
      "Official eligibility application is filed with required documents.",
      "Central registry and capital markets reviews are core to the file.",
    ],
    bulletsRu: [
      "Порог можно достичь за счёт нескольких паёв разных фондов.",
      "Все покупки паёв структурируются в рамках одного досье на гражданство.",
      "Подаётся официальное заявление на соответствие с необходимыми документами.",
      "Проверки центральным реестром и рынком капитала — ключевая часть досье.",
    ],
    bulletsAr: [
      "يجوز تحقيق الحد الأدنى بحصص صناديق متعددة.",
      "تُهيكَل جميع مشتريات الصناديق ضمن ملف جنسية واحد.",
      "يُقدَّم طلب أهلية رسمي بالوثائق المطلوبة.",
      "مراجعات السجل المركزي وأسواق رأس المال جزء أساسي من الملف.",
    ],
    bulletsFa: [
      "رسیدن به حداقل با سهام چند صندوق مجاز است.",
      "تمام خریدهای صندوق در یک پرونده شهروندی ساختاربندی می‌شود.",
      "درخواست رسمی گواهی صلاحیت با مدارک لازم ارائه می‌شود.",
      "بررسی‌های ثبت مرکزی و بازار سرمایه بخش اصلی پرونده هستند.",
    ],
  },
];

export function getInvestmentBySlug(slug: string): InvestmentType | undefined {
  return INVESTMENTS.find((i) => i.slug === slug);
}

export function getLocalizedField(inv: InvestmentType, field: string, lang: string): string {
  const key = `${field}${lang.charAt(0).toUpperCase()}${lang.slice(1)}` as keyof InvestmentType;
  const fallback = `${field}Tr` as keyof InvestmentType;
  return (inv[key] as string) ?? (inv[fallback] as string) ?? "";
}

export function getLocalizedBullets(inv: InvestmentType, lang: string): string[] {
  const key = `bullets${lang.charAt(0).toUpperCase()}${lang.slice(1)}` as keyof InvestmentType;
  const fallback = "bulletsTr" as keyof InvestmentType;
  return (inv[key] as string[]) ?? (inv[fallback] as string[]) ?? [];
}
