import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Your uploaded media from the handover doc
  // Replace these with actual paths to your uploaded images
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/images/gallery/crowd-1.jpg', // Your group photo
      alt: 'BB Funk crowd enjoying the night',
      category: 'atmosphere',
      caption: 'Intimate nights at BB Funk',
    },
    {
      id: 2,
      type: 'image',
      src: '/images/gallery/interior-1.jpg', // Interior with Halloween decor
      alt: 'BB Funk interior ambiance',
      category: 'interior',
      caption: 'Warm, intimate atmosphere',
    },
    {
      id: 3,
      type: 'video',
      src: '/videos/bartender-mixing.mp4', // Bartender clip
      poster: '/images/gallery/bartender-poster.jpg',
      alt: 'Craft cocktails at BB Funk',
      category: 'drinks',
      caption: 'Expert mixology',
    },
    {
      id: 4,
      type: 'image',
      src: '/images/gallery/exterior-1.jpg', // Exterior signage
      alt: 'BB Funk exterior on Ziwei Road',
      category: 'exterior',
      caption: '32 Ziwei Road, Chongqing',
    },
    {
      id: 5,
      type: 'image',
      src: '/images/gallery/table-1.jpg', // Social table photo
      alt: 'Friends enjoying drinks',
      category: 'social',
      caption: 'Where connections happen',
    },
    {
      id: 6,
      type: 'image',
      src: '/images/gallery/crowd-2.jpg', // Another crowd shot
      alt: 'Live music night',
      category: 'events',
      caption: 'Live jazz & funk',
    },
    {
      id: 7,
      type: 'image',
      src: '/images/gallery/interior-2.jpg', // Seating area
      alt: 'Cozy seating area',
      category: 'interior',
      caption: 'Intimate seating',
    },
    {
      id: 8,
      type: 'image',
      src: '/images/gallery/drinks-1.jpg', // Cocktail close-up
      alt: 'Signature cocktails',
      category: 'drinks',
      caption: 'Midnight in Chongqing',
    },
    {
      id: 9,
      type: 'video',
      src: '/videos/live-performance.mp4', // Live music clip
      poster: '/images/gallery/music-poster.jpg',
      alt: 'Live performance',
      category: 'events',
      caption: 'World-class musicians',
    },
    {
      id: 10,
      type: 'image',
      src: '/images/gallery/bar-1.jpg', // Bar area
      alt: 'The bar at BB Funk',
      category: 'interior',
      caption: 'Premium spirits & jazz',
    },
    {
      id: 11,
      type: 'image',
      src: '/images/gallery/crowd-3.jpg', // Group celebration
      alt: 'Private event celebration',
      category: 'events',
      caption: 'Celebrate with us',
    },
    {
      id: 12,
      type: 'image',
      src: '/images/gallery/ambiance-1.jpg', // Mood lighting
      alt: 'Ambient lighting',
      category: 'atmosphere',
      caption: 'Cinematic nightlife',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'atmosphere', label: 'Atmosphere' },
    { id: 'interior', label: 'Interior' },
    { id: 'events', label: 'Events' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedMedia(filteredItems[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, currentIndex, filteredItems]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            The Gallery
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            Intimate moments, warm amber tones, and the soul of Chongqing nightlife
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-warm text-charcoal'
                  : 'bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  item.type === 'video' ? 'aspect-video' : 'aspect-[4/5]'
                }`}
                onClick={() => openLightbox(index)}
              >
                {/* Image/Video */}
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.poster}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-amber-warm/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-charcoal ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-amber-warm font-serif text-lg font-medium">
                    {item.caption}
                  </p>
                  <p className="text-cream/70 text-sm mt-1 capitalize">
                    {item.category}
                  </p>
                </div>

                {/* Border highlight on hover */}
                <div className="absolute inset-0 border-2 border-amber-warm/0 group-hover:border-amber-warm/30 rounded-lg transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-cream/50 text-sm mt-12"
        >
          Follow us @HeixChongqing for more moments
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/98 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream/70 hover:text-amber-warm transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-amber-warm transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-amber-warm transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  poster={selectedMedia.poster}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                />
              )}

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-amber-warm font-serif text-xl">
                  {selectedMedia.caption}
                </p>
                <p className="text-cream/60 text-sm mt-1">
                  {currentIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}