# Ashutosh Kumar — Portfolio

A polished, responsive portfolio website built with **React + Vite**.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (hot-reload)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/favicon.svg
├── src/
│   ├── config.js           ← ✏️ EDIT THIS FILE to update all content
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css            ← Global styles and design tokens
│   ├── hooks/
│   │   └── useScrollReveal.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx   ← Hidden until experience.enabled = true
│       ├── Education.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ How to Update Content

**Everything is in one file: `src/config.js`**

| What to change | Where in config.js |
|---|---|
| Name, headline, tagline | `personal.name`, `personal.headline`, `personal.tagline` |
| Email, phone, GitHub, LinkedIn | `personal.email`, `personal.phone`, etc. |
| Résumé link | `personal.resumeUrl` |
| About text | `about.paragraphs[]` |
| Skills | `skills["Software / AI"].items`, `skills["ECE / Core Electronics"].items` |
| Projects | `projects[]` — add/edit/reorder objects |
| Education | `education[]` |
| Experience | Set `experience.enabled = true` and fill `experience.items[]` |

## 🚀 Deploy (make it public)

### Option 1: Vercel (Easiest)
1. Push to a GitHub repo
2. Go to [vercel.com](https://vercel.com), sign in with GitHub
3. Import your repo → it auto-detects Vite → click Deploy
4. You get a public URL like `ashutosh-kumar.vercel.app`

### Option 2: Netlify (Drag & Drop)
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Instant public URL

### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`
