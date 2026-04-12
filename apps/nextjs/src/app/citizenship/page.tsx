export default function CitizenshipProcess() {
  const steps = [
    { num: 1, title: "Stratejik Değerlendirme", desc: "Durumunuza uygun vatandaşlık programının (yatırım, fon, bağış) analiz edilmesi.", pills: ["Pasaport Kopyası", "Özgeçmiş"] },
    { num: 2, title: "Ön Onay ve Evrak Hazırlığı", desc: "Seçilen programa göre resmi başvuru evraklarının tercüme ve noter süreçleri.", pills: ["Adli Sicil", "Doğum Belgesi", "Banka Dekontu"] },
    { num: 3, title: "Yatırımın Tamamlanması", desc: "Emlak alımı, fon yatırımı veya bağış işlemlerinin resmi kanallarla yapılması.", pills: ["Tapu/Hisse", "Değerleme Raporu"] },
    { num: 4, title: "Resmi Başvurunun İletilmesi", desc: "Dosyanızın ilgili ülkenin Vatandaşlık ve Göçmenlik ofisine teslim edilmesi.", pills: ["Eksiksiz Dosya Onayı"] },
    { num: 5, title: "Güvenlik Soruşturması", desc: "İlgili ülke makamlarınca yapılan geçmiş arka plan araştırması sürecinin takibi.", pills: ["Bekleme Süreci"] },
    { num: 6, title: "Pasaport Teslimatı", desc: "Onay sertifikasının alınması ve ailenizin pasaport/kimlik teslimatının yapılması.", pills: ["Vatandaşlık Sertifikası", "Pasaport"] }
  ];

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="w-full bg-navy py-24 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Adım Adım Vatandaşlık Başvuru Süreci</h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">Hayalinizdeki pasaporta ulaşırken hiçbir sürprizle karşılaşmayın.</p>
      </div>

      <section className="w-full max-w-5xl px-8 py-24 overflow-hidden">
         <div className="relative border-l-4 border-gray-200 ml-6 md:ml-0 md:border-none">
            {/* For desktop, vertical line through middle */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -ml-[2px]" />

            <div className="flex flex-col space-y-16 py-10">
              {steps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                   {/* Circle node */}
                   <div className="absolute left-[-11px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-6 h-6 bg-burgundy rounded-full border-4 border-white shadow-md z-10 group-hover:scale-150 transition-transform duration-300"></div>
                   
                   {/* Content Box */}
                   <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'pl-8 md:pl-16' : 'pl-8 md:pr-16 text-left md:text-right'}`}>
                      <div className="bg-[#f4f6f8] p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
                        <span className="text-burgundy font-bold text-lg mb-2 block">Aşama {step.num}</span>
                        <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.desc}</p>
                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                          {step.pills.map(pill => (
                            <span key={pill} className="bg-white px-3 py-1 text-xs font-bold text-navy border border-gray-200 rounded-full">{pill}</span>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>
      
      {/* AI / Contact CTA mapping */}
      <section className="w-full bg-navy py-24 border-t border-gray-200 flex flex-col items-center text-center px-4 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
         <h2 className="text-3xl font-bold text-white mb-6 z-10">Dosyanızı Uzmanımızla Değerlendirin</h2>
         <p className="text-gray-300 mb-8 max-w-xl text-lg z-10">Sürecinizin ne kadar süreceğini ve hangi adımların size özel olacağını ücretsiz analiz edelim.</p>
         <a href="/contact" className="px-10 py-4 bg-burgundy hover:bg-burgundy-light text-white rounded-full font-bold text-lg shadow-lg transition z-10">Hemen Bize Ulaşın &rarr;</a>
      </section>
    </main>
  );
}
