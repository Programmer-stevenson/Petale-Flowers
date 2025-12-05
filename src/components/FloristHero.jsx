import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Truck, 
  Sparkles,
  ShoppingBag,
  Heart,
  Eye,
  Star,
  Check,
  Plus,
  Minus,
  X
} from 'lucide-react';

// ============================================
// PRODUCT DATA
// ============================================
const bouquetProducts = [
  { 
    id: 1,
    name: "Rose Harmony", 
    price: 45,
    originalPrice: 55,
    img: "/roses.jpg",
    tag: "Bestseller",
    rating: 4.9,
    reviews: 124
  },
  { 
    id: 2,
    name: "Sunset Orchid Mix", 
    price: 62,
    originalPrice: null,
    img: "/orange-bouqet.jpg",
    tag: "Premium",
    rating: 5.0,
    reviews: 89
  },
  { 
    id: 3,
    name: "Peony Bliss", 
    price: 55,
    originalPrice: 70,
    img: "/orange-tropic.jpg",
    tag: "Seasonal",
    rating: 4.8,
    reviews: 156
  },
  { 
    id: 4,
    name: "Lavender Garden", 
    price: 38,
    originalPrice: null,
    img: "/dark-lavender.jpg",
    tag: "Popular",
    rating: 4.7,
    reviews: 203
  },
  { 
    id: 5,
    name: "Elegant Lily Cascade", 
    price: 72,
    originalPrice: 85,
    img: "/delight-jar.jpg",
    tag: "Luxury",
    rating: 4.9,
    reviews: 67
  },
  { 
    id: 6,
    name: "Spring Tulip Bundle", 
    price: 42,
    originalPrice: null,
    img: "/lavendar-snow.jpg",
    tag: "Fresh",
    rating: 4.6,
    reviews: 98
  }
];

// ============================================
// PRODUCT QUICK VIEW MODAL (Mobile Double Tap)
// ============================================
const ProductQuickViewModal = ({ product, isOpen, onClose, onAddToCart, onWishlist, isWishlisted }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
      onClose();
    }, 1500);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:hidden"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-[253px] bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white"
          >
            <X size={14} />
          </button>

          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-cream to-cream-dark">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Tag */}
            <div className="absolute top-2.5 left-2.5">
              <span className="px-2 py-1 text-[8px] font-bold uppercase bg-primary text-white rounded-full">
                {product.tag}
              </span>
            </div>

            {/* Discount Badge */}
            {discount && (
              <div className="absolute top-8 left-2.5">
                <span className="px-2 py-1 text-[8px] font-bold bg-accent text-primary rounded-full">
                  -{discount}%
                </span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-3.5">
            {/* Name */}
            <h3 className="font-serif text-sm text-primary mb-1 leading-tight">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-primary/40 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity Row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center bg-cream rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 flex items-center justify-center text-primary"
                >
                  <Minus size={12} />
                </button>
                <span className="w-6 text-center font-bold text-primary text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 flex items-center justify-center text-primary"
                >
                  <Plus size={12} />
                </button>
              </div>
              <span className="text-sm font-bold text-primary">${(product.price * quantity).toFixed(2)}</span>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full py-2.5 rounded-xl font-semibold text-[9px] uppercase flex items-center justify-center gap-1.5 ${
                  isAdding ? 'bg-sage text-white' : 'bg-primary text-white'
                }`}
              >
                {isAdding ? (
                  <>
                    <Check size={12} />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={12} />
                    Add to Cart
                  </>
                )}
              </button>

              <Link to="/shop" className="block">
                <button className="w-full py-2.5 rounded-xl font-semibold text-[9px] uppercase flex items-center justify-center gap-1.5 bg-cream text-primary">
                  View in Shop
                  <ArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// PRODUCT CARD COMPONENT
// ============================================
const ProductCard = ({ product, onAddToCart, onWishlist, isWishlisted, showPriceOverlay = false, onTap }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleTap = () => {
    if (onTap) {
      onTap(product);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    onAddToCart(product, quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : null;

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-700 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTap}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-cream to-cream-dark">
        <motion.img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 0.80 : 0.75 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
        
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span className="px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-lg">
            {product.tag}
          </span>
        </div>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            <span className="px-2 py-1 md:px-2.5 md:py-1.5 text-[8px] md:text-[10px] font-bold bg-accent text-primary rounded-full shadow-lg">
              -{discount}%
            </span>
          </div>
        )}

        {/* Price Overlay - Shows on slideshow */}
        {showPriceOverlay && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-4 left-4 right-4"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-primary leading-tight">{product.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={10} 
                        className={i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-cream-dark fill-cream-dark'} 
                      />
                    ))}
                    <span className="text-[10px] text-primary/50 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="block text-xs text-primary/40 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-12 right-3 md:top-14 md:right-4 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onWishlist(product.id); }}
            className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 ${
              isWishlisted 
                ? 'bg-accent text-primary' 
                : 'bg-white/80 text-primary hover:bg-accent'
            }`}
          >
            <Heart size={12} className="md:w-3.5 md:h-3.5" fill={isWishlisted ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/80 flex items-center justify-center shadow-lg backdrop-blur-sm text-primary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <Eye size={12} className="md:w-3.5 md:h-3.5" />
          </motion.button>
        </div>

        {/* Add to Cart Overlay - Shows on Hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Quantity Selector */}
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); setQuantity(Math.max(1, quantity - 1)); }}
                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-cream transition-colors"
              >
                <Minus size={12} className="md:w-3.5 md:h-3.5" />
              </motion.button>
              <span className="w-6 md:w-8 text-center font-bold text-primary text-xs md:text-sm">{quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); setQuantity(quantity + 1); }}
                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-cream transition-colors"
              >
                <Plus size={12} className="md:w-3.5 md:h-3.5" />
              </motion.button>
            </div>
            <span className="text-white font-bold text-base md:text-lg drop-shadow-lg">
              ${(product.price * quantity).toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full py-2.5 md:py-3 rounded-xl font-semibold text-[10px] md:text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all duration-300 ${
              isAdding 
                ? 'bg-sage text-white' 
                : 'bg-white text-primary hover:bg-secondary hover:text-white'
            }`}
          >
            {isAdding ? (
              <>
                <Check size={14} className="md:w-4 md:h-4" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={14} className="md:w-4 md:h-4" />
                Add to Cart
              </>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info - Always Visible (hidden when showPriceOverlay is true) */}
      {!showPriceOverlay && (
        <div className="p-3 md:p-5 flex-1 flex flex-col justify-between bg-white">
          {/* Rating */}
          <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={10} 
                  className={`md:w-3 md:h-3 ${i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-cream-dark fill-cream-dark'}`} 
                />
              ))}
            </div>
            <span className="text-[10px] md:text-xs text-primary/60 font-medium">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Name */}
          <h3 className="font-serif text-base md:text-xl text-primary mb-1.5 md:mb-2 leading-tight line-clamp-2">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-lg md:text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs md:text-sm text-primary/40 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// ============================================
// PRODUCT CAROUSEL COMPONENT
// ============================================
const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  
  // Use the real cart context
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const handleTap = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Auto-advance carousel - resets when resetTimer changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length, resetTimer]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setResetTimer((prev) => prev + 1);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setResetTimer((prev) => prev + 1);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setResetTimer((prev) => prev + 1);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
  };

  const handleWishlist = (productId) => {
    toggleWishlist(productId);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-4 md:mb-6">
        <motion.span 
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 0, y: 0 }}
  className="inline-block px-2.5 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-transparent text-transparent rounded-full mb-1.5 md:mb-2"
>
  Shop Collection
</motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-serif text-primary"
        >
          Featured Bouquets
        </motion.h2>
      </div>

      {/* Desktop: Single Card Slideshow - Elegant Crossfade */}
      <div className="hidden lg:block flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.45, 0, 0.15, 1]
            }}
            className="h-full"
          >
            <ProductCard
              product={products[currentIndex]}
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              isWishlisted={isInWishlist(products[currentIndex].id)}
              showPriceOverlay={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: 2-Column Grid */}
      <div className="lg:hidden flex-1 overflow-y-auto pb-4">
        <p className="text-center text-xs text-primary/50 mb-3">Tap to quick view</p>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              isWishlisted={isInWishlist(product.id)}
              showPriceOverlay={false}
              onTap={handleTap}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={handleAddToCart}
        onWishlist={handleWishlist}
        isWishlisted={selectedProduct ? isInWishlist(selectedProduct.id) : false}
      />

      {/* Pagination Dots - Desktop Only */}
      <div className="hidden lg:flex items-center justify-center gap-2 mt-6">
        {products.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition-all duration-500 ${
              idx === currentIndex 
                ? 'w-8 h-2.5 bg-gradient-to-r from-primary to-sage' 
                : 'w-2.5 h-2.5 bg-cream-dark hover:bg-sage/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* View All Link */}
      <Link
        to="/shop"
        className="flex items-center justify-center gap-2 mt-4 md:mt-5 text-primary font-semibold text-xs md:text-sm hover:text-secondary transition-colors duration-500 group"
      >
        View All Products
        <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

// ============================================
// MAIN HERO COMPONENT
// ============================================
const FloristHero = () => {
  return (
    <section className="relative min-h-[100svh] lg:h-screen overflow-hidden bg-cream">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-sage rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[150px] opacity-15 pointer-events-none" />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* ===== HERO IMAGE (70% on desktop) ===== */}
        <div className="relative w-full lg:w-[70%] h-[100vh] lg:h-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=1600&fit=crop"
              alt="Beautiful fresh flower bouquet"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-primary/20 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center lg:justify-end items-center lg:items-start p-6 sm:p-8 lg:p-16 lg:pb-16">
            {/* Main Content */}
            <div className="max-w-xl text-center lg:text-left">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-5"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 md:px-4 md:py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
                  <Sparkles size={14} className="text-secondary md:w-3.5 md:h-3.5" />
                  <span className="text-white/90 text-sm md:text-sm font-medium">Artisan Crafted Since 2010</span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.1] mb-[35px] sm:mb-5 md:mb-6"
              >
                Fresh Blooms,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  Designed Daily.
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-base sm:text-base md:text-lg lg:text-xl text-white/80 mb-10 sm:mb-8 md:mb-10 leading-relaxed max-w-md lg:max-w-xl mx-auto lg:mx-0 mt-[60px] sm:mt-0"
              >
                Handcrafted bouquets delivered same-day across the city. 
                Each arrangement tells a unique story of elegance and natural beauty.
              </motion.p>

              {/* CTAs - Always side by side */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-row justify-center lg:justify-start gap-4 md:gap-4 mt-2"
              >
                <Link to="/shop">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-6 py-3.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-secondary text-primary font-semibold rounded-full shadow-xl shadow-secondary/30 hover:shadow-2xl hover:bg-secondary/90 transition-all duration-500 flex items-center justify-center gap-2 sm:gap-2 text-sm sm:text-sm md:text-base whitespace-nowrap"
                  >
                    Shop Bouquets
                    <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                <Link to="/weddings">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-500 text-sm sm:text-sm md:text-base whitespace-nowrap"
                  >
                    Weddings
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Bottom Badge - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden sm:flex items-center gap-3 md:gap-4 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 md:pr-6 shadow-2xl max-w-fit mt-8"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-sage flex items-center justify-center shadow-lg">
                <Truck size={18} className="text-white md:w-[22px] md:h-[22px]" />
              </div>
              <div>
                <div className="text-primary font-semibold text-sm md:text-base">Same-Day Delivery</div>
                <div className="text-primary/60 text-xs md:text-sm">Order by 2 PM</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===== PRODUCT CAROUSEL (30% on desktop, full width on mobile) ===== */}
        <div className="w-full lg:w-[30%] bg-gradient-to-br from-cream via-white to-cream-dark p-4 md:p-5 lg:p-6 flex flex-col justify-center">
          <ProductCarousel products={bouquetProducts} />
        </div>
      </div>

      {/* Floating Cart & Wishlist Icons (Mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-24 right-4 z-50 lg:hidden flex flex-col gap-3"
      >
        <Link to="/cart">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center"
          >
            <ShoppingBag size={18} />
          </motion.div>
        </Link>
        <Link to="/wishlist">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center"
          >
            <Heart size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default FloristHero;