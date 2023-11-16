import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: translations,
  fallbackLng: 'pt',
  defaultNS: 'translations'
});

export default i18n;




