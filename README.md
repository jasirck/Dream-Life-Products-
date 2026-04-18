# 🌟 Dream Life Products - Corporate Website

Dream Life Products is a highly performant corporate website built with React and Vite. It relies on client-side dynamic routing, scroll-driven animations, and a centralized data architecture to manage and display content natively. Users navigate software, hardware, and services catalogs and contact the company instantly via dynamically generated WhatsApp links.

## ✨ Key Features

- 📂 **Centralized Data Architecture:** A dedicated `data` directory acts as the single source of truth for all products, services, and text content.
- ⚡ **Dynamic Routing:** React Router automates product details pages based on unique data element IDs.
- 📱 **WhatsApp API Integration:** One-click contact buttons dynamically format messages containing the product name and active URL.
- 🎨 **Premium UI/UX:** The interface deploys a deep obsidian theme with neon lime green accents, scroll-triggered framer-motion animations, and pure CSS marquee scrolling.
- 🧹 **Optimized Codebase:** Developers maintain strictly documented, descriptive code block comments while aggressively purging dead files to keep bundle sizes compact.

## 🛠 System Requirements

To execute this project, ensure your environment meets the following specifications:

- **Node.js:** v18.0.0 or higher
- **Package Manager:** npm (v9.0.0 or higher)
- **Browser:** Any modern web browser (Google Chrome, Firefox, Safari, Edge)

## 🚀 Step-by-Step Installation Guide

Follow these sequential instructions to establish the development environment.

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd "Dream Life/dream-life-frontend"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🧩 Core Functions & Logic Explanations

Understand the internal architecture before modifying the structural logic:

- **Data Hydration:** Standardized JSON objects inside `software.js`, `hardware.js`, and `services.js` organize media links and descriptive text. React components map over these arrays to inject content uniformly.
- **Dynamic Pages:** The `ProductDetailPage` component parses the URL using React Router's `useParams()`. It extracts an item ID, searches the unified data arrays to find the matching entry, and renders a dedicated layout.
- **WhatsApp Configuration:** The centralized `config.js` script holds a dynamic URL generator function inside the `whatsappConfig` object. The product page executes this function, passing the active browser URL and page title to form a seamless `.wa.me/` hyperlink.

## 🤝 Recruitment & Developer Onboarding

Welcome to the team. To contribute effectively, familiarize yourself with our project structure immediately. 

- **Components Mapping:** Group UI elements in `src/components/sections/` and global navigation components in `src/components/layout/`.
- **Data Editing:** Update site content strictly inside the `src/data/` folder. Do not hardcode text variables inside generic React JSX components. 
- **Typography & Color Compliance:** Stick to the primary neon accent (`#bfd733`, configured via Tailwind `text-primary`). Maintain text hierarchies: Montserrat constructs body text, Orbitron controls display titles, and Teko designs prominent section headers.

We prioritize strict layout responsiveness. Test on mobile viewports to prevent horizontal overflow before submitting pull requests.
