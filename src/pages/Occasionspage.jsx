import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Heart, 
  Sparkles, 
  Flower2,
  ArrowRight,
  Calendar
} from 'lucide-react';

const OccasionsPage = () => {
  const occasions = [
    {
      name: 'Wedding',
      slug: 'wedding',
      icon: Heart,
      description: 'From intimate ceremonies to grand celebrations, create unforgettable moments with stunning floral designs.',
      image: 'https://placehold.co/600x700/f8e8e8/d4a5a5?text=Wedding+Flowers',
      color: 'from-rose-400 to-pink-500',
      link: '/weddings'
    },
    {
      name: 'Anniversary',
      slug: 'anniversary',
      icon: Sparkles,
      description: 'Honor your love story with romantic blooms that speak from the heart.',
      image: 'https://placehold.co/600x700/ffe4e6/f43f5e?text=Anniversary+Flowers',
      color: 'from-red-500 to-pink-500',
      link: '/occasions/anniversary'
    },
    {
      name: 'Other',
      slug: 'other',
      icon: Gift,
      description: 'Birthday, sympathy, congratulations, thank you, or just because — find the perfect arrangement for any moment.',
      image: 'https://placehold.co/600x700/ede9fe/8b5cf6?text=Other+Occasions',
      color: 'from-violet-500 to-purple-500',
      link: '/occasions/other'
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Calendar size={16} className="text-secondary" />
              <span className="text-white/90 font-medium">Every Moment Deserves Flowers</span>
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Shop by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Occasion
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Find the perfect arrangement for life's special moments. 
              From celebrations to sympathy, we have flowers for every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Occasions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-4">
              Choose Your Occasion
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Find the Perfect Arrangement
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {occasions.map((occasion, idx) => (
              <motion.div
                key={occasion.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={occasion.link}
                  className="group block relative h-[500px] rounded-3xl overflow-hidden"
                >
                  {/* Background Image */}
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${occasion.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <occasion.icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-4xl font-serif text-white mb-3">{occasion.name}</h3>
                      <p className="text-white/80 text-lg mb-6">{occasion.description}</p>
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <span>Shop Now</span>
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flower2 size={48} className="mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl font-serif text-primary mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">
              Our floral experts are here to help you find the perfect arrangement 
              for any occasion. Get personalized recommendations tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-primary-light transition-all"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+14155557673"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border border-cream-dark"
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

export default OccasionsPage;