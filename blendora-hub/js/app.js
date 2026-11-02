/**
 * BLENDORA HUB - Main Application Logic
 * Interactive E-Commerce, Custom Resin Studio & WhatsApp Checkout
 */

// Application State
const AppState = {
  currentCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  currency: "USD",
  cart: [],
  wishlist: [],
  appliedDiscount: null,
  whatsappNumber: "+2349065108611", // Merchant WhatsApp: 09065108611
  customStudio: {
    baseProduct: CUSTOM_OPTIONS.products[0],
    floral: CUSTOM_OPTIONS.florals[0],
    inclusion: CUSTOM_OPTIONS.inclusions[0],
    hardware: CUSTOM_OPTIONS.hardware[0],
    customText: "B",
    notes: ""
  }
};

// Initialize application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadStoredData();
  initEventListeners();
  renderProducts();
  renderCurrencySelector();
  updateCustomizerPreview();
  renderCart();
  updateWishlistCount();
});

// ============================================
// THEME MANAGER (DARK / LIGHT MODE)
// ============================================
function initTheme() {
  const savedTheme = localStorage.getItem("blendora_theme") || "light";
  applyTheme(savedTheme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("blendora_theme", newTheme);
  showToast(`${newTheme === "dark" ? "🌙 Dark" : "☀️ Light"} mode enabled`);
}

function applyTheme(theme) {
  const icon = document.getElementById("theme-toggle-icon");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    if (icon) {
      icon.className = "fa-solid fa-sun text-sm text-amber-400";
    }
  } else {
    document.documentElement.classList.remove("dark");
    if (icon) {
      icon.className = "fa-solid fa-moon text-sm text-stone-700";
    }
  }
}

// Load state from localStorage
function loadStoredData() {
  try {
    const savedCart = localStorage.getItem("blendora_cart");
    if (savedCart) AppState.cart = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem("blendora_wishlist");
    if (savedWishlist) AppState.wishlist = JSON.parse(savedWishlist);

    const savedCurrency = localStorage.getItem("blendora_currency");
    if (savedCurrency && CURRENCIES[savedCurrency]) {
      AppState.currency = savedCurrency;
    }

    const savedSettings = localStorage.getItem("blendora_settings");
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      if (parsed.whatsappNumber) AppState.whatsappNumber = parsed.whatsappNumber;
      if (parsed.currencyRates) {
        if (parsed.currencyRates.NGN) CURRENCIES.NGN.rate = parsed.currencyRates.NGN;
        if (parsed.currencyRates.GBP) CURRENCIES.GBP.rate = parsed.currencyRates.GBP;
        if (parsed.currencyRates.EUR) CURRENCIES.EUR.rate = parsed.currencyRates.EUR;
      }
      if (parsed.defaultCurrency && !savedCurrency && CURRENCIES[parsed.defaultCurrency]) {
        AppState.currency = parsed.defaultCurrency;
      }
    }
  } catch (e) {
    console.error("Storage loading error:", e);
  }
}

// Persist Cart
function saveCart() {
  localStorage.setItem("blendora_cart", JSON.stringify(AppState.cart));
}

// Persist Wishlist
function saveWishlist() {
  localStorage.setItem("blendora_wishlist", JSON.stringify(AppState.wishlist));
}

// Helper: Format Price
function formatPrice(usdAmount) {
  const curr = CURRENCIES[AppState.currency] || CURRENCIES.USD;
  const converted = usdAmount * curr.rate;
  return curr.format(converted);
}

// Set up UI Event Listeners
function initEventListeners() {
  // Category tabs
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active", "bg-stone-900", "text-white"));
      categoryButtons.forEach((b) => b.classList.add("bg-stone-100", "text-stone-700"));
      btn.classList.add("active", "bg-stone-900", "text-white");
      btn.classList.remove("bg-stone-100", "text-stone-700");

      AppState.currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Custom Studio Inputs
  setupCustomizerControls();

  // Cart Drawer Toggles
  const cartToggleBtns = document.querySelectorAll(".toggle-cart-btn");
  cartToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => toggleCartDrawer(true));
  });

  const closeCartBtn = document.getElementById("close-cart-btn");
  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  }

  const cartOverlay = document.getElementById("cart-overlay");
  if (cartOverlay) {
    cartOverlay.addEventListener("click", () => toggleCartDrawer(false));
  }

  // Currency select
  const currencySelect = document.getElementById("currency-select");
  if (currencySelect) {
    currencySelect.addEventListener("change", (e) => {
      AppState.currency = e.target.value;
      localStorage.setItem("blendora_currency", AppState.currency);
      renderProducts();
      renderCart();
      updateCustomizerPreview();
      showToast(`Currency changed to ${AppState.currency}`);
    });
  }

  // Promo code apply
  const applyPromoBtn = document.getElementById("apply-promo-btn");
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener("click", applyPromoCode);
  }

  // WhatsApp Express Checkout
  const whatsappCheckoutBtn = document.getElementById("whatsapp-checkout-btn");
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener("click", handleWhatsAppCartOrder);
  }

  // Direct checkout modal
  const standardCheckoutBtn = document.getElementById("standard-checkout-btn");
  if (standardCheckoutBtn) {
    standardCheckoutBtn.addEventListener("click", openCheckoutModal);
  }
}

// Render Currency Selector Options
function renderCurrencySelector() {
  const sel = document.getElementById("currency-select");
  if (!sel) return;
  sel.innerHTML = Object.keys(CURRENCIES)
    .map((code) => `<option value="${code}" ${code === AppState.currency ? "selected" : ""}>${code} (${CURRENCIES[code].symbol})</option>`)
    .join("");
}

// Filter and Sort Products
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchesCategory =
      AppState.currentCategory === "all" || p.category === AppState.currentCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(AppState.searchQuery) ||
      p.description.toLowerCase().includes(AppState.searchQuery) ||
      p.materials.toLowerCase().includes(AppState.searchQuery);
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (AppState.sortBy === "price-low") return a.price - b.price;
    if (AppState.sortBy === "price-high") return b.price - a.price;
    if (AppState.sortBy === "rating") return b.rating - a.rating;
    return 0; // featured default
  });
}

// Render Products Grid
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-stone-400">
          <i class="fa-solid fa-gem text-4xl"></i>
        </div>
        <h3 class="text-xl font-serif text-stone-800">No resin creations found</h3>
        <p class="text-stone-500 mt-1">Try refining your search terms or category filter.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2 rounded-full border border-stone-800 text-stone-800 hover:bg-stone-900 hover:text-white transition text-sm">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((product) => {
      const isWishlisted = AppState.wishlist.includes(product.id);
      return `
      <div class="resin-glass-card rounded-2xl bg-white border border-[#EAE3D9] flex flex-col justify-between group overflow-hidden shadow-sm">
        <div class="relative overflow-hidden aspect-square bg-[#FAF6F0]">
          <!-- Image -->
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onerror="this.src='https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'"
          />
          
          <!-- Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            ${
              product.badge
                ? `<span class="px-2.5 py-1 text-xs font-semibold rounded-full badge-gold">${product.badge}</span>`
                : ""
            }
            <span class="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-white/90 text-stone-800 backdrop-blur-sm border border-stone-200">
              ${product.category}
            </span>
          </div>

          <!-- Quick Action Wishlist & Quick View -->
          <div class="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button 
              onclick="toggleWishlist('${product.id}')"
              class="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-rose-600 transition shadow-sm"
              title="Add to Wishlist"
            >
              <i class="${isWishlisted ? "fa-solid fa-heart text-rose-500" : "fa-regular fa-heart"}"></i>
            </button>
            <button 
              onclick="openProductModal('${product.id}')"
              class="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-800 transition shadow-sm opacity-90 hover:opacity-100"
              title="Quick Details"
            >
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <div class="flex items-center gap-1.5 text-xs text-amber-600 mb-1">
              <i class="fa-solid fa-star text-[11px]"></i>
              <span class="font-semibold text-stone-800">${product.rating}</span>
              <span class="text-stone-400">(${product.reviewsCount})</span>
            </div>
            
            <h3 class="font-serif text-lg font-semibold text-stone-900 group-hover:text-[#b08552] transition leading-snug">
              ${product.name}
            </h3>
            
            <p class="text-xs text-stone-500 line-clamp-2 mt-1.5 font-light">
              ${product.description}
            </p>
          </div>

          <!-- Price & Add Button -->
          <div class="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between">
            <div>
              <span class="text-xs text-stone-400 uppercase tracking-wider block">Price</span>
              <span class="text-lg font-bold text-stone-900 font-serif">
                ${formatPrice(product.price)}
              </span>
            </div>

            <button 
              onclick="addToCart('${product.id}')"
              class="px-4 py-2 bg-stone-900 hover:bg-[#b08552] text-white rounded-xl text-sm font-medium transition flex items-center gap-2 shadow-sm"
            >
              <i class="fa-solid fa-bag-shopping text-xs"></i>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
      `;
    })
    .join("");
}

// Reset search and filter
function resetFilters() {
  AppState.currentCategory = "all";
  AppState.searchQuery = "";
  AppState.sortBy = "featured";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((b) => {
    if (b.getAttribute("data-category") === "all") {
      b.classList.add("bg-stone-900", "text-white");
      b.classList.remove("bg-stone-100", "text-stone-700");
    } else {
      b.classList.remove("bg-stone-900", "text-white");
      b.classList.add("bg-stone-100", "text-stone-700");
    }
  });

  renderProducts();
}

// Wishlist Handling
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    AppState.wishlist.push(productId);
    showToast("Added to your wishlist!");
  }
  saveWishlist();
  updateWishlistCount();
  renderProducts();
}

function updateWishlistCount() {
  const countEl = document.getElementById("wishlist-count");
  if (countEl) {
    countEl.textContent = AppState.wishlist.length;
    countEl.classList.toggle("hidden", AppState.wishlist.length === 0);
  }
}

// Add Standard Product to Cart
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existingIndex = AppState.cart.findIndex(
    (item) => item.id === productId && !item.isCustom
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += qty;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: qty,
      isCustom: false
    });
  }

  saveCart();
  renderCart();
  showToast(`Added "${product.name}" to bag!`);
}

// Cart Drawer open/close
function toggleCartDrawer(open) {
  const overlay = document.getElementById("cart-overlay");
  const panel = document.getElementById("cart-panel");
  if (!overlay || !panel) return;

  if (open) {
    overlay.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.remove("opacity-0");
      panel.classList.remove("translate-x-full");
    }, 10);
  } else {
    overlay.classList.add("opacity-0");
    panel.classList.add("translate-x-full");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 350);
  }
}

// Update Cart UI
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items-container");
  const cartCountBadges = document.querySelectorAll(".cart-count-badge");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartDiscountEl = document.getElementById("cart-discount");
  const cartTotalEl = document.getElementById("cart-total");

  // Total Quantity count
  const totalItemsCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadges.forEach((badge) => {
    badge.textContent = totalItemsCount;
    badge.classList.toggle("hidden", totalItemsCount === 0);
  });

  if (!cartItemsContainer) return;

  if (AppState.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="py-16 text-center text-stone-500">
        <i class="fa-solid fa-basket-shopping text-4xl text-stone-300 mb-3 block"></i>
        <p class="font-serif text-lg text-stone-700">Your shopping bag is empty</p>
        <p class="text-xs text-stone-400 mt-1">Explore our handcrafted resin items or design your own piece!</p>
        <button onclick="toggleCartDrawer(false)" class="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold tracking-wide uppercase hover:bg-stone-800">
          Continue Shopping
        </button>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(0);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(0);
    if (cartDiscountEl) cartDiscountEl.textContent = formatPrice(0);
    return;
  }

  // Render items
  cartItemsContainer.innerHTML = AppState.cart
    .map((item, index) => {
      return `
      <div class="flex gap-3 py-3 border-b border-stone-100 items-center">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-16 h-16 rounded-xl object-cover border border-stone-200 bg-stone-50 flex-shrink-0"
        />
        <div class="flex-grow min-w-0">
          <div class="flex justify-between items-start gap-1">
            <h4 class="font-medium text-stone-800 text-sm truncate">${item.name}</h4>
            <button onclick="removeFromCart(${index})" class="text-stone-400 hover:text-rose-500 text-xs p-1">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          ${
            item.isCustom
              ? `<p class="text-[11px] text-amber-700 bg-amber-50 rounded px-1.5 py-0.5 inline-block mt-0.5">${item.customDetails}</p>`
              : `<span class="text-[11px] text-stone-400 uppercase tracking-wider">${item.category}</span>`
          }
          <div class="flex justify-between items-center mt-2">
            <span class="text-stone-900 font-semibold text-sm">${formatPrice(item.price)}</span>
            
            <!-- Quantity controls -->
            <div class="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-white">
              <button onclick="updateCartQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-xs text-stone-600 hover:bg-stone-100">-</button>
              <span class="w-7 text-center text-xs font-medium text-stone-800">${item.quantity}</span>
              <button onclick="updateCartQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-xs text-stone-600 hover:bg-stone-100">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Subtotal & Discounts
  const subtotalUSD = AppState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discountUSD = 0;

  if (AppState.appliedDiscount) {
    discountUSD = subtotalUSD * AppState.appliedDiscount.percent;
  }

  const finalUSD = Math.max(0, subtotalUSD - discountUSD);

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotalUSD);
  if (cartDiscountEl) cartDiscountEl.textContent = `-${formatPrice(discountUSD)}`;
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(finalUSD);
}

// Modify cart item quantity
function updateCartQuantity(index, delta) {
  if (!AppState.cart[index]) return;
  AppState.cart[index].quantity += delta;
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

// Remove from cart
function removeFromCart(index) {
  AppState.cart.splice(index, 1);
  saveCart();
  renderCart();
  showToast("Item removed from bag");
}

// Apply Promo Code
function applyPromoCode() {
  const codeInput = document.getElementById("promo-code-input");
  if (!codeInput) return;
  const code = codeInput.value.trim().toUpperCase();

  const VALID_CODES = {
    BLENDORA10: { percent: 0.1, label: "10% Welcome Discount" },
    SPARKLE15: { percent: 0.15, label: "15% Resin Lovers Discount" }
  };

  if (VALID_CODES[code]) {
    AppState.appliedDiscount = VALID_CODES[code];
    renderCart();
    showToast(`Coupon applied! ${VALID_CODES[code].label}`);
    codeInput.value = "";
  } else {
    showToast("Invalid promo code. Try 'BLENDORA10'");
  }
}

// ============================================
// CUSTOM RESIN STUDIO LOGIC
// ============================================
function setupCustomizerControls() {
  // Base Product Selector
  const baseSelect = document.getElementById("custom-base-select");
  if (baseSelect) {
    baseSelect.innerHTML = CUSTOM_OPTIONS.products
      .map(
        (p) => `<option value="${p.id}">${p.name} (from ${formatPrice(p.basePrice)})</option>`
      )
      .join("");

    baseSelect.addEventListener("change", (e) => {
      AppState.customStudio.baseProduct =
        CUSTOM_OPTIONS.products.find((p) => p.id === e.target.value) || CUSTOM_OPTIONS.products[0];
      updateCustomizerPreview();
    });
  }

  // Floral Options Buttons
  const floralContainer = document.getElementById("custom-floral-options");
  if (floralContainer) {
    floralContainer.innerHTML = CUSTOM_OPTIONS.florals
      .map(
        (f, idx) => `
        <button 
          type="button" 
          onclick="selectCustomFloral('${f.id}')"
          class="custom-floral-btn p-2 rounded-xl border ${idx === 0 ? "border-amber-700 bg-amber-50" : "border-stone-200 bg-white"} text-left flex items-center gap-2 hover:border-amber-600 transition"
          data-id="${f.id}"
        >
          <span class="w-4 h-4 rounded-full border border-black/10 flex-shrink-0" style="background-color: ${f.color}"></span>
          <span class="text-xs text-stone-800 font-medium">${f.name}</span>
        </button>
      `
      )
      .join("");
  }

  // Inclusions Select
  const inclusionsSelect = document.getElementById("custom-inclusion-select");
  if (inclusionsSelect) {
    inclusionsSelect.innerHTML = CUSTOM_OPTIONS.inclusions
      .map((inc) => `<option value="${inc.id}">${inc.name}</option>`)
      .join("");

    inclusionsSelect.addEventListener("change", (e) => {
      AppState.customStudio.inclusion =
        CUSTOM_OPTIONS.inclusions.find((inc) => inc.id === e.target.value) ||
        CUSTOM_OPTIONS.inclusions[0];
      updateCustomizerPreview();
    });
  }

  // Hardware Select
  const hardwareSelect = document.getElementById("custom-hardware-select");
  if (hardwareSelect) {
    hardwareSelect.innerHTML = CUSTOM_OPTIONS.hardware
      .map((h) => `<option value="${h.id}">${h.name}</option>`)
      .join("");

    hardwareSelect.addEventListener("change", (e) => {
      AppState.customStudio.hardware =
        CUSTOM_OPTIONS.hardware.find((h) => h.id === e.target.value) ||
        CUSTOM_OPTIONS.hardware[0];
      updateCustomizerPreview();
    });
  }

  // Custom text input
  const textInput = document.getElementById("custom-text-input");
  if (textInput) {
    textInput.addEventListener("input", (e) => {
      AppState.customStudio.customText = e.target.value.trim().toUpperCase() || "B";
      updateCustomizerPreview();
    });
  }

  // Add custom to cart button
  const addCustomBtn = document.getElementById("add-custom-to-cart-btn");
  if (addCustomBtn) {
    addCustomBtn.addEventListener("click", addCustomStudioToCart);
  }

  // Direct WhatsApp custom piece order
  const orderCustomWhatsAppBtn = document.getElementById("custom-whatsapp-direct-btn");
  if (orderCustomWhatsAppBtn) {
    orderCustomWhatsAppBtn.addEventListener("click", orderCustomStudioViaWhatsApp);
  }
}

function selectCustomFloral(floralId) {
  const floral = CUSTOM_OPTIONS.florals.find((f) => f.id === floralId);
  if (!floral) return;
  AppState.customStudio.floral = floral;

  document.querySelectorAll(".custom-floral-btn").forEach((btn) => {
    if (btn.getAttribute("data-id") === floralId) {
      btn.classList.add("border-amber-700", "bg-amber-50");
      btn.classList.remove("border-stone-200", "bg-white");
    } else {
      btn.classList.remove("border-amber-700", "bg-amber-50");
      btn.classList.add("border-stone-200", "bg-white");
    }
  });

  updateCustomizerPreview();
}

function calculateCustomPrice() {
  const base = AppState.customStudio.baseProduct.basePrice;
  const extraInclusion = AppState.customStudio.inclusion.extra || 0;
  return base + extraInclusion;
}

function updateCustomizerPreview() {
  const mold = document.getElementById("interactive-resin-mold");
  const letterPreview = document.getElementById("resin-preview-letter");
  const floralHue = document.getElementById("resin-preview-floral");
  const hardwareBadge = document.getElementById("resin-preview-hardware");
  const priceDisplay = document.getElementById("custom-studio-price");

  if (!mold) return;

  // Change mold shape
  mold.className = "resin-pendant-mold relative flex items-center justify-center";
  const baseId = AppState.customStudio.baseProduct.id;
  if (baseId.includes("keychain")) mold.classList.add("shape-letter");
  else if (baseId.includes("pendant")) mold.classList.add("shape-teardrop");
  else if (baseId.includes("earrings")) mold.classList.add("shape-earrings");
  else if (baseId.includes("tag")) mold.classList.add("shape-tag");
  else mold.classList.add("shape-teardrop");

  // Update Letter
  if (letterPreview) {
    letterPreview.textContent = AppState.customStudio.customText || "✦";
  }

  // Update Floral color wash
  if (floralHue) {
    floralHue.style.background = `radial-gradient(circle at center, ${AppState.customStudio.floral.color}90 0%, transparent 75%)`;
  }

  // Update hardware border
  if (AppState.customStudio.hardware.id === "silver") {
    mold.style.borderColor = "rgba(192, 192, 192, 0.9)";
  } else if (AppState.customStudio.hardware.id === "rose-gold") {
    mold.style.borderColor = "rgba(235, 175, 155, 0.9)";
  } else {
    mold.style.borderColor = "rgba(212, 175, 55, 0.85)";
  }

  // Update Price
  if (priceDisplay) {
    priceDisplay.textContent = formatPrice(calculateCustomPrice());
  }

  if (hardwareBadge) {
    hardwareBadge.textContent = `${AppState.customStudio.hardware.name.split("/")[0]}`;
  }
}

function addCustomStudioToCart() {
  const customPrice = calculateCustomPrice();
  const summary = `${AppState.customStudio.floral.name} + ${AppState.customStudio.inclusion.name} | Text: "${AppState.customStudio.customText}" | ${AppState.customStudio.hardware.name}`;

  AppState.cart.push({
    id: `custom-${Date.now()}`,
    name: AppState.customStudio.baseProduct.name,
    price: customPrice,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    category: AppState.customStudio.baseProduct.category,
    quantity: 1,
    isCustom: true,
    customDetails: summary
  });

  saveCart();
  renderCart();
  toggleCartDrawer(true);
  showToast("Custom piece added to your bag!");
}

// Helper to format WhatsApp phone number to international wa.me standard
function getWhatsAppCleanNumber() {
  let num = AppState.whatsappNumber.replace(/[^0-9]/g, "");
  // If number starts with 0 (e.g. 09065108611), convert to Nigerian international format 2349065108611
  if (num.startsWith("0") && num.length === 11) {
    num = "234" + num.substring(1);
  }
  return num;
}

function orderCustomStudioViaWhatsApp() {
  const customPrice = calculateCustomPrice();
  const msg = 
`✨ *CUSTOM RESIN ORDER REQUEST - BLENDORA HUB* ✨
------------------------------------------
*Product:* ${AppState.customStudio.baseProduct.name}
*Personalized Initial/Text:* ${AppState.customStudio.customText}
*Flora / Botanical:* ${AppState.customStudio.floral.name}
*Inclusion / Flakes:* ${AppState.customStudio.inclusion.name}
*Hardware Finish:* ${AppState.customStudio.hardware.name}
*Estimated Price:* ${formatPrice(customPrice)} (${AppState.currency})
------------------------------------------
Hello Blendora Hub! I would love to place a custom order with these exact specifications. Please let me know how we can proceed!`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${getWhatsAppCleanNumber()}?text=${encoded}`, "_blank");
}

// ============================================
// WHATSAPP CART CHECKOUT
// ============================================
function handleWhatsAppCartOrder() {
  if (AppState.cart.length === 0) {
    showToast("Your bag is empty! Add items first.");
    return;
  }

  const subtotalUSD = AppState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountUSD = AppState.appliedDiscount ? subtotalUSD * AppState.appliedDiscount.percent : 0;
  const finalUSD = Math.max(0, subtotalUSD - discountUSD);

  let itemsList = "";
  AppState.cart.forEach((item, index) => {
    itemsList += `${index + 1}. *${item.name}* x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    if (item.isCustom) {
      itemsList += `   ↳ _Custom specs: ${item.customDetails}_\n`;
    }
  });

  const msg = 
`🌸 *NEW ORDER FROM BLENDORA HUB WEBSITE* 🌸
-----------------------------------------
${itemsList}-----------------------------------------
*Subtotal:* ${formatPrice(subtotalUSD)}
${AppState.appliedDiscount ? `*Discount (${AppState.appliedDiscount.label}):* -${formatPrice(discountUSD)}\n` : ""}*Total Amount:* ${formatPrice(finalUSD)} (${AppState.currency})

*Customer Note:* Hello! I'm ready to checkout these handcrafted resin pieces. Please confirm availability and shipping details. Thank you!`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${getWhatsAppCleanNumber()}?text=${encoded}`, "_blank");
}

// ============================================
// QUICK VIEW MODAL
// ============================================
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-detail-modal");
  const content = document.getElementById("modal-product-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 aspect-square">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
      </div>
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold badge-gold">${product.badge || "Handcrafted"}</span>
          <span class="text-xs text-stone-400 uppercase tracking-widest">${product.category}</span>
        </div>
        <h2 class="text-2xl lg:text-3xl font-serif font-bold text-stone-900 leading-tight mb-2">${product.name}</h2>
        
        <div class="flex items-center gap-2 mb-4 text-sm">
          <div class="flex text-amber-500">
            ${'<i class="fa-solid fa-star"></i>'.repeat(Math.round(product.rating))}
          </div>
          <span class="font-bold text-stone-800">${product.rating}</span>
          <span class="text-stone-400">(${product.reviewsCount} verified reviews)</span>
        </div>

        <div class="text-2xl font-serif font-bold text-stone-900 mb-4">
          ${formatPrice(product.price)}
        </div>

        <p class="text-stone-600 text-sm leading-relaxed mb-6">
          ${product.description}
        </p>

        <div class="space-y-2.5 text-xs text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200 mb-6">
          <div><strong class="text-stone-900">Materials:</strong> ${product.materials}</div>
          <div><strong class="text-stone-900">Dimensions:</strong> ${product.dimensions}</div>
          <div><strong class="text-stone-900">Weight:</strong> ${product.weight}</div>
          <div><strong class="text-stone-900">Curing:</strong> Slow 72-hour pressure-cured for zero micro-bubbles</div>
        </div>

        <div class="flex gap-3">
          <button 
            onclick="addToCart('${product.id}'); closeProductModal();"
            class="flex-1 py-3 px-6 bg-stone-900 hover:bg-[#b08552] text-white rounded-xl font-medium transition flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-bag-shopping"></i>
            <span>Add to Bag</span>
          </button>
          <button 
            onclick="toggleWishlist('${product.id}')"
            class="p-3 border border-stone-300 rounded-xl text-stone-700 hover:text-rose-500 transition"
          >
            <i class="${AppState.wishlist.includes(product.id) ? "fa-solid fa-heart text-rose-500" : "fa-regular fa-heart"} text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function closeProductModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) modal.classList.add("hidden");
}

// ============================================
// CHECKOUT SIMULATION MODAL
// ============================================
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast("Your bag is empty!");
    return;
  }
  toggleCartDrawer(false);

  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  const totalEl = document.getElementById("checkout-modal-total");
  const subtotalUSD = AppState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountUSD = AppState.appliedDiscount ? subtotalUSD * AppState.appliedDiscount.percent : 0;
  const finalUSD = Math.max(0, subtotalUSD - discountUSD);

  if (totalEl) totalEl.textContent = formatPrice(finalUSD);
  modal.classList.remove("hidden");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.add("hidden");
}

function recordOrderInAdmin(orderData) {
  try {
    const existingOrders = JSON.parse(localStorage.getItem("blendora_orders") || "[]");
    existingOrders.unshift(orderData);
    localStorage.setItem("blendora_orders", JSON.stringify(existingOrders));

    // Update or create customer
    const existingCustomers = JSON.parse(localStorage.getItem("blendora_customers") || "[]");
    const custIndex = existingCustomers.findIndex(
      (c) => c.email.toLowerCase() === orderData.customer.email.toLowerCase()
    );

    if (custIndex > -1) {
      existingCustomers[custIndex].ordersCount += 1;
      existingCustomers[custIndex].totalSpent += orderData.total;
      existingCustomers[custIndex].lastOrder = new Date().toISOString().split("T")[0];
    } else {
      existingCustomers.unshift({
        id: `CUST-${Math.floor(100 + Math.random() * 900)}`,
        name: orderData.customer.name,
        email: orderData.customer.email,
        phone: orderData.customer.phone || "+234...",
        country: "Nigeria",
        ordersCount: 1,
        totalSpent: orderData.total,
        lastOrder: new Date().toISOString().split("T")[0]
      });
    }
    localStorage.setItem("blendora_customers", JSON.stringify(existingCustomers));
  } catch (err) {
    console.error("Failed to sync order with Admin:", err);
  }
}

function processCheckoutOrder(e) {
  e.preventDefault();
  const name = document.getElementById("checkout-name").value;
  const email = document.getElementById("checkout-email").value;
  const address = document.getElementById("checkout-address").value;

  if (!name || !email || !address) {
    showToast("Please fill in required fields.");
    return;
  }

  const orderId = `BLN-${Math.floor(100000 + Math.random() * 900000)}`;
  const subtotalUSD = AppState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountUSD = AppState.appliedDiscount ? subtotalUSD * AppState.appliedDiscount.percent : 0;
  const finalUSD = Math.max(0, subtotalUSD - discountUSD);

  // Sync to Admin Orders & Customers
  const newOrder = {
    id: orderId,
    date: new Date().toISOString(),
    customer: {
      name,
      email,
      phone: "+234000000000",
      address
    },
    items: [...AppState.cart],
    channel: "Web Store",
    subtotal: subtotalUSD,
    discount: discountUSD,
    total: finalUSD,
    status: "In Curing", // Auto-enters 72h resin curing queue
    paymentStatus: "Paid",
    notes: "New order placed via online storefront checkout."
  };

  recordOrderInAdmin(newOrder);

  // Clear Cart
  AppState.cart = [];
  saveCart();
  renderCart();
  closeCheckoutModal();

  // Show Confirmation Modal
  const successModal = document.getElementById("order-success-modal");
  const orderIdEl = document.getElementById("success-order-id");
  if (orderIdEl) orderIdEl.textContent = orderId;
  if (successModal) successModal.classList.remove("hidden");
}

function closeSuccessModal() {
  const successModal = document.getElementById("order-success-modal");
  if (successModal) successModal.classList.add("hidden");
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
