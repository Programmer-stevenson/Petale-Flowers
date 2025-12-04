import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: MapPin, title: 'Visit Us', info: '123 Bloom Street, Flower District', subInfo: 'San Francisco, CA 94102' },
    { icon: Phone, title: 'Call Us', info: '(415) 555-ROSE', subInfo: 'Mon-Sat 8am-7pm' },
    { icon: Mail, title: 'Email Us', info: 'hello@petale.com', subInfo: 'We reply within 24 hours' },
    { icon: Clock, title: 'Hours', info: 'Mon-Sat: 8am - 7pm', subInfo: 'Sun: 9am - 5pm' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="relative h-80 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop"
            alt="Flower shop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif text-white mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-sage flex items-center justify-center mb-4 shadow-lg">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-primary/80">{item.info}</p>
                <p className="text-primary/60 text-sm">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-4">
                Send a Message
              </span>
              <h2 className="text-3xl font-serif text-primary mb-6">
                We're Here to Help
              </h2>
              <p className="text-primary/70 mb-8">
                Have a question about our flowers, delivery, or custom arrangements? 
                Fill out the form below and our team will get back to you shortly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-sage/20 rounded-2xl p-8 text-center"
                >
                  <CheckCircle size={48} className="mx-auto mb-4 text-sage" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                  <p className="text-primary/70">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-cream"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-cream"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-cream"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-cream"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Question</option>
                        <option value="custom">Custom Arrangement</option>
                        <option value="wedding">Wedding Consultation</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="delivery">Delivery Information</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-cream resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-light transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-cream-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143067466!2d-122.41941892392031!3d37.77492971198419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1699876543210!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                />
              </div>

              {/* Social Media */}
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="font-serif text-xl text-primary mb-4">Follow Us</h3>
                <p className="text-primary/70 mb-6">
                  Stay updated with our latest arrangements, seasonal specials, and behind-the-scenes content.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
                  >
                    <Instagram size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-lg"
                  >
                    <Facebook size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-400 flex items-center justify-center text-white shadow-lg"
                  >
                    <MessageCircle size={22} />
                  </motion.a>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="font-serif text-xl text-primary mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {[
                    { q: 'Do you offer same-day delivery?', a: 'Yes! Order before 2 PM for same-day delivery.' },
                    { q: 'Can I customize my bouquet?', a: 'Absolutely! Contact us for custom arrangements.' },
                    { q: 'What is your return policy?', a: 'We offer a 7-day freshness guarantee on all flowers.' },
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-primary/10 pb-4 last:border-0">
                      <p className="font-medium text-primary mb-1">{faq.q}</p>
                      <p className="text-primary/60 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
