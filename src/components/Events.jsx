import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Music, Users, Star, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Events() {
  const { t } = useTranslation();

  // Finalized schedule from handover document
  const schedule = [
    {
      day: t('events.monday.day', 'Monday'),
      title: t('events.monday.title', 'Live Blues'),
      subtitle: t('events.monday.subtitle', 'Solo Artist'),
      description: t('events.monday.desc', 'Soulful blues to start your week. Intimate performances featuring local and touring musicians.'),
      vibe: t('events.monday.vibe', 'Intimate'),
      time: '20:00 – 23:00',
      icon: <Music className="w-5 h-5" />
    },
    {
      day: t('events.wednesday.day', 'Wednesday'),
      title: t('events.wednesday.title', 'Latin Dance Night'),
      subtitle: t('events.wednesday.subtitle', 'Salsa • Bachata • Merengue'),
      description: t('events.wednesday.desc', 'Heat up your week with Latin rhythms. Dance floor opens with guided lessons and curated DJ sets.'),
      vibe: t('events.wednesday.vibe', 'Energetic'),
      time: '20:30 – 00:00',
      icon: <Users className="w-5 h-5" />
    },
    {
      day: t('events.thursday_sunday.day', 'Thursday & Sunday'),
      title: t('events.thursday_sunday.title', 'Trivia & Variety Shows'),
      subtitle: t('events.thursday_sunday.subtitle', 'Alternating Weekly'),
      description: t('events.thursday_sunday.desc', 'Test your knowledge or enjoy eclectic variety acts. From open mic nights to themed trivia.'),
      vibe: t('events.thursday_sunday.vibe', 'Social'),
      time: '19:30 – 22:30',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      day: t('events.friday.day', 'Friday'),
      title: t('events.friday.title', 'Live Funk & Jazz Band'),
      subtitle: t('events.friday.subtitle', 'Full Ensemble'),
      description: t('events.friday.desc', 'The weekend kicks off with our signature live band. Groovy basslines, brass sections, and classic funk.'),
      vibe: t('events.friday.vibe', 'Electric'),
      time: '21:00 – 01:00',
      icon: <Star className="w-5 h-5" />
    },
    {
      day: t('events.saturday.day', 'Saturday'),
      title: t('events.saturday.title', 'Dual DJ Sets'),
      subtitle: t('events.saturday.subtitle', 'Back-to-Back Vinyl & Digital'),
      description: t('events.saturday.desc', 'Two DJs, one turntable. Curated sets spanning jazz, soul, funk, and modern electronic crossovers.'),
      vibe: t('events.saturday.vibe', 'Dynamic'),
      time: '21:30 – 02:00',
      icon: <Music className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-amber-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />

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
            {t('events.title', 'Weekly Schedule')}
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            {t('events.subtitle', 'Seven nights of curated sounds. From intimate blues to electric funk, there’s always a reason to visit.')}
          </p>
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {schedule.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-cream/5 backdrop-blur-sm border border-amber-warm/10 rounded-xl p-6 hover:border-amber-warm/30 transition-all duration-300 hover:bg-cream/8 hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-warm/30 to-transparent" />

              {/* Day Badge + Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-amber-warm/10 text-amber-warm text-xs font-semibold uppercase tracking-wider rounded-full">
                  {event.day}
                </span>
                <div className="flex items-center gap-1.5 text-cream/60 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{event.time}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-serif font-bold text-cream mb-1 group-hover:text-amber-warm transition-colors">
                {event.title}
              </h3>
              <p className="text-amber-warm/80 text-sm font-medium mb-3">
                {event.subtitle}
              </p>

              {/* Description */}
              <p className="text-cream/60 text-sm leading-relaxed mb-5">
                {event.description}
              </p>

              {/* Vibe Tag & Icon */}
              <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                <span className="text-xs text-cream/50 uppercase tracking-widest font-medium">
                  {event.vibe}
                </span>
                <span className="text-amber-warm/60 group-hover:text-amber-warm transition-colors">
                  {event.icon}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA & Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-cream/60 mb-6 text-sm">
            {t('events.note', 'Lineups may vary. Follow us for weekly artist announcements and special guest sets.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#reserve"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-warm text-charcoal font-semibold rounded-full hover:bg-brass transition-colors shadow-lg shadow-amber-warm/20"
            >
              {t('events.cta_reserve', 'Reserve a Table')}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://instagram.com/HeixChongqing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-cream/30 text-cream rounded-full hover:bg-cream/10 transition-colors"
            >
              {t('events.cta_social', 'Follow for Lineups')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}