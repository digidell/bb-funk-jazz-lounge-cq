import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Location from './components/Location';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <Navigation />
      <Hero />
      <Events />
      <Gallery />
      <Location />
      {/* Placeholders */}
      <section id="menu" className="min-h-screen flex items-center justify-center">
        <p className="text-amber-warm">Menu Section Coming Soon</p>
      </section>
      <section id="private" className="min-h-screen flex items-center justify-center">
        <p className="text-amber-warm">Private Events Section Coming Soon</p>
      </section>
    </main>
  );
}

export default App;