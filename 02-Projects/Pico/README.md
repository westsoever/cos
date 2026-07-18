# Pico — Vivino for Coffee

Pick the right coffee. Find or add a bag, rate it, keep a brew journal, build your taste profile, and discover similar coffees.

Self-contained project — everything lives in this folder.

## Quick start

```bash
cd web
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Test on iPhone

1. **Same Wi‑Fi:** Run `npm run dev -- --host` and open `http://<your-computer-ip>:5173` on your iPhone.
2. **Camera:** Safari requires HTTPS for camera access. If the camera fails over HTTP, deploy to Vercel or use ngrok.
3. **Add to Home Screen:** Optional — open in Safari → Share → Add to Home Screen.

## Deploy

```bash
cd web
npm run build
```

Deploy the `web/dist` folder to Vercel, Netlify, or any static host.

**GitHub Pages** (permanent, at `https://westsoever.github.io/cos/`):

```bash
cd web
VITE_BASE=/cos/ npm run build
npx gh-pages -d dist -b gh-pages
```

Then enable GitHub Pages in repo Settings → Pages → source: `gh-pages` branch.

**Temporary cloud preview** (HTTPS, works on iPhone):

```bash
npm run build
npx serve dist -l 3000
cloudflared tunnel --url http://localhost:3000
```

Use the `*.trycloudflare.com` URL on your phone.

## Core loop

1. **Discover** — Search the catalog, browse by roast, or add details from a bag
2. **Rate** — Save stars, flavor tags, and a tasting note
3. **Journal** — Revisit coffees, photos, notes, and optional brew recipes
4. **Taste** — See your preference patterns and explainable recommendations

The default flow stays intentionally quick. Enthusiasts can expand **Brew details** while rating to record method, dose, water or yield, temperature, grind, and brew time.

## Project structure

```
Pico/
├── README.md
├── PLAN.md
├── BUILD-LATER.md
└── web/          # Vite + React web app
```

See [PLAN.md](./PLAN.md) for the full build plan and [BUILD-LATER.md](./BUILD-LATER.md) for deferred features.
