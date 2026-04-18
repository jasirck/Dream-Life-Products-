import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { softwareProducts } from '../../data/software';
import { sectionHeadlines } from '../../data/site_content';

/**
 * Software preview grouping presented on the landing index.
 * Trims the comprehensive proprietary software array to showcase initial flagship items.
 */
export function SoftwareSolutions() {
  const navigate = useNavigate();
  return (
    <section id="softwares" className="py-24 relative overflow-hidden bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-black tracking-[0.3em] text-primary uppercase mb-4 font-sans">{sectionHeadlines.software.badge}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
              {sectionHeadlines.software.title}
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
                staggerChildren: 0.15
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {softwareProducts.slice(0, 3).map((item, idx) => (
            <Link to={`/softwares/${item.id}`} key={item.id} className="block">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-dark rounded-[2.5rem] p-10 flex flex-col group border border-white/5 shadow-2xl relative overflow-hidden h-full"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 glass-glow rounded-3xl flex items-center justify-center text-primary mb-8 shadow-xl border border-white/10 group-hover:rotate-6 transition-all overflow-hidden bg-white/5">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover p-3 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg">
                    {item.short_description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase group/btn mt-auto">
                    Explore Product <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
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
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(191,215,51,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/softwares')}
            className="btn-glass hover:border-primary/60 border-white/20 px-12"
          >
            Know More Configuration
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
