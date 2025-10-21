import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Experience the Art of',
        subtitle: 'Precision Cooling',
        cta: 'Contact Us Now'
      },
      about: {
        title: 'About Us',
        description: 'Founded in 1996, Abid Refrigeration Engineering Private Limited'
      },
      products: {
        title: 'Our Products',
        viewDetails: 'View Details'
      },
      contact: {
        title: 'Get In Touch',
        submit: 'Send Message'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        about: 'हमारे बारे में',
        products: 'उत्पाद',
        projects: 'परियोजनाएं',
        contact: 'संपर्क करें'
      },
      hero: {
        title: 'प्रिसिजन कूलिंग',
        subtitle: 'की कला का अनुभव करें',
        cta: 'अभी संपर्क करें'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;