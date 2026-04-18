import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import SoftwarePage from './components/pages/SoftwarePage';
import HardwarePage from './components/pages/HardwarePage';
import ServicesPage from './components/pages/ServicesPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import ScrollToTop from './components/layout/ScrollToTop';

/**
 * Root application layout and routing component.
 * Configures global React Router navigation and establishes the primary page structure with consistent Navbar and Footer elements.
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="overflow-x-hidden min-h-screen bg-obsidian selection:bg-primary selection:text-obsidian flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/softwares" element={<SoftwarePage />} />
            <Route path="/softwares/:id" element={<ProductDetailPage />} />
            <Route path="/hardwares" element={<HardwarePage />} />
            <Route path="/hardwares/:id" element={<ProductDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
