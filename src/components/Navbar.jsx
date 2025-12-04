import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Menu, X, Search, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { cartCount, wishlist } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop', hasDropdown: true, dropdownType: 'shop' },
    { name: 'Weddings', path: '/weddings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const shopCategories = [
    { name: 'All Flowers', path: '/shop' },
    { name: 'Roses', path: '/shop/roses' },
    { name: 'Peonies', path: '/shop/peonies' },
    { name: 'Orchids', path: '/shop/orchids' },
    { name: 'Sunflowers', path: '/shop/sunflowers' },
    { name: 'Hydrangeas', path: '/shop/hydrangeas' },
    { name: 'Lilies', path: '/shop/lilies' },
    { name: 'Tulips', path: '/shop/tulips' },
    { name: 'Mixed Bouquets', path: '/shop/mixed' },
  ];

  const isHomePage = location.pathname === '/';
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const getDropdownItems = (type) => {
    if (type === 'shop') return shopCategories;
    return [];
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.png" alt="" className="object-contain" style={{ height: '100px', width: '100px' }} />
              <span className={`text-2xl font-serif font-bold transition-colors ${
                isScrolled || !isHomePage ? 'text-primary' : 'text-white'
              }`}>
                Pétale
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.dropdownType)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 font-medium transition-colors py-2 ${
                      isScrolled || !isHomePage
                        ? isActive(link.path) ? 'text-secondary' : 'text-primary hover:text-secondary'
                        : isActive(link.path) ? 'text-secondary' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.dropdownType ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>
                  
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.dropdownType && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-cream-dark p-2 min-w-[200px]">
                            {getDropdownItems(link.dropdownType).map((cat) => (
                              <Link
                                key={cat.name}
                                to={cat.path}
                                className="block px-4 py-2.5 text-primary hover:bg-cream rounded-lg transition-colors text-sm"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled || !isHomePage ? 'text-primary hover:bg-cream' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Search size={20} />
              </motion.button>

              <Link to="/shop">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2 rounded-full transition-colors ${
                    isScrolled || !isHomePage ? 'text-primary hover:bg-cream' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <Heart size={20} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </motion.div>
              </Link>

              <Link to="/cart">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 rounded-full transition-colors text-primary hover:bg-cream/20"
                >
                  <ShoppingBag size={20} />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-primary text-xs font-bold rounded-full flex items-center justify-center"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.div>
              </Link>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isScrolled || !isHomePage ? 'text-primary hover:bg-cream' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
              <div className="p-6 pt-24">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className={`block py-3 text-lg font-medium border-b border-cream-dark ${
                          isActive(link.path) ? 'text-secondary' : 'text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Mobile Shop Categories */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-primary/60 uppercase tracking-wider mb-4">
                    Shop by Flower
                  </h3>
                  <div className="space-y-2">
                    {shopCategories.map((cat) => (
                      <Link 
                        key={cat.name} 
                        to={cat.path} 
                        className="block py-2 text-primary hover:text-secondary transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
          >
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-2">
                <div className="flex items-center gap-4">
                  <Search size={24} className="text-primary/40 ml-4" />
                  <input
                    type="text"
                    placeholder="Search for flowers..."
                    className="flex-1 py-4 text-lg text-primary placeholder-primary/40 outline-none"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)} className="p-3 hover:bg-cream rounded-xl transition-colors">
                    <X size={20} className="text-primary" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;