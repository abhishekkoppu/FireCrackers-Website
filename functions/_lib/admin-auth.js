const textEncoder = new TextEncoder()
const cookieName = 'spark_admin_session'
const sessionLifetimeSeconds = 8 * 60 * 60

function encodeBase64Url(bytes) {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function decodeBase64Url(value) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
  const binary = atob(base64 + '='.repeat((4 - base64.length % 4) % 4))
  return Uint8Array.from(binary, (character) => character.charCodeAt(0))
}

async function sign(payload, secret) {
  const key = await crypto.subtle.importKey(
    'raw',
    textEncoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  return encodeBase64Url(new Uint8Array(await crypto.subtle.sign('HMAC', key, textEncoder.encode(payload))))
}

async function constantTimeEqual(left, right) {
  const leftHash = new Uint8Array(await crypto.subtle.digest('SHA-256', textEncoder.encode(left)))
  const rightHash = new Uint8Array(await crypto.subtle.digest('SHA-256', textEncoder.encode(right)))
  let difference = 0
  for (let index = 0; index < leftHash.length; index += 1) difference |= leftHash[index] ^ rightHash[index]
  return difference === 0
}

export function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  })
}

export function hasAuthConfiguration(env) {
  return Boolean(env.ADMIN_PASSWORD && env.ADMIN_SESSION_SECRET && env.ADMIN_SESSION_SECRET.length >= 32)
}

export function isSameOrigin(request) {
  const origin = request.headers.get('Origin')
  return Boolean(origin && origin === new URL(request.url).origin)
}

export async function verifyAdminSession(request, env) {
  if (!hasAuthConfiguration(env)) return false
  const cookie = request.headers.get('Cookie') || ''
  const sessionCookie = cookie.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`))
  if (!sessionCookie) return false

  try {
    const token = sessionCookie.slice(cookieName.length + 1)
    const [encodedPayload, signature] = token.split('.')
    if (!encodedPayload || !signature) return false
    const expectedSignature = await sign(encodedPayload, env.ADMIN_SESSION_SECRET)
    if (!(await constantTimeEqual(signature, expectedSignature))) return false
    const payload = JSON.parse(new TextDecoder().decode(decodeBase64Url(encodedPayload)))
    return Number.isInteger(payload.exp) && payload.exp > Math.floor(Date.now() / 1000)
  } catch {
    return false
  }
}

export async function createSessionCookie(env) {
  const payload = encodeBase64Url(textEncoder.encode(JSON.stringify({
    exp: Math.floor(Date.now() / 1000) + sessionLifetimeSeconds,
  })))
  const token = `${payload}.${await sign(payload, env.ADMIN_SESSION_SECRET)}`
  return `${cookieName}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/api; Max-Age=${sessionLifetimeSeconds}`
}

export function clearSessionCookie() {
  return `${cookieName}=; HttpOnly; Secure; SameSite=Strict; Path=/api; Max-Age=0`
}

export { constantTimeEqual }