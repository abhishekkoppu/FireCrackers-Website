import { isSameOrigin, jsonResponse, verifyAdminSession } from '../_lib/admin-auth.js'

const maximumCatalogBytes = 12 * 1024 * 1024

function isSafeImage(value) {
  if (typeof value !== 'string' || value.length > 2_000_000) return false
  if (/^data:image\/(jpeg|png|webp|gif);base64,[a-z\d+/]+=*$/i.test(value)) return true
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

function isValidProduct(product) {
  if (!product || typeof product !== 'object') return false
  return typeof product.id === 'string'
    && product.id.length > 0
    && product.id.length <= 100
    && typeof product.name === 'string'
    && product.name.trim().length > 0
    && product.name.length <= 70
    && typeof product.kind === 'string'
    && product.kind.length <= 50
    && typeof product.pack === 'string'
    && product.pack.length <= 40
    && Number.isInteger(product.price)
    && product.price >= 0
    && product.price <= 10_000_000
    && Number.isInteger(product.stock)
    && product.stock >= 0
    && product.stock <= 1_000_000
    && (product.inventorySet === undefined || typeof product.inventorySet === 'boolean')
    && isSafeImage(product.image)
    && (product.galleryImages === undefined || (Array.isArray(product.galleryImages) && product.galleryImages.length <= 2 && product.galleryImages.every(isSafeImage)))
    && (product.galleryAttributions === undefined || (Array.isArray(product.galleryAttributions) && product.galleryAttributions.length <= 2 && product.galleryAttributions.every((item) => item === null || (item && typeof item.creator === 'string' && item.creator.length <= 100 && isHttpsUrl(item.source) && typeof item.license === 'string' && item.license.length <= 40 && isHttpsUrl(item.licenseUrl)))))
    && (product.video === '' || product.video === undefined || isHttpsUrl(product.video))
    && (product.description === undefined || (typeof product.description === 'string' && product.description.length <= 220))
}

function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

export async function onRequest({ request, env }) {
  if (!env.PRODUCTS) {
    return jsonResponse({ error: 'Product storage is not configured. Add the PRODUCTS KV binding in Cloudflare Pages.' }, 503)
  }

  if (request.method === 'GET') {
    const catalog = await env.PRODUCTS.get('catalog')
    return jsonResponse({ products: catalog ? JSON.parse(catalog) : null })
  }

  if (request.method !== 'PUT') {
    return jsonResponse({ error: 'Method not allowed.' }, 405, { Allow: 'GET, PUT' })
  }
  if (!isSameOrigin(request)) return jsonResponse({ error: 'Invalid request origin.' }, 403)
  if (!(await verifyAdminSession(request, env))) return jsonResponse({ error: 'Admin sign-in required.' }, 401)

  const body = await request.text()
  if (new TextEncoder().encode(body).byteLength > maximumCatalogBytes) {
    return jsonResponse({ error: 'Catalog is too large. Reduce uploaded image sizes.' }, 413)
  }

  let payload
  try {
    payload = JSON.parse(body)
  } catch {
    return jsonResponse({ error: 'Invalid catalog data.' }, 400)
  }

  if (!Array.isArray(payload.products) || payload.products.length > 100 || !payload.products.every(isValidProduct)) {
    return jsonResponse({ error: 'Catalog contains invalid products.' }, 400)
  }
  const productIds = payload.products.map((product) => product.id)
  if (new Set(productIds).size !== productIds.length) {
    return jsonResponse({ error: 'Product IDs must be unique.' }, 400)
  }

  await env.PRODUCTS.put('catalog', JSON.stringify(payload.products))
  return jsonResponse({ saved: true, count: payload.products.length })
}