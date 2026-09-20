# Axel C1

A mobile-first, fully static practice site for **Swedish category C1** (medeltung lastbil) driver’s licence theory.

Built for one learner (Emil) who already holds **B** and **körkortstillstånd grupp 2**. Scope is C1 theory only — not full C, not YKB.

- UI in English
- Traffic-law terms, signs and quiz wording in official-style Swedish
- Progress, weak spots and flashcard marks stay in `localStorage` on this device
- No login, no backend, no paid APIs

**Practice material only.** Questions and cards are original study items. They are **not** official Trafikverket exam questions. Verify everything against [Transportstyrelsen](https://www.transportstyrelsen.se/) and [Trafikverket](https://www.trafikverket.se/) before the real test.

## What’s inside

| Area | What you can do |
| --- | --- |
| Home | Progress rings, recommended next topic, disclaimer |
| Topics | Seven C1 syllabus themes with short study notes |
| Quiz | Multiple choice, instant feedback, score, review missed |
| Flashcards | Swedish term on the front, meaning on the back |
| Weak spots | Questions you miss more than you master; “Practice weak” mode |

Content counts: 52 practice questions, 24 flashcards.

## Run locally

Requires Node 20+ (22 is fine).

```bash
npm ci
npm run dev
```

`npm install` also works. Vite serves the app at [http://127.0.0.1:43173](http://127.0.0.1:43173).

```bash
npm ci && npm run build   # lockfile install + typecheck + static files in dist/
npm run preview           # serve the production build on the same port
```

Routing uses a hash (`/#/topics`, `/#/quiz/mixed`) so any static host works without rewrite rules.

## Deploy

No environment variables. The app is fully static after build.

### Docker (Dokploy / any container host)

Multi-stage image: Node 22 builds `dist/`, then **nginx:alpine** serves it. The final image has no Node.

```bash
docker build -t axel-c1 .
docker run --rm -p 8080:80 axel-c1
```

Dokploy notes (do not need a start command):

| Setting | Value |
| --- | --- |
| Repo / branch | `voxic/axel-c1-practice` · `main` |
| Build type | Dockerfile |
| Dockerfile path | `Dockerfile` (repo root) |
| Context | `.` |
| HTTP port | `80` |
| Start command | none — image `CMD` is nginx |

`nginx.conf` is copied into the image. Hash routes never hit the server; `try_files` still covers a missing path and cache-friendly `/assets/`.

### Static nginx without a Docker build

Build on the host or in Dokploy’s Nixpacks/static preset, then point nginx at `dist/`:

```bash
npm ci && npm run build
```

Publish directory: `dist/`. Example server block is in `nginx.conf` (set `root` to the `dist/` path on disk).

### Vercel / other static hosts

```bash
npm i -g vercel
vercel
```

Or connect the Git repo. Framework preset: Vite. Build: `npm run build` (or `npm ci && npm run build`). Output: `dist`.

## Data and privacy

Everything lives in the browser under the keys `axel-c1-progress` and `axel-c1-theme`. Use **Weak → Reset this device** to wipe it. Nothing is sent to a server.

## Licence / accuracy note

Invented practice items are marked as such in `src/data/questions.ts` and `src/data/flashcards.ts`. Uncertain legal edge cases were omitted rather than guessed. If a rule changes, treat official sources as correct.
