export default function Contact({ lang = "tr" }: { lang?: string }) {
  const contactSummary =
    lang === "tr"
      ? "Turkiye yatirim yoluyla vatandaslik programi hakkinda dosyanizi, butcenizi ve aile yapinizi birlikte degerlendirelim."
      : "Let us review your Turkey citizenship by investment file, budget, and family structure together.";

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#f4f6f8]">
      <div className="w-full bg-navy px-4 pb-24 pt-40 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Bizimle Iletisime Gecin</h1>
        <p className="mx-auto max-w-3xl text-xl font-light text-gray-300">{contactSummary}</p>
      </div>

      <section className="flex w-full max-w-7xl flex-col gap-16 px-8 py-20 lg:flex-row">
        <div className="flex w-full flex-col space-y-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-navy">Istanbul Ofisi</h2>
          <p className="text-lg text-gray-600">
            Ilk gorusmede dosyanizin hangi yatirim modeliyle daha saglikli ilerleyecegini, gerekli belgeleri ve sure
            beklentisini adim adim konusabiliriz.
          </p>

          <div className="flex flex-col space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <div>
              <h4 className="mb-1 text-sm font-bold uppercase text-burgundy">Acik Adres</h4>
              <p className="text-lg font-medium text-navy">
                Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2
                <br />
                GINZA PLAZA, 34015 Zeytinburnu, Istanbul
              </p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold uppercase text-burgundy">E-Posta</h4>
              <p className="text-lg font-medium text-navy">info@turkeyinvestmentcitizenship.com</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold uppercase text-burgundy">Telefon</h4>
              <p className="text-lg font-medium text-navy">+90 532 449 47 28</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="mb-2 text-xs font-bold uppercase text-gray-400">Calisma Saatleri</h4>
              <p className="text-sm text-gray-600">Pazartesi - Cuma: 08:30 - 18:00</p>
              <p className="mt-1 text-sm text-gray-600">Cumartesi - Pazar: Kapali</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl border border-gray-100 bg-white p-10 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-navy">Iletisim Formu</h3>
            <form className="flex flex-col space-y-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <input
                  type="text"
                  placeholder="Adiniz"
                  className="flex-1 rounded-xl bg-[#f4f6f8] px-4 py-4 text-navy outline-none focus:ring-2 focus:ring-burgundy"
                  required
                />
                <input
                  type="text"
                  placeholder="Soyadiniz"
                  className="flex-1 rounded-xl bg-[#f4f6f8] px-4 py-4 text-navy outline-none focus:ring-2 focus:ring-burgundy"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full rounded-xl bg-[#f4f6f8] px-4 py-4 text-navy outline-none focus:ring-2 focus:ring-burgundy"
                required
              />
              <input
                type="tel"
                placeholder="Telefon Numaraniz"
                className="w-full rounded-xl bg-[#f4f6f8] px-4 py-4 text-navy outline-none focus:ring-2 focus:ring-burgundy"
                required
              />
              <textarea
                placeholder="Hangi yatirim modelini dusundugunuzu, aile dosyanizi veya merak ettiginiz soruyu kisaca yazin..."
                rows={5}
                className="w-full rounded-xl bg-[#f4f6f8] px-4 py-4 text-navy outline-none focus:ring-2 focus:ring-burgundy"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-xl bg-burgundy py-5 text-lg font-bold text-white shadow-md transition hover:bg-burgundy-light"
              >
                Mesaji Gonder
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
