import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Croissant, Sparkles, Compass } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'coffee',
      title: 'Exceptional Coffee',
      description: 'Carefully selected beans, thoughtfully prepared for a beautifully balanced cup.',
      icon: Coffee,
      image: '/src/assets/images/barista_craft_latte_1791626513600.jpg',
      meta: 'Micro-Batch Roast · 9 Bar Extraction',
    },
    {
      id: 'pastries',
      title: 'Freshly Made',
      description: 'Delicious pastries and café favorites prepared with care and quality ingredients.',
      icon: Croissant,
      image: '/src/assets/images/bakery_pastry_croissant_1791626497832.jpg',
      meta: '84% French Butter · Dawn Baked',
    },
    {
      id: 'atmosphere',
      title: 'A Cozy Escape',
      description: 'A welcoming atmosphere where you can relax, connect, work, or simply enjoy the moment.',
      icon: Compass,
      image: '/src/assets/images/cafe_interior_cozy_1791626484992.jpg',
      meta: 'Acoustic Comfort · Natural Light',
    },
  ];

  return (
    <section className="py-24 sm:py-28 px-6 sm:px-8 bg-gradient-to-b from-[#FFF9F2] via-[#F5EADF]/40 to-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3 text-[#A66B45]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Our Standards</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal tracking-tight text-balance"
          >
            The Details Make the Difference
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base text-[#29211D]/75 leading-relaxed"
          >
            Nothing is rushed, nothing is automated without care. Here is how we ensure each visit is memorable.
          </motion.p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#FFF9F2] rounded-xl overflow-hidden border border-[#E8D6C4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Image Container with subtle zoom */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F5EADF]">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/50 via-transparent to-transparent pointer-events-none" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 bg-[#FFF9F2]/90 backdrop-blur-md p-2.5 rounded-full border border-[#E8D6C4] text-[#4A2C20]">
                    <IconComponent className="w-4 h-4 text-[#A66B45]" />
                  </div>

                  {/* Unboxed inline metadata */}
                  <div className="absolute bottom-3 left-4 text-[11px] text-[#FFF9F2] font-medium tracking-wide">
                    {feat.meta}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#4A2C20] font-medium">
                      {feat.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#29211D]/80 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8D6C4]/60 flex items-center justify-between text-xs text-[#A66B45] font-medium">
                    <span>Crafted with intention</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
