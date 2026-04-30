const fs = require('fs');

const tr = {
  lang: "tr",
  dir: "ltr",
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetlerimiz",
    about: "Biz Kimiz",
    contact: "İletişim"
  },
  hero: {
    title_1: "Küresel Göçmenlik ve",
    title_2: "Vatandaşlık Geleceğiniz",
    desc: "Vatandaşlık, oturum izni ve global yatırım süreçlerinde uzman kadromuzla yanınızdayız. Dünya çapında güvenilir, şeffaf ve profesyonel rehberlik.",
    btn_primary: "Randevu Oluştur",
    btn_secondary: "Süreci Keşfet"
  },
  stats: [
    { num: "15+", text: "Yıllık Tecrübe" },
    { num: "2,100+", text: "Başarılı Başvuru" },
    { num: "$850M+", text: "Yönetilen Yatırım" },
    { num: "25+", text: "Global Partner" }
  ],
  about: {
    tag: "Biz Kimiz?",
    title: "Uluslararası Göçmenlik Hukukunda Öncü Vizyon",
    p1: "CitizenshipWeb olarak, 15 yılı aşkın süredir bireylere, ailelere ve kurumsal yatırımcılara sınır ötesi hareketlilik çözümleri sunuyoruz. İstanbul merkezli ofisimizden dünyanın dört bir yanındaki yasal otoritelerle çalışarak, hayallerinizdeki yaşamı inşa etmenizi sağlıyoruz.",
    p2: "Hedefimiz, karmaşık yasal süreçleri sizin için basit, şeffaf ve %100 yasal güvenceyle sorunsuz hale getirmektir."
  },
  cta: {
    title: "Hangi Program Sizin İçin En Doğrusu?",
    desc: "Yüzlerce yasa ve prosedür arasında kaybolmanıza gerek yok. Özel olarak eğittiğimiz yapay zeka asistanımızla anında sohbet edin ya da zengin bilgi kütüphanemizde cevabınızı saniyeler içinde bulun.",
    btn_ai: "Yapay Zeka Asistanına Sorun",
    btn_lib: "Bilgi Kütüphanesi"
  },
  features: {
    title: "Neden Bizi Tercih Etmelisiniz?",
    f1_title: "Üst Düzey Gizlilik ve Hukuki Güvence",
    f1_desc: "Tüm kişisel verileriniz, banka dökümleriniz ve başvuru süreçleriniz uluslararası gizlilik sözleşmeleri kuralları altında %100 güvence ile işlenir.",
    f2_title: "Kapsamlı Global Partner Ağı",
    f2_desc: "İngiltere'den Karayiplere uzanan yerel avukatlar, emlak uzmanları ve resmi hükümet yetkililerinden oluşan eşsiz bir hızlandırma ağına sahibiz.",
    f3_title: "Sıfır Bürokratik Zaman Kaybı",
    f3_desc: "Evrak çevirisi, hukuki inceleme, form doldurma gibi tüm yorucu bürokratik prosedürler sizin yerinize tek durak felsefesiyle çözülür."
  },
  services: {
    tag: "Uzmanlık Alanlarımıza Göz Atın",
    title: "Hizmetlerimiz",
    view_all: "Tüm Hizmetleri Gör",
    list: [
      { title: "Yatırım Yoluyla Vatandaşlık", desc: "Global emlak/fon yatırımlarıyla hızlı pasaport kazanımı ve yönlendirmesi." },
      { title: "Oturum İzinleri", desc: "Bağımsız yatırımcılar için Altın Vize (Golden Visa) oturum hakları danışmanlığı." },
      { title: "Şirket Kurulumu", desc: "Avrupa ve global ölçekte hızlı kurum entegrasyonu ve vergi optimizasyonu." },
      { title: "Aile Birleşimi", desc: "Ailenizin tüm fertleri için bütünleşik başvuru ve sosyal hak yönetimi." },
      { title: "Çalışma İzinleri", desc: "Yatırımcı ve üst düzey expat'lar için nitelikli çalışma vizeleri alımı." },
      { title: "Gayrimenkul Hukuku", desc: "Tapu tahsisi ve yurtdışı emlak analiz, değerleme ve onaylama süreçleri." }
    ]
  },
  timeline: {
    title: "Adım Adım Geleceğe<br/>Hazırlanın",
    desc: "Karmaşık hukuki göçmenlik süreçlerini, deneyimli ekibimizle hızlı ve pürüzsüz uygulanabilir aşamalara böldük.",
    steps: ["1. Ön Danışmanlık", "2. Evrak Yönetimi", "3. Başvuru İletimi", "4. Pasaport Teslimi"]
  },
  news: {
    title: "Haberler ve Gelişmeler",
    item1_tag: "Vatandaşlık",
    item1_title: "Türkiye Yatırım Programında Yeni Kararlar",
    item1_desc: "2026 yılı itibarıyla yürürlüğe giren yeni gayrimenkul değerleme yasaları hakkında uzman görüşlerimiz...",
    item2_tag: "Kültür ve Yaşam",
    item2_title: "Yatırımcılar İçin Kültürel Entegrasyon",
    item2_desc: "Yeni bir ülkede hayata başlarken aileniz için en kaliteli eğitim ve kültürel adaptasyon adımları...",
    item3_tag: "Oturum İzni",
    item3_title: "Altın Vize Programlarında Rekabet",
    item3_desc: "Avrupa ve global altın vize programlarının karşılaştırmalı analizi yayında."
  },
  faq: {
    tag: "Merak Edilenler",
    title: "Sıkça Sorulan Sorular",
    view_all: "Tüm Soruları Görüntüle",
    list: [
      { q: "Yatırım yoluyla vatandaşlık süreci ortalama ne kadar sürer?", a: "Süreç, seçilen ülkenin programına ve yasal makamların yoğunluğuna göre ortalama 3 ile 8 ay arasında değişmektedir." },
      { q: "Aile bireylerim de benimle aynı anda pasaport alabilir mi?", a: "Evet, çoğu yatırım programı eşleri, 18 yaş altı (bazı ülkelerde 28) bağımlı çocukları ile ebeveynleri aynı başvuruya dahil etmeye izin verir." },
      { q: "Yatırım fonları (emlak vb.) geri alınabilir mi?", a: "Programa göre değişir. Gayrimenkul yatırımları genellikle 3 ila 5 yıl yasal olarak satılmamak şartıyla elde tutulur, ardından serbestçe elden çıkarılabilir." }
    ]
  },
  newsletter: {
    title: "Her Gelişmeden",
    title_bold: "Haberdar Olun",
    desc: "Küresel vatandaşlık yasalarındaki güncellemeler, yeni yatırım fırsatları ve özel analizleri doğrudan gelen kutunuza alın.",
    placeholder: "E-Posta Adresiniz",
    btn: "Bültene Katıl"
  }
};

const en = JSON.parse(JSON.stringify(tr));
en.lang = "en"; en.dir = "ltr";
en.nav = {home: "Home", services: "Services", about: "About Us", contact: "Contact"};
en.hero = {title_1: "Your Global Immigration and", title_2: "Citizenship Future", desc: "We are by your side with our expert staff in your citizenship, residence permit, and global investment processes.", btn_primary: "Book an Appointment", btn_secondary: "Discover the Process"};
en.stats = [{num: "15+", text: "Years Experience"}, {num: "2,100+", text: "Successful Applications"}, {num: "$850M+", text: "Managed Investment"}, {num: "25+", text: "Global Partners"}];
en.about = {tag: "Who We Are?", title: "Pioneering Vision in International Immigration Law", p1: "As CitizenshipWeb, we provide cross-border mobility solutions to individuals, families, and institutional investors. Working with legal authorities around the world from our Istanbul headquarters, we help you build the life of your dreams.", p2: "Our goal is to make complex legal processes simple, transparent, and hassle-free for you with 100% legal assurance."};
en.cta = {title: "Which Program is Best for You?", desc: "No need to get lost among hundreds of laws and procedures. Chat instantly with our specially trained AI assistant or find your answer in seconds in our rich knowledge base.", btn_ai: "Ask AI Assistant", btn_lib: "Knowledge Base"};
en.features = {title: "Why Choose Us?", f1_title: "Top-Level Privacy and Legal Security", f1_desc: "All your personal data, bank statements, and application processes are processed with 100% security under international privacy agreement rules.", f2_title: "Comprehensive Global Partner Network", f2_desc: "We have an exceptional acceleration network of local lawyers, real estate experts, and official government authorities from the UK to the Caribbean.", f3_title: "Zero Bureaucratic Time Waste", f3_desc: "All exhausting bureaucratic procedures such as document translation, legal review, and form filling are solved on your behalf with a one-stop-shop philosophy."};
en.services = {tag: "Check Out Our Areas Of Expertise", title: "Our Services", view_all: "View All Services", list: [{title: "Citizenship By Investment", desc: "Fast passport acquisition and guidance through global real estate/fund investments."}, {title: "Residence Permits", desc: "Golden Visa residence rights consultancy for independent investors."}, {title: "Company Incorporation", desc: "Fast corporate integration and tax optimization on a European and global scale."}, {title: "Family Reunification", desc: "Integrated application and social rights management for all members of your family."}, {title: "Work Permits", desc: "Acquisition of qualified work visas for investors and top-level expats."}, {title: "Real Estate Law", desc: "Title deed allocation and international real estate analysis, valuation, and approval processes."}]};
en.timeline = {title: "Prepare for the Future<br/>Step by Step", desc: "We have divided complex legal immigration processes into quick and smoothly applicable stages with our experienced team.", steps: ["1. Pre-Consultation", "2. Document Management", "3. Application Submission", "4. Passport Delivery"]};
en.news = {title: "News and Updates", item1_tag: "Citizenship", item1_title: "New Decisions in the Turkey Investment Program", item1_desc: "Our expert opinions on the new real estate valuation laws that came into effect starting 2026...", item2_tag: "Culture and Life", item2_title: "Cultural Integration for Investors", item2_desc: "The best education and cultural adaptation steps for your family when starting life in a new country...", item3_tag: "Residence Permit", item3_title: "Competition in Golden Visa Programs", item3_desc: "A comparative analysis of European and global golden visa programs is now live."};
en.faq = {tag: "Curious Minds", title: "Frequently Asked Questions", view_all: "View All Questions", list: [{q: "How long does the citizenship by investment process typically take?", a: "The process generally takes between 3 and 8 months depending on the program of the chosen country and the intensity of legal authorities."}, {q: "Can my family members also get passports at the same time?", a: "Yes, most investment programs allow spouses, dependent children under 18, and parents to be included in the same application."}, {q: "Can investment funds (real estate, etc.) be reclaimed?", a: "It varies by program. Real estate investments are usually held with a condition of not being legally sold for 3 to 5 years, after which they can be freely disposed of."}]};
en.newsletter = {title: "Stay Informed", title_bold: "About Every Update", desc: "Get updates on global citizenship laws, new investment opportunities, and customized analysis right in your inbox.", placeholder: "Your Email Address", btn: "Join Newsletter"};

const ru = JSON.parse(JSON.stringify(en));
ru.lang = "ru"; ru.dir = "ltr";
ru.nav = {home: "Главная", services: "Услуги", about: "О Нас", contact: "Контакт"};

const ar = JSON.parse(JSON.stringify(en));
ar.lang = "ar"; ar.dir = "rtl";
ar.nav = {home: "الرئيسية", services: "خدماتنا", about: "من نحن", contact: "اتصل بنا"};

const fa = JSON.parse(JSON.stringify(en));
fa.lang = "fa"; fa.dir = "rtl";
fa.nav = {home: "خانه", services: "خدمات", about: "درباره ما", contact: "تماس با ما"};

fs.writeFileSync('shared/i18n/tr.json', JSON.stringify(tr, null, 2));
fs.writeFileSync('shared/i18n/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('shared/i18n/ru.json', JSON.stringify(ru, null, 2));
fs.writeFileSync('shared/i18n/ar.json', JSON.stringify(ar, null, 2));
fs.writeFileSync('shared/i18n/fa.json', JSON.stringify(fa, null, 2));

console.log("Done");
