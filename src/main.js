import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="notice-bar">Fireworks catalog availability: Hyderabad, Telangana only. <a href="#safety">Check local guidance</a></div>
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Spark and Co. home"><img class="brand-spark" src="/spark-co-logo.svg" alt=""> spark<span>&amp;</span>co.</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open navigation"><span></span><span></span></button>
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <a href="#collection">The collection</a>
      <a href="#safety">Safety first</a>
      <a class="nav-cta" href="#enquire">Ask about a product <span aria-hidden="true">↗</span></a>
      <button class="admin-button" type="button" id="open-admin">Admin</button>
    </nav>
  </header>

  <section class="shop-tools" aria-label="Shop catalog">
    <div class="location-button location-fixed" aria-label="Fireworks availability: Hyderabad, Telangana only"><span class="location-pin" aria-hidden="true"></span><span><small>AVAILABLE IN</small><strong>Hyderabad, Telangana</strong></span><span class="location-only">ONLY</span></div>
    <form class="catalog-search" id="catalog-search" role="search"><label class="search-icon" for="product-search-input" aria-hidden="true"></label><input id="product-search-input" type="search" placeholder="Search products" autocomplete="off"><button type="button" id="clear-search" aria-label="Clear search" hidden>×</button></form>
    <div class="category-chips" id="category-chips" role="group" aria-label="Filter by category">
      <button type="button" data-category="all" aria-pressed="true">All items</button>
      <button type="button" data-category="fountains" aria-pressed="false">Fountains</button>
      <button type="button" data-category="sparklers" aria-pressed="false">Sparklers</button>
      <button type="button" data-category="ground" aria-pressed="false">Ground spinners</button>
    </div>
  </section>

  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> DIWALI NIGHTS, MADE BRIGHTER</p>
        <h1>Make room<br>for <em>celebration.</em></h1>
        <p class="hero-intro">A thoughtful Diwali collection for Hyderabad. Browse example products, then ask us about local availability, approved products, and quantities.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#collection">Explore the collection <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="#enquire">Plan your display <span aria-hidden="true">↗</span></a>
        </div>
        <p class="hero-footnote">Illustrative listings only. Availability depends on current local rules.</p>
      </div>
      <figure class="hero-visual">
        <img src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1500&q=85" alt="A colourful fireworks display lighting up the night sky" fetchpriority="high">
        <figcaption><span>01 / 03</span> THE NIGHT IS YOURS</figcaption>
        <div class="image-stamp" aria-hidden="true"><span>MAKE</span><span>IT</span><span>GLOW</span></div>
      </figure>
      <div class="hero-side-note" aria-hidden="true">GATHER · CELEBRATE · REMEMBER</div>
    </section>

    <section class="collection section-wrap" id="collection">
      <div class="section-heading">
        <div><p class="eyebrow"><span></span> EXAMPLE LISTINGS · PRICES IN INR</p><h2>Find your kind<br>of <em>bright.</em></h2></div>
        <p>Browse example pack sizes and prices. Ask the seller to confirm the exact product, current approvals, availability, and local permissions before ordering.</p>
      </div>
      <p class="catalog-count" id="product-count" aria-live="polite"></p>
      <div class="product-grid" id="product-grid"></div>
      <div class="wishlist-panel" id="wishlist-panel" aria-live="polite"></div>
      <p class="collection-note">Example prices are not a live offer. Product photos are representative; seller confirmation and local rules apply.</p>
    </section>

    <section class="safety-band" id="safety">
      <div class="safety-marker" aria-hidden="true">!</div>
      <div class="safety-copy"><p class="eyebrow">INDIA · CHECK BEFORE YOU BUY</p><h2>Rules first.<br>Then <em>celebrate.</em></h2><p>Firework sale, transport, and use can be restricted by current court orders and state, district, or city notices. This enquiry is not an order. The seller must verify applicable licences, product approvals, and local permissions before confirming any sale. Follow the label, keep a safe distance, and never relight a dud.</p><div class="law-links"><a href="https://cpcb.gov.in/firecrackers/" target="_blank" rel="noopener noreferrer">Central Pollution Control Board ↗</a><a href="https://peso.gov.in/" target="_blank" rel="noopener noreferrer">Petroleum and Explosives Safety Organisation ↗</a></div></div>
      <a class="video-link" href="https://www.youtube.com/results?search_query=India+Diwali+firecracker+safety+official" target="_blank" rel="noopener noreferrer"><span class="play-mark" aria-hidden="true">▶</span><span><strong>Watch an India safety demo</strong><small>Opens firework safety videos in a new tab</small></span><span class="video-arrow" aria-hidden="true">↗</span></a>
    </section>

    <section class="enquiry section-wrap" id="enquire">
      <div class="enquiry-intro"><p class="eyebrow"><span></span> YOUR WISHLIST, TO WHATSAPP</p><h2>Let’s talk<br><em>celebration.</em></h2><p>Send your shortlist and contact details in a WhatsApp message. The seller must confirm prices, product approvals, and whether the sale is permitted in your area.</p><div class="enquiry-aside"><img class="aside-mark" src="/spark-co-logo.svg" alt=""><span>Your city helps the seller<br><strong>check local restrictions.</strong></span></div></div>
      <form class="enquiry-form" id="enquiry-form">
        <div class="form-row"><label>Your name<input name="name" autocomplete="name" required placeholder="Name"></label><label>Your WhatsApp number<input name="phone" type="tel" autocomplete="tel" required placeholder="+91"></label></div>
        <label>Availability area<input name="location" value="Hyderabad, Telangana" readonly></label>
        <label>Questions or occasion<textarea name="message" rows="4" placeholder="Date, product questions, or anything else..."></textarea></label>
        <button class="button button-coral" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
        <p class="form-note" id="form-status" aria-live="polite">WhatsApp will open with your wishlist. Choose the seller contact to send it.</p>
      </form>
    </section>
  </main>

  <footer class="site-footer"><a class="wordmark" href="#home"><img class="brand-spark" src="/spark-co-logo.svg" alt=""> spark<span>&amp;</span>co.</a><p>Make it a night to remember. Make it a safe one, too.</p><a href="#safety">India safety notes ↑</a><small>Demo catalog only; an enquiry is not an order. Sale, transport, and use are subject to current Indian laws, court orders, and local notices. Check the rules before buying or using fireworks.</small></footer>
  <dialog class="admin-dialog" id="admin-dialog" aria-labelledby="admin-title">
    <div class="admin-dialog-head"><div><p class="eyebrow">STORE ADMIN</p><h2 id="admin-title">Manage catalog</h2></div><button class="dialog-close" type="button" id="close-admin" aria-label="Close admin panel">×</button></div>
    <form class="admin-login" id="admin-login">
      <p class="admin-notice">Sign in to manage products, prices, images, and videos.</p>
      <label>Username<input name="username" autocomplete="username" required value="admin"></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required></label>
      <button class="button button-coral" type="submit">Sign in <span aria-hidden="true">↗</span></button>
      <p class="admin-status" id="login-status" aria-live="polite"></p>
    </form>
    <div id="admin-console" hidden>
      <p class="admin-notice" id="admin-notice">Catalog edits are saved to the shared store.</p>
      <div class="admin-console-actions"><button class="clear-wishlist" type="button" id="admin-logout">Sign out</button></div>
      <div class="stats-grid"><div><span>Store sessions</span><strong id="stat-views">0</strong></div><div><span>Product clicks</span><strong id="stat-clicks">0</strong></div><div><span>Click rate</span><strong id="stat-rate">0%</strong></div><div><span>WhatsApp starts</span><strong id="stat-whatsapp">0</strong></div></div>
      <div class="admin-metrics-detail"><div class="scroll-metrics"><strong>Scroll reach</strong><span>25% <b id="scroll-25">0</b></span><span>50% <b id="scroll-50">0</b></span><span>75% <b id="scroll-75">0</b></span><span>100% <b id="scroll-100">0</b></span></div><div class="inventory-summary" id="inventory-summary"></div></div>
      <p class="admin-notice stats-note">Anonymous engagement estimates only; no names or phone numbers are tracked. WhatsApp starts are not orders. Replace the sample stock with a physical count.</p>
      <section class="analytics-products" aria-labelledby="analytics-products-title"><div class="admin-section-heading"><h3 id="analytics-products-title">Product performance</h3><button class="clear-wishlist" type="button" id="refresh-dashboard">Refresh</button></div><p class="analytics-status" id="analytics-status" aria-live="polite"></p><div class="analytics-product-list" id="analytics-product-list"></div></section>
      <div class="admin-workspace">
        <section class="admin-editor" aria-labelledby="editor-title">
          <div class="admin-section-heading"><h3 id="editor-title">Add a product</h3><button class="clear-wishlist" type="button" id="new-product">New</button></div>
          <form class="admin-form" id="product-form">
            <input type="hidden" name="id" id="admin-product-id">
            <label>Product name<input name="name" id="admin-name" required maxlength="70" placeholder="e.g. Ground fountain"></label>
            <div class="form-row"><label>Product type<input name="kind" id="admin-kind" required maxlength="50" placeholder="Ground fountain"></label><label>Pack size<input name="pack" id="admin-pack" required maxlength="40" placeholder="3-piece pack"></label></div>
            <div class="form-row"><label>Price (INR)<input name="price" id="admin-price" type="number" min="0" step="1" required placeholder="599"></label><label>Stock (packs)<input name="stock" id="admin-stock" type="number" min="0" step="1" placeholder="0" disabled></label></div>
            <label class="inventory-check"><input id="admin-stock-confirmed" type="checkbox"> Stock count is verified</label>
            <label>Image URL<input name="image" id="admin-image-url" type="text" inputmode="url" placeholder="https://... or upload an image"></label>
            <label>Additional photo 2 URL<input name="galleryImage2" id="admin-gallery-image-2" type="url" placeholder="https://..."></label>
            <label>Additional photo 3 URL<input name="galleryImage3" id="admin-gallery-image-3" type="url" placeholder="https://..."></label>
            <label>Upload image<input name="imageFile" id="admin-image-file" type="file" accept="image/*"><small>Images are resized before upload.</small></label>
            <img class="admin-image-preview" id="admin-image-preview" alt="Product image preview" hidden>
            <label>Image credit<input name="creator" id="admin-creator" maxlength="100" placeholder="Seller-provided image"></label>
            <label>Video URL<input name="video" id="admin-video-url" type="url" placeholder="YouTube or direct MP4/WebM/OGV URL"><small>Plays muted for 8 seconds when the product opens.</small></label>
            <label>Product details<textarea name="description" id="admin-description" rows="3" maxlength="220" placeholder="Short product details"></textarea></label>
            <button class="button button-coral" type="submit">Save product <span aria-hidden="true">↗</span></button>
            <p class="admin-status" id="admin-status" aria-live="polite"></p>
          </form>
        </section>
        <section class="admin-catalog" aria-labelledby="catalog-title"><div class="admin-section-heading"><h3 id="catalog-title">Products</h3><span id="admin-product-count"></span></div><div class="admin-product-list" id="admin-product-list"></div></section>
      </div>
    </div>
  </dialog>
  <div class="mobile-basket" id="mobile-basket" hidden>
    <div class="mobile-basket-summary"><span id="mobile-basket-count">0 items added</span><strong id="mobile-basket-total">₹0</strong><small>Indicative total</small></div>
    <button class="button basket-continue" id="mobile-basket-continue" type="button">View basket <span aria-hidden="true">→</span></button>
  </div>
  <dialog class="basket-sheet" id="basket-sheet" aria-labelledby="basket-sheet-title">
    <div class="sheet-handle" id="basket-sheet-handle" data-sheet-handle="basket-sheet" aria-label="Swipe down to minimize, swipe up to expand"><span></span></div>
    <div class="sheet-heading"><div><p class="eyebrow">YOUR BASKET</p><h2 id="basket-sheet-title">Review items</h2></div><button class="dialog-close" type="button" data-sheet-close="basket-sheet" aria-label="Minimize basket">×</button></div>
    <div class="basket-sheet-items" id="basket-sheet-items"></div>
    <div class="basket-sheet-footer"><p><span>Indicative total</span><strong id="basket-sheet-total">₹0</strong></p><button class="button basket-continue" id="sheet-continue" type="button">Continue to enquiry <span aria-hidden="true">→</span></button><small>Final prices, availability, and local permissions must be confirmed by the seller.</small></div>
  </dialog>
  <dialog class="product-sheet" id="product-sheet" aria-labelledby="product-sheet-title">
    <button class="product-sheet-close" type="button" data-product-sheet-close aria-label="Close product details">×</button>
    <div class="product-sheet-panel" id="product-sheet-panel">
      <div class="product-sheet-handle" aria-hidden="true"><span></span></div>
      <div id="product-sheet-body"></div>
    </div>
  </dialog>
`

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#main-nav')

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isExpanded))
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation')
  navigation.classList.toggle('is-open', !isExpanded)
})

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    navigation.classList.remove('is-open')
  }
})

const seedProducts = [
  { id: 'anar', name: 'Anar flower fountain', kind: 'Ground fountain', pack: '3-piece pack', price: 599, stock: 0, inventorySet: false, image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Firecracker_Flowerpot.jpg', imageAlt: 'Flowerpot firework fountain in use', creator: 'Swetha01', source: 'https://commons.wikimedia.org/wiki/File:Firecracker_Flowerpot.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', galleryImages: ['https://upload.wikimedia.org/wikipedia/commons/e/e8/Fireworks_a_fountain_2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Fireworks_a_fountain_3.jpg'], galleryAttributions: [{ creator: 'Peter van der Sluijs', source: 'https://commons.wikimedia.org/wiki/File:Fireworks_a_fountain_2.jpg', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }, { creator: 'Peter van der Sluijs', source: 'https://commons.wikimedia.org/wiki/File:Fireworks_a_fountain_3.jpg', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }], video: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Fireworks_in_Paris%2C_July_14.ogv', videoCreator: 'Gunnar Larsson', videoSource: 'https://commons.wikimedia.org/wiki/File:Fireworks_in_Paris,_July_14.ogv', videoLicense: 'CC BY-SA 3.0', videoLicenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
  { id: 'phuljhari', name: 'Phuljhari sparklers', kind: 'Hand-held sparkler', pack: '10-piece pack', price: 249, stock: 0, inventorySet: false, image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Fireworks_Sparklers_Diwali_India.jpg', imageAlt: 'Sparklers being enjoyed during Diwali in India', creator: 'Sean Ellis', source: 'https://commons.wikimedia.org/wiki/File:Fireworks_Sparklers_Diwali_India.jpg', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', galleryImages: ['https://upload.wikimedia.org/wikipedia/commons/a/ab/Sparklers_at_DLF_City_Phase_2%2C_K_Block%2C_Gurgaon_during_Diwali_2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Sparklers_at_DLF_City_Phase_2%2C_K_Block%2C_Gurgaon_during_Diwali.jpg'], galleryAttributions: [{ creator: 'Slyronit', source: 'https://commons.wikimedia.org/wiki/File:Sparklers_at_DLF_City_Phase_2,_K_Block,_Gurgaon_during_Diwali_2.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, { creator: 'Slyronit', source: 'https://commons.wikimedia.org/wiki/File:Sparklers_at_DLF_City_Phase_2,_K_Block,_Gurgaon_during_Diwali.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }], video: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Fireworks_in_Toyota%2C_Aichi%2C_Japan_2009.ogv', videoCreator: 'Emran Kassim', videoSource: 'https://commons.wikimedia.org/wiki/File:Fireworks_in_Toyota,_Aichi,_Japan_2009.ogv', videoLicense: 'CC BY 2.0', videoLicenseUrl: 'https://creativecommons.org/licenses/by/2.0/' },
  { id: 'chakri', name: 'Chakri celebration set', kind: 'Spinning ground firework', pack: '5-piece pack', price: 799, stock: 0, inventorySet: false, image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Spinning_Fire.jpg?download=1', imageAlt: 'A spinning chakri firework in use in West Bengal', creator: 'Dey.sandip', source: 'https://commons.wikimedia.org/wiki/File:Spinning_Fire.jpg', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', galleryImages: ['https://upload.wikimedia.org/wikipedia/commons/3/39/Different_colors_fireworks.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/03/Vuurwerk_draaizonnetje.JPG'], galleryAttributions: [{ creator: 'Peter van der Sluijs', source: 'https://commons.wikimedia.org/wiki/File:Different_colors_fireworks.jpg', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }, { creator: 'Peter van der Sluijs', source: 'https://commons.wikimedia.org/wiki/File:Vuurwerk_draaizonnetje.JPG', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }], video: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Bentenjima_Fireworks_01.ogv', videoCreator: 'kagely', videoSource: 'https://commons.wikimedia.org/wiki/File:Bentenjima_Fireworks_01.ogv', videoLicense: 'CC BY-SA 2.1 JP', videoLicenseUrl: 'https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en' },
]
const productsKey = 'sparkAndCoProducts'
const wishlistKey = 'sparkAndCoWishlist'
const analyticsKey = 'sparkAndCoAnalytics'
const safeRead = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}
function withSeedMedia(product) {
  const seed = seedProducts.find((entry) => entry.id === product.id)
  if (!seed) return product
  return {
    ...product,
    guideAnimation: product.guideAnimation ?? true,
    galleryImages: product.galleryImages ?? seed.galleryImages,
    galleryAttributions: product.galleryAttributions ?? seed.galleryAttributions,
    video: product.video ?? seed.video,
    videoCreator: product.videoCreator ?? seed.videoCreator,
    videoSource: product.videoSource ?? seed.videoSource,
    videoLicense: product.videoLicense ?? seed.videoLicense,
    videoLicenseUrl: product.videoLicenseUrl ?? seed.videoLicenseUrl,
  }
}
const storedProducts = import.meta.env.DEV ? safeRead(productsKey, null) : null
let products = Array.isArray(storedProducts) ? storedProducts.filter((product) => product && product.id && product.name && Number.isFinite(Number(product.price)) && product.image).map((product) => ({ ...withSeedMedia(product), stock: Number.isInteger(product.stock) ? product.stock : 0, inventorySet: typeof product.inventorySet === 'boolean' ? product.inventorySet : Number.isInteger(product.stock) })) : seedProducts.map(withSeedMedia)
let wishlist = safeRead(wishlistKey, []).filter((item) => products.some((product) => product.id === item.id))
const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`
const saveWishlist = () => localStorage.setItem(wishlistKey, JSON.stringify(wishlist))
const emptyAnalytics = () => ({ sessions: 0, whatsappStarts: 0, productImpressions: {}, productClicks: {}, scrollDepth: { 25: 0, 50: 0, 75: 0, 100: 0 } })

function applyAnalyticsEvent(metrics, event) {
  if (event.type === 'session') metrics.sessions += 1
  if (event.type === 'whatsapp_start') metrics.whatsappStarts += 1
  if (event.type === 'product_impression') metrics.productImpressions[event.productId] = (metrics.productImpressions[event.productId] || 0) + 1
  if (event.type === 'product_click') metrics.productClicks[event.productId] = (metrics.productClicks[event.productId] || 0) + 1
  if (event.type === 'scroll_depth') metrics.scrollDepth[event.depth] = (metrics.scrollDepth[event.depth] || 0) + 1
  return metrics
}

function recordAnalytics(event) {
  if (import.meta.env.DEV) {
    const metrics = applyAnalyticsEvent(safeRead(analyticsKey, emptyAnalytics()), event)
    localStorage.setItem(analyticsKey, JSON.stringify(metrics))
    return
  }
  fetch('/api/analytics', {
    method: 'POST',
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  }).catch(() => {})
}

let previouslySeenProducts = []
try { previouslySeenProducts = JSON.parse(sessionStorage.getItem('sparkCoSeenProducts') || '[]') } catch {}
const trackedProductViews = new Set(previouslySeenProducts)
let previouslyClickedProducts = []
try { previouslyClickedProducts = JSON.parse(sessionStorage.getItem('sparkCoClickedProducts') || '[]') } catch {}
const trackedProductClicks = new Set(previouslyClickedProducts)
let productObserver
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
const safeWebUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? url.href : ''
  } catch {
    return ''
  }
}

function recordProductClick(productId) {
  recordProductImpression(productId)
  if (trackedProductClicks.has(productId)) return
  trackedProductClicks.add(productId)
  sessionStorage.setItem('sparkCoClickedProducts', JSON.stringify([...trackedProductClicks]))
  recordAnalytics({ type: 'product_click', productId })
}

function recordProductImpression(productId) {
  if (trackedProductViews.has(productId)) return
  trackedProductViews.add(productId)
  sessionStorage.setItem('sparkCoSeenProducts', JSON.stringify([...trackedProductViews]))
  recordAnalytics({ type: 'product_impression', productId })
}
const safeImageUrl = (value) => /^data:image\/(png|jpeg|webp|gif);base64,/i.test(value) ? value : safeWebUrl(value)
let activeCategory = 'all'
const searchInput = document.querySelector('#product-search-input')
const clearSearch = document.querySelector('#clear-search')

function getProductCategory(product) {
  const details = `${product.name} ${product.kind}`.toLowerCase()
  if (/sparkler|phuljhari/.test(details)) return 'sparklers'
  if (/fountain|anar/.test(details)) return 'fountains'
  return 'ground'
}

document.querySelector('#catalog-search').addEventListener('submit', (event) => event.preventDefault())
searchInput.addEventListener('input', () => {
  clearSearch.hidden = searchInput.value.length === 0
  renderProducts()
})
clearSearch.addEventListener('click', () => {
  searchInput.value = ''
  clearSearch.hidden = true
  renderProducts()
  searchInput.focus()
})
document.querySelector('#category-chips').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]')
  if (!button) return
  activeCategory = button.dataset.category
  document.querySelectorAll('#category-chips [data-category]').forEach((chip) => {
    chip.setAttribute('aria-pressed', String(chip === button))
  })
  renderProducts()
})

function photoCreditHtml(product, galleryIndex = 0) {
  const attribution = galleryIndex > 0 ? product.galleryAttributions?.[galleryIndex - 1] : product
  const sourceUrl = safeWebUrl(attribution?.source)
  const licenseUrl = safeWebUrl(attribution?.licenseUrl)
  const photoCredit = attribution?.creator ? `Photo: ${escapeHtml(attribution.creator)}` : 'Seller-provided image'
  const creditLink = sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">${photoCredit}</a>` : photoCredit
  const licenseLink = attribution?.license && licenseUrl ? ` · <a href="${escapeHtml(licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(attribution.license)}</a>` : ''
  return `${creditLink}${licenseLink}`
}

function videoCreditHtml(product) {
  const sourceUrl = safeWebUrl(product.videoSource)
  const licenseUrl = safeWebUrl(product.videoLicenseUrl)
  const creator = product.videoCreator ? escapeHtml(product.videoCreator) : 'Video source'
  const creditLink = sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">${creator}</a>` : creator
  const licenseLink = product.videoLicense && licenseUrl ? ` · <a href="${escapeHtml(licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(product.videoLicense)}</a>` : ''
  return `${creditLink}${licenseLink}`
}

function stockText(product) {
  if (!product.inventorySet) return 'Availability unconfirmed'
  if (product.stock === 0) return 'Out of stock'
  return `${product.stock} ${product.stock === 1 ? 'pack' : 'packs'} available`
}

const defaultDescription = 'Example listing only. Ask the seller to confirm exact contents, current product approvals, and availability in your area.'

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase()
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || getProductCategory(product) === activeCategory
    const matchesSearch = !query || `${product.name} ${product.kind} ${product.pack} ${product.description || ''}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
  document.querySelector('#product-count').textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'product' : 'products'}`
  document.querySelector('#product-grid').innerHTML = visibleProducts.length ? visibleProducts.map((product, index) => {
    const videoUrl = safeWebUrl(product.video)
    return `
      <article class="product-card" data-card="${escapeHtml(product.id)}">
        <div class="product-photo"><img src="${escapeHtml(safeImageUrl(product.image))}" alt="${escapeHtml(product.imageAlt || product.name)}" loading="lazy"><span class="approval-tag">Illustrative listing</span></div>
        <div class="photo-credit">${photoCreditHtml(product)}</div>
        <div class="product-info"><div><span class="product-number">${String(index + 1).padStart(2, '0')} · ${escapeHtml(product.kind)}</span><h3><button type="button" class="product-open" data-open-product="${escapeHtml(product.id)}">${escapeHtml(product.name)}</button></h3></div><div class="product-actions" data-product-controls="${escapeHtml(product.id)}"></div></div>
        <div class="product-details"><span>${escapeHtml(product.pack)}<small class="stock-count ${product.inventorySet && product.stock === 0 ? 'stock-out' : ''}">${!product.inventorySet ? ' · Availability unconfirmed' : product.stock === 0 ? ' · Out of stock' : ` · ${product.stock} ${product.stock === 1 ? 'pack' : 'packs'} available`}</small></span><strong>${formatPrice(Number(product.price))} <small>indicative</small></strong></div>
        <p class="product-description">${escapeHtml(product.description || defaultDescription)}</p>
        ${videoUrl && !product.guideAnimation ? `<a class="product-video" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer">▶ Watch product video <span aria-hidden="true">↗</span></a>` : ''}
      </article>
    `
  }).join('') : '<p class="catalog-empty">No products match. Try another search or category.</p>'
  renderProductControls()
  observeProductCards()
}

function observeProductCards() {
  if (!('IntersectionObserver' in window)) return
  productObserver?.disconnect()
  productObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const productId = entry.target.dataset.productId
      recordProductImpression(productId)
      productObserver.unobserve(entry.target)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.product-card').forEach((card) => {
    const productId = card.querySelector('[data-product-controls]')?.dataset.productControls
    if (productId) {
      card.dataset.productId = productId
      productObserver.observe(card)
    }
  })
}

function renderAdminProducts() {
  const list = document.querySelector('#admin-product-list')
  document.querySelector('#admin-product-count').textContent = `${products.length} ${products.length === 1 ? 'item' : 'items'}`
  const countedProducts = products.filter((product) => product.inventorySet)
  const totalStock = countedProducts.reduce((total, product) => total + (Number(product.stock) || 0), 0)
  const lowStock = countedProducts.filter((product) => Number(product.stock) > 0 && Number(product.stock) <= 5).length
  const outOfStock = countedProducts.filter((product) => Number(product.stock) === 0).length
  const uncounted = products.length - countedProducts.length
  document.querySelector('#inventory-summary').textContent = `${totalStock} packs on hand · ${lowStock} low · ${outOfStock} out · ${uncounted} need a count`
  list.innerHTML = products.map((product) => `<div class="admin-product-row"><img src="${escapeHtml(safeImageUrl(product.image))}" alt=""><span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.pack)} · ${formatPrice(Number(product.price))}</small><span class="admin-stock-control"><button type="button" data-stock-step="-1" data-stock-id="${escapeHtml(product.id)}" aria-label="Reduce ${escapeHtml(product.name)} stock" ${!product.inventorySet || Number(product.stock) === 0 ? 'disabled' : ''}>−</button><b>${product.inventorySet ? `${Number(product.stock) || 0} ${Number(product.stock) === 1 ? 'pack' : 'packs'}` : 'Set count'}</b><button type="button" data-stock-step="1" data-stock-id="${escapeHtml(product.id)}" aria-label="Increase ${escapeHtml(product.name)} stock">+</button></span></span><button type="button" data-edit="${escapeHtml(product.id)}" aria-label="Edit ${escapeHtml(product.name)}">Edit</button><button type="button" class="admin-delete" data-delete="${escapeHtml(product.id)}" aria-label="Delete ${escapeHtml(product.name)}">×</button></div>`).join('') || '<p class="wishlist-empty">No products yet. Add your first item.</p>'
}

renderProducts()
renderAdminProducts()

function renderProductControls() {
  document.querySelectorAll('[data-product-controls]').forEach((container) => {
    const productId = container.dataset.productControls
    const product = products.find((item) => item.id === productId)
    const quantity = wishlist.find((item) => item.id === productId)?.quantity || 0
    const stock = Number(product.stock) || 0
    container.innerHTML = quantity
      ? `<div class="quantity-stepper" aria-label="${escapeHtml(product.name)} quantity"><button type="button" data-quantity-change="-1" data-product-id="${escapeHtml(productId)}" aria-label="Remove one ${escapeHtml(product.name)}">−</button><output aria-live="polite">${quantity}</output><button type="button" data-quantity-change="1" data-product-id="${escapeHtml(productId)}" aria-label="Add one ${escapeHtml(product.name)}" ${product.inventorySet && quantity >= stock ? 'disabled' : ''}>+</button></div>`
      : `<button class="wishlist-add" type="button" data-quantity-change="1" data-product-id="${escapeHtml(productId)}" aria-label="Add ${escapeHtml(product.name)} to wishlist" ${product.inventorySet && stock === 0 ? 'disabled' : ''}>${product.inventorySet && stock === 0 ? 'Out of stock' : 'Add'} ${!product.inventorySet || stock > 0 ? '<span aria-hidden="true">+</span>' : ''}</button>`
  })
}

function changeProductQuantity(productId, change) {
  const existing = wishlist.find((item) => item.id === productId)
  const product = products.find((item) => item.id === productId)
  if (!product) return
  const nextQuantity = (existing?.quantity || 0) + change
  if (change > 0 && product.inventorySet && nextQuantity > (Number(product.stock) || 0)) return
  wishlist = nextQuantity > 0
    ? existing
      ? wishlist.map((item) => item.id === productId ? { ...item, quantity: nextQuantity } : item)
      : [...wishlist, { id: productId, quantity: nextQuantity }]
    : wishlist.filter((item) => item.id !== productId)
  if (change > 0) recordProductClick(productId)
  saveWishlist()
  renderWishlist()
}

document.querySelector('#product-grid').addEventListener('click', (event) => {
  const control = event.target.closest('[data-quantity-change]')
  if (control) {
    changeProductQuantity(control.dataset.productId, Number(control.dataset.quantityChange))
    return
  }
  // Links (video, photo credit) and other buttons keep their own behaviour.
  if (event.target.closest('a, input, button:not([data-open-product])')) return
  const card = event.target.closest('.product-card[data-card]')
  if (card) openProductSheet(card.dataset.card)
})

function renderWishlist() {
  const panel = document.querySelector('#wishlist-panel')
  const previousWishlist = JSON.stringify(wishlist)
  wishlist = wishlist.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.id)
    if (!product) return []
    const quantity = product.inventorySet ? Math.min(item.quantity, Number(product.stock) || 0) : item.quantity
    return quantity > 0 ? [{ ...item, quantity }] : []
  })
  if (JSON.stringify(wishlist) !== previousWishlist) saveWishlist()
  const itemCount = wishlist.reduce((total, item) => total + item.quantity, 0)
  const itemRows = wishlist.map((item) => {
    const product = products.find((entry) => entry.id === item.id)
    return `<li><span><strong>${product.name}</strong><small>${product.pack} · ${formatPrice(product.price)} each</small></span><label class="wishlist-quantity">Qty<input type="number" min="1" ${product.inventorySet ? `max="${product.stock}"` : ''} step="1" value="${item.quantity}" data-quantity="${item.id}" aria-label="Quantity of ${product.name}"></label><strong>${formatPrice(product.price * item.quantity)}</strong><button class="wishlist-remove" type="button" data-remove="${item.id}" aria-label="Remove ${product.name}">×</button></li>`
  }).join('')
  const total = wishlist.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0)
  panel.innerHTML = `<div class="wishlist-heading"><div><p class="eyebrow">YOUR SHORTLIST · ${itemCount} ${itemCount === 1 ? 'PACK' : 'PACKS'}</p><h3>Wishlist</h3></div><button class="clear-wishlist" type="button" ${wishlist.length ? '' : 'disabled'}>Clear</button></div>${wishlist.length ? `<ul class="wishlist-items">${itemRows}</ul><div class="wishlist-total"><span>Indicative total</span><strong>${formatPrice(total)}</strong></div>` : '<p class="wishlist-empty">Your wishlist is empty. Add a product to start an enquiry.</p>'}<p class="wishlist-disclaimer">Prices and stock are unconfirmed until the seller verifies them. Wishlist quantities are enquiries, not reservations.</p><a class="button button-whatsapp ${wishlist.length ? '' : 'is-disabled'}" href="#enquire" ${wishlist.length ? '' : 'aria-disabled="true"'}>Enquire on WhatsApp <span aria-hidden="true">↗</span></a>`
  panel.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => {
    wishlist = wishlist.filter((item) => item.id !== button.dataset.remove)
    saveWishlist()
    renderWishlist()
  }))
  panel.querySelectorAll('[data-quantity]').forEach((input) => input.addEventListener('change', () => {
    const product = products.find((entry) => entry.id === input.dataset.quantity)
    const requestedQuantity = Math.max(1, Number.parseInt(input.value, 10) || 1)
    const quantity = product.inventorySet ? Math.min(Number(product.stock) || 0, requestedQuantity) : requestedQuantity
    wishlist = wishlist.map((item) => item.id === input.dataset.quantity ? { ...item, quantity } : item)
    saveWishlist()
    renderWishlist()
  }))
  panel.querySelector('.clear-wishlist').addEventListener('click', () => {
    wishlist = []
    saveWishlist()
    renderWishlist()
  })
  panel.querySelector('.button-whatsapp').addEventListener('click', (event) => {
    if (!wishlist.length) event.preventDefault()
    else document.querySelector('#enquire').scrollIntoView({ behavior: 'smooth' })
  })
  renderProductControls()
  renderMobileBasket(itemCount, total)
}

function renderMobileBasket(itemCount, total) {
  document.querySelector('#mobile-basket').hidden = itemCount === 0
  document.querySelector('#app').classList.toggle('basket-open', itemCount > 0)
  document.querySelector('#mobile-basket-count').textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'} added`
  document.querySelector('#mobile-basket-total').textContent = formatPrice(total)
  renderBasketSheet(total)
}

function renderBasketSheet(total) {
  const items = document.querySelector('#basket-sheet-items')
  items.innerHTML = wishlist.length ? wishlist.map((item) => {
    const product = products.find((entry) => entry.id === item.id)
    return `<article class="basket-sheet-item"><img src="${escapeHtml(safeImageUrl(product.image))}" alt=""><div class="basket-sheet-product"><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.pack)}</small><span>${formatPrice(product.price)} each</span></div><div class="quantity-stepper" aria-label="${escapeHtml(product.name)} quantity"><button type="button" data-quantity-change="-1" data-product-id="${escapeHtml(product.id)}" aria-label="Remove one ${escapeHtml(product.name)}">−</button><output>${item.quantity}</output><button type="button" data-quantity-change="1" data-product-id="${escapeHtml(product.id)}" aria-label="Add one ${escapeHtml(product.name)}" ${product.inventorySet && item.quantity >= Number(product.stock) ? 'disabled' : ''}>+</button></div></article>`
  }).join('') : '<p class="catalog-empty">Your basket is empty.</p>'
  document.querySelector('#basket-sheet-total').textContent = formatPrice(total)
}

const basketSheet = document.querySelector('#basket-sheet')
document.querySelector('#mobile-basket-continue').addEventListener('click', () => {
  renderBasketSheet(wishlist.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0))
  basketSheet.showModal()
})
document.querySelector('#basket-sheet-items').addEventListener('click', (event) => {
  const control = event.target.closest('[data-quantity-change]')
  if (control) changeProductQuantity(control.dataset.productId, Number(control.dataset.quantityChange))
})
document.querySelector('#sheet-continue').addEventListener('click', () => {
  basketSheet.close()
  document.querySelector('#enquire').scrollIntoView({ behavior: 'smooth' })
  document.querySelector('#enquire input[name="name"]').focus({ preventScroll: true })
})
document.querySelectorAll('[data-sheet-close]').forEach((button) => button.addEventListener('click', () => {
  document.querySelector(`#${button.dataset.sheetClose}`).close()
}))

function enableSwipeSheet(dialog, handle, scrollArea) {
  let startY = 0
  handle.addEventListener('pointerdown', (event) => {
    startY = event.clientY
    handle.setPointerCapture(event.pointerId)
  })
  handle.addEventListener('pointerup', (event) => {
    const delta = event.clientY - startY
    if (delta > 55 && scrollArea.scrollTop <= 0) dialog.close()
    if (delta < -55) dialog.classList.add('is-expanded')
  })
  dialog.addEventListener('close', () => dialog.classList.remove('is-expanded'))
}

enableSwipeSheet(basketSheet, document.querySelector('#basket-sheet-handle'), document.querySelector('#basket-sheet-items'))

/* ---------- Product details popup (tap a card, swipe down to close) ---------- */
const productSheet = document.querySelector('#product-sheet')
const productSheetBody = document.querySelector('#product-sheet-body')
const productSheetPanel = document.querySelector('#product-sheet-panel')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let productSheetInHistory = false
let productSheetOpener = null

function youtubeVideo(url) {
  const match = String(url || '').match(/(?:youtube\.com\/(shorts\/|watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/)
  return match ? { id: match[2] } : null
}

function directVideo(url) {
  try { return /\.(mp4|webm|ogg|ogv)$/i.test(new URL(url).pathname) } catch { return false }
}

function productGuideHtml(product) {
  const details = `${product.name} ${product.kind}`.toLowerCase()
  const guideType = /sparkler|phuljhari/.test(details) ? 'sparkler' : /chakri|spinning|spinner|wheel/.test(details) ? 'spinner' : 'fountain'
  const steps = guideType === 'sparkler'
    ? ['Use outdoors, away from people and clothing', 'An adult lights one at a time', 'Hold by the wire handle, arm outstretched', 'Soak the spent wire; do not hand it off hot']
    : guideType === 'spinner'
      ? ['Check local rules and read the product label', 'Place flat on open, bare, level ground', 'An adult lights as labeled, then steps away', 'Never hold it or relight a dud']
      : ['Check local rules and read the product label', 'Set upright on open, bare, level ground', 'An adult lights as labeled, then steps away', 'Let it finish; never relight a dud']
  const operator = guideType === 'sparkler'
    ? '<g class="guide-operator guide-operator-still"><circle cx="115" cy="169" r="17" fill="#f2cd5b"/><path d="M115 190v61m0-42 58-21m-58 26-25 35m25 2-21 43m21-43 27 42" fill="none" stroke="#f8f6f0" stroke-linecap="round" stroke-width="12"/><path d="m173 188 39-56" fill="none" stroke="#d9ddd6" stroke-linecap="round" stroke-width="5"/><path d="m205 142 9-14" stroke="#ee634d" stroke-linecap="round" stroke-width="8"/></g>'
    : '<g class="guide-operator"><circle cx="104" cy="171" r="17" fill="#f2cd5b"/><path d="M104 192v62m0-40 43 24m-43-18-27 38m27-4-23 43m23-43 28 42" fill="none" stroke="#f8f6f0" stroke-linecap="round" stroke-width="12"/></g>'
  const productArt = guideType === 'sparkler'
    ? '<g class="guide-sparkler"><path d="m211 132 40-58" stroke="#d9ddd6" stroke-linecap="round" stroke-width="5"/><path d="m247 81 8-14" stroke="#ee634d" stroke-linecap="round" stroke-width="8"/></g><g class="guide-effects"><path d="m254 48 3-19m12 26 15-12m-8 25 20-2m-41-1-17-15m38 28 18 12m-46-29-20 1" stroke="#f2cd5b" stroke-linecap="round" stroke-width="4"/><circle cx="256" cy="59" r="17" fill="#f2cd5b" opacity=".26"/></g>'
    : guideType === 'spinner'
      ? '<g class="guide-spinner"><circle cx="315" cy="283" r="27" fill="#ee634d" stroke="#f2cd5b" stroke-width="5"/><circle cx="315" cy="283" r="7" fill="#f8f6f0"/><path d="M315 258v50m-25-25h50m-42-18 35 36m0-36-35 36" stroke="#f8f6f0" stroke-width="3"/></g><g class="guide-effects"><path d="m315 242 1-24m24 32 19-15m-12 39 24-1m-47 27 2 22m-26-42-21 12m19-34-21-13" stroke="#f2cd5b" stroke-linecap="round" stroke-width="5"/><circle cx="315" cy="282" r="48" fill="none" stroke="#ee634d" stroke-width="3"/></g>'
      : '<g class="guide-fountain"><rect x="286" y="226" width="58" height="72" rx="8" fill="#ee634d"/><rect x="286" y="237" width="58" height="9" fill="#f2cd5b"/><path d="M315 225q9-12 0-21" fill="none" stroke="#d9ddd6" stroke-linecap="round" stroke-width="4"/><text x="315" y="274" fill="#fff" font-size="10" font-weight="700" text-anchor="middle">FOUNTAIN</text></g><g class="guide-effects"><path d="M315 209v-73m-12 73-21-60m33 60 22-60m-43 60-42-42m64 42 42-42m-69 42-10-45m45 45 10-45" stroke="#f2cd5b" stroke-linecap="round" stroke-width="5"/><path d="M315 205v-91" stroke="#ee634d" stroke-linecap="round" stroke-width="3"/></g>'
  return `<div class="product-guide" data-product-guide data-guide-type="${guideType}" data-guide-steps="${escapeHtml(JSON.stringify(steps))}">
    <div class="guide-heading"><span>SAFE-USE ANIMATION</span><strong>${escapeHtml(product.name)}</strong></div>
    <svg class="guide-art" viewBox="0 0 480 360" role="img" aria-label="Illustration of safe ${escapeHtml(product.kind.toLowerCase())} use">
      <defs><linearGradient id="guide-sky-${guideType}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#18353b"/><stop offset="1" stop-color="#32585b"/></linearGradient></defs>
      <rect width="480" height="360" fill="url(#guide-sky-${guideType})"/>
      <circle cx="54" cy="51" r="2" fill="#f8f6f0"/><circle cx="402" cy="67" r="2" fill="#f2cd5b"/><circle cx="348" cy="38" r="1.5" fill="#f8f6f0"/>
      <path d="M0 298q86-12 164 0t156 0 160 0v62H0z" fill="#10282d"/><path d="M0 298h480" stroke="#718083" stroke-width="2"/>
      ${operator}${productArt}
    </svg>
    <p class="guide-caption" data-guide-caption aria-live="polite">${escapeHtml(steps[0])}</p>
    <div class="guide-progress" aria-hidden="true">${steps.map((_, index) => `<span data-guide-step aria-current="${index === 0}"></span>`).join('')}</div>
    <div class="guide-footer"><small>Illustrative only · Follow local rules and the product label</small><button class="guide-replay" type="button" data-guide-replay aria-label="Replay animation" title="Replay animation"><span aria-hidden="true">↻</span></button></div>
  </div>`
}

let productGuideTimer = null

function stopProductGuide(guide) {
  if (productGuideTimer !== null) {
    clearInterval(productGuideTimer)
    productGuideTimer = null
  }
  guide?.classList.remove('is-playing')
}

function playProductGuide(guide) {
  if (!guide) return
  stopProductGuide()
  const steps = JSON.parse(guide.dataset.guideSteps)
  const caption = guide.querySelector('[data-guide-caption]')
  const progressSteps = [...guide.querySelectorAll('[data-guide-step]')]
  let step = 0
  const showStep = () => {
    caption.textContent = steps[step]
    progressSteps.forEach((element, index) => element.setAttribute('aria-current', String(index === step)))
  }
  showStep()
  if (reducedMotion.matches) return
  guide.classList.remove('is-playing')
  void guide.offsetWidth
  guide.classList.add('is-playing')
  productGuideTimer = setInterval(() => {
    if (step === steps.length - 1) {
      stopProductGuide(guide)
      return
    }
    step += 1
    showStep()
  }, 2000)
}

function setProductGallerySlide(index) {
  const track = productSheetBody.querySelector('[data-gallery-track]')
  if (!track) return
  const slides = [...track.querySelectorAll('[data-gallery-slide]')]
  const selectedIndex = Math.max(0, Math.min(index, slides.length - 1))
  const selectedSlide = slides[selectedIndex]
  const isVideoSlide = selectedSlide.hasAttribute('data-video-slide')
  const guide = selectedSlide.querySelector('[data-product-guide]')
  const existingGuide = productSheetBody.querySelector('[data-product-guide]')
  if (existingGuide) {
    if (guide) playProductGuide(guide)
    else stopProductGuide(existingGuide)
  }
  track.style.transform = `translateX(-${selectedIndex * 100}%)`
  slides.forEach((slide, slideIndex) => {
    const isSelected = slideIndex === selectedIndex
    slide.setAttribute('aria-hidden', String(!isSelected))
    slide.toggleAttribute('inert', !isSelected)
  })
  const galleryPosition = productSheetBody.querySelector('[data-gallery-position]')
  galleryPosition.textContent = `${selectedIndex + 1} / ${slides.length}`
  galleryPosition.classList.toggle('is-video-position', isVideoSlide)
  productSheetBody.querySelector('[data-gallery-step="-1"]').disabled = selectedIndex === 0
  productSheetBody.querySelector('[data-gallery-step="1"]').disabled = selectedIndex === slides.length - 1

  const product = products.find((item) => item.id === productSheet.dataset.productId)
  const credit = productSheetBody.querySelector('[data-photo-credit]')
  credit.innerHTML = guide
    ? 'Animated safety guide · Follow local rules and product label'
    : isVideoSlide
    ? `Representative clip · 8-second preview · muted · ${videoCreditHtml(product)}`
    : photoCreditHtml(product, selectedIndex)

  const video = productSheetBody.querySelector('[data-product-preview]')
  if (video) {
    if (isVideoSlide) {
      if (video.readyState > 0) video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
      if (video.readyState > 0) video.currentTime = 0
    }
  }

  const youtubeFrame = productSheetBody.querySelector('[data-youtube-player]')
  if (youtubeFrame) {
    youtubeFrame.src = isVideoSlide
      ? `https://www.youtube-nocookie.com/embed/${youtubeFrame.dataset.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&controls=1&start=0&end=8`
      : 'about:blank'
  }
}

function openProductSheet(productId) {
  const product = products.find((item) => item.id === productId)
  if (!product) return
  const videoUrl = safeWebUrl(product.video)
  const youtube = youtubeVideo(videoUrl)
  const galleryImages = [product.image, ...(Array.isArray(product.galleryImages) ? product.galleryImages : [])]
    .map(safeImageUrl)
    .filter(Boolean)
    .slice(0, 3)
  const hasPlayableVideo = Boolean(product.guideAnimation || youtube || directVideo(videoUrl))
  productSheetBody.innerHTML = `
    <div class="product-sheet-media" role="region" aria-label="${escapeHtml(product.name)} product media">
      <div class="product-gallery-track" data-gallery-track>
        ${galleryImages.map((image, index) => `<div class="product-gallery-slide" data-gallery-slide aria-hidden="${index !== 0}" ${index !== 0 ? 'inert' : ''}><img src="${escapeHtml(image)}" alt="${escapeHtml(product.imageAlt || product.name)}${index ? `, photo ${index + 1}` : ''}"><span class="approval-tag">Illustrative listing</span></div>`).join('')}
        ${product.guideAnimation ? `<div class="product-gallery-slide product-gallery-slide-video" data-gallery-slide data-video-slide aria-hidden="true" inert>${productGuideHtml(product)}</div>` : youtube ? `<div class="product-gallery-slide product-gallery-slide-video" data-gallery-slide data-video-slide aria-hidden="true" inert><iframe data-youtube-player data-youtube-id="${youtube.id}" src="about:blank" title="8-second product video preview" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>` : directVideo(videoUrl) ? `<div class="product-gallery-slide product-gallery-slide-video" data-gallery-slide data-video-slide aria-hidden="true" inert><video src="${escapeHtml(videoUrl)}" poster="${escapeHtml(galleryImages[0] || '')}" controls muted playsinline preload="metadata" data-product-preview></video></div>` : ''}
      </div>
      <button class="product-gallery-nav" type="button" data-gallery-step="-1" aria-label="Previous media" disabled><span aria-hidden="true">&larr;</span></button>
      <button class="product-gallery-nav" type="button" data-gallery-step="1" aria-label="Next media" ${galleryImages.length + Number(hasPlayableVideo) <= 1 ? 'disabled' : ''}><span aria-hidden="true">&rarr;</span></button>
      <span class="product-gallery-position" data-gallery-position aria-live="polite">1 / ${galleryImages.length + Number(hasPlayableVideo)}</span>
    </div>
    <div class="product-sheet-content">
      <p class="eyebrow">${escapeHtml(product.kind)}</p>
      <h2 id="product-sheet-title">${escapeHtml(product.name)}</h2>
      <p class="product-sheet-meta"><span>${escapeHtml(product.pack)}</span><span class="stock-count ${product.inventorySet && product.stock === 0 ? 'stock-out' : ''}">${stockText(product)}</span></p>
      <p class="product-sheet-description">${escapeHtml(product.description || defaultDescription)}</p>
      ${videoUrl && !product.guideAnimation && !youtube && !directVideo(videoUrl) ? `<a class="product-video" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer">▶ Watch product video <span aria-hidden="true">↗</span></a>` : ''}
      <div class="photo-credit" data-photo-credit>${photoCreditHtml(product)}</div>
    </div>
    <div class="product-sheet-footer">
      <p class="product-sheet-price"><strong>${formatPrice(Number(product.price))}</strong><small>indicative</small></p>
      <div class="product-actions" data-product-controls="${escapeHtml(product.id)}"></div>
    </div>`
  productSheet.dataset.productId = productId
  const previewVideo = productSheetBody.querySelector('[data-product-preview]')
  previewVideo?.addEventListener('timeupdate', () => {
    if (Number.isFinite(previewVideo.duration) && previewVideo.currentTime >= Math.min(8, previewVideo.duration)) {
      previewVideo.pause()
      previewVideo.currentTime = Math.min(8, previewVideo.duration)
    }
  })
  renderProductControls()
  recordProductClick(productId)
  productSheetOpener = document.activeElement
  productSheet.classList.remove('is-closing')
  productSheet.style.transition = ''
  productSheet.style.transform = ''
  productSheet.style.opacity = ''
  productSheet.dataset.dragY = '0'
  productSheet.showModal()
  setProductGallerySlide(0)
  productSheetPanel.scrollTop = 0
  document.documentElement.classList.add('sheet-lock')
  // Let the phone's back button close the sheet instead of leaving the page.
  history.pushState({ productSheet: true }, '')
  productSheetInHistory = true
}

function closeProductSheet() {
  if (!productSheet.open || productSheet.classList.contains('is-closing')) return
  if (reducedMotion.matches) return productSheet.close()
  productSheet.classList.add('is-closing')
  productSheet.style.transition = 'transform .2s ease-in, opacity .2s ease-in'
  productSheet.style.transform = `translateY(${Math.max(60, parseFloat(productSheet.dataset.dragY || 0) + 60)}px)`
  productSheet.style.opacity = '0'
  setTimeout(() => productSheet.close(), 220)
}

productSheet.addEventListener('close', () => {
  productSheet.classList.remove('is-closing')
  productSheet.style.transition = ''
  productSheet.style.transform = ''
  productSheet.style.opacity = ''
  productSheet.dataset.dragY = '0'
  stopProductGuide(productSheetBody.querySelector('[data-product-guide]'))
  productSheetBody.innerHTML = '' // also stops a playing video
  document.documentElement.classList.remove('sheet-lock')
  if (productSheetInHistory) {
    productSheetInHistory = false
    if (history.state?.productSheet) history.back()
  }
  if (productSheetOpener?.isConnected) productSheetOpener.focus({ preventScroll: true })
})

// Escape key: animate out instead of closing instantly.
productSheet.addEventListener('cancel', (event) => {
  event.preventDefault()
  closeProductSheet()
})

window.addEventListener('popstate', () => {
  if (!productSheet.open) return
  productSheetInHistory = false
  closeProductSheet()
})

productSheet.addEventListener('click', (event) => {
  if (event.target === productSheet) return closeProductSheet() // tap on the dimmed backdrop
  const replay = event.target.closest('[data-guide-replay]')
  if (replay) return playProductGuide(replay.closest('[data-product-guide]'))
  const galleryButton = event.target.closest('[data-gallery-step]')
  if (galleryButton) return setProductGallerySlide(Number(productSheetBody.querySelector('[data-gallery-position]').textContent.split(' / ')[0]) - 1 + Number(galleryButton.dataset.galleryStep))
  const control = event.target.closest('[data-quantity-change]')
  if (control) return changeProductQuantity(control.dataset.productId, Number(control.dataset.quantityChange))
  if (event.target.closest('[data-product-sheet-close]')) return closeProductSheet()
})

// Drag the sheet down to dismiss. It follows the finger, then closes if pulled
// far or flicked fast, otherwise it springs back.
function enableDragToDismiss(sheet, scrollArea, onDismiss) {
  let startY = 0
  let lastY = 0
  let startTime = 0
  let tracking = false
  let dragging = false

  const begin = (y, target) => {
    if (target.closest('button, a, input, textarea, iframe')) return false
    tracking = true
    dragging = false
    startY = lastY = y
    startTime = performance.now()
    return true
  }
  const move = (y, event) => {
    if (!tracking) return
    const delta = y - startY
    lastY = y
    if (!dragging) {
      if (delta > 8 && scrollArea.scrollTop <= 0) {
        dragging = true
        sheet.style.transition = 'none'
      } else if (Math.abs(delta) > 8) {
        tracking = false // normal scrolling inside the sheet
        return
      }
    }
    if (dragging) {
      if (event.cancelable) event.preventDefault()
      const offset = Math.max(0, delta)
      sheet.dataset.dragY = String(offset)
      sheet.style.transform = `translateY(${offset}px)`
      sheet.style.opacity = String(1 - Math.min(offset / 500, 0.4))
    }
  }
  const end = () => {
    if (!tracking) return
    tracking = false
    if (!dragging) return
    dragging = false
    const delta = lastY - startY
    const velocity = delta / Math.max(1, performance.now() - startTime)
    if (delta > Math.min(140, scrollArea.offsetHeight * 0.25) || (delta > 40 && velocity > 0.6)) onDismiss()
    else {
      sheet.style.transition = 'transform .2s ease-out, opacity .2s ease-out'
      sheet.style.transform = ''
      sheet.style.opacity = ''
      sheet.dataset.dragY = '0'
    }
  }

  sheet.addEventListener('touchstart', (event) => {
    if (event.touches.length === 1) begin(event.touches[0].clientY, event.target)
  }, { passive: true })
  sheet.addEventListener('touchmove', (event) => move(event.touches[0].clientY, event), { passive: false })
  sheet.addEventListener('touchend', end)
  sheet.addEventListener('touchcancel', end)

  // Mouse drag, so it can be tested on a laptop too.
  sheet.addEventListener('mousedown', (event) => {
    if (event.button !== 0 || !begin(event.clientY, event.target)) return
    const onMove = (moveEvent) => move(moveEvent.clientY, moveEvent)
    const onUp = () => {
      end()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  })
}

enableDragToDismiss(productSheet, productSheetPanel, closeProductSheet)

renderWishlist()

function renderAdminAnalytics(metrics) {
  const impressions = Object.values(metrics.productImpressions || {}).reduce((total, count) => total + count, 0)
  const clicks = Object.values(metrics.productClicks || {}).reduce((total, count) => total + count, 0)
  document.querySelector('#stat-views').textContent = String(metrics.sessions || 0)
  document.querySelector('#stat-clicks').textContent = String(clicks)
  document.querySelector('#stat-rate').textContent = `${impressions ? Math.min(100, Math.round(clicks / impressions * 100)) : 0}%`
  document.querySelector('#stat-whatsapp').textContent = String(metrics.whatsappStarts || 0)
  for (const depth of [25, 50, 75, 100]) {
    document.querySelector(`#scroll-${depth}`).textContent = String(metrics.scrollDepth?.[depth] || 0)
  }
  document.querySelector('#analytics-product-list').innerHTML = products.map((product) => {
    const views = metrics.productImpressions?.[product.id] || 0
    const productClicks = metrics.productClicks?.[product.id] || 0
    const rate = views ? `${Math.min(100, Math.round(productClicks / views * 100))}%` : '0%'
    return `<div class="analytics-product-row"><strong>${escapeHtml(product.name)}</strong><span>${views} views</span><span>${productClicks} clicks</span><b>${rate}</b></div>`
  }).join('') || '<p class="wishlist-empty">No products to report yet.</p>'
}

async function loadAdminAnalytics() {
  const status = document.querySelector('#analytics-status')
  try {
    if (import.meta.env.DEV) {
      renderAdminAnalytics(safeRead(analyticsKey, emptyAnalytics()))
      status.textContent = 'Local development metrics'
      return
    }
    const response = await fetch('/api/analytics', { credentials: 'same-origin' })
    if (!response.ok) throw new Error('Analytics could not be loaded.')
    renderAdminAnalytics(await response.json())
    status.textContent = 'Shared store metrics'
  } catch (error) {
    status.textContent = error.message || 'Analytics could not be loaded.'
  }
}

document.querySelector('#refresh-dashboard').addEventListener('click', loadAdminAnalytics)

if (!sessionStorage.getItem('sparkCoSessionRecorded')) {
  sessionStorage.setItem('sparkCoSessionRecorded', '1')
  recordAnalytics({ type: 'session' })
}

let lastScrollDepth = Number(sessionStorage.getItem('sparkCoScrollDepth') || 0)
let scrollUpdatePending = false
window.addEventListener('scroll', () => {
  if (scrollUpdatePending) return
  scrollUpdatePending = true
  requestAnimationFrame(() => {
    scrollUpdatePending = false
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollableHeight <= 0) return
    const depth = Math.min(100, Math.floor(window.scrollY / scrollableHeight * 100))
    for (const milestone of [25, 50, 75, 100]) {
      if (depth >= milestone && lastScrollDepth < milestone) recordAnalytics({ type: 'scroll_depth', depth: milestone })
    }
    lastScrollDepth = Math.max(lastScrollDepth, depth)
    sessionStorage.setItem('sparkCoScrollDepth', String(lastScrollDepth))
  })
}, { passive: true })

const adminDialog = document.querySelector('#admin-dialog')
const adminLogin = document.querySelector('#admin-login')
const adminConsole = document.querySelector('#admin-console')
const loginStatus = document.querySelector('#login-status')

function showAdminConsole(isAuthenticated) {
  adminLogin.hidden = isAuthenticated
  adminConsole.hidden = !isAuthenticated
  if (isAuthenticated) {
    document.querySelector('#admin-notice').textContent = import.meta.env.DEV
      ? 'Local development mode. Changes are saved in this browser only.'
      : 'Signed in. Catalog edits are shared with visitors through Cloudflare KV.'
    loadAdminAnalytics()
  }
}

document.querySelector('#open-admin').addEventListener('click', async () => {
  adminDialog.showModal()
  showAdminConsole(false)
  loginStatus.textContent = ''
  if (import.meta.env.DEV) {
    showAdminConsole(true)
    return
  }

  loginStatus.textContent = 'Checking sign-in...'
  try {
    const response = await fetch('/api/admin/session', { credentials: 'same-origin' })
    showAdminConsole(response.ok)
    loginStatus.textContent = response.status === 503 ? 'Admin sign-in is not configured for this site.' : ''
  } catch {
    loginStatus.textContent = 'Could not reach the admin service.'
  }
})

adminLogin.addEventListener('submit', async (event) => {
  event.preventDefault()
  loginStatus.textContent = 'Signing in...'
  const credentials = Object.fromEntries(new FormData(adminLogin))
  try {
    const response = await fetch('/api/admin/session', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    if (!response.ok) {
      const result = await response.json().catch(() => ({}))
      loginStatus.textContent = result.error || 'Could not sign in.'
      return
    }
    adminLogin.reset()
    showAdminConsole(true)
    loginStatus.textContent = ''
  } catch {
    loginStatus.textContent = 'Could not reach the admin service.'
  }
})

document.querySelector('#admin-logout').addEventListener('click', async () => {
  if (!import.meta.env.DEV) {
    await fetch('/api/admin/session', { method: 'DELETE', credentials: 'same-origin' }).catch(() => {})
  }
  showAdminConsole(false)
  adminLogin.reset()
  loginStatus.textContent = 'Signed out.'
})

document.querySelector('#close-admin').addEventListener('click', () => adminDialog.close())
adminDialog.addEventListener('click', (event) => {
  if (event.target === adminDialog) adminDialog.close()
})
const productForm = document.querySelector('#product-form')
const imageUrlInput = document.querySelector('#admin-image-url')
const imageFileInput = document.querySelector('#admin-image-file')
const imagePreview = document.querySelector('#admin-image-preview')
const stockInput = document.querySelector('#admin-stock')
const stockConfirmed = document.querySelector('#admin-stock-confirmed')
const adminStatus = document.querySelector('#admin-status')
let uploadedImage = ''

function resetProductForm() {
  productForm.reset()
  document.querySelector('#admin-product-id').value = ''
  document.querySelector('#editor-title').textContent = 'Add a product'
  imagePreview.hidden = true
  imagePreview.removeAttribute('src')
  stockConfirmed.checked = false
  stockInput.disabled = true
  stockInput.required = false
  stockInput.value = ''
  uploadedImage = ''
  adminStatus.textContent = ''
}

stockConfirmed.addEventListener('change', () => {
  stockInput.disabled = !stockConfirmed.checked
  stockInput.required = stockConfirmed.checked
  if (stockConfirmed.checked && stockInput.value === '') stockInput.value = '0'
})

function previewProductImage(source) {
  const safeSource = safeImageUrl(source)
  imagePreview.hidden = !safeSource
  if (safeSource) imagePreview.src = safeSource
  else imagePreview.removeAttribute('src')
}

document.querySelector('#new-product').addEventListener('click', resetProductForm)
imageUrlInput.addEventListener('input', () => {
  uploadedImage = ''
  imageFileInput.value = ''
  document.querySelector('#admin-creator').value = ''
  previewProductImage(imageUrlInput.value.trim())
})
imageFileInput.addEventListener('change', async () => {
  const file = imageFileInput.files[0]
  if (!file) return
  try {
    if (!file.type.startsWith('image/')) throw new Error('Choose an image file.')
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, 1400 / bitmap.width, 1400 / bitmap.height)
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    uploadedImage = canvas.toDataURL('image/jpeg', 0.82)
    imageUrlInput.value = ''
    document.querySelector('#admin-creator').value = 'Seller-provided image'
    previewProductImage(uploadedImage)
    adminStatus.textContent = 'Image ready. Save the product to apply it.'
  } catch {
    adminStatus.textContent = 'Could not load that image. Try a JPG, PNG, or WebP file.'
  }
})

document.querySelector('#admin-product-list').addEventListener('click', async (event) => {
  const editButton = event.target.closest('[data-edit]')
  const deleteButton = event.target.closest('[data-delete]')
  const stockButton = event.target.closest('[data-stock-step]')
  if (stockButton) {
    const product = products.find((entry) => entry.id === stockButton.dataset.stockId)
    if (!product) return
    if (!product.inventorySet && Number(stockButton.dataset.stockStep) < 0) return
    const stock = Math.max(0, (Number(product.stock) || 0) + Number(stockButton.dataset.stockStep))
    if (stock === product.stock && product.inventorySet) return
    const nextProducts = products.map((entry) => entry.id === product.id ? { ...entry, stock, inventorySet: true } : entry)
    if (!(await persistCatalog(nextProducts))) return
    products = nextProducts
    renderProducts()
    renderWishlist()
    renderAdminProducts()
    adminStatus.textContent = 'Stock updated.'
    return
  }
  if (editButton) {
    const product = products.find((entry) => entry.id === editButton.dataset.edit)
    if (!product) return
    document.querySelector('#editor-title').textContent = 'Edit product'
    document.querySelector('#admin-product-id').value = product.id
    document.querySelector('#admin-name').value = product.name
    document.querySelector('#admin-kind').value = product.kind
    document.querySelector('#admin-pack').value = product.pack
    document.querySelector('#admin-price').value = product.price
    stockConfirmed.checked = Boolean(product.inventorySet)
    stockInput.disabled = !stockConfirmed.checked
    stockInput.required = stockConfirmed.checked
    stockInput.value = stockConfirmed.checked ? product.stock : ''
    document.querySelector('#admin-image-url').value = product.image.startsWith('data:image/') ? '' : product.image
    document.querySelector('#admin-gallery-image-2').value = product.galleryImages?.[0] || ''
    document.querySelector('#admin-gallery-image-3').value = product.galleryImages?.[1] || ''
    document.querySelector('#admin-creator').value = product.creator || ''
    document.querySelector('#admin-video-url').value = product.guideAnimation ? '' : product.video || ''
    document.querySelector('#admin-description').value = product.description || ''
    uploadedImage = product.image.startsWith('data:image/') ? product.image : ''
    previewProductImage(product.image)
    adminStatus.textContent = ''
  }
  if (deleteButton && window.confirm('Delete this product from the catalog?')) {
    const nextProducts = products.filter((entry) => entry.id !== deleteButton.dataset.delete)
    if (!(await persistCatalog(nextProducts))) return
    products = nextProducts
    wishlist = wishlist.filter((item) => item.id !== deleteButton.dataset.delete)
    saveWishlist()
    renderProducts()
    renderWishlist()
    renderAdminProducts()
    resetProductForm()
    loadAdminAnalytics()
  }
})

async function persistCatalog(nextProducts) {
  if (import.meta.env.DEV) {
    try {
      localStorage.setItem(productsKey, JSON.stringify(nextProducts))
      return true
    } catch {
      adminStatus.textContent = 'Could not save. The browser may be out of local storage.'
      return false
    }
  }

  try {
    const response = await fetch('/api/products', {
      method: 'PUT',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: nextProducts }),
    })
    if (response.ok) return true
    const result = await response.json().catch(() => ({}))
    adminStatus.textContent = result.error || (response.status === 401 ? 'Your admin session expired. Sign in again.' : 'Could not save products.')
    return false
  } catch {
    adminStatus.textContent = 'Could not reach the product storage service.'
    return false
  }
}

productForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const values = Object.fromEntries(new FormData(productForm))
  const existing = products.find((product) => product.id === values.id)
  const image = uploadedImage || values.image.trim() || existing?.image || ''
  const cleanImage = safeImageUrl(image)
  const galleryImages = [values.galleryImage2.trim(), values.galleryImage3.trim()].filter(Boolean).map(safeImageUrl)
  const video = values.video.trim() ? safeWebUrl(values.video.trim()) : ''
  if (!cleanImage) {
    adminStatus.textContent = 'Add a valid HTTPS image URL or upload an image.'
    return
  }
  if (values.video.trim() && !video) {
    adminStatus.textContent = 'Video links must use HTTPS.'
    return
  }
  if (video && !youtubeVideo(video) && !directVideo(video) && video !== existing?.video) {
    adminStatus.textContent = 'Use a YouTube link or direct MP4, WebM, OGG, or OGV video URL.'
    return
  }
  if (galleryImages.some((imageUrl) => !imageUrl)) {
    adminStatus.textContent = 'Additional photo links must be valid HTTPS image URLs.'
    return
  }
  const product = {
    id: existing?.id || (crypto.randomUUID ? crypto.randomUUID() : `product-${Date.now()}`),
    name: values.name.trim(),
    kind: values.kind.trim(),
    pack: values.pack.trim(),
    price: Number(values.price),
    stock: stockConfirmed.checked ? Number(values.stock) : 0,
    inventorySet: stockConfirmed.checked,
    image: cleanImage,
    galleryImages,
    galleryAttributions: galleryImages.map((imageUrl) => {
      const imageIndex = existing?.galleryImages?.indexOf(imageUrl) ?? -1
      return imageIndex >= 0 ? existing.galleryAttributions?.[imageIndex] || null : null
    }),
    imageAlt: values.name.trim(),
    creator: values.creator.trim() || (cleanImage === existing?.image ? existing.creator || '' : ''),
    video,
    guideAnimation: values.video.trim() ? false : existing?.guideAnimation ?? true,
    videoCreator: video === existing?.video ? existing.videoCreator || '' : '',
    videoSource: video === existing?.video ? existing.videoSource || '' : '',
    videoLicense: video === existing?.video ? existing.videoLicense || '' : '',
    videoLicenseUrl: video === existing?.video ? existing.videoLicenseUrl || '' : '',
    description: values.description.trim(),
  }
  const photoChanged = Boolean(existing && cleanImage !== existing.image)
  const nextProducts = existing ? products.map((entry) => entry.id === existing.id ? { ...existing, ...product, source: photoChanged ? '' : existing.source || '', license: photoChanged ? '' : existing.license || '', licenseUrl: photoChanged ? '' : existing.licenseUrl || '' } : entry) : [...products, product]
  if (!(await persistCatalog(nextProducts))) return
  products = nextProducts
  renderProducts()
  renderWishlist()
  renderAdminProducts()
  resetProductForm()
  adminStatus.textContent = 'Product saved.'
  loadAdminAnalytics()
})

async function loadSharedCatalog() {
  if (import.meta.env.DEV) return
  try {
    const response = await fetch('/api/products', { credentials: 'same-origin' })
    if (!response.ok) return
    const result = await response.json()
    if (!Array.isArray(result.products)) return
    products = result.products.map((product) => ({ ...withSeedMedia(product), stock: Number.isInteger(product.stock) ? product.stock : 0, inventorySet: typeof product.inventorySet === 'boolean' ? product.inventorySet : Number.isInteger(product.stock) }))
    wishlist = wishlist.filter((item) => products.some((product) => product.id === item.id))
    saveWishlist()
    renderProducts()
    renderWishlist()
    renderAdminProducts()
  } catch {
    // Keep the sample catalog visible when the shared service is unavailable.
  }
}

loadSharedCatalog()

document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault()
  if (!wishlist.length) {
    document.querySelector('#form-status').textContent = 'Add at least one product to your wishlist before continuing.'
    return
  }
  const buyer = Object.fromEntries(new FormData(event.currentTarget))
  const lines = wishlist.map((item) => {
    const product = products.find((entry) => entry.id === item.id)
    return `- ${product.name} (${product.pack}) x ${item.quantity}: ${formatPrice(product.price * item.quantity)} indicative`
  })
  const total = wishlist.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0)
  const message = [
    'Hello, I would like to enquire about these illustrative firework listings:',
    ...lines,
    `Indicative total: ${formatPrice(total)} (please confirm final prices)`,
    `Name: ${buyer.name}`,
    `Buyer WhatsApp: ${buyer.phone}`,
    `City/state: ${buyer.location}`,
    `Questions: ${buyer.message || 'Please confirm product approvals, availability, and current local rules.'}`,
    'Please confirm that sale and use are permitted here before accepting an order.',
  ].join('\n')
  recordAnalytics({ type: 'whatsapp_start' })
  document.querySelector('#form-status').textContent = 'Opening WhatsApp with your wishlist. Choose the seller contact and review the message before sending.'
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
})