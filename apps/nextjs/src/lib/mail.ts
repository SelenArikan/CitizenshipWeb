import nodemailer from "nodemailer";

import type { Question } from "./questions";

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getTransporter() {
  const host = getRequiredEnv("NATRO_SMTP_HOST");
  const port = Number.parseInt(process.env.NATRO_SMTP_PORT ?? "465", 10);
  const secure = process.env.NATRO_SMTP_SECURE
    ? process.env.NATRO_SMTP_SECURE === "true"
    : port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: getRequiredEnv("NATRO_SMTP_USER"),
      pass: getRequiredEnv("NATRO_SMTP_PASS"),
    },
  });
}

type PrivateReplyCopy = {
  subject: string;
  greeting: string;
  intro: string;
  questionLabel: string;
  answerLabel: string;
  footer: string;
};

function getPrivateReplyCopy(locale: string): PrivateReplyCopy {
  switch (locale) {
    case "en":
      return {
        subject: "Your CitizenshipWeb question has been answered",
        greeting: "Hello,",
        intro: "Your private question has been reviewed by our team.",
        questionLabel: "Your question",
        answerLabel: "Our answer",
        footer: "You can reply to this email if you need additional clarification.",
      };
    case "ru":
      return {
        subject: "Ваш вопрос в CitizenshipWeb получил ответ",
        greeting: "Здравствуйте,",
        intro: "Наша команда рассмотрела ваш приватный вопрос.",
        questionLabel: "Ваш вопрос",
        answerLabel: "Наш ответ",
        footer: "Если вам нужна дополнительная информация, вы можете ответить на это письмо.",
      };
    case "ar":
      return {
        subject: "تم الرد على سؤالك في CitizenshipWeb",
        greeting: "مرحباً،",
        intro: "راجع فريقنا سؤالك الخاص وأرسل لك الرد أدناه.",
        questionLabel: "سؤالك",
        answerLabel: "ردنا",
        footer: "إذا احتجت إلى توضيح إضافي يمكنك الرد على هذه الرسالة.",
      };
    case "fa":
      return {
        subject: "به سوال شما در CitizenshipWeb پاسخ داده شد",
        greeting: "سلام،",
        intro: "تیم ما سوال خصوصی شما را بررسی کرده و پاسخ را در ادامه فرستاده است.",
        questionLabel: "سوال شما",
        answerLabel: "پاسخ ما",
        footer: "اگر به توضیح بیشتری نیاز دارید می توانید به همین ایمیل پاسخ دهید.",
      };
    default:
      return {
        subject: "CitizenshipWeb sorunuza yanit verdi",
        greeting: "Merhaba,",
        intro: "Ekibimiz ozel soru talebinizi inceleyip asagidaki yaniti hazirladi.",
        questionLabel: "Sorunuz",
        answerLabel: "Yanitimiz",
        footer: "Ek aciklama gerekirse bu e-postayi yanitlayabilirsiniz.",
      };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendPrivateQuestionReply(question: Question, answer: string) {
  if (!question.email) {
    throw new Error("Question does not have an email address for private reply delivery.");
  }

  const transporter = getTransporter();
  const from = process.env.NATRO_SMTP_FROM ?? process.env.NATRO_SMTP_USER;
  const replyTo = process.env.NATRO_SMTP_REPLY_TO || from;
  const copy = getPrivateReplyCopy(question.locale);

  const escapedQuestion = escapeHtml(question.question).replaceAll("\n", "<br />");
  const escapedAnswer = escapeHtml(answer).replaceAll("\n", "<br />");

  await transporter.sendMail({
    from,
    to: question.email,
    replyTo,
    subject: copy.subject,
    text: `${copy.greeting}\n\n${copy.intro}\n\n${copy.questionLabel}:\n${question.question}\n\n${copy.answerLabel}:\n${answer}\n\n${copy.footer}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <p>${escapeHtml(copy.greeting)}</p>
        <p>${escapeHtml(copy.intro)}</p>
        <div style="margin: 24px 0; padding: 16px; border-radius: 16px; background: #f3f4f6;">
          <div style="font-size: 12px; text-transform: uppercase; color: #6b7280; margin-bottom: 8px;">${escapeHtml(copy.questionLabel)}</div>
          <div>${escapedQuestion}</div>
        </div>
        <div style="margin: 24px 0; padding: 16px; border-radius: 16px; background: #eff6ff; border: 1px solid #bfdbfe;">
          <div style="font-size: 12px; text-transform: uppercase; color: #1d4ed8; margin-bottom: 8px;">${escapeHtml(copy.answerLabel)}</div>
          <div>${escapedAnswer}</div>
        </div>
        <p>${escapeHtml(copy.footer)}</p>
      </div>
    `,
  });
}
