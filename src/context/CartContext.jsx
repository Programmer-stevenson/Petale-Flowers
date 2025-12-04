import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('petale-cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [wishlist, setWishlist] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('petale-wishlist');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('petale-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('petale-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  
  const updateQuantity = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const clearCart = () => setCartItems([]);
  
  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };
  
  const isInWishlist = (id) => wishlist.includes(id);
  
  const cartTotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const cartCount = cartItems.reduce((c, i) => c + i.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      wishlist, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      toggleWishlist, 
      isInWishlist, 
      cartTotal, 
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
