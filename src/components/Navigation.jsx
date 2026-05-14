import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Scroll detection for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [i18n.language]);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'fr', label: 'FR' },
    { code: 'es', label: 'ES' },
    { code: 'ko', label: '한국어' },
    { code: 'ru', label: 'RU' },
    { code: 'de', label: 'DE' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsLangOpen(false);
  };

  const navLinks = [
    { href: '#home', label: t('nav.home', 'Home') },
    { href: '#events', label: t('nav.events', 'Events') },
    { href: '#menu', label: t('nav.menu', 'Menu') },
    { href: '#gallery', label: t('nav.gallery', 'Gallery') },
    { href: '#location', label: t('nav.location', 'Location') },
    { href: '#private', label: t('nav.private', 'Private Events') },
  ];

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-warm to-brass flex items-center justify-center">
                <span className="text-charcoal font-serif font-bold text-sm">B</span>
              </div>
              <span className="font-serif font-bold text-cream text-lg tracking-tight group-hover:text-amber-warm transition-colors">
                BB Funk
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-cream/80 hover:text-amber-warm font-medium text-sm tracking-wide transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-warm transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Right Side: Language + CTA */}
            <div className="hidden md:flex items-center gap-4">
              
              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-cream/80 hover:text-amber-warm transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-charcoal border border-amber-warm/20 rounded-lg shadow-xl shadow-black/30 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            i18n.language === lang.code
                              ? 'bg-amber-warm/10 text-amber-warm font-medium'
                              : 'text-cream/80 hover:bg-cream/5 hover:text-cream'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Reserve CTA */}
              <motion.a
                href="#reserve"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-amber-warm text-charcoal font-semibold rounded-full text-sm hover:bg-brass transition-colors shadow-lg shadow-amber-warm/20"
              >
                Reserve
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-cream hover:text-amber-warm transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-cream/70 hover:text-amber-warm"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Logo */}
              <div className="mb-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-warm to-brass flex items-center justify-center mx-auto mb-4">
                  <span className="text-charcoal font-serif font-bold text-lg">B</span>
                </div>
                <h2 className="font-serif font-bold text-cream text-2xl">BB Funk</h2>
                <p className="text-amber-warm/80 text-sm mt-1">Jazz Lounge • Chongqing</p>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-6 mb-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-cream text-xl font-serif hover:text-amber-warm transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Language Selector */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-amber-warm text-charcoal font-medium'
                        : 'bg-cream/10 text-cream/80 hover:bg-cream/20'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile Reserve CTA */}
              <motion.a
                href="#reserve"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 bg-amber-warm text-charcoal font-semibold rounded-full hover:bg-brass transition-colors"
              >
                Reserve a Table
              </motion.a>

              {/* Social Hint */}
              <p className="text-cream/50 text-xs mt-12">
                @HeixChongqing
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close lang dropdown */}
      {isLangOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsLangOpen(false)} 
        />
      )}
    </>
  );
}