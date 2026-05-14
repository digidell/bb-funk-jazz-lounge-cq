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
      location: {
        title: "Find Us",
        subtitle: "Explore Chongqing. End your evening at BB Funk.",
        address_label: "Address",
        address: "32 Ziwei Road, Liangjiang New District",
        address_cn: "重庆市两江新区紫薇路32号",
        address_short: "32 Ziwei Road, Chongqing",
        metro_label: "Metro",
        metro: "Huangnibang Station (黄泥磅地铁站)",
        metro_note: "Line 6 • 4 min walk • Exit 2B",
        hours_label: "Hours",
        hours: "Mon–Thu: 19:00 – 02:00",
        hours_weekend: "Fri–Sun: 19:00 – 03:00",
        cocktail_title: "Diamond in the Rough",
        cocktail_desc: "Our signature cocktail. A hidden gem in the middle of the city.",
        cocktail_cta: "View Drink Menu",
        map_fallback: "Open in AMap",
        attractions_title: "Explore the heart ofChongqing",
        note: "Map coordinates approximate. Verify with local navigation apps in China.",
        attractions: {
        hongya: { name: "Hongya Cave", desc: "Stilted architecture & night views" },
        yangtze: { name: "Yangtze River", desc: "River cruises & cableway views" },
        streets: { name: "Mountain City Streets", desc: "Hidden alleys & local culture" }
      },
    },
      private: {
        title: "Private Events",
        subtitle: "Intimate gatherings, milestone celebrations, and unforgettable nights. Let us host your moment.",
        gallery_title: "Moments We've Hosted",
        form: {
          title: "Book Your Event",
          subtitle: "Tell us about your celebration. We'll get back to you within 24 hours.",
          name: "Your Name",
          email: "Email Address",
          phone: "Phone / WeChat",
          date: "Preferred Date",
          type: "Event Type",
          message: "Details / Requests",
          message_placeholder: "Tell us about your group size, preferred drinks, or any special requests...",
          submit: "Send Inquiry",
          options: {
            birthday: "Birthday Party",
            wedding: "Wedding / Proposal",
            corporate: "Corporate Event",
            other: "Other"
          }
        },
        note: "Reservations for private events are handled by our event coordinator. We look forward to hearing from you."
},
      packages: {
        intimate: {
          title: "Intimate Gatherings",
          subtitle: "Birthdays, Anniversaries & Small Parties",
          capacity: "10–60 Guests",
          desc: "Perfect for milestone celebrations. Reserve a corner table or a small section for a cozy, personalized experience."
        },
        corporate: {
          title: "Corporate & Social",
          subtitle: "Team Drinks, Networking & After-Parties",
          capacity: "30–80 Guests",
          desc: "Elevate your team culture. Enjoy dedicated service, custom drink packages, and a sophisticated atmosphere for unwinding."
        },
        venue: {
          title: "Full Venue Buyout",
          subtitle: "Weddings, Galas & Exclusive Parties",
          capacity: "80+ Guests",
          desc: "Make BB Funk yours. Transform the space with custom lighting, private bar service, and live entertainment tailored to your vision."
        }
      }
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
      location: {
        title: "找到我们",
        subtitle: "探索重庆，夜晚归于BB Funk。",
        address_label: "地址",
        address: "两江新区紫薇路32号",
        address_cn: "重庆市两江新区紫薇路32号",
        address_short: "重庆市紫薇路32号",
        metro_label: "地铁",
        metro: "黄泥磅地铁站",
        metro_note: "6号线 • 步行4分钟 • 2B号出口",
        hours_label: "营业时间",
        hours: "周一至周四：19:00 – 02:00",
        hours_weekend: "周五至周日：19:00 – 03:00",
        cocktail_title: "午夜重庆",
        cocktail_desc: "我们的招牌鸡尾酒。规划行程时，不妨小酌一杯。",
        cocktail_cta: "查看酒单",
        map_fallback: "打开高德地图",
        attractions_title: "探索重庆",
        note: "地图坐标为近似值。在中国请使用本地导航应用核实。",
        attractions: {
        hongya: { name: "洪崖洞", desc: "吊脚楼建筑与夜景" },
        yangtze: { name: "长江", desc: "江游船与索道观景" },
        streets: { name: "山城街巷", desc: "隐秘小巷与本土文化" }
        },
},
      private: {
        title: "私人活动",
        subtitle: "亲密聚会、里程碑庆典和难忘的夜晚。让我们为您主办。",
        gallery_title: "过往活动瞬间",
        form: {
          title: "预订活动",
          subtitle: "告诉我们您的庆祝计划。我们将在 24 小时内回复您。",
          name: "您的姓名",
          email: "电子邮件",
          phone: "电话 / 微信",
          date: "首选日期",
          type: "活动类型",
          message: "详情 / 要求",
          message_placeholder: "告诉我们人数、首选饮品或任何特殊要求...",
          submit: "发送咨询",
          options: {
            birthday: "生日派对",
            wedding: "婚礼 / 求婚",
            corporate: "企业活动",
            other: "其他"
          }
        },
        note: "私人活动预订由我们的活动协调员处理。期待您的来信。"
      },
      packages: {
        intimate: {
          title: "亲密聚会",
          subtitle: "生日、纪念日及小型派对",
          capacity: "10–60 人",
          desc: "庆祝里程碑的完美选择。预订角落卡座或小区域，享受私密个性化的体验。"
        },
        corporate: {
          title: "企业与社交",
          subtitle: "团队聚会、社交与派对",
          capacity: "30–80 人",
          desc: "提升团队文化。享受专属服务、定制饮品套餐，在优雅氛围中放松身心。"
        },
        venue: {
          title: "包场预订",
          subtitle: "婚礼、宴会及专属派对",
          capacity: "80+ 人",
          desc: "让 BB Funk 成为您的专属空间。定制灯光、私人吧台服务及现场娱乐表演。"
        }
      }
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