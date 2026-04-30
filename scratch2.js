const fs = require('fs');
const path = require('path');

const locales = ['tr', 'en', 'ru', 'ar', 'fa'];
const footerData = {
  tr: {
    desc: "Dünya çapında vatandaşlık ve göçmenlik hedefleriniz için güvenilir danışmanlık.",
    col1: "Hızlı Linkler",
    col2: "Destek",
    col3: "Bizi Takip Edin",
    home: "Ana Sayfa",
    services: "Profesyonel Hizmetler",
    knowledge: "Bilgi Bankası",
    faq: "Soru-Cevap",
    contact: "Bize Ulaşın",
    privacy: "Gizlilik Politikası",
    rights: "Tüm Hakları Saklıdır."
  },
  en: {
    desc: "Reliable consultancy for your citizenship and immigration goals worldwide.",
    col1: "Quick Links",
    col2: "Support",
    col3: "Follow Us",
    home: "Home",
    services: "Professional Services",
    knowledge: "Knowledge Base",
    faq: "Q&A",
    contact: "Contact Us",
    privacy: "Privacy Policy",
    rights: "All Rights Reserved."
  },
  ru: {
    desc: "Надежные консультации для ваших целей в области гражданства и иммиграции по всему миру.",
    col1: "Быстрые ссылки",
    col2: "Поддержка",
    col3: "Оставайтесь на связи",
    home: "Главная",
    services: "Профессиональные услуги",
    knowledge: "База знаний",
    faq: "Вопросы-Ответы",
    contact: "Связаться с нами",
    privacy: "Политика конфиденциальности",
    rights: "Все права защищены."
  },
  ar: {
    desc: "استشارات موثوقة لأهدافك في الجنسية والهجرة في جميع أنحاء العالم.",
    col1: "روابط سريعة",
    col2: "دعم",
    col3: "تابعنا",
    home: "الرئيسية",
    services: "خدمات احترافية",
    knowledge: "قاعدة المعرفة",
    faq: "سؤال وجواب",
    contact: "اتصل بنا",
    privacy: "سياسة الخصوصية",
    rights: "جميع الحقوق محفوظة."
  },
  fa: {
    desc: "مشاوره قابل اعتماد برای اهداف شهروندی و مهاجرت شما در سراسر جهان.",
    col1: "لینک های سریع",
    col2: "پشتیبانی",
    col3: "ما را دنبال کنید",
    home: "خانه",
    services: "خدمات حرفه ای",
    knowledge: "پایگاه دانش",
    faq: "پرسش و پاسخ",
    contact: "تماس با ما",
    privacy: "سیاست حفظ حریم خصوصی",
    rights: "تمامی حقوق محفوظ است."
  }
};

locales.forEach(loc => {
  const filePath = path.join('shared', 'i18n', `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.footer = footerData[loc];
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
console.log("Footer i18n updated!");
