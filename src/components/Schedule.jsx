import { motion } from 'framer-motion';

const scheduleData = [
  { day: 'Monday', event: 'Live Blues', artist: 'Solo Artist', time: '20:00 – 23:00', vibe: 'Intimate' },
  { day: 'Wednesday', event: 'Latin Dance Night', artist: 'Salsa & Bachata', time: '21:00 – 00:00', vibe: 'Energetic' },
  { day: 'Thursday', event: 'Trivia & Variety', artist: 'Alternating Weekly', time: '19:30 – 22:00', vibe: 'Social' },
  { day: 'Friday', event: 'Live Funk & Jazz', artist: 'Full Band', time: '21:00 – 01:00', vibe: 'Electric' },
  { day: 'Saturday', event: 'Dual DJ Sets', artist: 'Back-to-Back Vinyl', time: '22:00 – 02:00', vibe: 'Late Night' },
  { day: 'Sunday', event: 'Variety & Jazz', artist: 'Open Mic & Standards', time: '19:00 – 22:00', vibe: 'Relaxed' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 md:px-12 bg-charcoal relative overflow-hidden">
      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-warm/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">Weekly Schedule</h2>
          <p className="text-cream/60 max-w-xl mx-auto">Seven nights of curated sounds. From intimate blues to electric funk.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 border border-white/10 rounded-lg bg-charcoal/50 hover:border-amber-warm/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-amber-warm font-serif italic text-lg">{item.day}</span>
                <span className="text-xs uppercase tracking-widest text-cream/40 border border-cream/20 px-2 py-1 rounded">{item.vibe}</span>
              </div>
              <h3 className="text-xl font-bold text-cream mb-1 group-hover:text-amber-warm transition-colors">{item.event}</h3>
              <p className="text-cream/60 text-sm mb-4">{item.artist}</p>
              <div className="flex items-center gap-2 text-xs text-cream/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {item.time}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}