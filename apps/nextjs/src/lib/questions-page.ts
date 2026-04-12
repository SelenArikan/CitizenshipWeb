import { getDictionary } from "./dictionary";
import { getPublicQuestions } from "./questions";

export type FaqItem = {
  q: string;
  a: string;
};

export async function getQuestionsPageData(lang: string) {
  const dict = await getDictionary(lang);
  const staticFaqs = Array.isArray(dict.faq?.list) ? (dict.faq.list as FaqItem[]) : [];
  const publicFaqs = getPublicQuestions(lang)
    .filter((question) => Boolean(question.answer))
    .map((question) => ({
      q: question.question,
      a: question.answer ?? "",
    }));

  return {
    dict,
    publicFaqs,
    allFaqs: [...publicFaqs, ...staticFaqs],
  };
}
