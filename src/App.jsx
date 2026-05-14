import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  // Auto-detect and set language on load
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <main className="bg-charcoal min-h-screen">
      <Hero />
      {/* More sections coming next */}
    </main>
  );
}

export default App;