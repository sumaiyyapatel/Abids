import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SimpleBackend from './utils/SimpleBackend';

const supportedLngs = [
  'en', 'es', 'de', 'fr', 'hi', 'ur', 'bn', 'pa', 'mr', 'gu',
  'ta', 'te', 'kn', 'ml', 'or', 'as', 'si', 'ne', 'ar', 'pt', 'ru', 'fa'
];

i18n
  .use(SimpleBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs,
    // saveMissing: true, // Disabled for static strategy
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true, // Re-enable suspense if desired, or keep false
      bindI18n: 'languageChanged loaded',
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;