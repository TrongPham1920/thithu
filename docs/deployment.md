# Render Deployment

## Current App: Static Site

The current quiz runs in the browser. The default Next.js build exports it to `out`.

- Service type: Static Site
- Branch: main
- Build command: `npm ci && npm run build`
- Publish directory: `out`
- Root directory: leave empty when `package.json` is at the repository root.
- Do not set `NEXT_OUTPUT=server` for a Static Site.

The previous deployment failed because Render expected `out`, but Next.js was using its default server build output (`.next`). `next.config.ts` now enables static export by default.

`No build cache found` is informational and is not the cause of that failure.

## Future Backend: Web Service

When API routes, authentication, server actions, or other runtime server features are added, deploy as a Node Web Service:

- Environment variable: `NEXT_OUTPUT=server`
- Build command: `npm ci && npm run build`
- Start command: `npm run start -- --hostname 0.0.0.0 --port $PORT`
- No publish directory.

A static site cannot execute the backend. Keep backend logic under services and route handlers, as described in `AGENTS.md`.

Reference: https://render.com/docs/deploy-nextjs-app
