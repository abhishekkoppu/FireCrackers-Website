import { isSameOrigin, jsonResponse, verifyAdminSession } from '../_lib/admin-auth.js'

const analyticsKey = 'analytics:v1'
const allowedScrollDepths = new Set([25, 50, 75, 100])

function emptyAnalytics() {
  return {
    sessions: 0,
    whatsappStarts: 0,
    productImpressions: {},
    productClicks: {},
    scrollDepth: { 25: 0, 50: 0, 75: 0, 100: 0 },
  }
}

async function readAnalytics(storage) {
  const saved = await storage.get(analyticsKey)
  if (!saved) return emptyAnalytics()
  try {
    return { ...emptyAnalytics(), ...JSON.parse(saved) }
  } catch {
    return emptyAnalytics()
  }
}

function validProductId(value) {
  return typeof value === 'string' && value.length > 0 && value.length <= 100
}

export async function onRequest({ request, env }) {
  if (!env.PRODUCTS) return jsonResponse({ error: 'Analytics storage is not configured.' }, 503)

  if (request.method === 'GET') {
    if (!(await verifyAdminSession(request, env))) return jsonResponse({ error: 'Admin sign-in required.' }, 401)
    return jsonResponse(await readAnalytics(env.PRODUCTS))
  }

  if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed.' }, 405, { Allow: 'GET, POST' })
  if (!isSameOrigin(request)) return jsonResponse({ error: 'Invalid request origin.' }, 403)

  if (Number(request.headers.get('Content-Length') || 0) > 2_048) {
    return jsonResponse({ error: 'Analytics event is too large.' }, 413)
  }

  let body
  try {
    body = await request.text()
  } catch {
    return jsonResponse({ error: 'Invalid analytics event.' }, 400)
  }
  if (new TextEncoder().encode(body).byteLength > 2_048) return jsonResponse({ error: 'Analytics event is too large.' }, 413)

  let event
  try {
    event = JSON.parse(body)
  } catch {
    return jsonResponse({ error: 'Invalid analytics event.' }, 400)
  }

  if (!event || !['session', 'product_impression', 'product_click', 'whatsapp_start', 'scroll_depth'].includes(event.type)) {
    return jsonResponse({ error: 'Unsupported analytics event.' }, 400)
  }
  if (['product_impression', 'product_click'].includes(event.type) && !validProductId(event.productId)) {
    return jsonResponse({ error: 'Invalid product identifier.' }, 400)
  }
  if (event.type === 'scroll_depth' && !allowedScrollDepths.has(event.depth)) {
    return jsonResponse({ error: 'Invalid scroll depth.' }, 400)
  }

  const analytics = await readAnalytics(env.PRODUCTS)
  if (event.type === 'session') analytics.sessions += 1
  if (event.type === 'whatsapp_start') analytics.whatsappStarts += 1
  if (event.type === 'product_impression') {
    analytics.productImpressions[event.productId] = (analytics.productImpressions[event.productId] || 0) + 1
  }
  if (event.type === 'product_click') {
    analytics.productClicks[event.productId] = (analytics.productClicks[event.productId] || 0) + 1
  }
  if (event.type === 'scroll_depth') {
    analytics.scrollDepth[event.depth] = (analytics.scrollDepth[event.depth] || 0) + 1
  }

  await env.PRODUCTS.put(analyticsKey, JSON.stringify(analytics))
  return jsonResponse({ recorded: true }, 202)
}