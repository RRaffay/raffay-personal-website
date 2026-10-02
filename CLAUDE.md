# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Vite + TypeScript, npm as package manager.

- `npm run dev` — dev server at `http://localhost:5173/`.
- `npm run build` — `tsc --noEmit`, then a production build into `dist/` (not committed).
- `npm run typecheck` — type-check only. There is no linter and there are no tests.
- `npm run deploy` — builds, then publishes `dist/` to the `gh-pages` branch by hand. Normally not needed (see Deployment).

Node 22.12 or newer is required (`.nvmrc`).

## Deployment

GitHub Pages serves the `gh-pages` branch at https://rraffay.github.io/raffay-personal-website/. `.github/workflows/deploy.yml` type-checks and builds every pull request, and on a push to `main` publishes `dist/` to `gh-pages`. Never commit build output to `main`.

## Architecture

A single static page with no framework and no routing.

- `index.html` holds all the content: name, role, one sentence, essay links, and contact icons as inline SVG.
- `src/styles.css` holds all the styles. Colours and the column width are custom properties on `:root`. The font, Host Grotesk, is bundled from `@fontsource-variable/host-grotesk`.
- `src/glow.ts` is the only script. It drives a soft light behind the page that follows the pointer.

`vite.config.ts` sets `base: './'`, so the build uses relative asset paths and works both under `/raffay-personal-website/` on GitHub Pages and at a domain root.

### The pointer light

`glow.ts` reads how the pointer moves and writes five custom properties on `<html>` every frame (`--glow-x`, `--glow-y`, `--glow-r`, `--glow`, `--glow-tense`). `body::before` in `styles.css` draws the light from them as a radial gradient.

- Calm movement: wide and blue. Fast or jittery movement: it tightens and shifts to violet, then relaxes over a few seconds.
- No movement for eight seconds: it breathes, six times a minute.
- Pointer on a link: the light leaves the pointer and settles on the link.

The tuning constants are named at the top of `glow.ts`. The light is disabled on devices without hover and under `prefers-reduced-motion`; the page is complete without it.

### Design intent

The page is deliberately spare: plain facts and links, no prose that explains or sells. The pointer light is the one interactive detail and is meant to be easy to miss. Keep additions in that spirit.

The text, muted and violet colours come from the public Oasys palette. The ground (`#070a22`) is deliberately darker than Oasys ink so that the light is visible.
