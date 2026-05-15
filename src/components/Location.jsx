import { motion } from 'framer-motion';
import { MapPin, Subway, Clock, Cocktail, ExternalLink } from 'lucide-react';

export default function Location() {
  const attractions = [
    { name: 'Hongya Cave', desc: 'Stilted architecture & night views', dist: '2.3 km', time: '8 min drive' },
    { name: 'Yangtze River', desc: 'River cruises & cableway views', dist: '3.1 km', time: '10 min drive' },
    { name: 'Mountain Streets', desc: 'Hidden alleys & local culture', dist: '0.5 km', time: '5 min walk' }
  ];

  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-amber-warm/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">Find Us</h2>
          <p className="text-cream/60 max-w-xl mx-auto">Explore Chongqing. End your evening at BB Funk.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-charcoal/50">
            <iframe
              src="https://uri.amap.com/marker?position=106.5450,29.6150&name=BB%20Funk%20Jazz%20Lounge&src=mypage"
              className="w-full h-full border-0"
              title="BB Funk Location"
            />
            <div className="absolute bottom-4 left-4 bg-charcoal/90 backdrop-blur-md px-4 py-2 rounded-lg border border-amber-warm/20">
              <p className="text-amber-warm font-serif text-sm">32 Ziwei Road, Chongqing</p>
            </div>
          </motion.div>

          {/* Info & Cocktail */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-warm mt-1" />
                <div>
                  <h3 className="text-cream font-serif font-semibold text-lg">Address</h3>
                  <p className="text-cream/70">32 Ziwei Road, Liangjiang New District</p>
                  <p className="text-cream/50 text-sm">紫薇路32号, 两江新区, 重庆</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Subway className="w-6 h-6 text-amber-warm mt-1" />
                <div>
                  <h3 className="text-cream font-serif font-semibold text-lg">Metro</h3>
                  <p className="text-cream/70">Huangnibang Station (黄泥磅地铁站)</p>
                  <p className="text-cream/50 text-sm">Line 6 • 4 min walk • Exit 2</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-warm mt-1" />
                <div>
                  <h3 className="text-cream font-serif font-semibold text-lg">Hours</h3>
                  <p className="text-cream/70">Mon–Thu: 18:00 – 00:00</p>
                  <p className="text-cream/70">Fri–Sun: 18:00 – 02:00</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-gradient-to-br from-amber-warm/10 to-burgundy/10 border border-amber-warm/20 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Cocktail className="w-5 h-5 text-amber-warm" />
                <h4 className="text-cream font-serif font-semibold">Midnight in Chongqing</h4>
              </div>
              <p className="text-cream/60 text-sm mb-4">Our signature cocktail. Sip while you plan your Chongqing itinerary.</p>
              <a href="#menu" className="inline-flex items-center gap-2 text-amber-warm text-sm font-medium hover:text-cream transition-colors">
                View Drink Menu <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Tourist Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {attractions.map((spot, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 border border-white/10 rounded-lg bg-charcoal/50 hover:border-amber-warm/30 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-cream font-serif font-semibold">{spot.name}</h4>
                <span className="text-xs text-amber-warm border border-amber-warm/30 px-2 py-1 rounded">{spot.time}</span>
              </div>
              <p className="text-cream/60 text-sm mb-2">{spot.desc}</p>
              <p className="text-cream/40 text-xs">{spot.dist} from BB Funk</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}