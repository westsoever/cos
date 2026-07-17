# Pico — Vivino for Coffee

Pick the right coffee. Scan a bag, rate it, build your taste profile, and discover similar coffees.

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

## MVP loop

1. **Scan** — Search catalog or snap a label photo, then confirm the coffee
2. **Rate** — 1–5 stars + flavor tags → updates your taste profile
3. **Repertoire** — View all coffees you've rated
4. **Similar** — Get recommendations based on your taste profile

## Project structure

```
Pico/
├── README.md
├── PLAN.md
├── BUILD-LATER.md
└── web/          # Vite + React web app
```

See [PLAN.md](./PLAN.md) for the full build plan and [BUILD-LATER.md](./BUILD-LATER.md) for deferred features.
