import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';
import { Testimonial } from '../types/cafe';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-28 px-6 sm:px-8 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3 text-[#A66B45]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Guest Reflections</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal tracking-tight text-balance"
          >
            Kind Words, Shared Moments
          </motion.h2>
        </div>

        {/* Testimonial Card & Controls */}
        <div className="relative bg-gradient-to-br from-[#FFF9F2] to-[#F5EADF]/60 rounded-2xl p-8 sm:p-12 border border-[#E8D6C4] shadow-md">
          <Quote className="w-10 h-10 text-[#A66B45]/25 absolute top-6 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A66B45] text-[#A66B45]" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#4A2C20] leading-snug font-normal italic">
                “{active.quote}”
              </p>

              {/* Author & Order Info */}
              <div className="mt-8 pt-6 border-t border-[#E8D6C4] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#4A2C20] text-[#FFF9F2] font-serif flex items-center justify-center font-medium text-base shrink-0 shadow-xs">
                    {active.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#29211D] text-base">{active.author}</h3>
                    <p className="text-xs text-[#29211D]/65">{active.role}</p>
                  </div>
                </div>

                <div className="text-xs text-[#A66B45] font-medium bg-[#FFF9F2] px-3 py-1.5 rounded-md border border-[#E8D6C4]/80 self-start sm:self-auto">
                  <span>Favorite: </span>
                  <span className="text-[#4A2C20]">{active.favoriteOrder}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-end gap-2.5 mt-8 pt-4 border-t border-[#E8D6C4]/40">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-[#E8D6C4] text-[#4A2C20] hover:bg-[#4A2C20] hover:text-[#FFF9F2] transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-xs font-mono text-[#4A2C20]/70 px-2 tabular-nums">
              0{currentIndex + 1} / 0{testimonials.length}
            </div>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-[#E8D6C4] text-[#4A2C20] hover:bg-[#4A2C20] hover:text-[#FFF9F2] transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
