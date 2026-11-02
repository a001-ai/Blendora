# BLENDORA HUB - Handcrafted Resin Jewelry & Accessories Store

A modern, responsive e-commerce storefront designed specifically for **BLENDORA HUB**, showcasing handcrafted resin earrings, botanical necklaces, and bespoke initial keyholders.

---

## 🌟 Key Features

1. **Artisanal Resin Product Catalog**
   - **Earrings**: Real pressed rose petals, ocean waves, geometric studs, sunset arches, and celestial star drops.
   - **Necklaces**: Real botanical terrarium teardrops, blue forget-me-not lockets, galaxy opals, and driftwood beach hybrids.
   - **Keyholders**: Personalized monogram letter charms with gold flakes, shaker keychains, and retro motel tags.
   - Live category filtering (All, Earrings, Necklaces, Keyholders), text search, and sorting (price low-high, high-low, rating).

2. **Shopify-Style Admin Management Portal (`admin.html`)**
   - **Secure Admin Authentication**: Protected login screen requiring authorized admin credentials:
     - **Admin Email**: `abbdullahiabbas@gmail.com`
     - **Default Password**: `blendora2026` (changeable in Store Settings)
   - **Dashboard Overview**: Revenue, total orders, active customer counts, and resin curing pipeline.
   - **Order Management & Curing Queue**: Track orders through statuses (`Pending`, `In Curing (72h)`, `Shipped`, `Delivered`), view custom resin specs, add artisan notes, and message customers directly on WhatsApp.
   - **Customer CRM**: View customer history, order volume, lifetime spend, and one-click WhatsApp chat.
   - **Product & Inventory Management**: Add new resin pieces, adjust prices, edit descriptions, and toggle stock.
   - **Discount Code Manager**: Create and delete promo coupons (`BLENDORA10`, `SPARKLE15`).
   - **Store Settings & Data Export**: Update WhatsApp hotline (`09065108611`), update password, and download JSON database backups.

3. **Interactive "Design Your Own Resin Piece" Studio**
   - Step 1: Base item selection (Letter keychain, teardrop pendant, arch earrings, motel tag).
   - Step 2: Preserved botanicals (Rose, Forget-Me-Nots, Daisies, Lavender, Baby's Breath, Fern).
   - Step 3: Inclusions (24K Gold flakes, silver leaf, rose gold, holographic glitter, ocean wave pigment).
   - Step 4: Hardware finish (14K Gold, Rhodium Silver, Rose Gold).
   - Step 5: Custom monogram/name input with real-time visual mold preview and price calculations.

3. **Multi-Currency Support**
   - Switch dynamically between **USD ($)**, **GBP (£)**, **EUR (€)**, and **NGN (₦)** with instant conversion across the entire store.

4. **WhatsApp Direct Checkout & Order Generator**
   - Pre-formatted WhatsApp order messages ready to send directly to the artisan's WhatsApp number with full item details, custom specs, and totals.
   - Built-in shopping bag drawer with quantity counters, coupon code support (`BLENDORA10`, `SPARKLE15`), and web checkout simulation.

5. **One-Click Dark / Light Mode Toggle 🌙☀️**
   - Available on both the **Storefront** and the **Admin Portal**.
   - Custom obsidian and warm gold color scheme with smooth transitions and persistent memory across browser visits.

6. **Resin Care & Longevity Guide**
   - Advice for customers on keeping their epoxy resin sparkling clear, avoiding prolonged high UV heat, gentle microfiber cleaning, and proper storage.

---

## 🚀 How to Run the Website

### Option 1: Direct Double-Click (No Installation Required)
Simply navigate to:
`C:\Users\Baffah\.gemini\antigravity\scratch\blendora-hub\`
and double-click **`index.html`** in File Explorer to open it in Chrome, Edge, or your preferred browser.

### Option 2: Run via Local Python Server
Open PowerShell in the project directory:
```powershell
cd C:\Users\Baffah\.gemini\antigravity\scratch\blendora-hub
py -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Customization & Setup

### 1. WhatsApp Business Number
The WhatsApp number is set to **`09065108611`** (`+2349065108611`).
If you ever need to change it, open `js/app.js`:
```javascript
whatsappNumber: "+2349065108611", // Configured WhatsApp checkout number (09065108611)
```

Also update the contact link in `index.html` in the footer if needed:
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER_HERE" ...>
```

### 2. Adding / Editing Products
Open `js/products.js` to modify prices, descriptions, images, or add new resin creations.

### 3. Deploying Online for Free
- **Netlify**: Drag and drop the `blendora-hub` folder directly into [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Run `vercel deploy` or import from GitHub.
- **GitHub Pages**: Push this repository to GitHub and enable Pages in repository settings.
