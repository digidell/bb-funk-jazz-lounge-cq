import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', schedule: 'Schedule', gallery: 'Gallery', location: 'Location', reserve: 'Reserve' },
      hero: { tagline: 'An Intimate Jazz Experience', sub: 'In the heart of Chongqing' }
    }
  },
  zh: {
    translation: {
      nav: { home: '首页', schedule: '演出', gallery: '影像', location: '位置', reserve: '预订' },
      hero: { tagline: '沉浸式爵士体验', sub: '重庆之心' }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;