# Harsha Vardhan G

Professional portfolio for [harsha0609.github.io](https://harsha0609.github.io), built to present my work as a Senior Software Engineer focused on backend platforms, real-time systems, developer tools, and privacy-preserving infrastructure.

The site is intentionally clean and content-led: it highlights production ownership, selected systems work, publications, technical skills, education, and contact paths without heavy visual effects or template clutter.

## Live Site

[https://harsha0609.github.io](https://harsha0609.github.io)

## Highlights

- Senior software engineering profile tailored around backend, platform, and secure product work
- Featured project section covering RedFlare, InvizCrypt, Zcash tooling, blockchain-native PKI, and Proof-of-Work++
- Resume download served as a PDF from the public site
- Responsive layout for desktop and mobile
- Automated GitHub Pages deployment through GitHub Actions

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint
- GitHub Pages

## Project Structure

```text
.
├── public/
│   ├── Harsha_Vardhan_G_Senior_Software_Engineer_Resume.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── profile.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/workflows/deploy.yml
├── index.html
└── vite.config.js
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173/
```

## Quality Checks

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Updating Content

Most portfolio content is centralized in:

```text
src/data/profile.js
```

Use that file to update profile text, metrics, experience, projects, skills, publications, education, and resume path. The page layout itself is split across `src/sections`.

To update the resume, replace:

```text
public/Harsha_Vardhan_G_Senior_Software_Engineer_Resume.pdf
```

## Deployment

This repository deploys to GitHub Pages using:

```text
.github/workflows/deploy.yml
```

Push changes to `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will install dependencies, build the Vite app, upload `dist`, and publish the site to:

[https://harsha0609.github.io](https://harsha0609.github.io)

If Pages is not already enabled, configure the repository under:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## License

Personal portfolio. Content, resume, and project descriptions are maintained by Harsha Vardhan G.
