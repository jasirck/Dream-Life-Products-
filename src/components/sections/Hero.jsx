import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Sparkles, Globe, Cpu } from 'lucide-react';
import { heroContent, HomeImages as heroImages } from '../../data/home';

// Reusable component for floating background icons
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
 * Interactive splash banner used on the primary landing page.
 * Integrates immersive animations and overarching business performance indicators.
 */
export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Radial Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-obsidian to-obsidian"></div>

      {/* Animated Tech Grid Background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(191,215,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,215,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      ></motion.div>

      {/* Floating Abstract Tech Elements */}
      <FloatingIcon Icon={Sparkles} className="top-[10%] left-[10%]" delay={0} duration={12} yRange={[0, -30, 0]} xRange={[0, 20, 0]} />
      <FloatingIcon Icon={Globe} className="top-[60%] left-[5%]" delay={2} duration={14} yRange={[0, 40, 0]} xRange={[0, -20, 0]} />
      <FloatingIcon Icon={Zap} className="top-[15%] right-[10%]" delay={1} duration={10} yRange={[0, 50, 0]} xRange={[0, -30, 0]} />
      <FloatingIcon Icon={Cpu} className="top-[65%] right-[12%]" delay={3} duration={16} yRange={[0, -40, 0]} xRange={[0, 20, 0]} />

      {/* Background Orbs */}
      <div className="bg-orb-1"></div>
      <div className="bg-orb-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 }
              }}
              className="inline-block py-1.5 px-6 rounded-full glass-dark text-primary font-bold text-xs tracking-widest uppercase mb-8 border border-white/5 font-sans"
            >
              {heroContent.badge}
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-black tracking-tight text-white leading-tight mb-8 uppercase"
            >
              {heroContent.title} <span className="text-primary block mt-2 drop-shadow-[0_0_20px_rgba(191,215,51,0.2)]">{heroContent.titleAccent}</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light font-sans"
            >
              {heroContent.description}
            </motion.p>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-[550px] mx-auto">

              {/* Dynamic Glow Base */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/10 rounded-[3rem] blur-[80px] opacity-40 shrink-0"
              ></motion.div>

              {/* Main Obsidian Glass Panel */}
              <div className="absolute inset-0 glass-dark rounded-[3rem] -rotate-3 overflow-hidden flex flex-col border border-white/10 shadow-2xl">
                <div className="h-14 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2 backdrop-blur-md">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/80 shadow-[0_0_10px_rgba(248,113,113,0.3)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/80 shadow-[0_0_10px_rgba(250,204,21,0.3)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400/80 shadow-[0_0_10px_rgba(74,222,128,0.3)]"></div>
                </div>
                <div className="flex-1 p-8 flex flex-col gap-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="h-28 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl w-full relative overflow-hidden group"
                  >
                    {heroImages[0] && (
                      <img
                        src={heroImages[0].img}
                        alt={heroImages[0].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </motion.div>
                  <div className="flex gap-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="h-36 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex-1 shadow-inner relative overflow-hidden group"
                    >
                      {heroImages[1] && (
                        <img
                          src={heroImages[1].img}
                          alt={heroImages[1].alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="h-36 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex-1 shadow-inner relative overflow-hidden group"
                    >
                      {heroImages[2] && (
                        <img
                          src={heroImages[2].img}
                          alt={heroImages[2].alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Metric Card - Premium Dark */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: [0, -15, 0], opacity: 1 }}
                transition={{
                  opacity: { duration: 1, delay: 1.2 },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }
                }}
                className="absolute -bottom-8 -left-6 md:-left-12 glass-glow p-8 rounded-[2rem] w-72 shadow-3xl border border-white/10"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="bg-primary/20 p-4 rounded-2xl border border-primary/20 backdrop-blur-md">
                    <Activity className="text-primary" size={28} />
                  </div>
                  <div>
                    <div className="text-white font-display font-black text-3xl">{heroContent.efficiency.value}</div>
                    <div className="text-primary/80 text-[10px] font-black uppercase tracking-widest font-sans">{heroContent.efficiency.label}</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden backdrop-blur-sm border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: heroContent.efficiency.value }}
                    transition={{ duration: 2, delay: 2 }}
                    className="bg-gradient-to-r from-primary to-accent w-[98%] h-full rounded-full shadow-[0_0_10px_rgba(191,215,51,0.5)]"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Floating Tech Card - Premium Dark */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: [0, 15, 0], opacity: 1 }}
                transition={{
                  opacity: { duration: 1, delay: 1.6 },
                  x: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.6 }
                }}
                className="absolute top-16 -right-8 glass-card p-5 rounded-2xl flex items-center gap-4 shadow-2xl border border-white/10"
              >
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 backdrop-blur-md">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-base font-bold text-white uppercase font-display">{heroContent.performance.value}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-sans">{heroContent.performance.label}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
