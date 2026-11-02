# Bhargav Kumar Saha — Cloud & DevOps Portfolio

Live Portfolio: [bhargav-sah.me](https://bhargav-sah.me/)

A modern, production-grade portfolio designed for Cloud & DevOps engineering, featuring interactive cloud topology diagrams, an in-browser simulated AWS CLI terminal, multi-tier architecture showcases, and verified cloud credentials.

---

## 🛠️ Tech Stack & Tooling

* **Framework**: React 19 + TypeScript
* **Bundler**: Vite 6
* **Styling**: Tailwind CSS (Dark/Light mode with CSS variable design tokens)
* **Icons**: Lucide Icons & Custom SVG Vector Graphics
* **Hosting**: GitHub Pages (Custom domain `bhargav-sah.me`)
* **CI/CD**: GitHub Actions

---

## 📁 Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Actions CI build workflow
├── public/                        # Static assets (favicons, robots.txt, sitemap.xml)
├── documents/                     # Verified certificates & resume PDFs
├── src/
│   ├── App.tsx                    # Core interactive portfolio component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind styles, glassmorphism & cloud grid
├── index.html                     # HTML shell with OpenGraph & SEO tags
├── tailwind.config.js             # Tailwind design tokens & glow effects
├── vite.config.ts                 # Vite bundler configuration
└── package.json                   # Dependencies and npm scripts
```

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License
MIT © 2026 Bhargav Kumar Saha
