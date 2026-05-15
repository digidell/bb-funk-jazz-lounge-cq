import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Location from './components/Location'
import PrivateEvents from './components/PrivateEvents'

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-cream">
      <Navigation />
      <Hero />
      <Schedule />
      <Gallery />
      <Location />
      <PrivateEvents />
      
      {/* Footer Placeholder */}
      <footer className="py-12 text-center border-t border-white/5 text-cream/30 text-sm">
        © 2026 BB Funk Jazz Lounge • Chongqing
      </footer>
    </div>
  )
}

export default App