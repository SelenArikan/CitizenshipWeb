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
      <div className="w-full bg-navy py-24 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{pageCopy.title}</h1>
        <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">{pageCopy.desc}</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-20 flex flex-col md:flex-row gap-16">
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
              <details key={`${faq.q}-${idx}`} className="group bg-[#f4f6f8] rounded-2xl cursor-pointer">
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
          <div className="bg-navy p-8 rounded-3xl shadow-lg sticky top-32 text-white border border-glass-border-dark">
            <h3 className="text-2xl font-bold mb-4">{pageCopy.form_title}</h3>
            <p className="text-gray-300 mb-6 text-sm">{pageCopy.form_desc}</p>
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
