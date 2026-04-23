# ⚡ Vite + Pug + Tailwind CSS v4 Starter

![Vite](https://img.shields.io/badge/Vite-%5E8.0-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=flat-square)
![Pug](https://img.shields.io/badge/Pug-Templates-brown?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Clean, fast and modern **multi-page starter** built with Vite, Pug, and Tailwind v4, using plain JavaScript modules (ESM).

## Features

- ⚡ Instant HMR and fast development with **Vite**
- 🧱 Multi-page architecture using **Vituum** + **Pug**
- 🎨 Clean and organized styles using **Tailwind CSS v4** and modular CSS structure
- 📜 Plain JavaScript (`.js`, ESM)
- 🧪 Testing with **Vitest** and **@testing-library/dom**
- 📊 Bundle analysis with **rollup-plugin-visualizer**
- 🧹 Code quality tools: ESLint, Stylelint and Prettier
- 🪝 Git hooks with **Husky** + **lint-staged**
- 🔗 Alias `@` → `src/`

## Getting Started

### Requirements

- **Node 20+** (LTS recommended)
- npm, pnpm or yarn

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open the URL displayed in the terminal (usually: `http://localhost:5173`).

## Scripts

```jsonc
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest --run",
  "test:watch": "vitest --watch",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "lint:css": "stylelint \"src/**/*.css\"",
  "lint:css:fix": "stylelint \"src/**/*.css\" --fix",
  "prepare": "husky"
}
```

### Common commands

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run preview` - preview build output
- `npm run test` - run tests once
- `npm run test:watch` - run tests in watch mode
- `npm run lint` - run ESLint
- `npm run lint:css` - run Stylelint

## Project structure

```txt
src/
  pages/             # Pug entry pages (multi-page)
  layouts/           # Shared Pug layouts
  includes/          # Pug components/partials
  scripts/
    main.js          # Main entry script
    helpers.js       # onDocumentReady and utilities
  styles/
    main.css         # Global CSS entry
```

## Bundle Analysis

`rollup-plugin-visualizer` generates `stats.html` during `npm run build`.
