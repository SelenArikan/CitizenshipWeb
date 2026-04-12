import ar from "../generated/i18n/ar.json";
import en from "../generated/i18n/en.json";
import fa from "../generated/i18n/fa.json";
import ru from "../generated/i18n/ru.json";
import tr from "../generated/i18n/tr.json";

const dictionaries = {
  tr,
  en,
  ru,
  ar,
  fa,
} as const;

export const getDictionary = async (locale: string) => {
  if (!Object.prototype.hasOwnProperty.call(dictionaries, locale)) {
    return dictionaries.tr;
  }

  return dictionaries[locale as keyof typeof dictionaries];
};
