import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, ShoppingBag, Star, Truck, Shield, Leaf, Check, 
  Plus, Minus, ChevronRight, Share2
} from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-primary mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-secondary hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : null;

  const wishlisted = isInWishlist(product.id);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-primary/60">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-cream to-cream-dark rounded-3xl overflow-hidden">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images?.[selectedImage] || product.img}
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ transform: 'scale(0.85)' }}
              />
              
              {/* Tags */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="px-4 py-2 text-sm font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-lg">
                  {product.tag}
                </span>
                {discount && (
                  <span className="px-4 py-2 text-sm font-bold bg-accent text-primary rounded-full shadow-lg">
                    -{discount}% OFF
                  </span>
                )}
              </div>

              {/* Share Button */}
              <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                <Share2 size={20} className="text-primary" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-cream-dark fill-cream-dark'}
                  />
                ))}
              </div>
              <span className="text-primary/60">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-serif text-primary">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-primary/40 line-through">${product.originalPrice}</span>
              )}
              {discount && (
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-primary/70 leading-relaxed">{product.description}</p>

            {/* Details */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">What's Included:</h3>
              <ul className="space-y-2">
                {product.details?.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-primary/70">
                    <Check size={18} className="text-sage" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-primary hover:bg-cream transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-primary text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-primary hover:bg-cream transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Add to Cart */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-1 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 shadow-xl transition-all ${
                  isAdding
                    ? 'bg-sage text-white'
                    : 'bg-primary text-white hover:bg-primary-light'
                }`}
              >
                {isAdding ? (
                  <>
                    <Check size={22} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={22} />
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </motion.button>

              {/* Wishlist */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleWishlist(product.id)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                  wishlisted ? 'bg-accent text-primary' : 'bg-white text-primary hover:bg-accent'
                }`}
              >
                <Heart size={24} fill={wishlisted ? 'currentColor' : 'none'} />
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-dark">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-sage/20 flex items-center justify-center">
                  <Truck size={20} className="text-sage" />
                </div>
                <p className="text-sm text-primary font-medium">Same-Day Delivery</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield size={20} className="text-secondary" />
                </div>
                <p className="text-sm text-primary font-medium">Freshness Guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                  <Leaf size={20} className="text-accent" />
                </div>
                <p className="text-sm text-primary font-medium">Eco-Friendly</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-serif text-primary mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="aspect-square bg-cream overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ transform: 'scale(0.85)' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-primary group-hover:text-secondary transition-colors">{p.name}</h3>
                      <p className="text-lg font-bold text-primary">${p.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
