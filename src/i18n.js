// i18n.js (Revised)
const resources = {
  en: {
    translation: {
      nav: { home: 'Home', events: 'Events', gallery: 'Gallery', location: 'Location', reserve: 'Reserve' },
      hero: { tagline: 'An Intimate Jazz Experience', sub: 'In the heart of Chongqing' },
      events: {
        title: 'Weekly Lineup',
        monday: { day: 'Monday', title: 'Live Blues', desc: 'Soulful blues to start your week.' },
        friday: { day: 'Friday', title: 'Live Funk & Jazz', desc: 'Full ensemble performance.' },
        // ... add the rest of the schedule here
      }
    }
  },
  zh: {
    translation: {
      nav: { home: '首页', events: '演出', gallery: '影像', location: '位置', reserve: '预订' },
      hero: { tagline: '沉浸式爵士体验', sub: '重庆之心' },
      events: {
        title: '每周演出',
        monday: { day: '周一', title: '现场布鲁斯', desc: '开启一周的灵魂乐章。' },
        friday: { day: '周五', title: '现场爵士与放克', desc: '全编制乐团演出。' },
      }
    }
  }
};