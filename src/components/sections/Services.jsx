import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { services } from '../../data/services';
import { sectionHeadlines } from '../../data/site_content';

/**
 * Feature snippet displaying a subset of core supplemental services.
 * Embedded primarily on the home route to tease full service capabilities.
 */
export function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-black tracking-[0.3em] text-primary uppercase mb-4 font-sans">{sectionHeadlines.services.badge}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
              {sectionHeadlines.services.title}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(191,215,51,0.5)]"></div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.slice(0, 3).map((item, idx) => (
            <Link to={`/services/${item.id}`} key={item.id} className="block">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  show: { opacity: 1, scale: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-dark rounded-[2.5rem] p-10 flex items-start gap-6 group border border-white/5 hover:bg-white/[0.08] transition-all duration-500 shadow-2xl h-full"
              >
                <motion.div 
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="flex-shrink-0 w-16 h-16 glass-glow rounded-2xl flex items-center justify-center text-primary group-hover:text-accent transition-colors shadow-lg border border-white/10 overflow-hidden bg-white/5"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover p-3 opacity-80 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-400 font-light leading-relaxed text-base">{item.short_description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(191,215,51,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services')}
            className="btn-glass hover:border-primary/60 border-white/20 px-12"
          >
            All Services
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
