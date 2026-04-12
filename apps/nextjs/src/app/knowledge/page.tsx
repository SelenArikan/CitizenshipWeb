import Image from "next/image";

export default function KnowledgeLibrary() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div className="w-full bg-navy py-24 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bilgi Bankası</h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">Vatandaşlık, oturum ve global yatırım hakları hakkında akademik seviyede hazırlanmış referans rehberler.</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-20">
         <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {["Tümü", "Vatandaşlık", "Oturum", "Mülkiyet", "Yatırım", "Aile", "Seyahat"].map((cat, idx) => (
               <button key={idx} className={`px-6 py-2 rounded-full font-bold transition ${idx === 0 ? 'bg-burgundy text-white' : 'bg-white text-navy border border-gray-200 hover:border-burgundy'}`}>
                 {cat}
               </button>
            ))}
         </div>

         <div className="w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition mb-16 flex flex-col md:flex-row group">
            <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
               <Image src="/news1.png" alt="Featured" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
               <span className="text-burgundy font-bold text-sm tracking-widest uppercase mb-4">Öne Çıkan Rehber</span>
               <h2 className="text-3xl font-bold text-navy mb-4">Avrupa ve Karayipler: 2026 Yatırımcı Pasaportu Kıyaslaması</h2>
               <p className="text-gray-600 mb-8 text-lg">Hangi pasaportlar sınır ötesi vergi planlamasında en uygun çözümü sunuyor? En güncel ikili anlaşmalarla tam liste analizimiz.</p>
               <a href="#" className="text-burgundy font-bold flex items-center hover:text-burgundy-light transition uppercase text-sm">Makaleyi Oku <span className="ml-2">→</span></a>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {cat: "Mülkiyet", title: "Yabancılar İçin Mülk Edinme Yasası Değişiklikleri", img: "/news2.png"},
              {cat: "Aile", title: "Eş ve Çocuklar İçin Eşzamanlı Başvuru Stratejisi", img: "/news3.png"},
              {cat: "Yatırım", title: "Global Fon Yatırımlarıyla AB Oturum İzni", img: "/news1.png"},
              {cat: "Seyahat", title: "Vizesiz Seyahat Gücü Yüksek En İyi 5 Pasaport", img: "/hero.png"},
              {cat: "Vatandaşlık", title: "Çifte Vatandaşlık Kabul Eden ve Etmeyen Ülkeler", img: "/news2.png"},
              {cat: "Oturum", title: "Dijital Göçebe (Digital Nomad) Vizeleri 2026", img: "/news3.png"}
            ].map((article, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="h-48 relative w-full overflow-hidden">
                     <Image src={article.img} alt={article.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-burgundy font-bold uppercase mb-2 block">{article.cat}</span>
                    <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">{article.title}</h3>
                    <a href="#" className="mt-4 inline-flex text-burgundy font-bold items-center hover:text-burgundy-light transition text-sm">Oku <span className="ml-2">→</span></a>
                  </div>
                </div>
            ))}
         </div>
      </section>
    </main>
  );
}
