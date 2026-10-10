import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';

interface AboutProps {
  onOpenStoryModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenStoryModal }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Café Interior Photography with architectural frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8D6C4]/80 group"
            >
              <img
                src="/src/assets/images/cafe_interior_cozy_1791626484992.jpg"
                alt="Minimalist warm cream café interior with natural oak furniture and arched walls"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-103"
              />

              {/* Architectural vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/40 via-transparent to-transparent pointer-events-none" />

              {/* Inset quote tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#FFF9F2]/95 backdrop-blur-md p-4 rounded-xl border border-[#E8D6C4] flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#A66B45]">Space & Sanity</p>
                  <p className="font-serif text-sm text-[#4A2C20] font-medium mt-0.5">Lime-wash walls, slow sunlight & warm acoustics</p>
                </div>
                <Coffee className="w-5 h-5 text-[#A66B45] shrink-0" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-3 text-[#A66B45]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Our Philosophy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal leading-[1.15] tracking-tight text-balance"
            >
              A Little More Than Just Coffee
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-[#A66B45] my-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-[#4A2C20] font-serif italic leading-relaxed"
            >
              “We believe the best moments begin with a great cup of coffee, freshly prepared food, and a place that feels like home.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 text-base text-[#29211D]/80 leading-relaxed"
            >
              Maison Velouté was born from a desire to return to unhurried craftsmanship. We roast in micro-batches using ethically sourced cherries from high-elevation estates across Karnataka and Ethiopia. Every morning before dawn, our bakery kitchen laminates French cultured butter into golden, delicate layers that shatter at the first bite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex items-center gap-6"
            >
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium tracking-wide text-[#FFF9F2] bg-[#4A2C20] hover:bg-[#382016] rounded-md transition-all shadow-sm active:scale-[0.98] group"
              >
                <span>Get to Know Us</span>
                <ArrowRight className="w-4 h-4 text-[#E8D6C4] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-xs text-[#4A2C20]/75 flex flex-col">
                <span className="font-semibold text-[#4A2C20]">Est. 2021</span>
                <span>Bengaluru · Heritage Quarter</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
