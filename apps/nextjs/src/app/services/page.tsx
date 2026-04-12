import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Yatırım Yoluyla Vatandaşlık", icon: "🛂", description: "Pasaport ve global özgürlük elde etmek için Türkiye ve dünya çapında emlak veya fon yatırımlarınızı yönetiyoruz." },
    { title: "Oturum İzinleri", icon: "💳", description: "Altın Vize (Golden Visa) ve bağımsız yatırımcılar için uzun dönem oturum hakları danışmanlığı." },
    { title: "Şirket Kurulumu", icon: "🏢", description: "Ticari göçmenlik prosedürleri, uluslararası şube açılışı ve global vergi optimizasyonu çözümleri." },
    { title: "Aile Birleşimi", icon: "👨‍👩‍👧", description: "Ailenizin tüm fertleri için eşzamanlı başvuru yapılarak bütünleşik vatandaşlık/oturum onayı alınması." },
    { title: "Çalışma İzinleri", icon: "💼", description: "Global ölçekte nitelikli çalışan vizesi ve expat yöneticiler için çalışma izni başvuru yönetimi." },
    { title: "Hukuki Danışmanlık", icon: "⚖️", description: "Gayrimenkul sözleşmeleri, fon aktarımı incelemeleri ve göçmenlik hukukunda uçtan uca koruma." },
  ];

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div className="w-full bg-navy py-24 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Profesyonel Hizmetlerimiz</h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">Vatandaşlık ve göçmenlik süreçlerindeki uzmanlığımızla hedeflerinize güvenle ulaşın.</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition flex flex-col items-start border border-gray-100 group">
                   <div className="text-5xl mb-6 bg-[#f4f6f8] w-20 h-20 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                      {srv.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-navy mb-4">{srv.title}</h3>
                   <p className="text-gray-600 mb-6">{srv.description}</p>
                   <a href={`/contact`} className="mt-auto text-burgundy font-bold flex items-center hover:text-burgundy-light transition">
                       Detaylı Bilgi Al <span className="ml-2">→</span>
                   </a>
                </div>
            ))}
         </div>
      </section>

      {/* CTA section */}
      <section className="w-full bg-white py-24 border-t border-gray-200 flex flex-col items-center text-center px-4">
         <h2 className="text-3xl font-bold text-navy mb-6">Size Özel Çözümler İçin Hazırız</h2>
         <p className="text-gray-600 mb-8 max-w-xl text-lg">Başvurunuzu başlatmak veya durumunuza en uygun yatırım/göçmenlik programını öğrenmek için bizimle iletişime geçin.</p>
         <a href="/contact" className="px-10 py-4 bg-burgundy hover:bg-burgundy-light text-white rounded-full font-bold text-lg shadow-lg transition">Hemen Ücretsiz Danış &rarr;</a>
      </section>
    </main>
  );
}
