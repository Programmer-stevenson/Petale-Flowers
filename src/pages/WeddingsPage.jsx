import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Calendar, 
  Sparkles, 
  Users, 
  Camera, 
  Flower2,
  ArrowRight,
  Check,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const WeddingsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: Flower2,
      title: 'Bridal Bouquets',
      description: 'Stunning hand-tied bouquets crafted to complement your gown and personal style.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop'
    },
    {
      icon: Sparkles,
      title: 'Ceremony Decor',
      description: 'Transform your venue with breathtaking arches, aisle markers, and altar arrangements.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Reception Florals',
      description: 'Elegant centerpieces and table arrangements that create unforgettable ambiance.',
      image: 'https://images.unsplash.c81-b80fe463b330?w=600&h=400&fit=crop'
    },
    {
      icon: Camera,
      title: 'Photo Installations',
      description: 'Instagram-worthy flower walls and photo backdrops for memorable moments.',
      image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=600&h=400&fit=crop'
    },
  ];

  const packages = [
    {
      name: 'Intimate',
      price: 'From $1,500',
      description: 'Perfect for small ceremonies',
      features: [
        'Bridal bouquet',
        '1 Bridesmaid bouquet',
        '2 Boutonnieres',
        'Simple ceremony arrangement',
        'Toss bouquet',
      ],
      popular: false
    },
    {
      name: 'Classic',
      price: 'From $3,500',
      description: 'Our most popular package',
      features: [
        'Bridal bouquet',
        '4 Bridesmaid bouquets',
        '6 Boutonnieres',
        'Ceremony arch florals',
        '10 Reception centerpieces',
        'Head table arrangement',
        'Cake flowers',
      ],
      popular: true
    },
    {
      name: 'Luxe',
      price: 'From $7,500',
      description: 'Full-service floral design',
      features: [
        'Everything in Classic, plus:',
        'Custom flower wall',
        'Aisle décor',
        'Cocktail hour arrangements',
        'Bar florals',
        'Bathroom flowers',
        'Day-of floral coordinator',
        'Next-day pickup service',
      ],
      popular: false
    },
  ];

  const testimonials = [
    {
      name: 'Amanda & Michael',
      date: 'September 2024',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop',
      text: 'Pétale brought our garden wedding vision to life. The flower arch took everyone\'s breath away, and the bouquets were even more beautiful than we imagined.',
      rating: 5
    },
    {
      name: 'Jessica & David',
      date: 'June 2024',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=200&h=200&fit=crop',
      text: 'Working with the Pétale team was an absolute dream. They listened to every detail and delivered beyond our expectations. Worth every penny!',
      rating: 5
    },
    {
      name: 'Sarah & Emily',
      date: 'May 2024',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&h=200&fit=crop',
      text: 'The attention to detail was incredible. Our guests are still talking about the flowers months later. Thank you for making our day so special!',
      rating: 5
    },
  ];

  const faqs = [
    {
      question: 'How far in advance should we book?',
      answer: 'We recommend booking 6-12 months in advance, especially for peak wedding season (May-October). However, we do our best to accommodate last-minute requests when possible.'
    },
    {
      question: 'Do you offer consultations?',
      answer: 'Yes! We offer complimentary 30-minute consultations at our studio where you can see samples, discuss your vision, and receive a custom quote. Virtual consultations are also available.'
    },
    {
      question: 'Can you work with our venue?',
      answer: 'Absolutely! We work with venues throughout the Bay Area and beyond. We\'re familiar with most local venues and can coordinate delivery, setup, and breakdown logistics.'
    },
    {
      question: 'What if certain flowers aren\'t in season?',
      answer: 'We\'ll work with you to find beautiful alternatives that capture the same look and feel. Our designers are experts at creating stunning arrangements with seasonal blooms.'
    },
    {
      question: 'Do you offer rental items?',
      answer: 'Yes, we offer a selection of vases, arches, and decorative items for rent. These can be added to any package for an additional fee.'
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=1000&fit=crop"
            alt="Wedding flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                <Heart size={16} className="text-accent" fill="currentColor" />
                <span className="text-white font-medium">Wedding Floristry</span>
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
                Your Dream Wedding,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  In Bloom
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                From intimate elopements to grand celebrations, we create bespoke floral designs 
                that capture your love story and transform your vision into reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-secondary text-primary font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
                >
                  Book Consultation
                  <Calendar size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  View Gallery
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-white/80" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-primary mb-4"
            >
              Full-Service Wedding Floristry
            </motion.h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              From the first bloom to the last petal, we handle every floral detail of your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-cream"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                  </div>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-4"
            >
              Wedding Packages
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-primary mb-4"
            >
              Choose Your Package
            </motion.h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              All packages are fully customizable to match your vision and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                  pkg.popular ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-2 bg-secondary text-primary text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif text-primary mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
                  <p className="text-primary/60">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-primary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-primary text-white hover:bg-primary-light'
                      : 'bg-cream text-primary hover:bg-cream-dark'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-white mb-4"
            >
              Love Stories We've Bloomed
            </motion.h2>
            <p className="text-xl text-white/80">
              Hear from couples who trusted us with their special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif text-primary mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border border-cream-dark rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
                >
                  <span className="font-semibold text-primary">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp size={20} className="text-primary/60" />
                  ) : (
                    <ChevronDown size={20} className="text-primary/60" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-primary/70">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart size={48} className="mx-auto mb-6 text-accent" fill="currentColor" />
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Let's Create Something Beautiful
            </h2>
            <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">
              Schedule a complimentary consultation to discuss your wedding vision. 
              We can't wait to be part of your special day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-full font-semibold text-lg shadow-xl hover:bg-primary-light transition-all group"
              >
                Book Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+14155557673"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all border border-cream-dark"
              >
                Call (415) 555-ROSE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeddingsPage;
