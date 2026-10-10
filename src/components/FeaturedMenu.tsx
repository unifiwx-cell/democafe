import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Sparkles, BookOpen } from 'lucide-react';
import { MenuItem } from '../types/cafe';

interface FeaturedMenuProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  onOpenFullMenu: () => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  items,
  onAddToCart,
  onOpenFullMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'pastries' | 'desserts' | 'artisan'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'pastries', label: 'Viennoiserie' },
    { id: 'desserts', label: 'Patisserie' },
    { id: 'artisan', label: 'Artisan Kitchen' },
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1400);
  };

  return (
    <section id="menu" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3 text-[#A66B45]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Our Daily Selection</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal tracking-tight text-balance"
            >
              Made to Be Savored
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 text-base text-[#29211D]/75 leading-relaxed"
            >
              Discover your next favorite sip and something delicious to go with it. Baked fresh daily, extracted with surgical precision.
            </motion.p>
          </div>

          {/* Full menu button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <button
              onClick={onOpenFullMenu}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#4A2C20] border border-[#A66B45]/50 hover:border-[#4A2C20] hover:bg-[#F5EADF]/60 rounded-md transition-all whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-[#A66B45]" />
              <span>View Full Menu</span>
            </button>
          </motion.div>
        </div>

        {/* Category Filter Tabs (Interactive segmented buttons allowed by Constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#4A2C20] text-[#FFF9F2] shadow-sm'
                    : 'bg-[#F5EADF]/70 text-[#4A2C20]/80 hover:bg-[#E8D6C4]/60 hover:text-[#4A2C20]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isAdded = !!addedItemIds[item.id];
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#FFF9F2] rounded-xl overflow-hidden border border-[#E8D6C4] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  {/* Item Image */}
                  <div className="relative h-48 overflow-hidden bg-[#F5EADF]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/35 via-transparent to-transparent pointer-events-none" />

                    {/* Unboxed category kicker */}
                    <div className="absolute top-3 left-3 bg-[#FFF9F2]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#4A2C20] border border-[#E8D6C4]">
                      {item.categoryLabel}
                    </div>

                    {item.isPopular && (
                      <div className="absolute top-3 right-3 bg-[#A66B45] text-[#FFF9F2] px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-medium text-[#4A2C20] leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-sans font-semibold text-base text-[#4A2C20] tabular-nums shrink-0">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-[#29211D]/75 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {item.notes && (
                        <p className="mt-2 text-[11px] text-[#A66B45] italic line-clamp-1">
                          {item.notes}
                        </p>
                      )}
                    </div>

                    {/* Add to Order Button */}
                    <div className="mt-5 pt-3.5 border-t border-[#E8D6C4]/60 flex items-center justify-between">
                      <span className="text-[11px] text-[#4A2C20]/60">Freshly made</span>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 ${
                          isAdded
                            ? 'bg-[#3A5A40] text-[#FFF9F2]'
                            : 'bg-[#F5EADF] text-[#4A2C20] hover:bg-[#4A2C20] hover:text-[#FFF9F2]'
                        }`}
                        aria-label={`Add ${item.name} to order`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
