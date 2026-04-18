import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Lightbulb } from 'lucide-react';
import { About } from '../sections/About';
import { aboutContent } from '../../data/site_content';

/**
 * Abstract subcomponent controlling the ambient icon rotation and translation.
 * Supplies dynamic background texture to elevate visual retention.
 */
const FloatingIcon = ({ Icon, className, delay, duration, yRange, xRange }) => (
  <motion.div
    className={`absolute text-white/5 z-0 ${className}`}
    animate={{
      y: yRange,
      x: xRange,
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      y: { repeat: Infinity, duration: duration, ease: "easeInOut", delay },
      x: { repeat: Infinity, duration: duration * 1.5, ease: "easeInOut", delay },
      rotate: { repeat: Infinity, duration: duration * 2, ease: "linear" }
    }}
  >
    <Icon size={120} strokeWidth={1} />
  </motion.div>
);

/**
 * Renders the dedicated About page viewport.
 * Combines a custom animated hero banner with the standard About section component.
 */
export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-obsidian">

      {/* Animated Hero Banner */}
      <section className="pt-40 pb-32 relative bg-[#060606] overflow-hidden flex flex-col items-center justify-center text-center min-h-[55vh] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#060606] to-[#040404]"></div>

        {/* Animated Tech Grid Background */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(191,215,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,215,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        ></motion.div>

        {/* Floating Abstract Elements */}
        <FloatingIcon Icon={Users} className="top-[10%] left-[15%]" delay={0} duration={12} yRange={[0, -30, 0]} xRange={[0, 20, 0]} />
        <FloatingIcon Icon={Heart} className="top-[60%] left-[5%]" delay={2} duration={14} yRange={[0, 40, 0]} xRange={[0, -20, 0]} />
        <FloatingIcon Icon={Lightbulb} className="top-[20%] right-[10%]" delay={1} duration={10} yRange={[0, 50, 0]} xRange={[0, -30, 0]} />
        <FloatingIcon Icon={Award} className="top-[70%] right-[15%]" delay={3} duration={16} yRange={[0, -40, 0]} xRange={[0, 20, 0]} />

        <div className="bg-orb-1 opacity-20 scale-150"></div>
        <div className="bg-orb-2 opacity-20 scale-150"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block overflow-hidden"
            >
              <div className="inline-block py-2 px-8 rounded-full glass-dark text-primary font-bold text-xs tracking-widest uppercase mb-10 border border-primary/20 shadow-[0_0_20px_rgba(191,215,51,0.1)] backdrop-blur-2xl font-sans">
                {aboutContent.badge}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
              About<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d4eb44] to-accent inline-block mt-2 drop-shadow-[0_0_20px_rgba(191,215,51,0.3)]">
                Dream Life Products
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto glass-dark p-6 md:p-8 rounded-[2rem] border border-white/5 backdrop-blur-xl shadow-2xl relative font-sans"
          >
            {aboutContent.description}
          </motion.p>
        </div>
      </section>

      {/* Original About Content */}
      <About />
    </div>
  );
}
