export type AdminRole = "super" | "lang";

export type AdminSession = {
  id: string;
  username: string;
  name: string;
  role: AdminRole;
  locale?: string;
};

export type QuestionStatus = "pending" | "approved" | "rejected";

export const LOCALE_FLAGS: Record<string, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  ru: "🇷🇺",
  ar: "🇦🇪",
  fa: "🇮🇷",
};

export const LOCALE_LABELS: Record<string, string> = {
  tr: "Türkçe",
  en: "English",
  ru: "Русский",
  ar: "العربية",
  fa: "فارسی",
};

export const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export const STATUS_LABELS: Record<string, string> = {
  pending: "Bekleyen",
  approved: "Onaylanan",
  rejected: "Reddedilen",
};
