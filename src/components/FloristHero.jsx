import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Minus
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
// PRODUCT CARD COMPONENT
// ============================================
const ProductCard = ({ product, onAddToCart, onWishlist, isWishlisted, showPriceOverlay = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
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
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-lg">
            {product.tag}
          </span>
        </div>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1.5 text-[10px] font-bold bg-accent text-primary rounded-full shadow-lg">
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
        <div className="absolute top-14 right-4 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onWishlist(product.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 ${
              isWishlisted 
                ? 'bg-accent text-primary' 
                : 'bg-white/80 text-primary hover:bg-accent'
            }`}
          >
            <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-lg backdrop-blur-sm text-primary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <Eye size={14} />
          </motion.button>
        </div>

        {/* Add to Cart Overlay - Shows on Hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Quantity Selector */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-primary hover:bg-cream transition-colors"
              >
                <Minus size={14} />
              </motion.button>
              <span className="w-8 text-center font-bold text-primary text-sm">{quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-primary hover:bg-cream transition-colors"
              >
                <Plus size={14} />
              </motion.button>
            </div>
            <span className="text-white font-bold text-lg drop-shadow-lg">
              ${(product.price * quantity).toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full py-3 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all duration-300 ${
              isAdding 
                ? 'bg-sage text-white' 
                : 'bg-white text-primary hover:bg-secondary hover:text-white'
            }`}
          >
            {isAdding ? (
              <>
                <Check size={16} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                Add to Cart
              </>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info - Always Visible (hidden when showPriceOverlay is true) */}
      {!showPriceOverlay && (
        <div className="p-5 flex-1 flex flex-col justify-between bg-white">
          {/* Rating */}
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
            <span className="text-xs text-primary/60 font-medium">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Name */}
          <h3 className="font-serif text-xl text-primary mb-2 leading-tight">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-primary/40 line-through">
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
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  const handleAddToCart = (product, quantity) => {
    setCart(prev => [...prev, { ...product, quantity }]);
  };

  const handleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-secondary/20 text-secondary rounded-full mb-2"
          >
            Shop Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-serif text-primary"
          >
            Featured Bouquets
          </motion.h2>
        </div>

        {/* Navigation - Desktop Only */}
        <div className="hidden lg:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 border border-cream-dark"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-primary shadow-md flex items-center justify-center text-white hover:bg-primary-light transition-all duration-500"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
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
              isWishlisted={wishlist.includes(products[currentIndex].id)}
              showPriceOverlay={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: 2-Column Grid */}
      <div className="lg:hidden flex-1 overflow-y-auto pb-4">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              isWishlisted={wishlist.includes(product.id)}
              showPriceOverlay={false}
            />
          ))}
        </div>
      </div>

      {/* Pagination Dots - Desktop Only */}
      <div className="hidden lg:flex items-center justify-center gap-2 mt-6">
        {products.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
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
      <motion.a
        href="/shop"
        className="flex items-center justify-center gap-2 mt-5 text-primary font-semibold text-sm hover:text-secondary transition-colors duration-500 group"
        whileHover={{ x: 5 }}
      >
        View All Products
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
      </motion.a>
    </div>
  );
};

// ============================================
// MAIN HERO COMPONENT
// ============================================
const FloristHero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen overflow-hidden bg-cream">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-sage rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[150px] opacity-15 pointer-events-none" />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* ===== HERO IMAGE (70% on desktop - increased from 65%) ===== */}
        <div className="relative w-full lg:w-[70%] h-[60vh] lg:h-full">
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
          <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-16">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles size={14} className="text-secondary" />
                <span className="text-white/90 text-sm font-medium">Artisan Crafted Since 2010</span>
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.1] mb-6"
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
                className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed"
              >
                Handcrafted bouquets delivered same-day across the city. 
                Each arrangement tells a unique story of elegance and natural beauty.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="/shop"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-secondary text-primary font-semibold rounded-full shadow-xl shadow-secondary/30 hover:shadow-2xl hover:bg-secondary/90 transition-all duration-500 flex items-center gap-2"
                >
                  Shop Bouquets
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>

                <motion.a
                  href="/weddings"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-500"
                >
                  Weddings & Events
                </motion.a>
              </motion.div>
            </div>

            {/* Bottom Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 pr-6 shadow-2xl max-w-fit"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sage flex items-center justify-center shadow-lg">
                <Truck size={22} className="text-white" />
              </div>
              <div>
                <div className="text-primary font-semibold">Same-Day Delivery</div>
                <div className="text-primary/60 text-sm">Order by 2 PM</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===== PRODUCT CAROUSEL (30% on desktop - reduced from 35%) ===== */}
        <div className="w-full lg:w-[30%] bg-gradient-to-br from-cream via-white to-cream-dark p-5 lg:p-6 flex flex-col justify-center">
          <ProductCarousel products={bouquetProducts} />
        </div>
      </div>

      {/* Floating Cart Indicator (Mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed bottom-6 right-6 z-50 lg:hidden"
      >
        <motion.a
          href="/cart"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center"
        >
          <ShoppingBag size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FloristHero;