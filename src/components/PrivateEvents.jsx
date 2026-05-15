import { motion } from 'framer-motion';
import { Users, Star, Champagne, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function PrivateEvents() {
  const [submitted, setSubmitted] = useState(false);

  const packages = [
    { icon: <Users className="w-6 h-6" />, title: 'Intimate Gatherings', sub: 'Birthdays & Anniversaries', cap: '10–30 Guests', desc: 'Reserve a corner table or small section for a cozy, personalized experience.' },
    { icon: <Champagne className="w-6 h-6" />, title: 'Corporate & Social', sub: 'Team Drinks & Networking', cap: '30–80 Guests', desc: 'Elevate your team culture with dedicated service and custom drink packages.' },
    { icon: <Star className="w-6 h-6" />, title: 'Full Venue Buyout', sub: 'Weddings & Galas', cap: '80+ Guests', desc: 'Transform the space with custom lighting, private bar, and live entertainment.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="private-events" className="py-24 px-6 md:px-12 bg-charcoal relative">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">Private Events</h2>
          <p className="text-cream/60 max-w-xl mx-auto">Intimate gatherings, milestone celebrations, and unforgettable nights.</p>
        </motion.div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 border border-white/10 rounded-lg bg-charcoal/50 hover:border-amber-warm/30 transition-all">
              <div className="w-12 h-12 bg-amber-warm/10 rounded-lg flex items-center justify-center text-amber-warm mb-4">{pkg.icon}</div>
              <h3 className="text-xl font-serif font-bold text-cream mb-1">{pkg.title}</h3>
              <p className="text-amber-warm/80 text-sm font-medium mb-2">{pkg.sub}</p>
              <p className="text-cream/60 text-sm mb-4">{pkg.desc}</p>
              <span className="text-xs text-cream/40 border border-cream/20 px-2 py-1 rounded">{pkg.cap}</span>
            </motion.div>
          ))}
        </div>

        {/* Inquiry Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 border border-white/10 rounded-xl bg-charcoal/50 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold text-cream text-center mb-6">Book Your Event</h3>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-amber-warm mx-auto mb-4" />
                <p className="text-cream font-medium">Inquiry sent! We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required placeholder="Name" className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-amber-warm focus:outline-none" />
                  <input required type="email" placeholder="Email" className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-amber-warm focus:outline-none" />
                  <input placeholder="Phone / WeChat" className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-amber-warm focus:outline-none" />
                  <select className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream/60 focus:border-amber-warm focus:outline-none">
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Wedding / Proposal</option>
                    <option>Other</option>
                  </select>
                </div>
                <textarea rows="4" placeholder="Tell us about your group size, preferred date, or special requests..." className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-amber-warm focus:outline-none resize-none"></textarea>
                <button type="submit" className="w-full md:w-auto px-8 py-3 bg-amber-warm text-charcoal font-bold rounded-lg hover:bg-cream transition-colors flex items-center justify-center gap-2 mx-auto">
                  Send Inquiry <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}