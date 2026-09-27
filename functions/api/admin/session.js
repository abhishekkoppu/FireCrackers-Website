import {
  clearSessionCookie,
  constantTimeEqual,
  createSessionCookie,
  hasAuthConfiguration,
  isSameOrigin,
  jsonResponse,
  verifyAdminSession,
} from '../../_lib/admin-auth.js'

export async function onRequest({ request, env }) {
  if (!hasAuthConfiguration(env)) {
    return jsonResponse({ error: 'Admin authentication is not configured.' }, 503)
  }

  if (request.method === 'GET') {
    return (await verifyAdminSession(request, env))
      ? jsonResponse({ authenticated: true })
      : jsonResponse({ authenticated: false }, 401)
  }

  if (!isSameOrigin(request)) return jsonResponse({ error: 'Invalid request origin.' }, 403)

  if (request.method === 'POST') {
    let credentials
    try {
      credentials = await request.json()
    } catch {
      return jsonResponse({ error: 'Invalid sign-in request.' }, 400)
    }

    const expectedUsername = env.ADMIN_USERNAME || 'admin'
    const usernameMatches = await constantTimeEqual(String(credentials.username || ''), expectedUsername)
    const passwordMatches = await constantTimeEqual(String(credentials.password || ''), env.ADMIN_PASSWORD)
    if (!usernameMatches || !passwordMatches) {
      return jsonResponse({ error: 'Incorrect username or password.' }, 401)
    }

    return jsonResponse({ authenticated: true }, 200, {
      'Set-Cookie': await createSessionCookie(env),
    })
  }

  if (request.method === 'DELETE') {
    return jsonResponse({ authenticated: false }, 200, {
      'Set-Cookie': clearSessionCookie(),
    })
  }

  return jsonResponse({ error: 'Method not allowed.' }, 405, { Allow: 'GET, POST, DELETE' })
}