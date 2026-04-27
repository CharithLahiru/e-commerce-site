// ===== PRODUCT DATA =====
const PRODUCTS = {
  flashSale: [
    { id: 'fs1', name: 'Samsung Galaxy A35 5G', category: 'Electronics', emoji: '📱', price: 84999, originalPrice: 119999, discount: 29, rating: 4.5, reviews: 312, badge: 'SALE', tag: 'phones' },
    { id: 'fs2', name: 'JBL Flip 6 Bluetooth Speaker', category: 'Electronics', emoji: '🔊', price: 18500, originalPrice: 26000, discount: 29, rating: 4.7, reviews: 218, badge: 'SALE', tag: 'audio' },
    { id: 'fs3', name: 'Nike Air Max 270 Sneakers', category: 'Footwear', emoji: '👟', price: 22900, originalPrice: 34500, discount: 34, rating: 4.6, reviews: 187, badge: 'HOT', tag: 'men' },
    { id: 'fs4', name: 'Romantic Red Roses Bouquet (12)', category: 'Flowers', emoji: '🌹', price: 3500, originalPrice: 5000, discount: 30, rating: 4.9, reviews: 543, badge: 'SALE', tag: 'roses' },
    { id: 'fs5', name: 'Nescafé Gold Blend 200g', category: 'Grocery', emoji: '☕', price: 1890, originalPrice: 2400, discount: 21, rating: 4.4, reviews: 96, badge: 'SALE', tag: 'beverages' },
    { id: 'fs6', name: 'Bosch Hand Mixer 300W', category: 'Home Appliances', emoji: '🍲', price: 8750, originalPrice: 12500, discount: 30, rating: 4.3, reviews: 74, badge: 'SALE', tag: 'all' },
    { id: 'fs7', name: 'Dove Gift Set (Soap + Lotion)', category: 'Beauty', emoji: '🧴', price: 2100, originalPrice: 3200, discount: 34, rating: 4.5, reviews: 210, badge: 'HOT', tag: 'all' },
    { id: 'fs8', name: 'Premium Chocolate Cake 1kg', category: 'Cakes', emoji: '🎂', price: 4200, originalPrice: 5500, discount: 24, rating: 4.8, reviews: 389, badge: 'HOT', tag: 'all' },
  ],

  gifts: [
    { id: 'g1', name: 'Birthday Surprise Gift Hamper', category: 'Gifts', emoji: '🎁', price: 6500, originalPrice: 9000, discount: 28, rating: 4.8, reviews: 421, badge: 'HOT', tag: 'birthday' },
    { id: 'g2', name: 'Anniversary Gold Jewelry Set', category: 'Gifts', emoji: '💍', price: 18500, originalPrice: 24000, discount: 23, rating: 4.7, reviews: 189, badge: null, tag: 'anniversary' },
    { id: 'g3', name: 'Personalised Photo Frame + Mugs', category: 'Gifts', emoji: '🖼️', price: 3200, originalPrice: 4500, discount: 29, rating: 4.6, reviews: 302, badge: 'NEW', tag: 'birthday' },
    { id: 'g4', name: 'Wedding Congratulations Hamper', category: 'Gifts', emoji: '🥂', price: 12000, originalPrice: 15000, discount: 20, rating: 4.9, reviews: 156, badge: null, tag: 'wedding' },
    { id: 'g5', name: 'Gourmet Chocolate Box (Assorted)', category: 'Gifts', emoji: '🍫', price: 4500, originalPrice: 5500, discount: 18, rating: 4.8, reviews: 634, badge: 'HOT', tag: 'all' },
    { id: 'g6', name: 'Spa & Relaxation Gift Set', category: 'Gifts', emoji: '🧖', price: 7800, originalPrice: 11000, discount: 29, rating: 4.5, reviews: 98, badge: 'NEW', tag: 'anniversary' },
    { id: 'g7', name: 'Kids Birthday Fun Hamper', category: 'Gifts', emoji: '🧸', price: 5200, originalPrice: 7000, discount: 26, rating: 4.7, reviews: 274, badge: null, tag: 'birthday' },
    { id: 'g8', name: 'Premium Wine & Cheese Basket', category: 'Gifts', emoji: '🍷', price: 9500, originalPrice: 13000, discount: 27, rating: 4.6, reviews: 142, badge: null, tag: 'wedding' },
  ],

  flowers: [
    { id: 'fl1', name: 'Red Rose Bouquet (24 stems)', category: 'Flowers', emoji: '🌹', price: 5500, originalPrice: 7000, discount: 21, rating: 4.9, reviews: 712, badge: 'HOT', tag: 'roses' },
    { id: 'fl2', name: 'Mixed Seasonal Flowers Bunch', category: 'Flowers', emoji: '💐', price: 3200, originalPrice: 4200, discount: 24, rating: 4.7, reviews: 389, badge: null, tag: 'mixed' },
    { id: 'fl3', name: 'White Lily Arrangement', category: 'Flowers', emoji: '🌸', price: 4800, originalPrice: 6000, discount: 20, rating: 4.8, reviews: 254, badge: 'NEW', tag: 'lilies' },
    { id: 'fl4', name: 'Sunflower Sunshine Bouquet', category: 'Flowers', emoji: '🌻', price: 3800, originalPrice: 5000, discount: 24, rating: 4.6, reviews: 198, badge: null, tag: 'sunflowers' },
  ],

  cakes: [
    { id: 'c1', name: 'Triple Chocolate Fudge Cake 1kg', category: 'Cakes', emoji: '🎂', price: 4500, originalPrice: 5500, discount: 18, rating: 4.9, reviews: 823, badge: 'HOT', tag: 'chocolate' },
    { id: 'c2', name: 'Fresh Strawberry Cream Cake', category: 'Cakes', emoji: '🍓', price: 3800, originalPrice: 5000, discount: 24, rating: 4.7, reviews: 456, badge: null, tag: 'fruit' },
    { id: 'c3', name: 'Rainbow Funfetti Birthday Cake', category: 'Cakes', emoji: '🌈', price: 4200, originalPrice: 5200, discount: 19, rating: 4.8, reviews: 312, badge: 'NEW', tag: 'birthday' },
    { id: 'c4', name: 'Black Forest Gateau 500g', category: 'Cakes', emoji: '🍒', price: 3200, originalPrice: 4200, discount: 24, rating: 4.7, reviews: 267, badge: null, tag: 'classic' },
  ],

  electronics: [
    { id: 'e1', name: 'iPhone 15 Pro Max 256GB', category: 'Electronics', emoji: '📱', price: 349900, originalPrice: 389900, discount: 10, rating: 4.9, reviews: 1204, badge: 'HOT', tag: 'phones' },
    { id: 'e2', name: 'Samsung 55" 4K QLED Smart TV', category: 'Electronics', emoji: '📺', price: 148000, originalPrice: 189000, discount: 22, rating: 4.7, reviews: 342, badge: 'SALE', tag: 'laptops' },
    { id: 'e3', name: 'Dell Inspiron 15 Laptop i7 16GB', category: 'Electronics', emoji: '💻', price: 189900, originalPrice: 229900, discount: 17, rating: 4.6, reviews: 218, badge: null, tag: 'laptops' },
    { id: 'e4', name: 'Sony WH-1000XM5 Headphones', category: 'Electronics', emoji: '🎧', price: 54900, originalPrice: 74900, discount: 27, rating: 4.9, reviews: 867, badge: 'HOT', tag: 'audio' },
    { id: 'e5', name: 'Apple Watch Series 9 GPS 45mm', category: 'Electronics', emoji: '⌚', price: 89900, originalPrice: 109900, discount: 18, rating: 4.8, reviews: 542, badge: null, tag: 'phones' },
    { id: 'e6', name: 'GoPro HERO12 Black Action Cam', category: 'Electronics', emoji: '📷', price: 78500, originalPrice: 98500, discount: 20, rating: 4.7, reviews: 234, badge: 'NEW', tag: 'phones' },
    { id: 'e7', name: 'Bose QuietComfort 45 Wireless', category: 'Electronics', emoji: '🎵', price: 46900, originalPrice: 59900, discount: 22, rating: 4.8, reviews: 398, badge: null, tag: 'audio' },
    { id: 'e8', name: 'iPad Air 11" M2 Wi-Fi 256GB', category: 'Electronics', emoji: '📟', price: 138900, originalPrice: 165900, discount: 16, rating: 4.8, reviews: 612, badge: 'NEW', tag: 'laptops' },
  ],

  clothing: [
    { id: 'cl1', name: 'Men\'s Slim Fit Oxford Shirt', category: 'Fashion', emoji: '👔', price: 3200, originalPrice: 4500, discount: 29, rating: 4.5, reviews: 312, badge: null, tag: 'men' },
    { id: 'cl2', name: 'Women\'s Floral Maxi Dress', category: 'Fashion', emoji: '👗', price: 5800, originalPrice: 8000, discount: 28, rating: 4.7, reviews: 428, badge: 'HOT', tag: 'women' },
    { id: 'cl3', name: 'Kids Cartoon Printed T-Shirt Set', category: 'Fashion', emoji: '👕', price: 1800, originalPrice: 2500, discount: 28, rating: 4.6, reviews: 189, badge: 'NEW', tag: 'kids' },
    { id: 'cl4', name: 'Men\'s Denim Slim Jeans Navy', category: 'Fashion', emoji: '👖', price: 4500, originalPrice: 6200, discount: 27, rating: 4.4, reviews: 256, badge: null, tag: 'men' },
    { id: 'cl5', name: 'Women\'s Satin Blouse Cream', category: 'Fashion', emoji: '🧥', price: 4200, originalPrice: 5800, discount: 28, rating: 4.6, reviews: 198, badge: null, tag: 'women' },
    { id: 'cl6', name: 'Men\'s Formal Blazer Charcoal', category: 'Fashion', emoji: '🧣', price: 12500, originalPrice: 18000, discount: 31, rating: 4.5, reviews: 143, badge: 'SALE', tag: 'men' },
    { id: 'cl7', name: 'Girls Princess Party Dress', category: 'Fashion', emoji: '👑', price: 3400, originalPrice: 4800, discount: 29, rating: 4.8, reviews: 312, badge: 'NEW', tag: 'kids' },
    { id: 'cl8', name: 'Women\'s Denim Jacket Distressed', category: 'Fashion', emoji: '🧤', price: 6800, originalPrice: 9500, discount: 28, rating: 4.5, reviews: 176, badge: null, tag: 'women' },
  ],

  grocery: [
    { id: 'gr1', name: 'Anchor Full Cream Milk Powder 400g', category: 'Grocery', emoji: '🥛', price: 920, originalPrice: 1100, discount: 16, rating: 4.6, reviews: 712, badge: null, tag: 'dairy' },
    { id: 'gr2', name: 'Basmati Rice Premium 5kg Bag', category: 'Grocery', emoji: '🍚', price: 2200, originalPrice: 2800, discount: 21, rating: 4.5, reviews: 428, badge: null, tag: 'rice' },
    { id: 'gr3', name: 'Milo Chocolate Drink 1kg Tin', category: 'Grocery', emoji: '🍫', price: 1650, originalPrice: 2000, discount: 18, rating: 4.8, reviews: 932, badge: 'HOT', tag: 'beverages' },
    { id: 'gr4', name: 'Fresh Organic Vegetables Box', category: 'Grocery', emoji: '🥦', price: 1800, originalPrice: 2400, discount: 25, rating: 4.7, reviews: 234, badge: 'NEW', tag: 'fresh' },
    { id: 'gr5', name: 'Maliban Cream Crackers 200g', category: 'Grocery', emoji: '🍪', price: 380, originalPrice: 450, discount: 16, rating: 4.4, reviews: 567, badge: null, tag: 'snacks' },
    { id: 'gr6', name: 'Sunquick Mango Cordial 700ml', category: 'Grocery', emoji: '🥭', price: 750, originalPrice: 950, discount: 21, rating: 4.5, reviews: 189, badge: null, tag: 'beverages' },
    { id: 'gr7', name: 'Keells Chicken Frankfurters 400g', category: 'Grocery', emoji: '🌭', price: 1100, originalPrice: 1400, discount: 21, rating: 4.3, reviews: 312, badge: null, tag: 'meat' },
    { id: 'gr8', name: 'Delmege Mixed Fruit Jam 500g', category: 'Grocery', emoji: '🍓', price: 420, originalPrice: 550, discount: 24, rating: 4.4, reviews: 143, badge: null, tag: 'spreads' },
  ]
};

// Format price in Sri Lankan Rupees
function formatPrice(amount) {
  return 'Rs. ' + amount.toLocaleString('en-LK');
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? '½' : '';
  return '★'.repeat(full) + half;
}
