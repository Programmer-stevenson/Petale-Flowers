// ============================================
// PRODUCT DATA - 8 products per category (64 total)
// ============================================

export const products = [
  // ========== ROSES (8) ==========
  { id: 1, name: "Bear Rose Harmony", price: 99.99, originalPrice: null, img: "/bear-rose.jpg", tag: "Bestseller", category: "roses", rating: 4.9, reviews: 124, description: "A stunning arrangement of premium red & pink roses, hand-tied with eucalyptus and a teddy companion.", details: ["12 Premium Red Roses", "Fresh Eucalyptus", "Satin Ribbon"], inStock: true },
  { id: 2, name: "Romantic Mint Garden", price: 99.99, originalPrice: 109.99, img: "/mint-roses.jpg", tag: "Premium", category: "roses", rating: 5.0, reviews: 203, description: "Abundant garden roses in romantic pink tones.", details: ["24 Garden Roses", "Premium Vase"], inStock: true },
  { id: 3, name: "Yellow & Pink Roses", price: 51.99, originalPrice: null, img: "/pink-yellow-roses.jpg", tag: "Popular", category: "roses", rating: 4.7, reviews: 89, description: "Delicate blush pink roses for a soft romantic touch.", details: ["18 Blush Roses", "Baby's Breath"], inStock: true },
  { id: 4, name: "Classic Red Dozen", price: 69.99, originalPrice: 79.99, img: "/roses.jpg", tag: "Classic", category: "roses", rating: 4.8, reviews: 312, description: "The timeless gesture of love - one dozen red roses.", details: ["12 Long-Stem Roses", "Glass Vase"], inStock: true },
  { id: 5, name: "Cotton Candy Rose Mix", price: 79.99, originalPrice: null, img: "/cotton-candy-roses.jpg", tag: "Unique", category: "roses", rating: 4.6, reviews: 67, description: "A vibrant mix of multi-colored roses.", details: ["15 Rainbow Roses", "Decorative Wrap"], inStock: true },
  { id: 6, name: "Pink Rose Elegance", price: 59.99, originalPrice: 69.99, img: "/pink-red.jpg", tag: "Wedding", category: "roses", rating: 4.9, reviews: 145, description: "Pure Pink & Red roses symbolizing innocence and new beginnings.", details: ["20 White Roses", "Satin Ribbon"], inStock: true },
  { id: 7, name: "Blue Sunshine Roses", price: 99.99, originalPrice: null, img: "/orange-blue-roses.jpg", tag: "Cheerful", category: "roses", rating: 4.5, reviews: 78, description: "Bright orange blue roses to brighten any day.", details: ["12 Yellow Roses", "Greenery"], inStock: true },
  { id: 8, name: "Red Sunshine Roses", price: 119.99, originalPrice: 149.99, img: "/red-yellow-roses.jpg", tag: "Luxury", category: "roses", rating: 5.0, reviews: 56, description: "Premium roses in an elegant keepsake box.", details: ["36 Premium Roses", "Luxury Box"], inStock: true },

  // ========== PEONIES (8) ==========
  { id: 9, name: "Bear Peony Bliss", price: 154.99, originalPrice: 179.99, img: "/bear-peg.jpg", tag: "Seasonal", category: "peonies", rating: 4.8, reviews: 156, description: "Teddy companion with Lush, fragrant peonies in soft blush tones.", details: ["8 Garden Peonies", "Glass Vase"], inStock: true },
  { id: 10, name: "Bear Sunshine Paradise", price: 169.99, originalPrice: null, img: "/bear-peg2.jpg", tag: "Premium", category: "peonies", rating: 4.9, reviews: 98, description: "Teddy companion with Luxurious Yellow Orange peonies in full bloom.", details: ["10 Pink Peonies", "Seasonal Greenery"], inStock: true },
  { id: 11, name: "White Peony Dreams", price: 72.99, originalPrice: 89.99, img: "/white-peg.jpg", tag: "Wedding", category: "peonies", rating: 5.0, reviews: 134, description: "Pristine white & blue peonies for elegant occasions.", details: ["12 White Peonies", "Premium Vase"], inStock: true },
  { id: 12, name: "Coral Peony Charm", price: 69.99, originalPrice: null, img: "/coral-peg.jpg", tag: "Popular", category: "peonies", rating: 4.7, reviews: 76, description: "Stunning coral peonies with romantic appeal.", details: ["8 Coral Peonies", "Rustic Wrap"], inStock: true },
  { id: 13, name: "Peony & Rose Duo", price: 84.99, originalPrice: 99.99, img: "/rose-peg.jpg", tag: "Bestseller", category: "peonies", rating: 4.9, reviews: 189, description: "Beautiful combination of peonies and garden roses.", details: ["6 Peonies", "6 Garden Roses"], inStock: true },
  { id: 14, name: "Burgundy Peony Luxe", price: 79.99, originalPrice: null, img: "/burg-peg.jpg", tag: "Luxury", category: "peonies", rating: 4.8, reviews: 45, description: "Deep burgundy peonies for dramatic impact.", details: ["10 Burgundy Peonies", "Crystal Vase"], inStock: true },
  { id: 15, name: "Peony Garden Mix", price: 99.99, originalPrice: 114.99, img: "/warm-peg.jpg", tag: "Premium", category: "peonies", rating: 5.0, reviews: 67, description: "Mixed peony varieties in warm shades.", details: ["15 Mixed Peonies", "Designer Vase"], inStock: true },
  { id: 16, name: "Mini Peony Posy", price: 39.99, originalPrice: null, img: "/mini-peg.jpg", tag: "Petite", category: "peonies", rating: 4.6, reviews: 112, description: "A petite arrangement perfect for small spaces.", details: ["5 Peonies", "Hand-Tied"], inStock: true },

  // ========== ORCHIDS (8) ==========
  { id: 17, name: "Sunset Orchid Mix", price: 59.99, originalPrice: null, img:"/orchids-pink.jpg", tag: "Premium", category: "orchids", rating: 5.0, reviews: 89, description: "Exotic orchids in warm sunset hues.", details: ["5 Phalaenopsis Orchids", "Ceramic Pot"], inStock: true },
  { id: 18, name: "Exotic Paradise", price: 99.99, originalPrice: 109.99, img: "/tropical-orchids.jpg", tag: "Luxury", category: "orchids", rating: 4.9, reviews: 67, description: "Tropical orchids with birds of paradise.", details: ["Birds of Paradise", "Anthuriums"], inStock: true },
  { id: 19, name: "Green Phalaenopsis", price: 75, originalPrice: null, img: "/green-orchid.jpg", tag: "Classic", category: "orchids", rating: 4.8, reviews: 234, description: "Elegant white moth orchids in ceramic pot.", details: ["Double Stem Orchid", "Ceramic Pot"], inStock: true },
  { id: 20, name: "Pink Dendrobium", price: 54.99, originalPrice: 69.99, img: "/pink-orchid.jpg", tag: "Popular", category: "orchids", rating: 4.7, reviews: 145, description: "Vibrant purple dendrobium orchids.", details: ["3 Dendrobium Stems", "Glass Vase"], inStock: true },
  { id: 21, name: "Cymbidium Cascade", price: 94.99, originalPrice: 99.99, img: "/cool-orchird.jpg", tag: "Premium", category: "orchids", rating: 4.9, reviews: 56, description: "Cascading cymbidium orchids in modern arrangement.", details: ["5 Cymbidium Stems", "Modern Vase"], inStock: true },
  { id: 22, name: "Blue Tropical Orchid", price: 45, originalPrice: 54.99, img: "/blue-trop-orchid.jpg", tag: "Petite", category: "orchids", rating: 4.6, reviews: 178, description: "Three mini orchid plants in decorative pots.", details: ["3 Mini Orchids", "Decorative Pots"], inStock: true },
  { id: 23, name: "Yellow Oncidium", price: 69.99, originalPrice: null, img: "/orchids.jpg", tag: "Cheerful", category: "orchids", rating: 4.7, reviews: 89, description: "Dancing lady orchids in bright yellow.", details: ["4 Oncidium Stems", "Bamboo Pot"], inStock: true },
  { id: 24, name: "Rare Blue Orchid", price: 119.99, originalPrice: 144.99, img: "/turq-orchid.jpg", tag: "Luxury", category: "orchids", rating: 5.0, reviews: 34, description: "Rare blue-dyed phalaenopsis orchid.", details: ["Triple Stem Blue Orchid", "Premium Pot"], inStock: true },

  // ========== TULIPS (8) ==========
  { id: 25, name: "Spring Bundle", price: 42.99, originalPrice: 45.99, img: "/orange-blue-yellow-tulips.jpg", tag: "Fresh", category: "tulips", rating: 4.6, reviews: 98, description: "Cheerful tulips in spring colors.", details: ["15 Mixed Tulips", "Hand-Wrapped"], inStock: true },
  { id: 26, name: "Red Romance", price: 39.99, originalPrice: 49.99, img: "/tulips-red-yellow.jpg", tag: "Classic", category: "tulips", rating: 4.7, reviews: 156, description: "Classic red tulips for romantic gestures.", details: ["20 Red Tulips", "Satin Ribbon"], inStock: true },
  { id: 27, name: "Orange Delight", price: 35, originalPrice: null, img: "/orange-tulips.jpg", tag: "Popular", category: "tulips", rating: 4.5, reviews: 201, description: "Soft orange tulips for a gentle touch.", details: ["15 Pink Tulips", "Kraft Wrap"], inStock: true },
  { id: 28, name: "Reb & Blue  Elegance", price: 39.99, originalPrice: 59.99, img: "/red-blue-tulips.jpg", tag: "Wedding", category: "tulips", rating: 4.8, reviews: 134, description: "Pure white tulips for elegant occasions.", details: ["20 White Tulips", "Glass Vase"], inStock: true },
  { id: 29, name: "Parrot  Mix", price: 59.99, originalPrice: 99.99, img: "/orange-green-tulips.jpg", tag: "Unique", category: "tulips", rating: 4.9, reviews: 67, description: "Exotic parrot tulips with ruffled petals.", details: ["12 Parrot Tulips", "Decorative Wrap"], inStock: true },
  { id: 30, name: "Sunshine Tulips", price: 33.99, originalPrice: 39.99, img: "/orange-blue-yellow-tulips.jpg", tag: "Cheerful", category: "tulips", rating: 4.6, reviews: 189, description: "Bright yellow tulips to brighten any space.", details: ["15 Yellow Tulips", "Simple Wrap"], inStock: true },
  { id: 31, name: "Cotton Candy Dream", price: 38, originalPrice: null, img: "/cotton-candy-tulips.jpg", tag: "Popular", category: "tulips", rating: 4.7, reviews: 112, description: "Deep purple tulips for a dramatic look.", details: ["18 Purple Tulips", "Rustic Wrap"], inStock: true },
  { id: 32, name: "French Tulip Luxe", price: 68, originalPrice: 99.99, img: "/black-purple-tulips.jpg", tag: "Luxury", category: "tulips", rating: 5.0, reviews: 45, description: "Premium French tulips with extra-long stems.", details: ["25 French Tulips", "Designer Vase"], inStock: true },

  // ========== LILIES (8) ==========
  { id: 33, name: "Elegant Lily Cascade", price: 72.99, originalPrice: 89.99, img: "/elegant-lily.jpg", tag: "Luxury", category: "lilies", rating: 4.9, reviews: 67, description: "Majestic Oriental lilies in pristine white.", details: ["6 Oriental Lilies", "Premium Vase"], inStock: true },
  { id: 34, name: "Stargazer Lily Bouquet", price: 65.99, originalPrice: null, img: "/yellow-lly.jpg", tag: "Bestseller", category: "lilies", rating: 4.8, reviews: 198, description: "Fragrant stargazer lilies with vibrant yellow.", details: ["8 Stargazer Lilies", "Glass Vase"], inStock: true },
  { id: 35, name: "Calla Lily Elegance", price: 59.99, originalPrice: 69.99, img: "/orange-lily.jpg", tag: "Wedding", category: "lilies", rating: 4.9, reviews: 145, description: "Sophisticated calla lilies for modern elegance.", details: ["10 Calla Lilies", "Ceramic Vase"], inStock: true },
  { id: 36, name: "Dark Moon Lily Mix", price: 49.99, originalPrice: null, img: "/red-black-lillies.jpg", tag: "Popular", category: "lilies", rating: 4.6, reviews: 234, description: "Dark theme Asiatic lilies in mixed hues.", details: ["12 Asiatic Lilies", "Hand-Tied"], inStock: true },
  { id: 37, name: "White Casa Blanca", price: 79.99, originalPrice: 89.99, img: "/white-lily.jpg", tag: "Premium", category: "lilies", rating: 5.0, reviews: 89, description: "Iconic white Casa Blanca lilies.", details: ["6 Casa Blanca Lilies", "Crystal Vase"], inStock: true },
  { id: 38, name: "Tiger Lily Wild", price: 52.99, originalPrice: null, img: "/tiger-lily.jpg", tag: "Unique", category: "lilies", rating: 4.7, reviews: 76, description: "Bold tiger lilies with spotted petals.", details: ["8 Tiger Lilies", "Natural Wrap"], inStock: true },
  { id: 39, name: "Pink Lily Romance", price: 55.99, originalPrice: 65.99, img: "/pink-lily.jpg", tag: "Romantic", category: "lilies", rating: 4.8, reviews: 112, description: "Soft pink lilies for romantic occasions.", details: ["10 Pink Lilies", "Satin Ribbon"], inStock: true },
  { id: 40, name: "Lily & Rose Luxe", price: 95.99, originalPrice: 115.99, img: "/rose-lilly.jpg", tag: "Luxury", category: "lilies", rating: 5.0, reviews: 56, description: "Premium lilies paired with garden roses.", details: ["5 Lilies", "8 Roses", "Designer Vase"], inStock: true },

  // ========== HYDRANGEAS (8) ==========
  { id: 41, name: "Full Moon Hydrangea", price: 49.99, originalPrice: null, img: "/red-black-hy.jpg", tag: "Popular", category: "hydrangeas", rating: 4.6, reviews: 189, description: "Lush hydrangea blooms in red and black.", details: ["3 Large Hydrangea Stems", "Glass Vase"], inStock: true },
  { id: 42, name: "Deluxe Hydrangea Cloud", price: 59.99, originalPrice: 69.99, img: "/deluxe-hy.jpg", tag: "Bestseller", category: "hydrangeas", rating: 4.8, reviews: 234, description: "Dreamy blue hydrangeas in full bloom.", details: ["4 Blue Hydrangeas", "Ceramic Pot"], inStock: true },
  { id: 43, name: "Pink Hydrangea Blush", price: 54.99, originalPrice: null, img: "/pink-hy.jpg", tag: "Romantic", category: "hydrangeas", rating: 4.7, reviews: 156, description: "Soft pink hydrangeas for a romantic touch.", details: ["3 Pink Hydrangeas", "Rustic Vase"], inStock: true },
  { id: 44, name: "Sky Blue Hydrangea Pure", price: 64.99, originalPrice: 69.99, img: "/sky-hy.jpg", tag: "Wedding", category: "hydrangeas", rating: 4.9, reviews: 145, description: "Pure sky blue hydrangeas for elegant events.", details: ["4 White Hydrangeas", "Crystal Vase"], inStock: true },
  { id: 45, name: "Green Hydrangea Fresh", price: 49.99, originalPrice: null, img: "/green-hy.jpg", tag: "Natural", category: "hydrangeas", rating: 4.5, reviews: 89, description: "Fresh green hydrangeas for modern spaces.", details: ["3 Green Hydrangeas", "Simple Vase"], inStock: true },
  { id: 46, name: "Purple Hydrangea Magic", price: 59.99, originalPrice: null, img: "/purple-hi.jpg", tag: "Popular", category: "hydrangeas", rating: 4.7, reviews: 112, description: "Deep purple hydrangeas with magical appeal.", details: ["4 Purple Hydrangeas", "Glass Vase"], inStock: true },
  { id: 47, name: "Hydrangea Orange lush", price: 74.99, originalPrice: 89.99, img: "/orange-hy.jpg", tag: "Premium", category: "hydrangeas", rating: 4.9, reviews: 67, description: "Mixed hydrangea colors in garden style.", details: ["6 Mixed Hydrangeas", "Designer Vase"], inStock: true },
  { id: 48, name: "Turqoise Suprise", price: 49.99, originalPrice: null, img: "/turq-hy.jpg", tag: "Unique", category: "hydrangeas", rating: 4.6, reviews: 78, description: "Preserved hydrangeas that last for months.", details: ["5 Dried Hydrangeas", "Decorative Vase"], inStock: true },

  // ========== SUNFLOWERS (8) ==========
  { id: 49, name: "Sunflower Sunshine", price: 34.99, originalPrice: 49.99, img: "/yellow-sun.jpg", tag: "Cheerful", category: "sunflowers", rating: 4.8, reviews: 234, description: "Bright sunflowers that radiate happiness.", details: ["6 Large Sunflowers", "Rustic Wrap"], inStock: true },
  { id: 50, name: "Giant Sunflower Burst", price: 49.99, originalPrice: 59.99, img: "/blue-yellow-sun.jpg", tag: "Popular", category: "sunflowers", rating: 4.7, reviews: 189, description: "A burst of lectric blue sunflowers for maximum impact.", details: ["5 Giant Sunflowers", "Mason Jar"], inStock: true },
  { id: 51, name: "Sunflower & Daisy Mix", price: 44.99, originalPrice: null, img: "/daisy-sun.jpg", tag: "Fresh", category: "sunflowers", rating: 4.6, reviews: 145, description: "Cheerful mix of sunflowers and daisies.", details: ["4 Sunflowers", "6 Daisies"], inStock: true },
  { id: 52, name: "Teddy Bear Sunflowers", price: 39.99, originalPrice: null, img: "/teddy-sun.jpg", tag: "Unique", category: "sunflowers", rating: 4.9, reviews: 98, description: "Adorable fluffy teddy bear sunflower variety.", details: ["8 Teddy Bear Sunflowers", "Kraft Wrap"], inStock: true },
  { id: 53, name: "Autumn Sunflower Glow", price: 44.99, originalPrice: 59.99, img: "/rose-sun-warm.jpg", tag: "Seasonal", category: "sunflowers", rating: 4.7, reviews: 112, description: "Warm-toned sunflowers perfect for fall with a rose white.", details: ["6 Autumn Sunflowers", "Seasonal Accents"], inStock: true },
  { id: 54, name: "Mini Sunflower Bunch", price: 29.99, originalPrice: null, img: "/sun-mini.jpg", tag: "Petite", category: "sunflowers", rating: 4.5, reviews: 167, description: "Petite sunflowers perfect for small spaces.", details: ["10 Mini Sunflowers", "Simple Wrap"], inStock: true },
  { id: 55, name: "Dark Red Luxe", price: 64.99, originalPrice: 79.99, img: "/red-black-sun.jpg", tag: "Premium", category: "sunflowers", rating: 4.9, reviews: 56, description: "Abundant sunflowers like a field in bloom.", details: ["12 Sunflowers", "Designer Bucket"], inStock: true },
  { id: 56, name: "Red Sunflower Rare", price: 54.99, originalPrice: 74.99, img: "/orange-sun.jpg", tag: "Unique", category: "sunflowers", rating: 4.8, reviews: 45, description: "Rare red and burgundy sunflower variety.", details: ["6 Red Sunflowers", "Ceramic Vase"], inStock: true },

  // ========== MIXED BOUQUETS (8) ==========
  { id: 57, name: "Lavender Garden", price: 139.99, originalPrice: 149.99, img: "/lav-mix.jpg", tag: "Popular", category: "mixed", rating: 4.7, reviews: 203, description: "Calming lavender with purple blooms.", details: ["Fresh Lavender", "Purple Lisianthus"], inStock: true },
  { id: 58, name: "Wildflower Meadow", price: 49.99, originalPrice: null, img: "/assortment1.jpg", tag: "Natural", category: "mixed", rating: 4.7, reviews: 145, description: "Free-spirited seasonal wildflowers.", details: ["Seasonal Wildflowers", "Eco-Wrap"], inStock: true },
  { id: 59, name: "White Elegance", price: 69.99, originalPrice: 79.99, img: "/white-mix.jpg", tag: "Classic", category: "mixed", rating: 4.9, reviews: 178, description: "Timeless white blooms mixed together.", details: ["White Roses", "Hydrangeas"], inStock: true },
  { id: 60, name: "Garden Party Mix", price: 59.99, originalPrice: null, img: "/garden-mix.jpg", tag: "Fresh", category: "mixed", rating: 4.6, reviews: 134, description: "A cheerful mix perfect for celebrations.", details: ["Mixed Seasonal Flowers", "Decorative Wrap"], inStock: true },
  { id: 61, name: "Romantic Luxe ", price: 71.99, originalPrice: 89.99, img: "/red-mix.jpg", tag: "Romantic", category: "mixed", rating: 4.8, reviews: 167, description: "Soft pink and blush tones for romance.", details: ["Roses", "Peonies", "Ranunculus"], inStock: true },
  { id: 62, name: "Autumn Harvest", price: 52.99, originalPrice: null, img: "/aut-mix.jpg", tag: "Seasonal", category: "mixed", rating: 4.7, reviews: 98, description: "Warm fall colors in a rustic arrangement.", details: ["Mums", "Sunflowers", "Berries"], inStock: true },
  { id: 63, name: "Spring Awakening", price: 59.99, originalPrice: 69.99, img: "/spring-mix.jpg", tag: "Seasonal", category: "mixed", rating: 4.8, reviews: 156, description: "Fresh spring blooms to celebrate renewal.", details: ["Tulips", "Daffodils", "Hyacinths"], inStock: true },
  { id: 64, name: "Designer's Choice Luxe", price: 99.99, originalPrice: 114.99, img: "/design-mix.jpg", tag: "Luxury", category: "mixed", rating: 5.0, reviews: 89, description: "Our florist's premium seasonal selection.", details: ["Premium Seasonal Mix", "Designer Vase"], inStock: true },
];

// Dynamic category counts
export const categories = [
  { id: 'all', name: 'All Flowers', count: products.length },
  { id: 'roses', name: 'Roses', count: products.filter(p => p.category === 'roses').length },
  { id: 'peonies', name: 'Peonies', count: products.filter(p => p.category === 'peonies').length },
  { id: 'orchids', name: 'Orchids', count: products.filter(p => p.category === 'orchids').length },
  { id: 'tulips', name: 'Tulips', count: products.filter(p => p.category === 'tulips').length },
  { id: 'lilies', name: 'Lilies', count: products.filter(p => p.category === 'lilies').length },
  { id: 'hydrangeas', name: 'Hydrangeas', count: products.filter(p => p.category === 'hydrangeas').length },
  { id: 'sunflowers', name: 'Sunflowers', count: products.filter(p => p.category === 'sunflowers').length },
  { id: 'mixed', name: 'Mixed Bouquets', count: products.filter(p => p.category === 'mixed').length },
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = () => products.filter(p => 
  ['Bestseller', 'Premium', 'Luxury'].includes(p.tag)
).slice(0, 8);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.tag.toLowerCase().includes(lowerQuery)
  );
};
