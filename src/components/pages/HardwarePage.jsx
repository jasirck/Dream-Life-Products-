import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Monitor, ShieldCheck, Printer, ArrowRight } from 'lucide-react';
import { hardwareProducts, hardwareSolutions } from '../../data/hardware';
import { hardwarePageContent } from '../../data/site_content';

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
 * Render interface for the Hardware Solutions catalog.
 * Manages the display of hardware products and structural categories using Framer Motion animations.
 */
export default function HardwarePage() {
  const { scrollYProgress } = useScroll();
  const yElement = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="w-full bg-obsidian selection:bg-primary selection:text-obsidian flex flex-col pt-16">

      {/* Section 1: Hero Banner */}
      <section className="pt-24 pb-32 relative bg-[#060606] overflow-hidden flex flex-col items-center justify-center text-center min-h-[60vh] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#060606] to-[#040404]"></div>

        {/* Animated Tech Grid Background */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(191,215,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,215,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        ></motion.div>

        {/* Floating Abstract Hardware Elements */}
        <FloatingIcon Icon={Server} className="top-[10%] left-[15%]" delay={0} duration={12} yRange={[0, -30, 0]} xRange={[0, 20, 0]} />
        <FloatingIcon Icon={Monitor} className="top-[60%] left-[5%]" delay={2} duration={14} yRange={[0, 40, 0]} xRange={[0, -20, 0]} />
        <FloatingIcon Icon={ShieldCheck} className="top-[20%] right-[10%]" delay={1} duration={10} yRange={[0, 50, 0]} xRange={[0, -30, 0]} />
        <FloatingIcon Icon={Printer} className="top-[70%] right-[15%]" delay={3} duration={16} yRange={[0, -40, 0]} xRange={[0, 20, 0]} />

        <div className="bg-orb-1 opacity-20 scale-150"></div>
        <div className="bg-orb-2 opacity-20 scale-150"></div>

        <motion.div
          style={{ y: yElement }}
          className="max-w-5xl mx-auto px-4 relative z-10"
        >
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
                {hardwarePageContent.hero.badge}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
              {hardwarePageContent.hero.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d4eb44] to-accent inline-block mt-2 drop-shadow-[0_0_20px_rgba(191,215,51,0.3)]">
                {hardwarePageContent.hero.titleAccent}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto glass-dark p-6 md:p-8 rounded-[2rem] border border-white/5 backdrop-blur-xl shadow-2xl relative font-sans"
          >
            {hardwarePageContent.hero.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-24 md:py-32 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-10"
          ></motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-teko font-bold text-primary mb-8 uppercase tracking-wide leading-tight"
          >
            {hardwarePageContent.intro.title}<br />
            <span className="text-slate-800 mt-2 block">{hardwarePageContent.intro.subtitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed font-sans"
          >
            {hardwarePageContent.intro.description}
          </motion.p>
        </div>
      </section>

      {/* Section 3: Hardware Products Grid */}
      <section className="py-24 bg-obsidian relative overflow-hidden">
        {/* Background glow elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 gap-12"
          >
            {hardwareProducts.map((product) => (
              <Link to={`/hardwares/${product.id}`} key={product.id} className="block">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-dark rounded-[2.5rem] p-8 mt-4 border border-white/10 shadow-2xl flex flex-col sm:flex-row gap-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 cursor-pointer min-h-[270px]"
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-[3rem]"></div>

                  <div className="shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 md:w-24 md:h-24 glass-glow rounded-[2rem] flex items-center justify-center border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-xl group-hover:bg-primary/20 transition-colors"
                    >
                      <img src={product.image} alt={`${product.title} icon`} className="w-12 h-12 md:w-14 md:h-14 object-contain filter drop-shadow-lg" />
                    </motion.div>
                  </div>
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight flex items-center gap-3">
                      {product.title}
                      <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent" />
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors">
                      {product.short_description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Types of Hardware Solutions */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-green-50 text-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <Server size={32} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-teko font-bold text-primary mb-8 uppercase tracking-tight"
          >
            {hardwarePageContent.types.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto font-sans"
          >
            {hardwarePageContent.types.description}
          </motion.p>
        </div>
      </section>

      {/* Section 5: Hardware Types Image Grid */}
      <section className="py-24 bg-obsidian relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {hardwareSolutions.map((type) => (
              <Link to={`/hardwares/${type.id}`} key={type.id} className="block">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 30 },
                    show: { opacity: 1, scale: 1, y: 0 }
                  }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="relative rounded-[2rem] overflow-hidden h-[450px] flex flex-col justify-end p-8 md:p-10 group shadow-2xl border border-white/10 cursor-pointer"
                >
                  {/* Background Image with Zoom on Hover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{ backgroundImage: `url(${type.image})` }}
                  ></div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent group-hover:from-obsidian/95 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50px" }}
                      viewport={{ once: true }}
                      className="h-1.5 rounded-full bg-primary mb-6 shadow-[0_0_10px_rgba(191,215,51,0.5)]"
                    ></motion.div>
                    <h3 className="text-3xl lg:text-4xl font-sans font-bold text-white mb-6 leading-tight drop-shadow-lg group-hover:text-primary transition-colors flex items-center gap-3">
                      {type.title}
                      <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent" />
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                      {type.short_description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
