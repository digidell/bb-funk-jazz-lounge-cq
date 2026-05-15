import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-cream">
      <Navigation />
      <Hero />
      <Schedule />
      <Gallery />
      
      {/* Placeholders for next build phase */}
      <section id="location" className="h-[60vh] flex items-center justify-center border-t border-white/5">
        <h2 className="text-3xl font-serif text-amber-warm">Location & Tourist Guide</h2>
      </section>
    </div>
  )
}

export default App