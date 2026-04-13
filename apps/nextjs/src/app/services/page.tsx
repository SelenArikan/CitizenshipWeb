import Link from "next/link";

type ServiceIconKey =
  | "citizenship"
  | "residence"
  | "company"
  | "family"
  | "work"
  | "legal";

type Service = {
  title: string;
  icon: ServiceIconKey;
  description: string;
};

function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  const sharedProps = {
    "aria-hidden": true,
    className: "h-10 w-10",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.5,
    viewBox: "0 0 64 64",
  };

  switch (icon) {
    case "citizenship":
      return (
        <svg {...sharedProps}>
          <rect x="16" y="10" width="32" height="44" rx="8" />
          <path d="M24 18h16" />
          <circle cx="32" cy="35" r="9" />
          <path d="M32 26v18" />
          <path d="M23 35h18" />
          <path d="M25.5 29.5c2.5 2 10.5 2 13 0" />
          <path d="M25.5 40.5c2.5-2 10.5-2 13 0" />
        </svg>
      );
    case "residence":
      return (
        <svg {...sharedProps}>
          <rect x="10" y="16" width="44" height="32" rx="8" />
          <circle cx="24" cy="30" r="5" />
          <path d="M17 41c1.8-4 5-6 7-6s5.2 2 7 6" />
          <path d="M36 27h10" />
          <path d="M36 34h10" />
          <path d="M36 41h7" />
        </svg>
      );
    case "company":
      return (
        <svg {...sharedProps}>
          <path d="M16 52V18l16-6v40" />
          <path d="M32 52V24h16v28" />
          <path d="M22 24h4" />
          <path d="M22 31h4" />
          <path d="M22 38h4" />
          <path d="M38 31h4" />
          <path d="M38 38h4" />
          <path d="M28 52v-8h8v8" />
        </svg>
      );
    case "family":
      return (
        <svg {...sharedProps}>
          <circle cx="22" cy="25" r="5" />
          <circle cx="42" cy="25" r="5" />
          <circle cx="32" cy="20" r="6" />
          <path d="M14 44c2-5 5.7-8 8-8 2.3 0 6 3 8 8" />
          <path d="M34 44c2-5 5.7-8 8-8 2.3 0 6 3 8 8" />
          <path d="M22 46c2.2-6 6.3-10 10-10s7.8 4 10 10" />
        </svg>
      );
    case "work":
      return (
        <svg {...sharedProps}>
          <rect x="12" y="22" width="40" height="24" rx="6" />
          <path d="M24 22v-4c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v4" />
          <path d="M12 31h40" />
          <path d="M28 31v4h8v-4" />
        </svg>
      );
    case "legal":
      return (
        <svg {...sharedProps}>
          <path d="M32 14v36" />
          <path d="M20 20h24" />
          <path d="M12 24l8 12 8-12" />
          <path d="M36 24l8 12 8-12" />
          <path d="M16 42c1.8 3 4.5 4.5 8 4.5S30.2 45 32 42" />
          <path d="M32 42c1.8 3 4.5 4.5 8 4.5s6.2-1.5 8-4.5" />
          <path d="M24 50h16" />
        </svg>
      );
  }
}

export default function Services() {
  const services: Service[] = [
    { title: "Yatırım Yoluyla Vatandaşlık", icon: "citizenship", description: "Pasaport ve global özgürlük elde etmek için Türkiye ve dünya çapında emlak veya fon yatırımlarınızı yönetiyoruz." },
    { title: "Oturum İzinleri", icon: "residence", description: "Altın Vize (Golden Visa) ve bağımsız yatırımcılar için uzun dönem oturum hakları danışmanlığı." },
    { title: "Şirket Kurulumu", icon: "company", description: "Ticari göçmenlik prosedürleri, uluslararası şube açılışı ve global vergi optimizasyonu çözümleri." },
    { title: "Aile Birleşimi", icon: "family", description: "Ailenizin tüm fertleri için eşzamanlı başvuru yapılarak bütünleşik vatandaşlık/oturum onayı alınması." },
    { title: "Çalışma İzinleri", icon: "work", description: "Global ölçekte nitelikli çalışan vizesi ve expat yöneticiler için çalışma izni başvuru yönetimi." },
    { title: "Hukuki Danışmanlık", icon: "legal", description: "Gayrimenkul sözleşmeleri, fon aktarımı incelemeleri ve göçmenlik hukukunda uçtan uca koruma." },
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
                   <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f4f6f8] text-burgundy transition-all duration-300 group-hover:scale-110 group-hover:text-burgundy-light">
                      <ServiceIcon icon={srv.icon} />
                   </div>
                   <h3 className="text-2xl font-bold text-navy mb-4">{srv.title}</h3>
                   <p className="text-gray-600 mb-6">{srv.description}</p>
                   <Link href="/contact" className="mt-auto text-burgundy font-bold flex items-center hover:text-burgundy-light transition">
                       Detaylı Bilgi Al <span className="ml-2">→</span>
                   </Link>
                </div>
            ))}
         </div>
      </section>

      {/* CTA section */}
      <section className="w-full bg-white py-24 border-t border-gray-200 flex flex-col items-center text-center px-4">
         <h2 className="text-3xl font-bold text-navy mb-6">Size Özel Çözümler İçin Hazırız</h2>
         <p className="text-gray-600 mb-8 max-w-xl text-lg">Başvurunuzu başlatmak veya durumunuza en uygun yatırım/göçmenlik programını öğrenmek için bizimle iletişime geçin.</p>
         <Link href="/contact" className="px-10 py-4 bg-burgundy hover:bg-burgundy-light text-white rounded-full font-bold text-lg shadow-lg transition">Hemen Ücretsiz Danış &rarr;</Link>
      </section>
    </main>
  );
}
