import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../../data/site_content';
import * as LucideIcons from 'lucide-react';
import { aboutImages } from '../../data/about';

/**
 * About section component rendering the corporate synopsis.
 * Displays randomized stock images alongside animated metrics sourced from site config.
 */
export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3 font-sans">{aboutContent.badge}</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8 leading-tight shadow-primary/10 uppercase">
              {aboutContent.titlePrefix} <span className="text-primary italic">{aboutContent.titleAccent}</span>.
            </h3>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed font-sans">
              {aboutContent.description}
            </p>
            
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
              className="space-y-4 mb-10"
            >
              {aboutContent.checkPoints.map((text, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="flex items-start gap-4 glass-panel p-5 rounded-2xl hover:bg-white/[0.05] transition-colors border-white/5"
                >
                  <LucideIcons.CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(191,215,51,0.3)]" size={24} />
                  <p className="text-slate-200 font-semibold font-sans">{text}</p>
                </motion.div>
              ))}
            </motion.div>
            
          </motion.div>
          
          {/* Image Right (Glassy representation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] rounded-[3rem] glass-dark overflow-hidden group border border-white/5">
               {/* Animated gradient mesh inside */}
               <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="absolute -inset-[50%] bg-gradient-to-r from-primary/10 via-accent/5 to-obsidian/10 blur-3xl"
               ></motion.div>
               
               <div className="relative h-full w-full flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-5 p-12 w-full h-full">
                     {aboutImages.map((image) => (
                        <motion.div 
                          key={image.id}
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          className="glass-panel rounded-2xl h-full w-full border border-white/10 shadow-2xl relative overflow-hidden"
                        >
                           <img 
                             src={image.img} 
                             alt={`Tech Context ${image.id}`} 
                             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                           />
                        </motion.div>
                     ))}
                  </div>
               </div>
               
               {/* Overlay color */}
               <div className="absolute inset-0 bg-primary/[0.02] group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {aboutContent.stats.map((stat) => {
            const IconComponent = LucideIcons[stat.iconName];
            return (
              <motion.div 
                key={stat.id} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10, scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center group border border-white/5 shadow-3xl"
              >
                 <motion.div 
                   whileHover={{ rotate: 15 }}
                   className="w-16 h-16 glass-glow rounded-3xl flex items-center justify-center text-primary mb-6 shadow-xl border border-white/10"
                 >
                    {IconComponent && <IconComponent size={24} />}
                 </motion.div>
                 <div className="text-5xl font-display font-black tracking-tight text-white mb-3 group-hover:text-primary transition-colors">{stat.value}</div>
                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] font-sans">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
