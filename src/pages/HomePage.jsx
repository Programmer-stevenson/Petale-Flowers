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
              { name: 'Roses', img: '/rose-hero.jpg', path: '/shop/roses' },
              { name: 'Peonies', img: '/hero-peony.jpg', path: '/shop/peonies' },
              { name: 'Orchids', img: '/orchid-hero.jpg', path: '/shop/orchids' },
              { name: 'Mixed', img: '/mixed-hero.jpg', path: '/shop/mixed' },
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

      {/* Featured Bouquets Section - Desktop */}
      <section className="hidden lg:block py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-4"
            >
              Shop Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-serif text-primary"
            >
              Featured Bouquets
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Rose Harmony", price: 44.99, originalPrice: 54.99, img: "/roses.jpg", tag: "Bestseller", rating: 4.9, reviews: 124 },
              { id: 2, name: "Sunset Orchid Mix", price: 61.99, originalPrice: null, img: "/orange-bouqet.jpg", tag: "Premium", rating: 5.0, reviews: 89 },
              { id: 3, name: "Peony Bliss", price: 54.99, originalPrice: 69.99, img: "/orange-tropic.jpg", tag: "Seasonal", rating: 4.8, reviews: 156 },
              { id: 4, name: "Lavender Garden", price: 37.99, originalPrice: null, img: "/dark-lavender.jpg", tag: "Popular", rating: 4.7, reviews: 203 },
              { id: 5, name: "Elegant Lily Cascade", price: 71.99, originalPrice: 84.99, img: "/delight-jar.jpg", tag: "Luxury", rating: 4.9, reviews: 67 },
              { id: 6, name: "Spring Tulip Bundle", price: 41.99, originalPrice: null, img: "/lavendar-snow.jpg", tag: "Fresh", rating: 4.6, reviews: 98 },
            ].map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-white rounded-full">
                          {product.tag}
                        </span>
                      </div>
                      {product.originalPrice && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2.5 py-1.5 text-[10px] font-bold bg-accent text-primary rounded-full">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              className={i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-cream-dark fill-cream-dark'} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-primary/60">{product.rating} ({product.reviews})</span>
                      </div>
                      <h3 className="font-serif text-xl text-primary mb-2 group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-primary/40 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors group"
            >
              View All Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/crafting.jpg"
                  alt="Our florist at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
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
              <p className="text-lg text-primary/70 leading-relaxed">
                From locally sourced blooms to sustainable practices, we're committed to bringing you the finest flowers while caring for our planet.
              </p>
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