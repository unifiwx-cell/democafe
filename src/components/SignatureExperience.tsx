import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame, Droplets, Compass } from 'lucide-react';
import { CAFE_IMAGES } from '../data/cafeData';

interface SignatureExperienceProps {
  onDiscoverCoffee: () => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({
  onDiscoverCoffee,
}) => {
  return (
    <section id="signature" className="relative py-24 sm:py-32 bg-[#4A2C20] text-[#FFF9F2] overflow-hidden">
      {/* Background radial warmth */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-[#A66B45]/20 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Split Left: Immersive Cinematic Image */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#A66B45]/30 group"
            >
              <img
                src={CAFE_IMAGES.artisanPourOver}
                alt="Cinematic specialty filter coffee pouring into handcrafted ceramic cup with warm steam"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-103"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom detail pill-less ribbon */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#29211D]/80 backdrop-blur-md p-4 rounded-xl border border-[#A66B45]/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#E8D6C4]" />
                  <span>93.5°C Precision Pour</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#E8D6C4]" />
                  <span>Slow Micro-Batch Roast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#E8D6C4]" />
                  <span>Single-Estate Traceability</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Split Right: Editorial Copy & CTA */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest font-semibold text-[#E8D6C4] mb-3"
            >
              The Slow Bar Ritual
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-tight text-[#FFF9F2] text-balance"
            >
              Your Daily Ritual, Elevated.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base text-[#E8D6C4]/85 leading-relaxed"
            >
              Every cup is dialed in daily by our baristas, testing water mineral profiles, particle size distribution, and bloom ratios. We believe specialty coffee is not an elitist craft—it is a shared moment of presence and joy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-3 text-sm text-[#E8D6C4]/70 leading-relaxed font-serif italic"
            >
              Experience hand-poured Chemex, V60, and AeroPress flights sourced directly from regenerative mountain farms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <button
                onClick={onDiscoverCoffee}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-[#4A2C20] bg-[#FFF9F2] hover:bg-[#F5EADF] rounded-md transition-all shadow-md active:scale-[0.98] group"
              >
                <span>Discover Our Coffee</span>
                <ArrowRight className="w-4 h-4 text-[#A66B45] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
