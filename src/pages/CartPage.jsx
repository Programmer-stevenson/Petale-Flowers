import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, 
  Truck, Shield, Tag, ChevronRight, X
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const shipping = cartTotal >= 75 ? 0 : 9.99;
  const discount = promoApplied ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal + shipping - discount;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'bloom10') {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Thank you for your order! This is a demo checkout.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-12 shadow-lg"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-cream flex items-center justify-center">
              <ShoppingBag size={40} className="text-primary/40" />
            </div>
            <h1 className="text-3xl font-serif text-primary mb-4">Your Cart is Empty</h1>
            <p className="text-primary/60 mb-8">Looks like you haven't added any beautiful blooms yet.</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors"
            >
              Start Shopping
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-primary/60">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary">Shopping Cart</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl font-serif text-primary mb-8">Shopping Cart ({cartCount} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0 }}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-md flex gap-4 sm:gap-6"
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-cream">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        style={{ transform: 'scale(0.85)' }}
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-serif text-lg text-primary hover:text-secondary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-primary/60 mt-1">{item.tag}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-primary/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center bg-cream rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center text-primary hover:bg-cream-dark transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-semibold text-primary">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-primary hover:bg-cream-dark transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-primary/60">${item.price} each</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-primary/60 hover:text-red-500 transition-colors text-sm flex items-center gap-2"
            >
              <Trash2 size={16} />
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-serif text-primary mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-cream-dark focus:border-primary focus:outline-none text-primary"
                      disabled={promoApplied}
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                    className={`px-4 py-3 rounded-xl font-semibold transition-colors ${
                      promoApplied
                        ? 'bg-sage text-white'
                        : 'bg-cream text-primary hover:bg-cream-dark'
                    }`}
                  >
                    {promoApplied ? 'Applied!' : 'Apply'}
                  </button>
                </div>
                <p className="text-xs text-primary/60 mt-2">Try "BLOOM10" for 10% off</p>
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-cream-dark pt-4">
                <div className="flex justify-between text-primary/70">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-primary/70">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sage">
                    <span>Promo Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-primary pt-3 border-t border-cream-dark">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Free Shipping Progress */}
              {cartTotal < 75 && (
                <div className="mt-6 p-4 bg-sage/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck size={16} className="text-sage" />
                    <span className="text-sm text-primary">
                      Add ${(75 - cartTotal).toFixed(2)} more for FREE shipping!
                    </span>
                  </div>
                  <div className="w-full h-2 bg-cream rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sage transition-all duration-300"
                      style={{ width: `${Math.min((cartTotal / 75) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full mt-6 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isCheckingOut
                    ? 'bg-sage text-white'
                    : 'bg-primary text-white hover:bg-primary-light'
                }`}
              >
                {isCheckingOut ? (
                  <>Processing...</>
                ) : (
                  <>
                    Proceed to Checkout
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>

              {/* Trust Badges */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-primary/60">
                <div className="flex items-center gap-1">
                  <Shield size={14} />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck size={14} />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
