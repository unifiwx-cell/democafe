import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { CAFE_IMAGES } from '../data/cafeData';

interface HeroProps {
  onExploreMenu: () => void;
  onDiscoverStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onDiscoverStory }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 px-6 sm:px-8 flex flex-col justify-center overflow-hidden bg-[#29211D]"
    >
      {/* Full-width, high-quality background image of coffee scene with subtle dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={CAFE_IMAGES.heroCoffeeBg}
          alt="Artisanal steaming coffee cup and roasted beans on oak café table"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />

        {/* Subtle Dark Overlay to ensure pristine readability of the headline */}
        <div className="absolute inset-0 bg-[#29211D]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#29211D]/90 via-[#29211D]/75 to-[#29211D]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#29211D]/70 via-transparent to-[#29211D]/95" />
      </div>

      {/* Subtle radial ambient background glows */}
      <div
        className="absolute top-1/4 right-1/6 w-96 h-96 rounded-full bg-radial from-[#A66B45]/20 via-[#4A2C20]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/10 w-80 h-80 rounded-full bg-radial from-[#A66B45]/25 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating subtle coffee bean illustrations / organic dots */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -12, 0],
                x: [0, 6, 0],
                rotate: [0, 8, 0],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[8%] hidden lg:flex items-center gap-1.5 opacity-60 pointer-events-none z-10"
      >
        <div className="w-3.5 h-2.5 rounded-full bg-[#E8D6C4]/60 rotate-45 border border-[#FFF9F2]/30 shadow-xs" />
        <div className="w-2.5 h-1.5 rounded-full bg-[#A66B45]/70 -rotate-12 border border-[#FFF9F2]/20" />
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 10, 0],
                x: [0, -8, 0],
                rotate: [0, -10, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-36 right-[12%] hidden lg:flex items-center gap-1.5 opacity-50 pointer-events-none z-10"
      >
        <div className="w-3 h-2 rounded-full bg-[#E8D6C4]/50 rotate-12" />
        <div className="w-2 h-1 rounded-full bg-[#A66B45]/60 -rotate-45" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-6 flex flex-col items-start pt-4 lg:pt-0">
          {/* Handwritten accent: "Freshly brewed, always." */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3 text-[#E8D6C4]"
          >
            <Sparkles className="w-4 h-4 text-[#E8D6C4]/80" />
            <span className="font-script text-2xl sm:text-3xl tracking-wide select-none">
              Freshly brewed, always.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#FFF9F2] font-medium leading-[1.08] tracking-tight max-w-xl text-balance"
          >
            Good Coffee. <br />
            <span className="italic font-normal text-[#E8D6C4]">Beautiful Moments.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed max-w-lg"
          >
            Slow down, sip something wonderful, and make every moment a little more special. Handcrafted single-origin roasts and dawn-baked pastries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-[#4A2C20] bg-[#FFF9F2] hover:bg-[#F5EADF] rounded-md transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] whitespace-nowrap group"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 text-[#A66B45] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onDiscoverStory}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#FFF9F2] hover:text-[#E8D6C4] hover:bg-[#FFF9F2]/10 border border-[#FFF9F2]/30 rounded-md transition-all duration-200 whitespace-nowrap"
            >
              <span>Discover Our Story</span>
            </button>
          </motion.div>

          {/* Unboxed Metadata / Quiet Trust markers (Zero-Pill discipline) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 pt-6 border-t border-[#FFF9F2]/20 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#E8D6C4]/80"
          >
            <span>Single-Origin Arabica</span>
            <span aria-hidden="true">·</span>
            <span>Dawn-Baked Viennoiserie</span>
            <span aria-hidden="true">·</span>
            <span>Heritage Roastery</span>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual Composition with Floating Cappuccino & Pastry */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Background Decorative Rings */}
          <div className="absolute w-[80%] aspect-square rounded-full border border-[#FFF9F2]/15 pointer-events-none -z-10" />
          <div className="absolute w-[95%] aspect-square rounded-full border border-[#FFF9F2]/10 pointer-events-none -z-10 scale-95" />

          {/* Interactive floating image container */}
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)`,
                  }
            }
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="relative w-full max-w-lg lg:max-w-none group"
          >
            {/* Primary Hero Image: Artisanal Cappuccino & Croissant */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF9F2]/90 bg-[#29211D]"
            >
              <img
                src={CAFE_IMAGES.heroCappuccino}
                alt="Artisanal cappuccino with swan latte art and golden butter croissant on linen cloth"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />

              {/* Gentle ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/40 via-transparent to-transparent pointer-events-none" />

              {/* Subtle caption badge inside image with glass detail */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFF9F2]/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#E8D6C4]/70 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-semibold text-[#4A2C20]">Swan Rosetta & Fresh Croissant</p>
                  <p className="text-xs text-[#29211D]/70">Extracted daily with Karnataka shade Arabica</p>
                </div>
                <span className="font-serif italic text-sm text-[#A66B45]">Est. 2021</span>
              </div>
            </motion.div>

            {/* Overlapping secondary floating card - Tasting Note */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 8, 0],
                      x: [0, -4, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FFF9F2] p-3.5 sm:p-4 rounded-xl shadow-xl border border-[#E8D6C4] max-w-[210px] sm:max-w-[230px] hidden xs:block"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#A66B45]" />
                <span className="text-[11px] uppercase tracking-wider text-[#A66B45] font-semibold">Tasting Profile</span>
              </div>
              <p className="text-xs text-[#29211D] font-medium">Toasted Hazelnut · Honeyed Caramel · Meyer Citrus</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-14 lg:mt-8 flex flex-col items-center justify-center text-[#E8D6C4]/70 hover:text-[#FFF9F2] transition-colors cursor-pointer z-10"
        onClick={onExploreMenu}
      >
        <span className="text-xs uppercase tracking-widest font-medium mb-1.5">Scroll to explore</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#E8D6C4]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
