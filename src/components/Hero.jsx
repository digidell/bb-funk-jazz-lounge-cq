import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Slight slow-mo for cinematic feel
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Backdrop Video - Harlem Renaissance Tribute */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback: static image if video fails */}
          <img 
            src="/images/hero-fallback.jpg" 
            alt="BB Funk Jazz Lounge" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Cinematic Overlay - Slug's Saloon Atmosphere */}
        <div className="absolute inset-0 bg-harlem-overlay" />
        <div className="absolute inset-0 bg-vinyl-gradient" />
        
        {/* Subtle film grain texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Jazz Legends Tribute Badge */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-amber-warm/30 rounded-full bg-charcoal/40 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-warm animate-pulse" />
            <span className="text-amber-warm text-sm tracking-widest uppercase font-serif">
              Est. Chongqing • Jazz • Funk • Soul
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-4 leading-tight">
            BB Funk
            <span className="block text-amber-warm mt-2">Jazz Lounge</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8 font-light">
            An intimate jazz experience in the heart of Chongqing. 
            Where Harlem Renaissance meets mountain city nights.
          </p>

          {/* Jazz Legends Tribute */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-cream/60 font-serif italic">
            <span>Miles</span> • <span>Ella</span> • <span>Dizzy</span> • <span>Duke</span> • <span>Aretha</span> • <span>Stevie</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-amber-warm text-charcoal font-semibold rounded-full hover:bg-brass transition-colors"
            >
              Reserve a Table
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-cream/30 text-cream rounded-full hover:bg-cream/10 transition-colors"
            >
              View Tonight's Lineup
            </motion.button>
          </div>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-cream/70 text-sm">
            紫薇路32号 • Ziwei Road, Chongqing
          </p>
          <p className="text-amber-warm/80 text-xs mt-1">
            Near Huangnibang Metro • 黄泥磅地铁站
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}