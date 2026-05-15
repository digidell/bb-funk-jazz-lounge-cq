import Hero from './components/Hero';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-cream">
      <Navigation />
      <Hero />
      
      {/* Placeholder Sections for testing */}
      <section id="schedule" className="h-screen flex items-center justify-center border-t border-white/5">
        <h2 className="text-3xl font-serif text-amber-warm">Weekly Schedule</h2>
      </section>
      
      <section id="about" className="h-screen flex items-center justify-center border-t border-white/5">
        <h2 className="text-3xl font-serif text-amber-warm">About Us</h2>
      </section>
    </div>
  );
}

export default App;