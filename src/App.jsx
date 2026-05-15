// App.jsx (Revised)
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Events from './components/Events' // Use Events instead of Schedule
import Gallery from './components/Gallery'
import Location from './components/Location'
import PrivateEvents from './components/PrivateEvents'

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-cream selection:bg-amber-warm/30">
      <Navigation />
      <Hero />
      <Events /> 
      <Gallery />
      <Location />
      <PrivateEvents />
      <footer className="py-12 text-center border-t border-white/5 text-cream/30 text-sm">
        © 2026 BB Funk Jazz Lounge • Chongqing
      </footer>
    </div>
  )
}
export default App