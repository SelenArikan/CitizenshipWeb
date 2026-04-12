export default function Footer({ dict, lang }: { dict?: any, lang?: string }) {
  const safeDict = dict || {
    desc: "Dünya çapında vatandaşlık ve göçmenlik hedefleriniz için güvenilir danışmanlık.",
    col1: "Hızlı Linkler", col2: "Destek", col3: "Bizi Takip Edin",
    home: "Ana Sayfa", services: "Profesyonel Hizmetler", knowledge: "Bilgi Bankası",
    faq: "Soru-Cevap", contact: "Bize Ulaşın", privacy: "Gizlilik Politikası", rights: "Tüm Hakları Saklıdır."
  };
  const safeLang = lang || "tr";

  return (
    <footer className="bg-[#0a192f] text-gray-300 py-12 border-t border-[rgba(255,255,255,0.1)] mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <span className="font-bold text-2xl text-white block mb-4">Citizenship<span className="text-[#a32222]">Web</span></span>
             <p className="text-sm text-gray-400">{safeDict.desc}</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{safeDict.col1}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`/${safeLang}`} className="hover:text-white transition">{safeDict.home}</a></li>
              <li><a href={`/${safeLang}/services`} className="hover:text-white transition">{safeDict.services}</a></li>
              <li><a href={`/${safeLang}/knowledge`} className="hover:text-white transition">{safeDict.knowledge}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{safeDict.col2}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`/${safeLang}/questions`} className="hover:text-white transition">{safeDict.faq}</a></li>
              <li><a href={`/${safeLang}/contact`} className="hover:text-white transition">{safeDict.contact}</a></li>
              <li><a href={`/${safeLang}/privacy`} className="hover:text-white transition">{safeDict.privacy}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{safeDict.col3}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.05)] text-center text-sm text-gray-500">
          © 2026 CitizenshipWeb. {safeDict.rights}
        </div>
      </div>
    </footer>
  );
}
