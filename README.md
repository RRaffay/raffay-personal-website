# raffay-personal-website

Raffay Rana's personal site: a single static page.

- `npm run dev` starts a local server at http://localhost:5173/
- `npm run build` type-checks and builds into `dist/`

Merging to `main` deploys automatically: `.github/workflows/deploy.yml` builds the site and
publishes `dist/` to the `gh-pages` branch, which serves
https://rraffay.github.io/raffay-personal-website/. Pull requests are built but not deployed.
`npm run deploy` does the same publish by hand.

Built with Vite and TypeScript.
