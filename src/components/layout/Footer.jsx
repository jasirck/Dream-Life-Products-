import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Send, MapPin, Mail, Heart } from 'lucide-react';
import { footerContent } from '../../data/site_content';
import { globalSettings } from '../../data/config';

/**
 * Full-width application footer utilizing centralized configuration text.
 * Displays overarching site links, corporate contact methods, and copyright declarations.
 */
export function Footer() {
  return (
    <footer id="footer" className="relative mt-20 bg-obsidian-light border-t border-white/5 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-4 mb-6 group inline-flex">
              <div className="w-14 h-14 rounded-2xl glass-glow flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 bg-white/5 backdrop-blur-2xl">
                <img src="/LOGO_DREAM.png" alt="Logo" className="w-9 h-9 object-contain" />
              </div>
              <span className="text-3xl font-display font-black tracking-tight text-white group-hover:text-primary transition-all duration-500">
                DREAM LIFE <span className="text-primary italic">PRODUCTS</span>
              </span>
            </a>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md mb-6 font-sans">
              {footerContent.about}
            </p>
            <div className="flex gap-5">
              {[Send, Share2].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8, 
                    backgroundColor: "rgba(191,215,51,0.2)",
                    borderColor: "rgba(191,215,51,0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-white border border-white/10 transition-all duration-500 shadow-2xl bg-white/5"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:pl-10">
            <h4 className="text-white font-display font-bold uppercase tracking-[0.3em] mb-6 text-xs opacity-60">Engineered Ecosystems</h4>
            <div className="flex flex-col gap-5">
              {footerContent.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-primary transition-all duration-500 font-sans font-medium flex items-center gap-3 group text-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(191,215,51,0.8)] transition-all duration-500" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-[0.3em] mb-6 text-xs opacity-60">Global Operations</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-primary border border-primary/20 bg-primary/5 shrink-0 group-hover:border-primary/50 transition-colors duration-500">
                  <MapPin size={22} />
                </div>
                <div className="text-slate-400 font-sans text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                  {globalSettings.contactLocation}
                </div>
              </div>
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-primary border border-primary/20 bg-primary/5 shrink-0 group-hover:border-primary/50 transition-colors duration-500">
                  <Mail size={22} />
                </div>
                <div className="text-slate-400 font-sans text-sm break-all group-hover:text-slate-200 transition-colors duration-500">
                  {globalSettings.contactEmail}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-slate-500 font-black uppercase tracking-[0.4em] font-sans">
          <p className="hover:text-slate-400 transition-colors duration-500">{footerContent.copyright}</p>
          <div className="flex items-center gap-3 group cursor-default">
            Crafted with <Heart size={16} className="text-primary animate-pulse shadow-primary" /> by
            <span className="text-slate-300 group-hover:text-primary transition-all duration-500 scale-105 group-hover:scale-110">Dream Life Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
