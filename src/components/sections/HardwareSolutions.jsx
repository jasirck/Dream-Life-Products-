import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { hardwareProducts } from '../../data/hardware';
import { sectionHeadlines } from '../../data/site_content';

/**
 * Hardware preview section displayed on the landing page.
 * Slices the hardware data array to showcase top physical infrastructure products.
 */
export function HardwareSolutions() {
  const navigate = useNavigate();
  return (
    <section id="hardwares" className="py-24 relative overflow-hidden bg-obsidian-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-black tracking-[0.3em] text-primary uppercase mb-4 font-sans">{sectionHeadlines.hardware.badge}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white relative inline-block uppercase">
              {sectionHeadlines.hardware.title}
              <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_15px_rgba(191,215,51,0.5)]"></div>
            </h3>
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
                staggerChildren: 0.1
              }
            }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {hardwareProducts.slice(0, 4).map((item, idx) => (
            <Link to={`/hardwares/${item.id}`} key={item.id} className="block">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  show: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ y: -15, rotateY: 8 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-[2.5rem] p-10 flex flex-col items-center text-center group perspective-1000 border border-white/5 shadow-2xl h-full"
              >
                <motion.div
                  whileHover={{ rotate: -15, scale: 1.15 }}
                  className="w-24 h-24 rounded-[2rem] glass-glow flex items-center justify-center text-primary mb-8 shadow-xl border border-white/10 group-hover:bg-primary/5 transition-all duration-300 overflow-hidden bg-white/5"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover p-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed">{item.short_description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(191,215,51,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/hardwares')}
            className="btn-glass hover:border-primary/60 border-white/20 px-12"
          >
            Explore Catalog
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
