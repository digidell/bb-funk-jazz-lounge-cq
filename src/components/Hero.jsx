import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Video Background */}
      // Hero.jsx (Snippet Fix)
      <video 
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster="/images/hero-poster.jpg" // Local fallback
      >
        <source src="/videos/hero.mp4" type="video/mp4" /> 
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-amber-warm tracking-[0.3em] text-sm md:text-base uppercase mb-4 font-medium">
            Est. 2024 • Chongqing
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-cream mb-2 leading-tight">
            BB Funk
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-serif italic text-amber-warm/90 mb-8">
            Jazz Lounge
          </h2>
          
          <p className="text-lg md:text-xl text-cream/80 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            An intimate jazz experience in the heart of Chongqing.
            <br />
            Where the night comes alive.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-warm text-charcoal font-bold rounded-sm hover:bg-white transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              Reserve a Table
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-cream/30 text-cream font-medium rounded-sm hover:border-amber-warm hover:text-amber-warm transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              View Schedule
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}