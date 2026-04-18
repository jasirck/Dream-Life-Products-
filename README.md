# 🌟 Dream Life Products

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React Version](https://img.shields.io/badge/react-18.x-blue)
![Vite](https://img.shields.io/badge/vite-5.x-purple)
![License](https://img.shields.io/badge/license-MIT-green)

A high-performance corporate website built with React and Vite. It utilizes dynamic client-side routing, scroll-driven animations, and a centralized data architecture to manage product, service, and hardware catalogs.

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Installation Guide](#-installation-guide)
- [Development Guidelines](#-development-guidelines)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 📂 **Centralized Data:** The `/data` directory acts as the single source of truth. Update text, links, and media without altering component logic.
- ⚡ **Dynamic Product Pages:** React Router renders details pages on demand based on unique dataset IDs.
- 📱 **WhatsApp Integration:** Contact buttons generate `.wa.me` links configured with active product names and page URLs.
- 🎨 **Responsive Dark UI:** Combines a deep obsidian theme with neon lime green accents (`#bfd733`). Employs Framer Motion for scroll-triggered events and pure CSS for infinite marquee ribbons.
- 🧹 **Optimized Bundle:** Implements strict modularity and eliminates unused code to ensure fast load times.

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🏗 Project Architecture

```text
dream-life-frontend/
├── public/                 # Static assets (images, logos)
├── src/
│   ├── components/
│   │   ├── layout/         # Global navigation and footers
│   │   ├── pages/          # Full viewport routing components
│   │   └── sections/       # Modular UI blocks (Hero, About, etc.)
│   ├── data/               # Centralized data stores
│   │   ├── config.js       # Global configuration and WhatsApp templates
│   │   ├── hardware.js     # Hardware product catalog
│   │   ├── services.js     # Service offerings
│   │   ├── site_content.js # Hardcoded text and headlines
│   │   └── software.js     # Software product catalog
│   ├── lib/                # Utility functions
│   ├── App.jsx             # React Router configuration
│   ├── index.css           # Global Tailwind directives and base styles
│   └── main.jsx            # Application entry point
├── tailwind.config.js      # Design token definitions
└── package.json            # Dependency manifest
```

## 🚀 Installation Guide

Configure the development environment using these commands:

```bash
# Clone the repository
git clone https://github.com/jasirck/Dream-Life-Products-.git

# Navigate into the project directory
cd dream-life-frontend

# Install dependencies using npm
npm install

# Start the Vite development server locally
npm run dev

# Build the application for production deployment
npm run build
```

## 📐 Development Guidelines

When contributing to this project, follow these established patterns:

- **Component Creation:** Place reusable UI blocks in `src/components/sections/`. Place full page-level views in `src/components/pages/`.
- **Data Modification:** Edit copy, links, and media exclusively in the `src/data/` folder. Do not hardcode textual content into JSX components.
- **Typography Standards:** 
  - `font-sans` (Montserrat) for body text.
  - `font-display` (Orbitron) for primary titles.
  - `font-teko` (Teko) for section headers.
- **Color System:** Use `bg-obsidian` for main backgrounds. Use `text-primary` for neon green accents. Ensure adequate contrast ratios across all screens.

## 🐛 Troubleshooting

- **Horizontal Scroll Issues:** Verify parent containers use `overflow-x-hidden`. Ensure absolute `.w-screen` positioned elements do not breach viewport boundaries.
- **Image Paths:** Ensure static assets referenced in data files exist in the `/public` directory or use valid external URLs.
- **Routing Fails on Refresh:** If deploying to a static host (like Vercel or Netlify), ensure you configure rewrite rules to point all traffic loops back to `index.html`.

## 🤝 Contributing

We welcome improvements and bug fixes. To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m "feat: your concise message"`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
