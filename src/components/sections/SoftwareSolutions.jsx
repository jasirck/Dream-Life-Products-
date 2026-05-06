import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorPlay } from 'lucide-react';
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
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ type: "spring", bounce: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-dark rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all duration-500 h-full cursor-pointer"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-[3rem]"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 md:w-24 md:h-24 glass-glow rounded-[2rem] flex items-center justify-center border border-white/5 shadow-inner bg-white/5 backdrop-blur-xl group-hover:bg-primary/20 transition-colors mb-8"
                  >
                    <img src={item.image} alt={`${item.title} icon`} className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full bg-white filter drop-shadow-lg" />
                  </motion.div>
                  
                  <h3 className="text-2xl lg:text-3xl font-sans font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight flex items-center gap-3">
                    {item.title}
                    <MonitorPlay size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent shrink-0" />
                  </h3>
                  
                  <p className="text-slate-400 font-light leading-relaxed mb-10 text-base md:text-lg">
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
