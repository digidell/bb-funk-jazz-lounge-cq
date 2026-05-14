import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources (expand as needed)
const resources = {
  en: {
    translation: {
      hero: {
        title: "BB Funk",
        subtitle: "Jazz Lounge",
        tagline: "An intimate jazz experience in the heart of Chongqing.",
        cta_reserve: "Reserve a Table",
        cta_events: "View Tonight's Lineup",
      },
      nav: {
        home: "Home",
        events: "Events",
        menu: "Menu",
        gallery: "Gallery",
        location: "Location",
        private: "Private Events",
      },
    },
  },
  zh: {
    translation: {
      hero: {
        title: "BB Funk",
        subtitle: "爵士酒廊",
        tagline: "重庆中心的亲密爵士体验",
        cta_reserve: "预订座位",
        cta_events: "查看今晚演出",
      },
      nav: {
        home: "首页",
        events: "活动",
        menu: "菜单",
        gallery: "画廊",
        location: "位置",
        private: "私人活动",
      },
    },
  },
  // Add FR, ES, KO, RU, DE similarly
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh', 'fr', 'es', 'ko', 'ru', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;