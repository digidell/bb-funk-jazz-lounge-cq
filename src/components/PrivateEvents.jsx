import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Users, Star, Champagne, Calendar, Send, CheckCircle } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function PrivateEvents() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    type: 'birthday',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect this to your backend/Cloudflare Worker
    console.log('Inquiry Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Event types from handover doc
  const packages = [
    {
      id: 'intimate',
      icon: <Users className="w-6 h-6" />,
      title: t('packages.intimate.title', 'Intimate Gatherings'),
      subtitle: t('packages.intimate.subtitle', 'Birthdays, Anniversaries & Small Parties'),
      capacity: t('packages.intimate.capacity', '10–30 Guests'),
      desc: t('packages.intimate.desc', 'Perfect for milestone celebrations. Reserve a corner table or a small section for a cozy, personalized experience.'),
    },
    {
      id: 'corporate',
      icon: <Champagne className="w-6 h-6" />,
      title: t('packages.corporate.title', 'Corporate & Social'),
      subtitle: t('packages.corporate.subtitle', 'Team Drinks, Networking & After-Parties'),
      capacity: t('packages.corporate.capacity', '30–80 Guests'),
      desc: t('packages.corporate.desc', 'Elevate your team culture. Enjoy dedicated service, custom drink packages, and a sophisticated atmosphere for unwinding.'),
    },
    {
      id: 'venue',
      icon: <Star className="w-6 h-6" />,
      title: t('packages.venue.title', 'Full Venue Buyout'),
      subtitle: t('packages.venue.subtitle', 'Weddings, Galas & Exclusive Parties'),
      capacity: t('packages.venue.capacity', '80+ Guests'),
      desc: t('packages.venue.desc', 'Make BB Funk yours. Transform the space with custom lighting, private bar service, and live entertainment tailored to your vision.'),
    },
  ];

  // Placeholder images for the slider (Replace with your uploaded event/crowd photos)
  const eventPhotos = [
    { src: '/images/events/crowd-1.jpg', alt: 'Birthday celebration at BB Funk' },
    { src: '/images/events/crowd-2.jpg', alt: 'Social gathering' },
    { src: '/images/events/crowd-3.jpg', alt: 'VIP section night' },
    { src: '/images/events/interior-1.jpg', alt: 'Private setup' },
  ];

  return (
    <section id="private-events" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-warm/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            {t('private.title', 'Private Events')}
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            {t('private.subtitle', 'Intimate gatherings, milestone celebrations, and unforgettable nights. Let us host your moment.')}
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-8 bg-cream/5 border border-amber-warm/10 rounded-xl hover:border-amber-warm/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-amber-warm/10 rounded-lg flex items-center justify-center text-amber-warm mb-6 group-hover:scale-110 transition-transform">
                {pkg.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-cream mb-2">{pkg.title}</h3>
              <p className="text-amber-warm/90 text-sm font-medium mb-3">{pkg.subtitle}</p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">{pkg.desc}</p>

              {/* Capacity Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal border border-cream/10 rounded-full text-cream/70 text-xs">
                <Users className="w-3.5 h-3.5" />
                {pkg.capacity}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Photo Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-serif font-bold text-cream">
              {t('private.gallery_title', 'Moments We’ve Hosted')}
            </h3>
            <div className="hidden sm:flex items-center gap-2 text-cream/50 text-sm">
              <Calendar className="w-4 h-4" />
              <span>@HeixChongqing</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="pb-10"
            >
              {eventPhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/5] relative group overflow-hidden rounded-lg">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Inquiry Form */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream/5 border border-amber-warm/20 rounded-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-cream mb-2">
                {t('private.form.title', 'Book Your Event')}
              </h3>
              <p className="text-cream/60 text-sm">
                {t('private.form.subtitle', 'Tell us about your celebration. We’ll get back to you within 24 hours.')}
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-serif text-cream mb-2">Inquiry Sent!</h4>
                <p className="text-cream/60">We’re excited to host your night. Expect a reply shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream/80 text-sm font-medium mb-2">
                      {t('private.form.name', 'Your Name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-warm transition-colors placeholder:text-cream/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/80 text-sm font-medium mb-2">
                      {t('private.form.email', 'Email Address')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-warm transition-colors placeholder:text-cream/30"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/80 text-sm font-medium mb-2">
                      {t('private.form.phone', 'Phone / WeChat')}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-warm transition-colors placeholder:text-cream/30"
                      placeholder="+86 123 4567 8901"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/80 text-sm font-medium mb-2">
                      {t('private.form.date', 'Preferred Date')}
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-warm transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/80 text-sm font-medium mb-2">
                    {t('private.form.type', 'Event Type')}
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-warm transition-colors appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23f5f0e8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px' }}
                  >
                    <option value="birthday">{t('private.form.options.birthday', 'Birthday Party')}</option>
                    <option value="wedding">{t('private.form.options.wedding', 'Wedding / Proposal')}</option>
                    <option value="corporate">{t('private.form.options.corporate', 'Corporate Event')}</option>
                    <option value="other">{t('private.form.options.other', 'Other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cream/80 text-sm font-medium mb-2">
                    {t('private.form.message', 'Details / Requests')}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-cream/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-amber-warm transition-colors placeholder:text-cream/30 resize-none"
                    placeholder={t('private.form.message_placeholder', 'Tell us about your group size, preferred drinks, or any special requests...')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-8 py-4 bg-amber-warm text-charcoal font-bold rounded-full hover:bg-brass transition-colors shadow-lg shadow-amber-warm/20 flex items-center justify-center gap-2"
                >
                  {t('private.form.submit', 'Send Inquiry')}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-cream/40 text-sm mt-12"
        >
          {t('private.note', 'Reservations for private events are handled by our event coordinator. We look forward to hearing from you.')}
        </motion.p>
      </div>
    </section>
  );
}