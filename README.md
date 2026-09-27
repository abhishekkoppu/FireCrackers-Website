# Spark & Co. Fireworks

Responsive Diwali storefront built with Vite and Cloudflare Pages Functions. The public catalog is stored in Cloudflare KV. Admin sign-in is validated server-side; the browser receives only a signed, HTTP-only session cookie.

## Local preview

Run `npm install` and `npm run dev` for the fast Vite preview. Local Vite mode is a development demo and intentionally does not enforce admin sign-in. To exercise the Pages Functions, create an ignored `.dev.vars` file with temporary `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` values, run `npm run build`, then run `npm run dev:pages`.

## Cloudflare Pages setup

The configured project slug is `spark-co-fireworks`, which will use `spark-co-fireworks.pages.dev` if that name is available.

1. Authenticate Wrangler with `npx wrangler login`.
2. Create the Pages project with `npx wrangler pages project create spark-co-fireworks`.
3. Create the catalog KV namespace with `npx wrangler kv namespace create PRODUCTS --binding PRODUCTS --update-config`, or add a KV binding named `PRODUCTS` to the Pages project in the Cloudflare dashboard.
4. In the Pages production environment, set `ADMIN_USERNAME` to `admin`. Add `ADMIN_PASSWORD` as a secret using a new, unique password. Add `ADMIN_SESSION_SECRET` as a secret containing at least 32 random characters.
5. Deploy with `npm run deploy`.

Never put admin secrets in source files, `.dev.vars.example`, or a Git commit. Cloudflare Pages Functions require the `PRODUCTS` KV binding and all admin secrets to be set before catalog editing and sign-in will work in production.

## Notes

- Catalog and inventory changes are shared through KV. The dashboard stores anonymous aggregate sessions, product impressions/clicks, WhatsApp starts, and scroll-depth milestones in the same KV namespace. These KV counters are approximate engagement metrics, not orders or audited analytics, and can lose increments during simultaneous writes.
- Products without a verified count show “Inventory not set” and cannot be added to the basket. Confirm the physical pack count in Admin; enquiries do not reserve or decrement inventory.
- The sample catalog, prices, and product imagery are illustrative. Confirm seller inventory, image rights, prices, product approvals, and current Indian/local firework rules before sale.
- The admin login uses an eight-hour signed session. Apply a Cloudflare rate-limiting rule to `/api/admin/session` before public launch.