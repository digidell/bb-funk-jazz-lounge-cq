import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Subway, Navigation, Clock, Cocktail, ExternalLink, Compass } from 'lucide-react';

export default function Location() {
  const { t } = useTranslation();

  // Tourist proximity data from handover doc
  const attractions = [
    {
      id: 1,
      name: t('location.attractions.hongya.name', 'Hongya Cave'),
      desc: t('location.attractions.hongya.desc', 'Stilted architecture & night views'),
      distance: '2.3 km',
      time: '8 min drive',
      icon: <Navigation className="w-5 h-5" />,
    },
    {
      id: 2,
      name: t('location.attractions.yangtze.name', 'Yangtze River'),
      desc: t('location.attractions.yangtze.desc', 'River cruises & cableway views'),
      distance: '3.1 km',
      time: '10 min drive',
      icon: <Compass className="w-5 h-5" />,
    },
    {
      id: 3,
      name: t('location.attractions.streets.name', 'Mountain City Streets'),
      desc: t('location.attractions.streets.desc', 'Hidden alleys & local culture'),
      distance: '0.5 km',
      time: '5 min walk',
      icon: <MapPin className="w-5 h-5" />,
    }
  ];

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-warm/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            {t('location.title', 'Find Us')}
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            {t('location.subtitle', 'Explore Chongqing. End your evening at BB Funk.')}
          </p>
        </motion.div>

        {/* Map + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden border border-amber-warm/20 shadow-2xl shadow-black/30 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]"
          >
            {/* AMap Embed (Replace coordinates with exact venue coords in production) */}
            <iframe
              src="https://uri.amap.com/marker?position=106.5450,29.6150&name=BB%20Funk%20Jazz%20Lounge&src=mypage&coordinate=gaode&callnative=0"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="BB Funk Location Map"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-charcoal/90 backdrop-blur-md border border-amber-warm/20 rounded-lg">
              <p className="text-amber-warm font-serif font-medium text-sm">BB Funk Jazz Lounge</p>
              <p className="text-cream/60 text-xs mt-0.5">{t('location.address_short', '32 Ziwei Road, Chongqing')}</p>
            </div>

            {/* Mobile fallback note */}
            <div className="absolute bottom-4 right-4 md:hidden">
              <a
                href="https://www.amap.com/search?query=BB+Funk+Jazz+Lounge+Chongqing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-amber-warm text-charcoal text-xs font-semibold rounded-full"
              >
                {t('location.map_fallback', 'Open in AMap')}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Location Details */}
          <div className="flex flex-col justify-center space-y-8">
            
            {/* Address Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-warm/10 rounded-lg text-amber-warm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-cream font-serif font-semibold text-lg">
                    {t('location.address_label', 'Address')}
                  </h3>
                  <p className="text-cream/80 mt-1">
                    {t('location.address', '32 Ziwei Road, Liangjiang New District')}
                  </p>
                  <p className="text-cream/60 text-sm mt-0.5">
                    {t('location.address_cn', '重庆市两江新区紫薇路32号')}
                  </p>
                </div>
              </div>

              {/* Metro Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-warm/10 rounded-lg text-amber-warm">
                  <Subway className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-cream font-serif font-semibold text-lg">
                    {t('location.metro_label', 'Metro')}
                  </h3>
                  <p className="text-cream/80 mt-1">
                    {t('location.metro', 'Huangnibang Station (黄泥磅地铁站)')}
                  </p>
                  <p className="text-amber-warm/80 text-sm mt-0.5">
                    {t('location.metro_note', 'Line 6 • 4 min walk • Exit 2')}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-warm/10 rounded-lg text-amber-warm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-cream font-serif font-semibold text-lg">
                    {t('location.hours_label', 'Hours')}
                  </h3>
                  <p className="text-cream/80 mt-1">
                    {t('location.hours', 'Mon–Thu: 18:00 – 00:00')}
                  </p>
                  <p className="text-cream/80">
                    {t('location.hours_weekend', 'Fri–Sun: 18:00 – 02:00')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Signature Cocktail CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 bg-gradient-to-r from-amber-warm/10 to-burgundy/10 border border-amber-warm/20 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <Cocktail className="w-5 h-5 text-amber-warm" />
                <h4 className="text-cream font-serif font-semibold">
                  {t('location.cocktail_title', 'Midnight in Chongqing')}
                </h4>
              </div>
              <p className="text-cream/70 text-sm mb-3">
                {t('location.cocktail_desc', 'Our signature cocktail. Sip while you plan your Chongqing itinerary.')}
              </p>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-amber-warm text-sm font-medium hover:text-brass transition-colors"
              >
                {t('location.cocktail_cta', 'View Drink Menu')}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Tourist Proximity Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-serif font-bold text-cream text-center mb-8">
            {t('location.attractions_title', 'Explore Chongqing')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-cream/5 border border-amber-warm/10 rounded-xl hover:border-amber-warm/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 bg-amber-warm/10 rounded-lg text-amber-warm group-hover:bg-amber-warm/20 transition-colors">
                    {spot.icon}
                  </span>
                  <div className="text-right">
                    <p className="text-amber-warm font-semibold text-sm">{spot.distance}</p>
                    <p className="text-cream/50 text-xs">{spot.time}</p>
                  </div>
                </div>
                <h4 className="text-cream font-serif font-semibold text-lg mb-1 group-hover:text-amber-warm transition-colors">
                  {spot.name}
                </h4>
                <p className="text-cream/60 text-sm">
                  {spot.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-cream/40 text-sm mt-12"
        >
          {t('location.note', 'Map coordinates approximate. Verify with local navigation apps in China.')}
        </motion.p>
      </div>
    </section>
  );
}