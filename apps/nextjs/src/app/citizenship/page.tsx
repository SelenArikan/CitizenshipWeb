import Link from "next/link";

type Benefit = {
  title: string;
  desc: string;
};

export default function CitizenshipBenefits({ lang = "tr" }: { lang?: string }) {
  const benefits: Benefit[] = [
    {
      title: "Vizesiz veya kolay vizeli seyahat esnekligi",
      desc: "Turk pasaportu, bircok destinasyonda vizesiz, kapida vize veya e-vize ile seyahat planlamasinda yatirimci ailelerine esneklik saglar.",
    },
    {
      title: "Genel saglik sistemi ve kamu hizmetlerine erisim",
      desc: "Vatandaslik sonrasinda saglik altyapisi ve kamu hizmetlerinden yararlanma imkani, uzun vadeli yerlesim planlari icin guclu bir avantaj sunar.",
    },
    {
      title: "Egitim imkanlari",
      desc: "Devlet okullari, universiteler ve egitim altyapisi sayesinde aileler cocuklarinin Turkiye icindeki egitim planlamasini daha rahat kurgulayabilir.",
    },
    {
      title: "Is kurma ve calisma imkanlari",
      desc: "Turkiye icindeki ticari hayat, yatirim, istihdam ve girisimcilik adimlarinda vatandaslik sonrasi daha esnek hareket alanlari olusturabilir.",
    },
    {
      title: "Amerika E-2 yatirimci vizesi icin stratejik zemin",
      desc: "Turk vatandasligi belirli kosullarda Amerika E-2 yatirimci vizesi planlamasinda kullanilabilecek bir vatandaslik zemini sunabilir.",
    },
    {
      title: "Cifte veya coklu vatandaslik imkani",
      desc: "Turkiye coklu vatandasliga izin verir; bu nedenle mevcut vatandasliklarin korunmasi konusunda ek planlama imkanlari dogabilir.",
    },
    {
      title: "Surec boyunca Turkiye'de yasama zorunlulugu yok",
      desc: "Yatirim tamamlandiktan sonra dosyanin buyuk kismi vekalet ve resmi basvuru akisiyla uzaktan takip edilebilir.",
    },
    {
      title: "Mavi Kart ve yakin haklarin devam etmesi",
      desc: "Turk vatandasligindan ayrilan kisiler icin Mavi Kart sistemi, belirli haklarin korunmasi acisindan onemli bir referans noktasi olmaya devam eder.",
    },
  ];

  const contactHref = `/${lang}/contact`;
  const servicesHref = `/${lang}/services`;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white">
      <div className="w-full bg-navy px-4 py-24 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Turk Vatandasi Olmanin Avantajlari</h1>
        <p className="mx-auto max-w-3xl text-xl font-light text-gray-300">
          Seyahat, saglik, egitim, ticaret ve aile planlamasi acisindan Turk vatandasliginin sundugu temel avantajlari
          bir arada inceleyin.
        </p>
      </div>

      <section className="w-full max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className={`rounded-3xl border border-gray-100 bg-[#f4f6f8] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                idx % 2 === 0 ? "md:mr-4" : "md:ml-4"
              }`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-burgundy shadow-sm">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-navy">{benefit.title}</h2>
              <p className="leading-relaxed text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex w-full flex-col items-center overflow-hidden bg-navy px-4 py-24 text-center">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-burgundy opacity-20 blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white">Avantajlari dogru yatirim modeliyle birlestirin</h2>
          <p className="mb-8 text-lg text-gray-300">
            Vatandaslik kararindan once hangi yatirim seceneginin sizin icin daha uygun oldugunu, aile dosyasi ve
            butce yapinizla birlikte degerlendirelim.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={servicesHref} className="rounded-full bg-burgundy px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-burgundy-light">
              Yatirim Turlerini Incele
            </Link>
            <Link href={contactHref} className="rounded-full border border-white/20 px-10 py-4 text-lg font-bold text-white transition hover:bg-white/10">
              Bizimle Iletisime Gec
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
