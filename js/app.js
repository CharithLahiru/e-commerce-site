// ===== KAPRUKA CLONE - APP.JS =====

// ---- State ----
let cart = JSON.parse(localStorage.getItem('kapruka_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('kapruka_wishlist') || '[]');
let currentSlide = 0;
let slideInterval;
let countdownSeconds = 8 * 3600 + 23 * 60 + 45;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderAllGrids();
  updateCartUI();
  startSlider();
  startCountdown();
  setupScrollWatcher();
});

// ---- PRODUCT CARD BUILDER ----
function buildCard(product) {
  const badgeHtml = product.badge
    ? `<span class="card-badge ${product.badge === 'NEW' ? 'badge-new' : product.badge === 'HOT' ? 'badge-hot' : ''}">${product.badge}</span>`
    : '';

  const originalHtml = product.originalPrice
    ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>
       <span class="price-discount">-${product.discount}%</span>`
    : '';

  const inWishlist = wishlist.includes(product.id);

  return `
    <div class="product-card" data-id="${product.id}" onclick="openProduct('${product.id}')">
      <div class="card-thumb">
        <!-- <div class="card-thumb-emoji">${product.emoji}</div> -->
        <div class="card-thumb-image">
          <img src="${product.imageUrl}" alt="${product.name}" loading="lazy" onerror="this.src='fallback-image.png'">
        </div>
        ${badgeHtml}
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="card-act-btn" title="Add to Wishlist" onclick="toggleWishlistItem('${product.id}', this)">
            ${inWishlist ? '❤️' : '🤍'}
          </button>
          <button class="card-act-btn" title="Quick View" onclick="quickView('${product.id}')">👁️</button>
        </div>
      </div>
      <div class="card-body">
        <p class="card-cat">${product.category}</p>
        <p class="card-name">${product.name}</p>
        <div class="card-rating">
          <span class="stars">${getStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="card-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${originalHtml}
        </div>
      </div>
      <div class="card-footer">
        <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${product.id}')">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  `;
}

function renderGrid(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = products.map(buildCard).join('');
}

function renderAllGrids() {
  renderGrid('flashSaleGrid', PRODUCTS.flashSale);
  renderGrid('giftsGrid', PRODUCTS.gifts);
  renderGrid('flowersGrid', PRODUCTS.flowers);
  renderGrid('cakesGrid', PRODUCTS.cakes);
  renderGrid('electronicsGrid', PRODUCTS.electronics);
  renderGrid('clothingGrid', PRODUCTS.clothing);
  renderGrid('groceryGrid', PRODUCTS.grocery);
}

// ---- FILTER TABS ----
function filterProducts(section, tag, btn) {
  // Update active tab
  btn.closest('.filter-tabs').querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const gridId = section + 'Grid';
  const allProducts = PRODUCTS[section];
  const filtered = tag === 'all' ? allProducts : allProducts.filter(p => p.tag === tag);

  const el = document.getElementById(gridId);
  if (!el) return;
  el.style.opacity = '0';
  el.style.transform = 'translateY(8px)';
  el.style.transition = 'opacity .25s, transform .25s';

  setTimeout(() => {
    renderGrid(gridId, filtered);
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 150);
}

// ---- CART ----
function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`✅ "${product.name}" added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  renderCartSidebar();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else {
    saveCart();
    renderCartSidebar();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem('kapruka_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartItemCount').textContent = total;
}

function renderCartSidebar() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <p>🛒</p>
        <p>Your cart is empty</p>
        <button class="btn btn-primary" onclick="toggleCart()">Start Shopping</button>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  let total = 0;
  const html = cart.map(item => {
    const p = findProduct(item.id);
    if (!p) return '';
    const subtotal = p.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <div class="ci-thumb">${p.emoji}</div>
        <div class="ci-info">
          <p class="ci-name">${p.name}</p>
          <p class="ci-price">${formatPrice(p.price)}</p>
          <div class="ci-qty">
            <button onclick="changeQty('${p.id}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${p.id}', +1)">+</button>
            <button class="ci-remove" onclick="removeFromCart('${p.id}')">🗑️</button>
          </div>
        </div>
      </div>`;
  }).join('');

  container.innerHTML = html;
  document.getElementById('cartTotal').textContent = formatPrice(total);
  footer.style.display = 'block';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');

  if (!isOpen) {
    renderCartSidebar();
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ---- WISHLIST ----
function toggleWishlistItem(productId, btn) {
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
    btn.textContent = '❤️';
    showToast('❤️ Added to wishlist!');
  } else {
    wishlist.splice(idx, 1);
    btn.textContent = '🤍';
    showToast('Removed from wishlist');
  }
  localStorage.setItem('kapruka_wishlist', JSON.stringify(wishlist));
}

function toggleWishlist() {
  showToast(`❤️ You have ${wishlist.length} item(s) in your wishlist`);
}

// ---- SEARCH ----
function handleSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;

  const allProducts = Object.values(PRODUCTS).flat();
  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  showToast(`🔍 Found ${results.length} result(s) for "${query}"`);

  if (results.length > 0) {
    renderGrid('giftsGrid', results.slice(0, 8));
    document.getElementById('gifts').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('#gifts .section-title').textContent = `🔍 Search: "${query}"`;
  }
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

// ---- HERO SLIDER ----
function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  const slides = document.querySelectorAll('.hero-slide');
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

// ---- MEGA MENU ----
function toggleMegaMenu() {
  document.getElementById('megaMenu').classList.toggle('open');
}

document.addEventListener('click', e => {
  const menu = document.getElementById('megaMenu');
  if (!menu.contains(e.target) && !e.target.closest('.nav-all-btn')) {
    menu.classList.remove('open');
  }
});

// ---- COUNTDOWN ----
function startCountdown() {
  function tick() {
    if (countdownSeconds <= 0) {
      countdownSeconds = 24 * 3600; // Reset daily
    }
    const h = Math.floor(countdownSeconds / 3600);
    const m = Math.floor((countdownSeconds % 3600) / 60);
    const s = countdownSeconds % 60;

    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cdH').textContent = pad(h);
    document.getElementById('cdM').textContent = pad(m);
    document.getElementById('cdS').textContent = pad(s);
    countdownSeconds--;
  }
  tick();
  setInterval(tick, 1000);
}

// ---- TOAST ----
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- PRODUCT ACTIONS ----
function findProduct(id) {
  return Object.values(PRODUCTS).flat().find(p => p.id === id);
}

function openProduct(id) {
  const p = findProduct(id);
  if (!p) return;
  showToast(`👁️ Viewing: ${p.name}`);
}

function quickView(id) {
  const p = findProduct(id);
  if (!p) return;
  showToast(`🔍 Quick view: ${p.name}`);
}

// ---- NEWSLETTER ----
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !email.includes('@')) {
    showToast('⚠️ Please enter a valid email address');
    return;
  }
  document.getElementById('newsletterEmail').value = '';
  showToast('🎉 Subscribed! Enjoy 10% off your first order.');
}

// ---- SCROLL WATCHER ----
function setupScrollWatcher() {
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  });
}
