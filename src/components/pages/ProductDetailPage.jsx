import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { softwareProducts } from '../../data/software';
import { hardwareProducts, hardwareSolutions } from '../../data/hardware';
import { services } from '../../data/services';
import { whatsappConfig } from '../../data/config';

const allItems = [
  ...softwareProducts.map(p => ({ ...p, category: 'software' })),
  ...hardwareProducts.map(p => ({ ...p, category: 'hardware' })),
  ...hardwareSolutions.map(p => ({ ...p, category: 'hardware' })),
  ...services.map(p => ({ ...p, category: 'services' }))
];

// Category display names for breadcrumbs
const categoryLabels = {
  software: 'Software',
  hardware: 'Hardware',
  services: 'Services',
};

// Category route paths for breadcrumbs
const categoryPaths = {
  software: '/softwares',
  hardware: '/hardwares',
  services: '/services',
};

// Stagger animation container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

/**
 * Dynamic route component rendering specific product or service details.
 * Parses the URL schema to fetch and display targeted data objects.
 */
export default function ProductDetailPage() {
  const { id } = useParams();
  const location = useLocation();

  // Determine category from URL path (e.g., /softwares/1 -> softwares)
  const pathParts = location.pathname.split('/');
  const routePrefix = pathParts[1]; 

  const categoryMap = {
    softwares: 'software',
    hardwares: 'hardware',
    services: 'services'
  };

  const targetCategory = categoryMap[routePrefix];

  const product = allItems.find(
    (p) => p.id === Number(id) && p.category === targetCategory
  );

  // ── 404 STATE ──────────────────────────────
  if (!product) {
    return (
      <div className="w-full min-h-screen bg-obsidian flex flex-col items-center justify-center pt-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center max-w-lg"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full glass-dark flex items-center justify-center border border-white/10">
            <span className="text-5xl font-display font-black text-primary">?</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-teko font-bold text-white mb-4 uppercase">
            Product Not Found
          </h1>
          <p className="text-slate-400 text-lg mb-10 font-light">
            The product you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 btn-glass text-primary hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── WhatsApp URL ───────────────────────────
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const whatsappMessage = whatsappConfig.generateMessage(product.title, currentUrl);
  const whatsappUrl = `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(whatsappMessage)}`;

  // Determine the visual asset (all items now use 'image' field)
  const isInternalIcon = product.image.includes('icons8.com');

  return (
    <div className="w-full bg-obsidian selection:bg-primary selection:text-obsidian flex flex-col min-h-screen pt-16">

      {/* ── HERO / HEADER SECTION ─────────────── */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 relative bg-[#060606] overflow-hidden border-b border-white/5">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#060606] to-[#040404]"></div>

        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(191,215,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,215,51,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />

        {/* Background orbs */}
        <div className="bg-orb-1 opacity-20 scale-150"></div>
        <div className="bg-orb-2 opacity-20 scale-150"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Breadcrumb */}
          <motion.nav variants={itemVariants} className="flex items-center gap-2 text-sm mb-10 flex-wrap">
            <Link to="/" className="text-slate-500 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-600" />
            <Link
              to={categoryPaths[product.category]}
              className="text-slate-500 hover:text-primary transition-colors font-medium capitalize"
            >
              {categoryLabels[product.category]}
            </Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-primary font-semibold truncate max-w-[200px]">{product.title}</span>
          </motion.nav>

          {/* Product Image / Badge + Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-10">
            {/* Image/Icon badge */}
            <motion.div
              variants={itemVariants}
              className={`w-24 h-24 md:w-28 md:h-28 rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_10px_40px_rgba(191,215,51,0.1)] shrink-0 ${isInternalIcon ? 'glass-glow bg-white/5' : ''}`}
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className={`${isInternalIcon ? 'w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg' : 'w-full h-full object-cover'}`} 
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="inline-block py-1.5 px-6 rounded-full glass-dark text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20 shadow-[0_0_15px_rgba(191,215,51,0.08)] font-sans">
                {categoryLabels[product.category]}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white uppercase leading-[1.1] tracking-tight">
                {product.title}
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT AREA ─────────────────── */}
      <section className="py-16 md:py-24 bg-obsidian relative flex-grow">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* ── Photographic Main Image (only for items with full photos) ── */}
          {!isInternalIcon && (
            <motion.div variants={itemVariants} className="mb-12 md:mb-16">
              <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-obsidian w-full h-[300px] md:h-[450px] flex items-center justify-center">
                
                {/* Dynamically Blurred Background for adaptive ratio filling */}
                <div 
                  className="absolute inset-0 opacity-30 blur-3xl scale-[1.2] bg-center bg-cover bg-no-repeat transition-transform duration-1000"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>

                {/* Contained foreground image with no cropping */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="relative z-10 w-full h-full object-contain p-6 md:p-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                />

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          )}

          {/* ── Description Panel ─────────────── */}
          <motion.div
            variants={itemVariants}
            className="glass-dark rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden mb-16 md:mb-20"
          >
            {/* Inner glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] bg-primary/15 blur-[120px] rounded-[100%] pointer-events-none"
            />

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
            />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-teko font-bold text-white mb-6 uppercase tracking-wide relative z-10">
              About <span className="text-primary">{product.title}</span>
            </h2>

            <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed relative z-10 font-sans">
              {product.description}
            </p>
          </motion.div>

          {/* ── YouTube Video Section ─────────── */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Play size={20} className="text-primary" />
              <h3 className="text-xl md:text-2xl font-teko font-bold text-white uppercase tracking-wide">
                Product Overview
              </h3>
            </div>

            <div className="flex justify-center">
              <div className="w-full md:w-[50vw] max-w-3xl">
                <div className="relative glass-dark rounded-[2rem] p-3 md:p-4 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden group">
                  {/* Video glow on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-[3rem] pointer-events-none"></div>

                  <div className="relative z-10 aspect-video rounded-[1.5rem] overflow-hidden bg-black/50">
                    <iframe
                      src={product.youtube_link.replace('youtu.be/', 'www.youtube.com/embed/').split('?')[0]}
                      title={`${product.title} - Product Overview`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Back Navigation ────────────────── */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Link
              to={categoryPaths[product.category]}
              className="inline-flex items-center gap-3 btn-glass group text-sm md:text-base"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to {categoryLabels[product.category]}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FLOATING WHATSAPP BUTTON ──────────── */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: 'spring', bounce: 0.4 }}
        className="fixed right-5 bottom-8 md:right-8 md:bottom-10 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none"
        />

        {/* Outer glow */}
        <div className="absolute -inset-2 rounded-full bg-[#25D366]/20 blur-lg group-hover:bg-[#25D366]/30 transition-colors pointer-events-none"></div>

        {/* Button body */}
        <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300 group-hover:scale-105">
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="hidden md:inline text-sm tracking-wide">Contact Us on WhatsApp</span>
          <ExternalLink size={14} className="hidden md:inline opacity-60" />
        </div>
      </motion.a>
    </div>
  );
}
