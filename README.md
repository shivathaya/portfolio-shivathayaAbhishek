# Abhishek Shivathaya — Portfolio

A minimalist, responsive portfolio for a Java Backend Developer. Built with React + Vite.

---

## Quick Start

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview the production build
```

---

## Adding Your CV

1. Export your CV as a PDF.
2. Rename it `cv.pdf`.
3. Place it in the `/public` folder.

The "Download CV" button (in the navbar, hero, and contact section) will automatically serve it.

---

## Customizing Content

All content lives in one file: **`src/data/portfolio.js`**

Edit the following exported objects:
- `meta` — name, title, tagline, about, availability status
- `contact` — email, GitHub, LinkedIn, location
- `skills` — grouped skill lists
- `experience` — roles, companies, bullets
- `projects` — project cards with tech tags

---

## Deployment

### Vercel (recommended)
1. Push to GitHub.
2. Import the repo at [vercel.com](https://vercel.com).
3. Framework preset: **Vite**. No other settings needed.

### Netlify
1. Run `npm run build`.
2. Drag the `/dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

### GitHub Pages
1. Install the pages plugin: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Add `base: '/your-repo-name/'` to `vite.config.js`
4. Run `npm run build && npm run deploy`

---

## Project Structure

```
portfolio/
├── public/
│   └── cv.pdf          ← place your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js  ← edit all content here
│   ├── App.jsx
│   ├── styles.css
│   ├── index.css
│   └── main.jsx
└── index.html
```
