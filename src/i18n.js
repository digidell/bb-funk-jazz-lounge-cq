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
       events: {
        title: "Weekly Schedule",
        subtitle: "Seven nights of curated sounds. From intimate blues to electric funk, there’s always a reason to visit.",
        note: "Lineups may vary. Follow us for weekly artist announcements and special guest sets.",
        cta_reserve: "Reserve a Table",
        cta_social: "Follow for Lineups",
        monday: { day: "Monday", title: "Live Blues", subtitle: "Solo Artist", desc: "Soulful blues to start your week. Intimate performances featuring local and touring musicians.", vibe: "Intimate" },
        wednesday: { day: "Wednesday", title: "Latin Dance Night", subtitle: "Salsa • Bachata • Merengue", desc: "Heat up your week with Latin rhythms. Dance floor opens with guided lessons and curated DJ sets.", vibe: "Energetic" },
        thursday_sunday: { day: "Thursday & Sunday", title: "Trivia & Variety Shows", subtitle: "Alternating Weekly", desc: "Test your knowledge or enjoy eclectic variety acts. From open mic nights to themed trivia.", vibe: "Social" },
        friday: { day: "Friday", title: "Live Funk & Jazz Band", subtitle: "Full Ensemble", desc: "The weekend kicks off with our signature live band. Groovy basslines, brass sections, and classic funk.", vibe: "Electric" },
        saturday: { day: "Saturday", title: "Dual DJ Sets", subtitle: "Back-to-Back Vinyl & Digital", desc: "Two DJs, one turntable. Curated sets spanning jazz, soul, funk, and modern electronic crossovers.", vibe: "Dynamic" }
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
      events: {
        title: "每周演出安排",
        subtitle: "七晚精选音乐。从私密蓝调到活力放克，每晚都值得驻足。",
        note: "阵容可能变动。关注我们的社交媒体获取每周艺术家公告与特别嘉宾演出。",
        cta_reserve: "预订座位",
        cta_social: "关注获取演出阵容",
        monday: { day: "周一", title: "现场蓝调", subtitle: "独奏艺术家", desc: "用灵魂蓝调开启新的一周。本地与巡演音乐家的亲密演出。", vibe: "私密" },
        wednesday: { day: "周三", title: "拉丁舞之夜", subtitle: "萨尔萨 • 巴恰塔 • 梅伦格", desc: "用拉丁节奏点燃周中。舞池开放，提供基础教学与精选DJ set。", vibe: "活力" },
        thursday_sunday: { day: "周四 & 周日", title: " trivia与综艺秀", subtitle: "每周轮换", desc: "测试你的知识或欣赏 eclectic 综艺表演。从开放麦到主题 trivia 之夜。", vibe: "社交" },
        friday: { day: "周五", title: "现场放克与爵士乐队", subtitle: "完整编制", desc: "周末以我们的招牌现场乐队开场。律动贝斯、铜管乐与经典放克。", vibe: "电光火石" },
        saturday: { day: "周六", title: "双DJ联演", subtitle: "黑胶与数字背靠背", desc: "两位DJ，一台转盘。精选爵士、灵魂、放克与现代电子跨界曲目。", vibe: "动感" }
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