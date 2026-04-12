import Image from "next/image";

export default function News() {
  const articles = [
      {cat: "Mülkiyet", title: "Yabancılar İçin Mülk Edinme Yasası Değişiklikleri", img: "/news2.png", date: "10 Nisan 2026", summary: "2026 yılı itibarıyla yürürlüğe giren yeni gayrimenkul değerleme yasaları hakkında uzman görüşlerimiz..."},
      {cat: "Aile", title: "Eş ve Çocuklar İçin Eşzamanlı Başvuru Stratejisi", img: "/news3.png", date: "08 Nisan 2026", summary: "Yeni bir ülkede hayata başlarken aileniz için en kaliteli eğitim ve kültürel adaptasyon adımları..."},
      {cat: "Yatırım", title: "Global Fon Yatırımlarıyla AB Oturum İzni", img: "/news1.png", date: "01 Nisan 2026", summary: "Avrupa ve global altın vize programlarının karşılaştırmalı analizi yayında."},
      {cat: "Vatandaşlık", title: "Çifte Vatandaşlık Kabul Eden Ülkeler", img: "/news2.png", date: "25 Mart 2026", summary: "Sınırlarınızı genişletmek için çifte pasaport kurallarının tam haritası."},
  ];

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div className="w-full bg-navy py-24 text-center text-white px-4 pt-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Haberler ve Bültenler</h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">Sektörel gelişmelerden ve yeni yatırım fırsatlarından ilk siz haberdar olun.</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-20 flex flex-col md:flex-row gap-12">
         {/* Sidebar filters */}
         <div className="w-full md:w-1/4">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-32">
               <h3 className="text-xl font-bold text-navy mb-6 border-b pb-4">Kategoriler</h3>
               <ul className="space-y-4 text-gray-600 font-medium">
                  <li className="text-burgundy font-bold cursor-pointer">Tüm Haberler</li>
                  <li className="hover:text-burgundy cursor-pointer transition">Güncel Yatırım Fırsatları</li>
                  <li className="hover:text-burgundy cursor-pointer transition">Hukuki Değişiklikler</li>
                  <li className="hover:text-burgundy cursor-pointer transition">Başarı Hikayeleri</li>
                  <li className="hover:text-burgundy cursor-pointer transition">Vize & Oturum</li>
               </ul>
            </div>
         </div>

         {/* Content */}
         <div className="w-full md:w-3/4">
            <div className="flex flex-col space-y-8">
               {articles.map((article, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col sm:flex-row group cursor-pointer">
                    <div className="h-56 sm:h-auto sm:w-1/3 relative w-full overflow-hidden">
                       <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 sm:w-2/3 flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-burgundy font-bold uppercase">{article.cat}</span>
                        <span className="text-xs text-gray-400">{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-burgundy transition">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.summary}</p>
                      <span className="mt-auto text-burgundy font-bold text-sm">Haberin Devamı →</span>
                    </div>
                  </div>
               ))}
            </div>
               
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center gap-2">
               <button className="w-10 h-10 rounded-full bg-burgundy text-white font-bold flex items-center justify-center">1</button>
               <button className="w-10 h-10 rounded-full bg-white text-navy font-bold flex items-center justify-center hover:bg-gray-100">2</button>
               <button className="w-10 h-10 rounded-full bg-white text-navy font-bold flex items-center justify-center hover:bg-gray-100">3</button>
            </div>
         </div>
      </section>
    </main>
  );
}
