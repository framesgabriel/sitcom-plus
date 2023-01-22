import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "./pt-br.json";
import en from "./en.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ptBR,
      en,
    },
    lng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
