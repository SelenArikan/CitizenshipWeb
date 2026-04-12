import fs from 'fs/promises';
import path from 'path';

const dictionaries: Record<string, () => Promise<any>> = {
  tr: () => fs.readFile(path.join(process.cwd(), '../../shared/i18n/tr.json'), 'utf-8').then(JSON.parse),
  en: () => fs.readFile(path.join(process.cwd(), '../../shared/i18n/en.json'), 'utf-8').then(JSON.parse),
  ru: () => fs.readFile(path.join(process.cwd(), '../../shared/i18n/ru.json'), 'utf-8').then(JSON.parse),
  ar: () => fs.readFile(path.join(process.cwd(), '../../shared/i18n/ar.json'), 'utf-8').then(JSON.parse),
  fa: () => fs.readFile(path.join(process.cwd(), '../../shared/i18n/fa.json'), 'utf-8').then(JSON.parse),
};

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale]) {
    return dictionaries['tr'](); // Fallback
  }
  return dictionaries[locale]();
};
