import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Users, MapPin, Calendar } from 'lucide-react';

const AboutPage = () => {
  const team = [
    { name: 'Marie Laurent', role: 'Founder & Lead Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'David Chen', role: 'Master Florist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Sofia Rodriguez', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { name: 'James Wilson', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Unique Designs' },
    { number: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/story.jpg"
            alt="Our flower shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Est. 2010
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Where passion meets petals. Discover the heart and soul behind every arrangement at Pétale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-serif text-primary mb-2">{stat.number}</div>
                <div className="text-primary/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-4">
                Our Beginning
              </span>
              <h2 className="text-4xl font-serif text-primary mb-6">From a Small Dream to a Blooming Reality</h2>
              <p className="text-lg text-primary/70 mb-6 leading-relaxed">
                Pétale was born from a simple belief: that flowers have the power to transform moments into memories. Founded by Marie Laurent in a small San Francisco studio, we've grown from a one-woman operation into a beloved local institution.
              </p>
              <p className="text-lg text-primary/70 mb-6 leading-relaxed">
                Our journey began with Marie's passion for botanical artistry, cultivated through years of training in Paris and Tokyo. Every arrangement we create carries that same dedication to craft and beauty.
              </p>
              <p className="text-lg text-primary/70 leading-relaxed">
                Today, our team of master florists continues this legacy, combining traditional techniques with contemporary design to create arrangements that speak to the heart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/teddy-sun.jpg"
                      alt="Flower arrangement"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/assortment1.jpg"
                      alt="Roses"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/bear-rose.jpg"
                      alt="Peonies"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/rose-sun-warm.jpg"
                      alt="Hydrangeas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif text-primary mb-4"
            >
              Our Values
            </motion.h2>
            <p className="text-lg text-primary/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Passion', desc: 'Every arrangement is crafted with love and attention to detail, because we believe flowers should evoke emotion.' },
              { icon: Leaf, title: 'Sustainability', desc: 'We partner with local growers and use eco-friendly practices to minimize our environmental footprint.' },
              { icon: Award, title: 'Excellence', desc: 'From sourcing to delivery, we maintain the highest standards to ensure your complete satisfaction.' },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-sage flex items-center justify-center">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">{value.title}</h3>
                <p className="text-primary/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Location */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-white mb-6">Visit Our Studio</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Step into our world of blooms. Our studio is more than just a shop—it's a sensory experience where you can see, smell, and feel the beauty of fresh flowers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/80">
                  <MapPin size={20} className="text-secondary" />
                  <span>123 Bloom Street, San Francisco, CA 94102</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Calendar size={20} className="text-secondary" />
                  <span>Mon-Sat: 9am-7pm | Sun: 10am-5pm</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Users size={20} className="text-secondary" />
                  <span>Walk-ins welcome, consultations by appointment</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/studio.jpg"
                alt="Our studio"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
