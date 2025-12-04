import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Award, Leaf, Heart, Star } from 'lucide-react';
import FloristHero from '../components/FloristHero';
import { products } from '../data/products';

const HomePage = () => {
  const featuredProducts = products.filter(p => ['Bestseller', 'Premium', 'Luxury'].includes(p.tag)).slice(0, 4);

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <FloristHero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: 'Same-Day Delivery', desc: 'Order before 2pm for delivery today' },
              { icon: Award, title: 'Freshness Guaranteed', desc: '7-day freshness or your money back' },
              { icon: Leaf, title: 'Sustainably Sourced', desc: 'Eco-friendly farming practices' },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-sage flex items-center justify-center shadow-lg">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{feature.title}</h3>
                <p className="text-primary/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-4"
            >
              Browse COLLECTIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-serif text-primary"
            >
              Shop by Flower Type
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Roses', img: '/roses-luxe.jpg', path: '/shop/roses' },
              { name: 'Peonies', img: '/luxe-peony.jpg', path: '/shop/peonies' },
              { name: 'Orchids', img: '/luxe-orchid.jpg', path: '/shop/orchids' },
              { name: 'Mixed', img: '/luxe-mixed.jpg', path: '/shop/mixed' },
            ].map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={cat.path} className="group block">
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif text-white">{cat.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/crafting.jpg"
                  alt="Our florist at work"
                  className="w-full h-full object-cover"
                />
              </div>
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6 leading-tight">
                Crafting Beauty Since 2010
              </h2>
              <p className="text-lg text-primary/70 mb-6 leading-relaxed">
                At Pétale, we believe every bouquet tells a story. Our master florists combine artistic vision with botanical expertise to create arrangements that capture emotions and celebrate life's precious moments.
              </p>
              <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                From locally sourced blooms to sustainable practices, we're committed to bringing you the finest flowers while caring for our planet.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif text-white mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-white/80">4.9 average rating from 2,500+ reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'The most beautiful roses I\'ve ever received. The arrangement was stunning and lasted over two weeks!', location: 'San Francisco' },
              { name: 'James K.', text: 'Ordered for my wife\'s birthday - same day delivery was a lifesaver. She absolutely loved them.', location: 'Oakland' },
              { name: 'Emily R.', text: 'Pétale has become my go-to florist. Their attention to detail and customer service is unmatched.', location: 'Berkeley' },
            ].map((review, idx) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-white/60 text-sm">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart size={48} className="mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-serif text-primary mb-4">Ready to Send Some Love?</h2>
            <p className="text-lg text-primary/70 mb-8">
              Browse our collection and find the perfect arrangement for any occasion.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-10 py-5 bg-secondary text-primary rounded-full font-semibold text-lg shadow-xl shadow-secondary/30 hover:shadow-2xl hover:bg-secondary/90 transition-all group"
            >
              Shop All Flowers
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
