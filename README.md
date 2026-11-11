[README.md](https://github.com/user-attachments/files/34699742/README.md)
# Bloomora — сайт цветочного магазина

Vite + GSAP (ScrollTrigger), чистые HTML/CSS/JS без лишних зависимостей.

## Запуск
```bash
npm install
npm run dev      # разработка, http://localhost:5173
npm run build    # готовый сайт в dist/
npm run preview  # проверить сборку локально
```

## Структура<div align="center">

# Bloomora

**A dark, elegant landing page and catalog for a flower shop.**

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)

![Bloomora desktop preview](docs/screenshots/desktop.png)

</div>

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Accessibility and performance](#accessibility-and-performance)
- [Credits](#credits)
- [Author](#author)

## Overview

Bloomora is a responsive one-page website for a flower shop. It showcases a bouquet catalog with detailed descriptions and lets visitors contact the shop by phone or WhatsApp. The interface language is Russian.

The visual design follows a custom mockup: a near-black background, soft pink accents, and an elegant serif headline. The mockup is stored in [`docs/screenshots/design-mockup.png`](docs/screenshots/design-mockup.png).

## Screenshots

| Desktop | Catalog | Mobile |
| :---: | :---: | :---: |
| ![Desktop](docs/screenshots/desktop.png) | ![Catalog](docs/screenshots/catalog.png) | <img src="docs/screenshots/mobile.png" width="180" alt="Mobile"> |

> The images above are placeholders. Replace `desktop.png`, `catalog.png` and `mobile.png` in `docs/screenshots/` with real screenshots of the running site (keep the same file names and the links will work).

<details>
<summary>Design mockup</summary>

![Design mockup](docs/screenshots/design-mockup.png)

</details>

## Features

- **Hero section** with an entrance animation, a subtle parallax effect and floating petals.
- **Bouquet catalog** with category filters: Classic, Signature, Monobouquets and Favorites.
- **Favorites** saved in the browser (`localStorage`) with a counter in the header.
- **Detail panel** for every bouquet: composition, colors, structure, occasion and care tips.
- **Inquiry form** that opens a prefilled WhatsApp message.
- **Sections** for About, Delivery, Reviews and Contacts.
- **Responsive layout** from small phones to wide desktops, with a mobile menu.
- **Keyboard support**: cards are focusable, `Enter` or `Space` opens a bouquet and `Esc` closes dialogs.
- **Reduced motion**: animations are disabled for users who prefer it.

## Tech stack

| Area | Tools |
| --- | --- |
| Build and dev server | [Vite](https://vitejs.dev/) |
| Animation | [GSAP](https://gsap.com/) with ScrollTrigger |
| Language | HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript (ES modules) |
| Fonts | Cormorant Garamond, Manrope (Google Fonts) |
| CI/CD | GitHub Actions and GitHub Pages |

The project intentionally avoids heavy UI frameworks: a single content page does not need them, and the bundle stays small.

## Project structure

```text
bloomora/
├── .github/workflows/deploy.yml   # Build and deploy to GitHub Pages
├── docs/screenshots/              # README images and the design mockup
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/hero.jpg            # Main hero photo
│   ├── data/bouquets.js           # Catalog data
│   ├── styles/main.css            # Styles and design tokens
│   ├── main.js                    # Catalog, filters, favorites, panel, form
│   └── motion.js                  # GSAP animations
├── index.html                     # Page markup
├── package.json
├── vite.config.js
└── README.md
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (installed with Node.js)

### Installation

```bash
git clone <your-repository-url>
cd bloomora
npm install
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server at `http://localhost:5173` |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Customization

### Hero photo

Replace `src/assets/hero.jpg`. Recommended: width of 2000 px or more, a dark background and the subject on the right side. The page background color is `--bg` in `src/styles/main.css`; match it to the edges of your photo so the image blends in smoothly.

### Catalog data

Add or edit bouquets in `src/data/bouquets.js`. The key is the bouquet name:

```js
"Soft Morning": {
  cat: "Классика",            // "Классика" | "Авторский букет" | "Монобукет"
  price: "от 4 500 ₽",
  img: "https://example.com/photo.jpg",
  lead: "Short description shown on the card.",
  composition: "What is in the bouquet.",
  palette: "Colors and mood.",
  layout: "How the bouquet is assembled.",
  occasion: "Who it is for and when.",
  care: "How to keep the flowers fresh."
}
```

The category names are used as filter keys and must match exactly.

### Contacts

The phone number and WhatsApp link are placeholders (`70000000000`). Update them in:

- `index.html`: the Contacts section and the footer
- `src/main.js`: search for `wa.me`

### Design tokens

Colors and fonts are defined in `:root` at the top of `src/styles/main.css`:

```css
--bg: #12110f;     /* page background */
--panel: #1a1716;  /* cards and panels */
--pink: #fbb6ba;   /* accent color */
```

### Placeholder content

The Delivery and Reviews sections contain sample text. Replace it with real information and real customer reviews before publishing.

## Deployment

### GitHub Pages with GitHub Actions (recommended)

1. Push the project to a GitHub repository (default branch `main`).
2. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push a commit. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it.

If your default branch has another name, update `branches` in the workflow file.

### Manual deployment

Run `npm run build` and upload the contents of `dist/` to any static hosting. The Vite `base` option is set to `./`, so the build works from any sub-folder.

> GitHub Pages serves `index.html` from the published root. Do not publish the source `index.html` directly, because it references `/src/main.js` and needs the build step first.

## Accessibility and performance

- Semantic landmarks, `aria-label` on icon buttons, visible focus outlines.
- `prefers-reduced-motion` support for all animations and smooth scrolling.
- Lazy loading for catalog images; the hero image is loaded with high priority.
- Small dependency footprint: one runtime library (GSAP).

## Credits

- Catalog photos: [Unsplash](https://unsplash.com/) contributors. Replace them with your own photos for a commercial project.
- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) and [Manrope](https://fonts.google.com/specimen/Manrope), licensed under the SIL Open Font License.

## Author

**Your Name** — [GitHub](https://github.com/your-username) · [Email](mailto:you@example.com)

- `index.html` — разметка страницы
- `src/main.js` — каталог, фильтры, избранное, панель букета, форма
- `src/motion.js` — анимации (GSAP): появление первого экрана, параллакс, лепестки
- `src/data/bouquets.js` — данные букетов (добавляйте новые сюда)
- `src/styles/main.css` — стили и дизайн-токены (`:root`)
- `src/assets/hero.jpg` — фото на главной

## Что заменить
- **Фото на главной.** Сейчас это кадр, вырезанный из макета, оригинал был больше. Подставьте исходник в `src/assets/hero.jpg` (лучше от 2000 px по ширине, тёмный фон).
- **Фото букетов** — ссылки Unsplash в `src/data/bouquets.js`; замените на свои снимки.
- **Телефон и WhatsApp** — `index.html` (блок «Контакты») и `src/main.js` (поиск `wa.me`).
- **Доставка и отзывы** — тексты-заглушки в `index.html`.
