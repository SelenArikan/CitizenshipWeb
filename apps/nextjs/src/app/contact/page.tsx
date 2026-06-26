import { getContactPageCopy } from "@/lib/public-pages";

export default function Contact({ lang = "tr" }: { lang?: string }) {
  const copy = getContactPageCopy(lang);

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#E8ECF3]">
      <div
        className="relative w-full px-4 pb-24 pt-40 text-center"
        style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <h1 className="relative mb-4 text-4xl font-bold text-[#0a192f] md:text-6xl">{copy.title}</h1>
        <p className="relative mx-auto max-w-3xl text-xl font-light text-[#0a192f]/60">{copy.summary}</p>
      </div>

      <section className="flex w-full max-w-7xl flex-col gap-16 px-8 py-20 lg:flex-row">
        <div className="flex w-full flex-col space-y-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-navy">{copy.officeTitle}</h2>
          <p className="text-lg text-gray-600">{copy.officeIntro}</p>

          <div className="flex flex-col space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <div>
              <h4 className="mb-1 text-sm font-bold uppercase text-burgundy">{copy.addressLabel}</h4>
              <p className="text-lg font-medium text-navy">
                Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2
                <br />
                GINZA PLAZA, 34015 Zeytinburnu, Istanbul
              </p>
              <div className="mt-3 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Seyitnizam%20Mah.%20Mevlana%20Cad.%20No:81/83%20Kat:2%20GINZA%20PLAZA,%2034015%20Zeytinburnu,%20Istanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold uppercase text-burgundy">{copy.emailLabel}</h4>
              <p className="text-lg font-medium text-navy">info@turkeyinvestmentcitizenship.com</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold uppercase text-burgundy">{copy.phoneLabel}</h4>
              <p className="text-lg font-medium text-navy">+90 532 449 47 28</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="mb-2 text-xs font-bold uppercase text-gray-400">{copy.hoursLabel}</h4>
              <p className="text-sm text-gray-600">{copy.weekdays}</p>
              <p className="mt-1 text-sm text-gray-600">{copy.weekend}</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl border border-gray-100 bg-white p-8 sm:p-10 shadow-xl">
            {/* Form Header with Avatar */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-6 border-b border-gray-100">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-slate-100 shadow-sm bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/team/sevim-dumanli.jpeg"
                  alt="Sevim Dumanlı - Property Consultant"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left min-w-0">
                <h3 className="text-xl font-bold leading-tight text-[#0a192f] md:text-2xl">
                  {copy.formTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {copy.formSubtitle}
                </p>
              </div>
            </div>

            <form className="flex flex-col space-y-5">
              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-semibold text-gray-700">
                  {copy.labels.fullName}
                </label>
                <input
                  type="text"
                  placeholder={copy.placeholders.fullName}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-semibold text-gray-700">
                  {copy.labels.email}
                </label>
                <input
                  type="email"
                  placeholder={copy.placeholders.email}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-semibold text-gray-700">
                  {copy.labels.phone}
                </label>
                <input
                  type="tel"
                  placeholder={copy.placeholders.phone}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-semibold text-gray-700">
                  {copy.labels.message}
                </label>
                <textarea
                  placeholder={copy.placeholders.message}
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 py-4 text-base font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {copy.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
