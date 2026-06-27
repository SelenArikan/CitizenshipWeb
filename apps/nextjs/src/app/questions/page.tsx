import QuestionSubmissionForm from "@/components/QuestionSubmissionForm";
import { getQuestionsPageData } from "@/lib/questions-page";

export default async function Questions({
  lang = "tr",
}: {
  lang?: string;
}) {
  const { dict, publicFaqs, allFaqs } = await getQuestionsPageData(lang);
  const pageCopy = dict.questions_page ?? {
    title: "Soru-Cevap",
    desc: "Sıkça sorulan sorulara göz atabilir veya uzmanlarımıza doğrudan sorunuzu iletebilirsiniz.",
    form_title: "Uzmana Sorun",
    form_desc: "Public seçenekte soru anonim olarak SSS'de yayımlanabilir. Özel seçenekte yanıt yalnızca e-posta ile size gönderilir.",
    no_public_questions_title: "Topluluktan henüz public soru yok",
    no_public_questions_desc: "İlk public soru-cevaplar admin onayından sonra burada görünecek.",
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-white">
      <div
        className="relative w-full py-24 text-center px-4"
        style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <h1 className="relative text-4xl md:text-6xl font-bold mb-4 text-[#0a192f]">{pageCopy.title}</h1>
        <p className="relative text-xl font-light text-[#0a192f]/60 max-w-2xl mx-auto">{pageCopy.desc}</p>
      </div>

      <section className="mx-auto w-full max-w-7xl px-8 py-20 flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-navy mb-8">{dict.faq?.title ?? "Sıkça Sorulan Sorular"}</h2>
          {publicFaqs.length === 0 && (
            <div className="mb-8 rounded-2xl border border-dashed border-gray-200 bg-[#f8fafc] px-6 py-5">
              <div className="font-bold text-navy mb-1">{pageCopy.no_public_questions_title}</div>
              <p className="text-sm text-gray-500">{pageCopy.no_public_questions_desc}</p>
            </div>
          )}
          <div className="space-y-4">
            {allFaqs.map((faq, idx) => (
              <details key={`${faq.q}-${idx}`} className="group bg-[#E8ECF3] rounded-2xl cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-navy p-6 group-open:border-b border-gray-200 focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-burgundy transition-transform group-open:rotate-45 text-2xl">+</span>
                </summary>
                <p className="text-gray-600 p-6 leading-relaxed bg-white rounded-b-2xl border-x border-b border-[#f4f6f8]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div
            className="relative rounded-3xl p-8 shadow-md lg:sticky lg:top-32 border border-[#0a192f]/10"
            style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #F0F4FA 100%)" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#0a192f]">{pageCopy.form_title}</h3>
            <p className="text-[#0a192f]/60 mb-6 text-sm">{pageCopy.form_desc}</p>
            <QuestionSubmissionForm
              lang={dict.lang}
              copy={dict.question_form}
              submissionCopy={dict.newsletter}
              variant="sidebar"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
