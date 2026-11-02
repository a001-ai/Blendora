/**
 * BLENDORA HUB - Shopify-style Admin Management Engine
 * Orders, Customers, Products, Analytics, Discounts & Settings
 */

// Initial Seed Data for Demo if localStorage is empty
const INITIAL_ADMIN_DATA = {
  orders: [
    {
      id: "BLN-782914",
      date: "2026-11-01T18:30:00Z",
      customer: {
        name: "Amara Lawson",
        email: "amara.lawson@gmail.com",
        phone: "+2348031234567",
        address: "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria"
      },
      items: [
        {
          name: "Gilded Rose Petal Dangles",
          category: "earrings",
          price: 24.99,
          quantity: 1,
          isCustom: false,
          image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Custom Initial Monogram Letter Keyholder",
          category: "keyholders",
          price: 18.50,
          quantity: 1,
          isCustom: true,
          customDetails: "Dried French Lavender + 24k Gold Flakes | Initial: 'A' | 14K Gold",
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80"
        }
      ],
      channel: "WhatsApp",
      subtotal: 43.49,
      discount: 4.35,
      total: 39.14,
      status: "In Curing", // Pending, In Curing, Shipped, Delivered, Cancelled
      paymentStatus: "Paid",
      notes: "Customer requested high clarity resin with extra gold leaf on the letter A."
    },
    {
      id: "BLN-654120",
      date: "2026-11-01T14:15:00Z",
      customer: {
        name: "Khadijah Chukwu",
        email: "k.chukwu@outlook.com",
        phone: "+2348129876543",
        address: "22 Gana Street, Maitama, Abuja, Nigeria"
      },
      items: [
        {
          name: "Botanical Teardrop Terrarium Necklace",
          category: "necklaces",
          price: 34.00,
          quantity: 2,
          isCustom: false,
          image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=300&q=80"
        }
      ],
      channel: "Web Store",
      subtotal: 68.00,
      discount: 0,
      total: 68.00,
      status: "Shipped",
      paymentStatus: "Paid",
      notes: "Shipped via GIG Logistics tracking #GIG-992381."
    },
    {
      id: "BLN-521980",
      date: "2026-10-31T20:00:00Z",
      customer: {
        name: "Sophia Martinez",
        email: "sophia.m@yahoo.com",
        phone: "+447700900123",
        address: "Flat 4, Kensington High St, London, UK"
      },
      items: [
        {
          name: "Oceanic Wave Teardrop Drops",
          category: "earrings",
          price: 22.50,
          quantity: 1,
          isCustom: false,
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Daisy Meadow Statement Hoops",
          category: "earrings",
          price: 26.00,
          quantity: 1,
          isCustom: false,
          image: "https://images.unsplash.com/photo-1611591470404-33230a13346e?auto=format&fit=crop&w=300&q=80"
        }
      ],
      channel: "Web Store",
      subtotal: 48.50,
      discount: 4.85,
      total: 43.65,
      status: "Delivered",
      paymentStatus: "Paid",
      notes: "International parcel delivered safely."
    },
    {
      id: "BLN-419208",
      date: "2026-10-30T11:20:00Z",
      customer: {
        name: "David Olatunji",
        email: "david.ola@gmail.com",
        phone: "+2349051122334",
        address: "Plot 8, Bodija Housing Estate, Ibadan, Nigeria"
      },
      items: [
        {
          name: "Vintage Motel Aesthetic Key Tag",
          category: "keyholders",
          price: 18.00,
          quantity: 3,
          isCustom: true,
          customDetails: "Custom text: 'COUPLE 2026' with French Dried Lavender",
          image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=300&q=80"
        }
      ],
      channel: "WhatsApp",
      subtotal: 54.00,
      discount: 0,
      total: 54.00,
      status: "In Curing",
      paymentStatus: "Paid",
      notes: "Wedding anniversary favors. Final resin topcoat currently curing."
    },
    {
      id: "BLN-398411",
      date: "2026-10-29T09:45:00Z",
      customer: {
        name: "Zainab Bello",
        email: "zainab.b@gmail.com",
        phone: "+2348023344556",
        address: "19 Ahmadu Bello Way, Kaduna, Nigeria"
      },
      items: [
        {
          name: "Forget-Me-Not Solitaire Locket",
          category: "necklaces",
          price: 32.00,
          quantity: 1,
          isCustom: false,
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80"
        }
      ],
      channel: "Web Store",
      subtotal: 32.00,
      discount: 0,
      total: 32.00,
      status: "Pending",
      paymentStatus: "Pending Transfer",
      notes: "Awaiting bank transfer confirmation."
    }
  ],
  customers: [
    {
      id: "CUST-001",
      name: "Amara Lawson",
      email: "amara.lawson@gmail.com",
      phone: "+2348031234567",
      country: "Nigeria",
      ordersCount: 3,
      totalSpent: 114.50,
      lastOrder: "2026-11-01"
    },
    {
      id: "CUST-002",
      name: "Khadijah Chukwu",
      email: "k.chukwu@outlook.com",
      phone: "+2348129876543",
      country: "Nigeria",
      ordersCount: 2,
      totalSpent: 136.00,
      lastOrder: "2026-11-01"
    },
    {
      id: "CUST-003",
      name: "Sophia Martinez",
      email: "sophia.m@yahoo.com",
      phone: "+447700900123",
      country: "United Kingdom",
      ordersCount: 1,
      totalSpent: 43.65,
      lastOrder: "2026-10-31"
    },
    {
      id: "CUST-004",
      name: "David Olatunji",
      email: "david.ola@gmail.com",
      phone: "+2349051122334",
      country: "Nigeria",
      ordersCount: 1,
      totalSpent: 54.00,
      lastOrder: "2026-10-30"
    },
    {
      id: "CUST-005",
      name: "Zainab Bello",
      email: "zainab.b@gmail.com",
      phone: "+2348023344556",
      country: "Nigeria",
      ordersCount: 1,
      totalSpent: 32.00,
      lastOrder: "2026-10-29"
    }
  ],
  discounts: [
    { code: "BLENDORA10", percent: 10, uses: 18, status: "Active" },
    { code: "SPARKLE15", percent: 15, uses: 7, status: "Active" },
    { code: "VIPRESIN", percent: 20, uses: 4, status: "Active" }
  ],
  settings: {
    storeName: "BLENDORA HUB",
    whatsappNumber: "09065108611",
    supportEmail: "hello@blendorahub.com",
    currency: "USD",
    curingTimeHours: 72
  }
};

// Admin Authentication Configuration
const ADMIN_AUTH_CONFIG = {
  authorizedEmail: "abbdullahiabbas@gmail.com",
  defaultPassword: "blendora2026"
};

// Admin State
const AdminState = {
  currentTab: "dashboard",
  isAuthenticated: false,
  orders: [],
  customers: [],
  products: [],
  discounts: [],
  settings: {},
  orderFilterStatus: "all",
  orderSearchQuery: "",
  customerSearchQuery: "",
  productFilterCategory: "all"
};

// Initialize Admin
document.addEventListener("DOMContentLoaded", () => {
  initAdminTheme();
  checkAdminAuth();
  loadAdminData();
  setupNavigation();
  setupEventListeners();
  if (AdminState.isAuthenticated) {
    renderDashboard();
  }
});

// ============================================
// ADMIN THEME MANAGER (DARK / LIGHT MODE)
// ============================================
function initAdminTheme() {
  const savedTheme = localStorage.getItem("blendora_theme") || "light";
  applyAdminTheme(savedTheme);
}

function toggleAdminTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyAdminTheme(newTheme);
  localStorage.setItem("blendora_theme", newTheme);
  showAdminToast(`${newTheme === "dark" ? "🌙 Dark" : "☀️ Light"} mode enabled`);
}

function applyAdminTheme(theme) {
  const icon = document.getElementById("admin-theme-toggle-icon");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    if (icon) {
      icon.className = "fa-solid fa-sun text-xs text-amber-400";
    }
  } else {
    document.documentElement.classList.remove("dark");
    if (icon) {
      icon.className = "fa-solid fa-moon text-xs text-stone-700";
    }
  }
}

// ============================================
// AUTHENTICATION CONTROLLER
// ============================================
function checkAdminAuth() {
  const session = localStorage.getItem("blendora_admin_session");
  const loginScreen = document.getElementById("admin-login-screen");
  const appLayout = document.getElementById("admin-app-layout");

  if (session) {
    try {
      const parsed = JSON.parse(session);
      if (parsed && parsed.email && parsed.email.toLowerCase() === ADMIN_AUTH_CONFIG.authorizedEmail.toLowerCase()) {
        AdminState.isAuthenticated = true;
        if (loginScreen) loginScreen.classList.add("hidden");
        if (appLayout) appLayout.classList.remove("hidden");
        return;
      }
    } catch (e) {
      console.error("Auth parsing error:", e);
    }
  }

  // Not logged in
  AdminState.isAuthenticated = false;
  if (loginScreen) loginScreen.classList.remove("hidden");
  if (appLayout) appLayout.classList.add("hidden");
}

function handleAdminLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById("login-email-input");
  const passInput = document.getElementById("login-password-input");
  const errorBanner = document.getElementById("login-error-banner");
  const errorMsg = document.getElementById("login-error-msg");

  const enteredEmail = emailInput ? emailInput.value.trim().toLowerCase() : "";
  const enteredPass = passInput ? passInput.value : "";
  const currentSavedPass = localStorage.getItem("blendora_admin_password") || ADMIN_AUTH_CONFIG.defaultPassword;

  // Validate Credentials securely
  if (enteredEmail !== ADMIN_AUTH_CONFIG.authorizedEmail.toLowerCase() || enteredPass !== currentSavedPass) {
    if (errorBanner && errorMsg) {
      errorMsg.textContent = "Invalid admin email address or password. Please try again.";
      errorBanner.classList.remove("hidden");
    }
    return;
  }

  // Authentication Succeeded
  if (errorBanner) errorBanner.classList.add("hidden");
  
  const sessionData = {
    email: ADMIN_AUTH_CONFIG.authorizedEmail,
    name: "Abdullahi Abbas",
    loginTime: new Date().toISOString()
  };

  localStorage.setItem("blendora_admin_session", JSON.stringify(sessionData));
  AdminState.isAuthenticated = true;

  // Show dashboard
  document.getElementById("admin-login-screen").classList.add("hidden");
  document.getElementById("admin-app-layout").classList.remove("hidden");
  
  renderDashboard();
  showAdminToast("Welcome back, Abdullahi! Logged in as Store Admin.");
}

function handleAdminLogout() {
  localStorage.removeItem("blendora_admin_session");
  AdminState.isAuthenticated = false;
  const passInput = document.getElementById("login-password-input");
  if (passInput) passInput.value = "";
  document.getElementById("admin-app-layout").classList.add("hidden");
  document.getElementById("admin-login-screen").classList.remove("hidden");
  showAdminToast("Signed out of Admin Center.");
}

function togglePasswordVisibility() {
  const passInput = document.getElementById("login-password-input");
  const icon = document.getElementById("password-toggle-icon");
  if (!passInput || !icon) return;

  if (passInput.type === "password") {
    passInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function handleChangeAdminPassword(e) {
  e.preventDefault();
  const newPassInput = document.getElementById("setting-new-password");
  if (!newPassInput) return;

  const newPass = newPassInput.value.trim();
  if (newPass.length < 4) {
    showAdminToast("Password must be at least 4 characters.");
    return;
  }

  localStorage.setItem("blendora_admin_password", newPass);
  newPassInput.value = "";
  showAdminToast("Admin password updated successfully!");
}

// Load and initialize data from localStorage
function loadAdminData() {
  try {
    // Orders
    const storedOrders = localStorage.getItem("blendora_orders");
    if (storedOrders) {
      AdminState.orders = JSON.parse(storedOrders);
    } else {
      AdminState.orders = [...INITIAL_ADMIN_DATA.orders];
      saveAdminOrders();
    }

    // Customers
    const storedCustomers = localStorage.getItem("blendora_customers");
    if (storedCustomers) {
      AdminState.customers = JSON.parse(storedCustomers);
    } else {
      AdminState.customers = [...INITIAL_ADMIN_DATA.customers];
      saveAdminCustomers();
    }

    // Products
    const storedProducts = localStorage.getItem("blendora_products");
    if (storedProducts) {
      AdminState.products = JSON.parse(storedProducts);
    } else {
      AdminState.products = (typeof PRODUCTS !== "undefined" && PRODUCTS.length) ? [...PRODUCTS] : [];
      saveAdminProducts();
    }

    // Discounts
    const storedDiscounts = localStorage.getItem("blendora_discounts");
    if (storedDiscounts) {
      AdminState.discounts = JSON.parse(storedDiscounts);
    } else {
      AdminState.discounts = [...INITIAL_ADMIN_DATA.discounts];
      saveAdminDiscounts();
    }

    // Settings
    const storedSettings = localStorage.getItem("blendora_settings");
    if (storedSettings) {
      AdminState.settings = JSON.parse(storedSettings);
    } else {
      AdminState.settings = { ...INITIAL_ADMIN_DATA.settings };
      saveAdminSettings();
    }
  } catch (err) {
    console.error("Error loading admin data:", err);
  }
}

function saveAdminOrders() {
  localStorage.setItem("blendora_orders", JSON.stringify(AdminState.orders));
}

function saveAdminCustomers() {
  localStorage.setItem("blendora_customers", JSON.stringify(AdminState.customers));
}

function saveAdminProducts() {
  localStorage.setItem("blendora_products", JSON.stringify(AdminState.products));
}

function saveAdminDiscounts() {
  localStorage.setItem("blendora_discounts", JSON.stringify(AdminState.discounts));
}

function saveAdminSettings() {
  localStorage.setItem("blendora_settings", JSON.stringify(AdminState.settings));
}

// Format Price
function formatMoney(amount) {
  return `$${Number(amount || 0).toFixed(2)}`;
}

// Navigation between views
function setupNavigation() {
  const navLinks = document.querySelectorAll(".admin-nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = link.getAttribute("data-tab");
      switchTab(tab);
    });
  });
}

function switchTab(tabId) {
  AdminState.currentTab = tabId;

  // Highlight active link
  document.querySelectorAll(".admin-nav-link").forEach((l) => {
    if (l.getAttribute("data-tab") === tabId) {
      l.classList.add("bg-stone-800", "text-amber-400", "font-semibold");
      l.classList.remove("text-stone-400", "hover:text-stone-200");
    } else {
      l.classList.remove("bg-stone-800", "text-amber-400", "font-semibold");
      l.classList.add("text-stone-400", "hover:text-stone-200");
    }
  });

  // Toggle views
  document.querySelectorAll(".admin-view").forEach((view) => {
    view.classList.add("hidden");
  });

  const activeView = document.getElementById(`view-${tabId}`);
  if (activeView) activeView.classList.remove("hidden");

  // Render view-specific content
  if (tabId === "dashboard") renderDashboard();
  if (tabId === "orders") renderOrdersTable();
  if (tabId === "customers") renderCustomersTable();
  if (tabId === "products") renderProductsTable();
  if (tabId === "discounts") renderDiscountsTable();
  if (tabId === "settings") renderSettingsForm();
}

function setupEventListeners() {
  // Orders status tabs
  const orderTabs = document.querySelectorAll(".order-status-tab");
  orderTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      orderTabs.forEach((t) => t.classList.remove("border-amber-600", "text-amber-800", "font-bold"));
      orderTabs.forEach((t) => t.classList.add("border-transparent", "text-stone-500"));
      tab.classList.add("border-amber-600", "text-amber-800", "font-bold");
      tab.classList.remove("border-transparent", "text-stone-500");

      AdminState.orderFilterStatus = tab.getAttribute("data-status");
      renderOrdersTable();
    });
  });

  // Order Search
  const orderSearch = document.getElementById("order-search-input");
  if (orderSearch) {
    orderSearch.addEventListener("input", (e) => {
      AdminState.orderSearchQuery = e.target.value.toLowerCase().trim();
      renderOrdersTable();
    });
  }

  // Customer Search
  const customerSearch = document.getElementById("customer-search-input");
  if (customerSearch) {
    customerSearch.addEventListener("input", (e) => {
      AdminState.customerSearchQuery = e.target.value.toLowerCase().trim();
      renderCustomersTable();
    });
  }
}

// ============================================
// DASHBOARD VIEW
// ============================================
function renderDashboard() {
  const totalRevenue = AdminState.orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalOrders = AdminState.orders.length;
  const inCuringCount = AdminState.orders.filter((o) => o.status === "In Curing").length;
  const totalCustomers = AdminState.customers.length;

  // KPI elements
  const kpiRev = document.getElementById("kpi-revenue");
  const kpiOrd = document.getElementById("kpi-orders");
  const kpiCur = document.getElementById("kpi-curing");
  const kpiCust = document.getElementById("kpi-customers");

  if (kpiRev) kpiRev.textContent = formatMoney(totalRevenue);
  if (kpiOrd) kpiOrd.textContent = totalOrders;
  if (kpiCur) kpiCur.textContent = inCuringCount;
  if (kpiCust) kpiCust.textContent = totalCustomers;

  // Recent Orders table on dashboard
  const dashboardOrdersTable = document.getElementById("dashboard-recent-orders-table");
  if (dashboardOrdersTable) {
    const recent = AdminState.orders.slice(0, 5);
    dashboardOrdersTable.innerHTML = recent
      .map((order) => {
        return `
        <tr class="border-b border-stone-100 hover:bg-stone-50/70 transition">
          <td class="py-3.5 px-4 font-mono text-xs font-semibold text-stone-900">${order.id}</td>
          <td class="py-3.5 px-4 text-xs font-medium text-stone-800">${order.customer?.name || "Anonymous"}</td>
          <td class="py-3.5 px-4 text-xs text-stone-500">${new Date(order.date).toLocaleDateString()}</td>
          <td class="py-3.5 px-4 text-xs font-semibold text-stone-900">${formatMoney(order.total)}</td>
          <td class="py-3.5 px-4">${getStatusBadge(order.status)}</td>
          <td class="py-3.5 px-4 text-right">
            <button onclick="openOrderDetailModal('${order.id}')" class="text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              Manage
            </button>
          </td>
        </tr>
      `;
      })
      .join("");
  }
}

// Status Badges
function getStatusBadge(status) {
  switch (status) {
    case "In Curing":
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300"><i class="fa-solid fa-hourglass-half text-[10px]"></i> In Curing (72h)</span>`;
    case "Shipped":
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-300"><i class="fa-solid fa-truck text-[10px]"></i> Shipped</span>`;
    case "Delivered":
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300"><i class="fa-solid fa-check text-[10px]"></i> Delivered</span>`;
    case "Cancelled":
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-900 border border-rose-300"><i class="fa-solid fa-ban text-[10px]"></i> Cancelled</span>`;
    default:
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-100 text-stone-800 border border-stone-300"><i class="fa-regular fa-clock text-[10px]"></i> Pending</span>`;
  }
}

// ============================================
// ORDERS MANAGEMENT VIEW
// ============================================
function renderOrdersTable() {
  const container = document.getElementById("orders-table-body");
  if (!container) return;

  const filtered = AdminState.orders.filter((order) => {
    const matchesStatus =
      AdminState.orderFilterStatus === "all" || order.status === AdminState.orderFilterStatus;
    const matchesSearch =
      order.id.toLowerCase().includes(AdminState.orderSearchQuery) ||
      order.customer?.name.toLowerCase().includes(AdminState.orderSearchQuery) ||
      order.customer?.email.toLowerCase().includes(AdminState.orderSearchQuery);
    return matchesStatus && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-stone-400">
          <i class="fa-solid fa-box-open text-3xl mb-2 block text-stone-300"></i>
          No orders found matching your filters.
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((order) => {
      const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
      const isCustomOrder = order.items.some((i) => i.isCustom);
      return `
      <tr class="border-b border-stone-100 hover:bg-stone-50/70 transition">
        <td class="py-4 px-4 font-mono text-xs font-bold text-stone-900">
          ${order.id}
          ${isCustomOrder ? `<span class="ml-1 text-[9px] uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Custom</span>` : ""}
        </td>
        <td class="py-4 px-4 text-xs text-stone-500">${new Date(order.date).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}</td>
        <td class="py-4 px-4">
          <div class="text-xs font-bold text-stone-900">${order.customer?.name || "Guest Customer"}</div>
          <div class="text-[11px] text-stone-400">${order.customer?.email || "No email"}</div>
        </td>
        <td class="py-4 px-4 text-xs text-stone-600">
          ${itemCount} item${itemCount > 1 ? "s" : ""}
          <span class="text-[10px] text-stone-400 block truncate max-w-[140px]">${order.items[0]?.name || ""}</span>
        </td>
        <td class="py-4 px-4 text-xs font-bold text-stone-900">${formatMoney(order.total)}</td>
        <td class="py-4 px-4">${getStatusBadge(order.status)}</td>
        <td class="py-4 px-4 text-right">
          <button onclick="openOrderDetailModal('${order.id}')" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition">
            View Order
          </button>
        </td>
      </tr>
    `;
    })
    .join("");
}

// Order Detail Modal
let currentSelectedOrderId = null;
function openOrderDetailModal(orderId) {
  const order = AdminState.orders.find((o) => o.id === orderId);
  if (!order) return;
  currentSelectedOrderId = orderId;

  const modal = document.getElementById("order-detail-modal");
  if (!modal) return;

  document.getElementById("modal-order-id-title").textContent = order.id;
  document.getElementById("modal-order-date").textContent = new Date(order.date).toLocaleString();
  document.getElementById("modal-order-status-select").value = order.status;
  document.getElementById("modal-order-notes").value = order.notes || "";

  // Customer info
  document.getElementById("modal-customer-name").textContent = order.customer?.name || "N/A";
  document.getElementById("modal-customer-email").textContent = order.customer?.email || "N/A";
  document.getElementById("modal-customer-phone").textContent = order.customer?.phone || "N/A";
  document.getElementById("modal-customer-address").textContent = order.customer?.address || "N/A";

  // WhatsApp quick button
  const waBtn = document.getElementById("modal-customer-whatsapp-link");
  if (waBtn && order.customer?.phone) {
    const cleanPhone = order.customer.phone.replace(/[^0-9]/g, "");
    const greetingMsg = encodeURIComponent(
      `Hello ${order.customer.name}! This is Blendora Hub regarding your resin order ${order.id}. Current status: ${order.status}. ✨`
    );
    waBtn.href = `https://wa.me/${cleanPhone}?text=${greetingMsg}`;
    waBtn.classList.remove("hidden");
  } else if (waBtn) {
    waBtn.classList.add("hidden");
  }

  // Items list
  const itemsContainer = document.getElementById("modal-order-items-list");
  itemsContainer.innerHTML = order.items
    .map((item) => {
      return `
      <div class="flex items-center gap-3 py-3 border-b border-stone-100">
        <img src="${item.image || 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=150&q=80'}" class="w-12 h-12 rounded-xl object-cover border border-stone-200">
        <div class="flex-grow min-w-0">
          <div class="flex justify-between items-start">
            <h5 class="text-xs font-bold text-stone-900">${item.name}</h5>
            <span class="text-xs font-bold text-stone-900">${formatMoney(item.price * item.quantity)}</span>
          </div>
          <div class="text-[11px] text-stone-500">Qty: ${item.quantity} × ${formatMoney(item.price)}</div>
          ${
            item.isCustom
              ? `<div class="mt-1 p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">✨ Custom Resin Specs: ${item.customDetails}</div>`
              : ""
          }
        </div>
      </div>
    `;
    })
    .join("");

  // Totals
  document.getElementById("modal-order-subtotal").textContent = formatMoney(order.subtotal);
  document.getElementById("modal-order-discount").textContent = `-${formatMoney(order.discount)}`;
  document.getElementById("modal-order-total").textContent = formatMoney(order.total);

  modal.classList.remove("hidden");
}

function closeOrderDetailModal() {
  const modal = document.getElementById("order-detail-modal");
  if (modal) modal.classList.add("hidden");
}

function saveOrderChanges() {
  if (!currentSelectedOrderId) return;
  const order = AdminState.orders.find((o) => o.id === currentSelectedOrderId);
  if (!order) return;

  const newStatus = document.getElementById("modal-order-status-select").value;
  const newNotes = document.getElementById("modal-order-notes").value;

  order.status = newStatus;
  order.notes = newNotes;

  saveAdminOrders();
  renderOrdersTable();
  renderDashboard();
  closeOrderDetailModal();
  showAdminToast(`Order ${order.id} status updated to "${newStatus}"!`);
}

// ============================================
// CUSTOMERS MANAGEMENT VIEW
// ============================================
function renderCustomersTable() {
  const container = document.getElementById("customers-table-body");
  if (!container) return;

  const filtered = AdminState.customers.filter((c) => {
    return (
      c.name.toLowerCase().includes(AdminState.customerSearchQuery) ||
      c.email.toLowerCase().includes(AdminState.customerSearchQuery) ||
      c.phone.toLowerCase().includes(AdminState.customerSearchQuery)
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" class="py-12 text-center text-stone-400">
          No customer records found.
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((c) => {
      const cleanPhone = c.phone.replace(/[^0-9]/g, "");
      return `
      <tr class="border-b border-stone-100 hover:bg-stone-50/70 transition">
        <td class="py-4 px-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
              ${c.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div class="text-xs font-bold text-stone-900">${c.name}</div>
              <div class="text-[11px] text-stone-400">${c.country}</div>
            </div>
          </div>
        </td>
        <td class="py-4 px-4 text-xs text-stone-600">${c.email}</td>
        <td class="py-4 px-4 text-xs text-stone-600">${c.phone}</td>
        <td class="py-4 px-4 text-xs font-semibold text-stone-900">${c.ordersCount} orders</td>
        <td class="py-4 px-4 text-xs font-bold text-stone-900">${formatMoney(c.totalSpent)}</td>
        <td class="py-4 px-4 text-right">
          <a href="https://wa.me/${cleanPhone}" target="_blank" class="px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 rounded-lg text-xs font-medium inline-flex items-center gap-1.5">
            <i class="fa-brands fa-whatsapp"></i> Chat
          </a>
        </td>
      </tr>
    `;
    })
    .join("");
}

// ============================================
// PRODUCTS & INVENTORY VIEW
// ============================================
function renderProductsTable() {
  const container = document.getElementById("products-table-body");
  if (!container) return;

  const filtered = AdminState.products.filter((p) => {
    return AdminState.productFilterCategory === "all" || p.category === AdminState.productFilterCategory;
  });

  container.innerHTML = filtered
    .map((product, idx) => {
      return `
      <tr class="border-b border-stone-100 hover:bg-stone-50/70 transition">
        <td class="py-3 px-4">
          <div class="flex items-center gap-3">
            <img src="${product.image}" class="w-12 h-12 rounded-xl object-cover border border-stone-200">
            <div>
              <div class="text-xs font-bold text-stone-900">${product.name}</div>
              <span class="text-[10px] text-stone-400 uppercase tracking-wider">${product.category}</span>
            </div>
          </div>
        </td>
        <td class="py-3 px-4 text-xs font-bold text-stone-900">${formatMoney(product.price)}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
            In Stock
          </span>
        </td>
        <td class="py-3 px-4 text-xs text-stone-500">
          ${product.customizable ? '<span class="text-amber-700 font-semibold">Yes (Customizable)</span>' : "Standard"}
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteProduct(${idx})" class="p-1.5 text-stone-400 hover:text-rose-600 rounded">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
    })
    .join("");
}

function openAddProductModal() {
  document.getElementById("add-product-modal").classList.remove("hidden");
}

function closeAddProductModal() {
  document.getElementById("add-product-modal").classList.add("hidden");
}

function handleAddProduct(e) {
  e.preventDefault();
  const name = document.getElementById("new-prod-name").value;
  const category = document.getElementById("new-prod-category").value;
  const price = parseFloat(document.getElementById("new-prod-price").value);
  const image = document.getElementById("new-prod-image").value || "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=500&q=80";
  const desc = document.getElementById("new-prod-desc").value;

  const newProduct = {
    id: `prod-${Date.now()}`,
    name,
    category,
    price,
    image,
    description: desc,
    rating: 5.0,
    reviewsCount: 1,
    badge: "New",
    materials: "Epoxy Resin, Handcrafted Botanical Inclusions",
    dimensions: "Standard Handmade",
    weight: "3.0 grams",
    customizable: true
  };

  AdminState.products.unshift(newProduct);
  saveAdminProducts();
  renderProductsTable();
  closeAddProductModal();
  showAdminToast(`Product "${name}" added to catalog!`);
  document.getElementById("add-product-form").reset();
}

function deleteProduct(index) {
  if (!confirm("Are you sure you want to remove this piece from the catalog?")) return;
  const removed = AdminState.products.splice(index, 1);
  saveAdminProducts();
  renderProductsTable();
  showAdminToast(`Removed "${removed[0].name}"`);
}

// ============================================
// DISCOUNT CODES VIEW
// ============================================
function renderDiscountsTable() {
  const container = document.getElementById("discounts-table-body");
  if (!container) return;

  container.innerHTML = AdminState.discounts
    .map((d, idx) => {
      return `
      <tr class="border-b border-stone-100 hover:bg-stone-50/70 transition">
        <td class="py-4 px-4 font-mono text-xs font-bold text-stone-900">${d.code}</td>
        <td class="py-4 px-4 text-xs font-semibold text-emerald-700">${d.percent}% Off</td>
        <td class="py-4 px-4 text-xs text-stone-600">${d.uses} times</td>
        <td class="py-4 px-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
            ${d.status}
          </span>
        </td>
        <td class="py-4 px-4 text-right">
          <button onclick="deleteDiscount(${idx})" class="p-1.5 text-stone-400 hover:text-rose-600 rounded">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
    })
    .join("");
}

function openAddDiscountModal() {
  document.getElementById("add-discount-modal").classList.remove("hidden");
}

function closeAddDiscountModal() {
  document.getElementById("add-discount-modal").classList.add("hidden");
}

function handleAddDiscount(e) {
  e.preventDefault();
  const code = document.getElementById("new-discount-code").value.trim().toUpperCase();
  const percent = parseInt(document.getElementById("new-discount-percent").value);

  AdminState.discounts.push({
    code,
    percent,
    uses: 0,
    status: "Active"
  });

  saveAdminDiscounts();
  renderDiscountsTable();
  closeAddDiscountModal();
  showAdminToast(`Promo code "${code}" created!`);
  document.getElementById("add-discount-form").reset();
}

function deleteDiscount(idx) {
  AdminState.discounts.splice(idx, 1);
  saveAdminDiscounts();
  renderDiscountsTable();
  showAdminToast("Promo code deleted");
}

// ============================================
// SETTINGS VIEW
// ============================================
function renderSettingsForm() {
  document.getElementById("setting-store-name").value = AdminState.settings.storeName || "BLENDORA HUB";
  document.getElementById("setting-whatsapp").value = AdminState.settings.whatsappNumber || "09065108611";
  document.getElementById("setting-email").value = AdminState.settings.supportEmail || "hello@blendorahub.com";
  document.getElementById("setting-curing-hours").value = AdminState.settings.curingTimeHours || 72;

  // Currency & Rates
  const defaultCurrEl = document.getElementById("setting-default-currency");
  if (defaultCurrEl) {
    defaultCurrEl.value = AdminState.settings.defaultCurrency || "NGN";
  }

  const rates = AdminState.settings.currencyRates || { NGN: 1450, GBP: 0.79, EUR: 0.92 };
  const rateNgn = document.getElementById("setting-rate-ngn");
  const rateGbp = document.getElementById("setting-rate-gbp");
  const rateEur = document.getElementById("setting-rate-eur");

  if (rateNgn) rateNgn.value = rates.NGN || 1450;
  if (rateGbp) rateGbp.value = rates.GBP || 0.79;
  if (rateEur) rateEur.value = rates.EUR || 0.92;
}

function handleSaveSettings(e) {
  e.preventDefault();
  AdminState.settings.storeName = document.getElementById("setting-store-name").value;
  AdminState.settings.whatsappNumber = document.getElementById("setting-whatsapp").value;
  AdminState.settings.supportEmail = document.getElementById("setting-email").value;
  AdminState.settings.curingTimeHours = parseInt(document.getElementById("setting-curing-hours").value);

  // Currency
  const defaultCurr = document.getElementById("setting-default-currency").value;
  AdminState.settings.defaultCurrency = defaultCurr;

  const rateNgn = parseFloat(document.getElementById("setting-rate-ngn").value) || 1450;
  const rateGbp = parseFloat(document.getElementById("setting-rate-gbp").value) || 0.79;
  const rateEur = parseFloat(document.getElementById("setting-rate-eur").value) || 0.92;

  AdminState.settings.currencyRates = {
    NGN: rateNgn,
    GBP: rateGbp,
    EUR: rateEur
  };

  saveAdminSettings();

  // Also set storefront active currency
  localStorage.setItem("blendora_currency", defaultCurr);

  showAdminToast(`Settings saved! Default currency set to ${defaultCurr}.`);
}

// Export All Store Data to JSON file
function exportStoreData() {
  const data = {
    orders: AdminState.orders,
    customers: AdminState.customers,
    products: AdminState.products,
    discounts: AdminState.discounts,
    settings: AdminState.settings,
    exportDate: new Date().toISOString()
  };

  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `blendora-hub-backup-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showAdminToast("Store data exported to JSON!");
}

// Reset Demo Data
function resetDemoData() {
  if (!confirm("Reset all orders, customers, and settings to original demo data?")) return;
  localStorage.removeItem("blendora_orders");
  localStorage.removeItem("blendora_customers");
  localStorage.removeItem("blendora_products");
  localStorage.removeItem("blendora_discounts");
  localStorage.removeItem("blendora_settings");
  loadAdminData();
  renderDashboard();
  showAdminToast("Demo data restored!");
}

// Admin Toast
function showAdminToast(msg) {
  const toast = document.getElementById("admin-toast");
  const msgEl = document.getElementById("admin-toast-msg");
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.remove("opacity-0", "translate-y-8");
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-8");
  }, 3200);
}
