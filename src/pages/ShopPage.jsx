import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, Grid3X3, LayoutGrid, ChevronDown, SlidersHorizontal, X,
  Heart, ShoppingBag, Star, Eye, Check, Plus, Minus, ArrowRight
} from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// ============================================
// PRODUCT QUICK VIEW MODAL (Mobile Tap)
// ============================================
const ProductQuickViewModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Reset quantity when modal opens with new product
  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
      onClose();
    }, 1200);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : null;

  const wishlisted = isInWishlist(product.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`absolute top-2.5 right-12 z-10 w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-colors ${
              wishlisted ? 'bg-accent text-primary' : 'bg-white/80 text-primary'
            }`}
          >
            <Heart size={12} fill={wishlisted ? 'currentColor' : 'none'} />
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
            {/* Rating */}
            <div className="flex items-center gap-1 mb-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={8} 
                    className={i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-cream-dark fill-cream-dark'} 
                  />
                ))}
              </div>
              <span className="text-[8px] text-primary/60">({product.reviews})</span>
            </div>

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

              <Link to={`/product/${product.id}`} className="block">
                <button className="w-full py-2.5 rounded-xl font-semibold text-[9px] uppercase flex items-center justify-center gap-1.5 bg-cream text-primary">
                  View Details
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
const ProductCard = ({ product, viewMode, onTap }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const wishlisted = isInWishlist(product.id);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;

  const handleTap = (e) => {
    // Only trigger on mobile (check if it's a touch device or small screen)
    if (window.innerWidth < 1024 && onTap) {
      e.preventDefault();
      onTap(product);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${viewMode === 'list' ? 'flex' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTap}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-cream to-cream-dark ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-[4/5]'}`}>
        <Link to={`/product/${product.id}`} onClick={(e) => window.innerWidth < 1024 && e.preventDefault()}>
          <motion.img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 0.95 : 0.85 }}
            transition={{ duration: 0.4 }}
          />
        </Link>
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="px-2 py-1 lg:px-3 text-[10px] lg:text-xs font-bold uppercase tracking-wider bg-primary text-white rounded-full">{product.tag}</span>
          {discount && <span className="px-2 py-1 lg:px-3 text-[10px] lg:text-xs font-bold bg-accent text-primary rounded-full">-{discount}%</span>}
        </div>

        {/* Quick Actions - Desktop Only */}
        <motion.div
          className="absolute top-3 right-3 flex-col gap-2 hidden lg:flex"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-colors ${wishlisted ? 'bg-accent text-primary' : 'bg-white text-primary hover:bg-accent'}`}
          >
            <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
          </motion.button>
          <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg text-primary hover:bg-secondary hover:text-white transition-colors">
              <Eye size={16} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Mobile Tap Hint */}
        <div className="absolute bottom-3 left-3 right-3 lg:hidden">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg py-2 text-center">
            <span className="text-[10px] text-primary/70 font-medium">Tap to quick view</span>
          </div>
        </div>

        {/* Add to Cart - Desktop Only */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-3 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product, 1); }}
            className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-xl hover:bg-primary-light transition-colors"
          >
            <ShoppingBag size={16} /> Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Info */}
      <div className={`p-3 lg:p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
        <div className="flex items-center gap-2 mb-1 lg:mb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className={`lg:w-3 lg:h-3 ${i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-cream-dark fill-cream-dark'}`} />
            ))}
          </div>
          <span className="text-[10px] lg:text-xs text-primary/60">({product.reviews})</span>
        </div>
        <Link to={`/product/${product.id}`} onClick={(e) => window.innerWidth < 1024 && e.preventDefault()}>
          <h3 className="font-serif text-sm lg:text-lg text-primary mb-1 lg:mb-2 hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-base lg:text-xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && <span className="text-xs lg:text-sm text-primary/40 line-through">${product.originalPrice}</span>}
        </div>
        {viewMode === 'list' && <p className="mt-3 text-sm text-primary/60 line-clamp-2">{product.description}</p>}
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN SHOP PAGE
// ============================================
const ShopPage = () => {
  const { category: urlCategory } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(urlCategory || 'all');
  
  // Quick View Modal State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductTap = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Sync URL category with state
  useEffect(() => {
    setActiveCategory(urlCategory || 'all');
  }, [urlCategory]);

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop/${categoryId}`);
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low': 
        result.sort((a, b) => a.price - b.price); 
        break;
      case 'price-high': 
        result.sort((a, b) => b.price - a.price); 
        break;
      case 'rating': 
        result.sort((a, b) => b.rating - a.rating); 
        break;
      case 'newest': 
        result.sort((a, b) => b.id - a.id); 
        break;
      default: 
        break;
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const currentCategoryName = categories.find(c => c.id === activeCategory)?.name || 'Our Collection';

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2 md:mb-4"
            >
              {currentCategoryName}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-white/80 text-sm md:text-lg"
            >
              {activeCategory === 'all' 
                ? 'Handcrafted bouquets for every occasion' 
                : `${filteredProducts.length} beautiful arrangements`}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Filter size={18} /> Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-all ${
                        activeCategory === cat.id 
                          ? 'bg-primary text-white' 
                          : 'text-primary/80 hover:bg-cream-dark'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={activeCategory === cat.id ? 'text-white/80' : 'text-primary/40'}>
                        ({cat.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-primary mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="150" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} 
                    className="w-full accent-primary" 
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary/60">${priceRange[0]}</span>
                    <span className="text-primary font-semibold">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(activeCategory !== 'all' || priceRange[1] !== 150) && (
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setPriceRange([0, 150]);
                  }}
                  className="w-full py-2 text-secondary hover:text-primary transition-colors underline text-sm"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
              <p className="text-sm md:text-base text-primary/60">
                Showing <span className="font-semibold text-primary">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex items-center gap-2 md:gap-4">
                {/* Mobile Filter Button */}
                <button 
                  onClick={() => setIsFilterOpen(true)} 
                  className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm text-primary text-sm"
                >
                  <SlidersHorizontal size={16} /> Filters
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)} 
                    className="appearance-none bg-white px-3 py-2 pr-8 rounded-lg shadow-sm text-primary text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none" />
                </div>

                {/* View Mode Toggle - Desktop */}
                <div className="hidden sm:flex items-center bg-white rounded-lg shadow-sm overflow-hidden">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-primary/60 hover:bg-cream'}`}
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')} 
                    className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-primary/60 hover:bg-cream'}`}
                  >
                    <LayoutGrid size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <motion.div 
              layout 
              className={`grid gap-3 md:gap-6 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    viewMode={viewMode} 
                    onTap={handleProductTap}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-primary/60 text-lg mb-4">No products found</p>
                <button 
                  onClick={() => { 
                    handleCategoryChange('all'); 
                    setPriceRange([0, 150]); 
                  }} 
                  className="text-secondary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
            <motion.div 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }} 
              transition={{ type: 'tween' }} 
              className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-primary">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} className="text-primary" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-primary mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleCategoryChange(cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-all ${
                          activeCategory === cat.id 
                            ? 'bg-primary text-white' 
                            : 'text-primary/80 hover:bg-cream-dark'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={activeCategory === cat.id ? 'text-white/80' : 'text-primary/40'}>
                          ({cat.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-primary mb-4">Price Range</h3>
                  <input 
                    type="range" 
                    min="0" 
                    max="150" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} 
                    className="w-full accent-primary" 
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button 
                  onClick={() => setIsFilterOpen(false)} 
                  className="w-full py-3 bg-primary text-white rounded-xl font-semibold"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopPage;