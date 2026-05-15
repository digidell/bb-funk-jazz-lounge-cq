import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="font-serif text-2xl font-bold text-cream">
              BB <span className="text-amber-warm italic">Funk</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-cream hover:text-amber-warm px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#schedule" className="text-cream/70 hover:text-amber-warm px-3 py-2 rounded-md text-sm font-medium transition-colors">Schedule</a>
              <a href="#about" className="text-cream/70 hover:text-amber-warm px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#gallery" className="text-cream/70 hover:text-amber-warm px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</a>
              <a href="#location" className="text-cream/70 hover:text-amber-warm px-3 py-2 rounded-md text-sm font-medium transition-colors">Location</a>
              <a href="#events" className="bg-amber-warm text-charcoal px-4 py-2 rounded-sm text-sm font-bold hover:bg-white transition-colors">Reserve</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cream hover:text-amber-warm focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-charcoal border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-cream hover:text-amber-warm block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#schedule" className="text-cream/70 hover:text-amber-warm block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
            <a href="#about" className="text-cream/70 hover:text-amber-warm block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#gallery" className="text-cream/70 hover:text-amber-warm block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#location" className="text-cream/70 hover:text-amber-warm block px-3 py-2 rounded-md text-base font-medium">Location</a>
            <a href="#events" className="text-amber-warm font-bold block px-3 py-2 rounded-md text-base">Reserve Table</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}