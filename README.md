# Harsha Vardhan G Portfolio

Professional portfolio for Harsha Vardhan G, a Senior Software Engineer based in Dublin. The site highlights backend platforms, real-time systems, developer tools, privacy-preserving infrastructure, selected projects, publications, and contact links.

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Run Locally

```bash
npm install
npm run dev
```

The development server will print a local URL such as `http://localhost:5173/`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`. Push changes to `main` and GitHub Actions will build the Vite app and publish `dist` to GitHub Pages.

```bash
git add .
git commit -m "Update professional portfolio"
git push origin main
```

After the workflow completes, the site will update at `https://harsha0609.github.io`.

## Content

Most portfolio content lives in `src/data/profile.js`. Section layout is split across `src/sections`, and shared navigation lives in `src/components/Navbar.jsx`.
