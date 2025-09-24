import zh from "./locales/zh.ts"
import en from "./locales/en.ts"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    "en": {
      translation: en,
    },
    "zh": {
      translation: zh,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  }
})