# 🌸 Pétale - Artisan Florist E-Commerce

A beautiful, fully-featured florist e-commerce website built with React, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Multi-page Navigation** - Home, Shop, Product Details, Cart, About, Contact, Weddings
- **Shopping Cart** - Add to cart, quantity controls, persistent storage
- **Wishlist** - Save favorite products
- **Product Filtering** - Filter by category, price range, sort options
- **Responsive Design** - Mobile-first, works on all devices
- **Beautiful Animations** - Smooth Framer Motion transitions
- **Custom Color Palette** - Forest green, gold, pink accents

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#2d5a4a` | Main brand color (forest green) |
| Primary Light | `#3d6a5a` | Hover states |
| Secondary | `#d4a574` | Accent buttons (warm gold) |
| Accent | `#e8b4b8` | Highlights (soft pink) |
| Sage | `#8fa99a` | Secondary accents |
| Cream | `#f9f7f4` | Backgrounds |
| Cream Dark | `#ede9e4` | Borders, cards |

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Add your product images
Place these images in the `/public` folder:
- `orange-bouqet.jpg`
- `dark-lavender.jpg`
- `delight-jar.jpg`
- `lavendar-snow.jpg`

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
petale-florist/
├── public/
│   └── (your product images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── FloristHero.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── WeddingsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, categories, testimonials |
| Shop | `/shop` | Product grid with filters |
| Shop Category | `/shop/:category` | Filtered by category |
| Product | `/product/:id` | Product detail page |
| Cart | `/cart` | Shopping cart & checkout |
| About | `/about` | Company story & team |
| Contact | `/contact` | Contact form & info |
| Weddings | `/weddings` | Wedding services & packages |

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **React Router 6** - Navigation
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Customization

### Adding Products
Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 13,
  name: "Your Bouquet",
  price: 50,
  originalPrice: 60, // null if no sale
  img: "/your-image.jpg",
  tag: "New",
  category: "roses",
  rating: 4.8,
  reviews: 50,
  description: "Description here",
  details: ["Detail 1", "Detail 2"],
  inStock: true
}
```

### Changing Colors
Edit `tailwind.config.js` to customize the color palette.

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

Made with 💐 by Pétale
