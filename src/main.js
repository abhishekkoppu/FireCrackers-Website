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
            <label>Upload image<input name="imageFile" id="admin-image-file" type="file" accept="image/*"><small>Images are resized before upload.</small></label>
            <img class="admin-image-preview" id="admin-image-preview" alt="Product image preview" hidden>
            <label>Image credit<input name="creator" id="admin-creator" maxlength="100" placeholder="Seller-provided image"></label>
            <label>Video URL<input name="video" id="admin-video-url" type="url" placeholder="https://youtube.com/... or another video page"></label>
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
  { id: 'anar', name: 'Anar flower fountain', kind: 'Ground fountain', pack: '3-piece pack', price: 599, stock: 0, inventorySet: false, image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Firecracker_Flowerpot.jpg', imageAlt: 'Flowerpot firework fountain in use', creator: 'Swetha01', source: 'https://commons.wikimedia.org/wiki/File:Firecracker_Flowerpot.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  { id: 'phuljhari', name: 'Phuljhari sparklers', kind: 'Hand-held sparkler', pack: '10-piece pack', price: 249, stock: 0, inventorySet: false, image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Fireworks_Sparklers_Diwali_India.jpg', imageAlt: 'Sparklers being enjoyed during Diwali in India', creator: 'Sean Ellis', source: 'https://commons.wikimedia.org/wiki/File:Fireworks_Sparklers_Diwali_India.jpg', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/' },
  { id: 'chakri', name: 'Chakri celebration set', kind: 'Spinning ground firework', pack: '5-piece pack', price: 799, stock: 0, inventorySet: false, image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Spinning_Fire.jpg?download=1', imageAlt: 'A spinning chakri firework in use in West Bengal', creator: 'Dey.sandip', source: 'https://commons.wikimedia.org/wiki/File:Spinning_Fire.jpg', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
]
const productsKey = 'sparkAndCoProducts'
const wishlistKey = 'sparkAndCoWishlist'
const analyticsKey = 'sparkAndCoAnalytics'
const safeRead = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}
const storedProducts = import.meta.env.DEV ? safeRead(productsKey, null) : null
let products = Array.isArray(storedProducts) ? storedProducts.filter((product) => product && product.id && product.name && Number.isFinite(Number(product.price)) && product.image).map((product) => ({ ...product, stock: Number.isInteger(product.stock) ? product.stock : 0, inventorySet: typeof product.inventorySet === 'boolean' ? product.inventorySet : Number.isInteger(product.stock) })) : [...seedProducts]
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
    const sourceUrl = safeWebUrl(product.source)
    const licenseUrl = safeWebUrl(product.licenseUrl)
    const photoCredit = product.creator ? `Photo: ${escapeHtml(product.creator)}` : 'Seller-provided image'
    const creditLink = sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">${photoCredit}</a>` : photoCredit
    const licenseLink = product.license && licenseUrl ? ` · <a href="${escapeHtml(licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(product.license)}</a>` : ''
    return `
      <article class="product-card">
        <div class="product-photo"><img src="${escapeHtml(safeImageUrl(product.image))}" alt="${escapeHtml(product.imageAlt || product.name)}" loading="lazy"><span class="approval-tag">Illustrative listing</span></div>
        <div class="photo-credit">${creditLink}${licenseLink}</div>
        <div class="product-info"><div><span class="product-number">${String(index + 1).padStart(2, '0')} · ${escapeHtml(product.kind)}</span><h3>${escapeHtml(product.name)}</h3></div><div class="product-actions" data-product-controls="${escapeHtml(product.id)}"></div></div>
        <div class="product-details"><span>${escapeHtml(product.pack)}<small class="stock-count ${product.inventorySet && product.stock === 0 ? 'stock-out' : ''}">${!product.inventorySet ? ' · Inventory not set' : product.stock === 0 ? ' · Out of stock' : ` · ${product.stock} ${product.stock === 1 ? 'pack' : 'packs'} available`}</small></span><strong>${formatPrice(Number(product.price))} <small>indicative</small></strong></div>
        <p class="product-description">${escapeHtml(product.description || 'Example listing only. Ask the seller to confirm exact contents, current product approvals, and availability in your area.')}</p>
        ${videoUrl ? `<a class="product-video" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer">▶ Watch product video <span aria-hidden="true">↗</span></a>` : ''}
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
      ? `<div class="quantity-stepper" aria-label="${escapeHtml(product.name)} quantity"><button type="button" data-quantity-change="-1" data-product-id="${escapeHtml(productId)}" aria-label="Remove one ${escapeHtml(product.name)}">−</button><output aria-live="polite">${quantity}</output><button type="button" data-quantity-change="1" data-product-id="${escapeHtml(productId)}" aria-label="Add one ${escapeHtml(product.name)}" ${quantity >= stock ? 'disabled' : ''}>+</button></div>`
      : `<button class="wishlist-add" type="button" data-quantity-change="1" data-product-id="${escapeHtml(productId)}" aria-label="Add ${escapeHtml(product.name)} to wishlist" ${!product.inventorySet || stock === 0 ? 'disabled' : ''}>${!product.inventorySet ? 'Stock not set' : stock === 0 ? 'Out of stock' : 'Add'} ${product.inventorySet && stock > 0 ? '<span aria-hidden="true">+</span>' : ''}</button>`
  })
}

function changeProductQuantity(productId, change) {
  const existing = wishlist.find((item) => item.id === productId)
  const product = products.find((item) => item.id === productId)
  if (!product) return
  const nextQuantity = (existing?.quantity || 0) + change
  if (change > 0 && (!product.inventorySet || nextQuantity > (Number(product.stock) || 0))) return
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
  if (control) changeProductQuantity(control.dataset.productId, Number(control.dataset.quantityChange))
})

function renderWishlist() {
  const panel = document.querySelector('#wishlist-panel')
  const previousWishlist = JSON.stringify(wishlist)
  wishlist = wishlist.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.id)
    const quantity = Math.min(item.quantity, Number(product?.stock) || 0)
    return quantity > 0 ? [{ ...item, quantity }] : []
  })
  if (JSON.stringify(wishlist) !== previousWishlist) saveWishlist()
  const itemCount = wishlist.reduce((total, item) => total + item.quantity, 0)
  const itemRows = wishlist.map((item) => {
    const product = products.find((entry) => entry.id === item.id)
    return `<li><span><strong>${product.name}</strong><small>${product.pack} · ${formatPrice(product.price)} each</small></span><label class="wishlist-quantity">Qty<input type="number" min="1" max="${product.stock}" step="1" value="${item.quantity}" data-quantity="${item.id}" aria-label="Quantity of ${product.name}"></label><strong>${formatPrice(product.price * item.quantity)}</strong><button class="wishlist-remove" type="button" data-remove="${item.id}" aria-label="Remove ${product.name}">×</button></li>`
  }).join('')
  const total = wishlist.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0)
  panel.innerHTML = `<div class="wishlist-heading"><div><p class="eyebrow">YOUR SHORTLIST · ${itemCount} ${itemCount === 1 ? 'PACK' : 'PACKS'}</p><h3>Wishlist</h3></div><button class="clear-wishlist" type="button" ${wishlist.length ? '' : 'disabled'}>Clear</button></div>${wishlist.length ? `<ul class="wishlist-items">${itemRows}</ul><div class="wishlist-total"><span>Indicative total</span><strong>${formatPrice(total)}</strong></div>` : '<p class="wishlist-empty">Your wishlist is empty. Add a product to start an enquiry.</p>'}<p class="wishlist-disclaimer">Prices are examples only. The seller must confirm the final quote and legal availability.</p><a class="button button-whatsapp ${wishlist.length ? '' : 'is-disabled'}" href="#enquire" ${wishlist.length ? '' : 'aria-disabled="true"'}>Enquire on WhatsApp <span aria-hidden="true">↗</span></a>`
  panel.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => {
    wishlist = wishlist.filter((item) => item.id !== button.dataset.remove)
    saveWishlist()
    renderWishlist()
  }))
  panel.querySelectorAll('[data-quantity]').forEach((input) => input.addEventListener('change', () => {
    const product = products.find((entry) => entry.id === input.dataset.quantity)
    const quantity = Math.min(Number(product.stock) || 0, Math.max(1, Number.parseInt(input.value, 10) || 1))
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
    return `<article class="basket-sheet-item"><img src="${escapeHtml(safeImageUrl(product.image))}" alt=""><div class="basket-sheet-product"><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.pack)}</small><span>${formatPrice(product.price)} each</span></div><div class="quantity-stepper" aria-label="${escapeHtml(product.name)} quantity"><button type="button" data-quantity-change="-1" data-product-id="${escapeHtml(product.id)}" aria-label="Remove one ${escapeHtml(product.name)}">−</button><output>${item.quantity}</output><button type="button" data-quantity-change="1" data-product-id="${escapeHtml(product.id)}" aria-label="Add one ${escapeHtml(product.name)}" ${item.quantity >= Number(product.stock) ? 'disabled' : ''}>+</button></div></article>`
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
    document.querySelector('#admin-creator').value = product.creator || ''
    document.querySelector('#admin-video-url').value = product.video || ''
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
  const video = values.video.trim() ? safeWebUrl(values.video.trim()) : ''
  if (!cleanImage) {
    adminStatus.textContent = 'Add a valid HTTPS image URL or upload an image.'
    return
  }
  if (values.video.trim() && !video) {
    adminStatus.textContent = 'Video links must use HTTPS.'
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
    imageAlt: values.name.trim(),
    creator: values.creator.trim() || (cleanImage === existing?.image ? existing.creator || '' : ''),
    video,
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
    products = result.products.map((product) => ({ ...product, stock: Number.isInteger(product.stock) ? product.stock : 0, inventorySet: typeof product.inventorySet === 'boolean' ? product.inventorySet : Number.isInteger(product.stock) }))
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
