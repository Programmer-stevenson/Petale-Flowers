import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-3xl">🌸</span>
              <span className="text-2xl font-serif font-bold">Pétale</span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Handcrafted floral arrangements made with love and care. Bringing beauty into your life since 2010.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Shop All', path: '/shop' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQs', path: '#' },
                { name: 'Delivery Info', path: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-xl mb-6">Categories</h3>
            <ul className="space-y-3">
              {[
                { name: 'Roses', path: '/shop/roses' },
                { name: 'Peonies', path: '/shop/peonies' },
                { name: 'Orchids', path: '/shop/orchids' },
                { name: 'Mixed Bouquets', path: '/shop/mixed' },
                { name: 'Seasonal', path: '/shop' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-white/70">123 Bloom Street<br />San Francisco, CA 94102</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-white/70">(415) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-white/70">hello@petale.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-white/70">Mon-Sat: 9am-7pm<br />Sun: 10am-5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Pétale Florist. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
