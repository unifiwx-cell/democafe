import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Plus, Check } from 'lucide-react';
import { MenuItem } from '../types/cafe';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  items,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'coffee' | 'pastries' | 'desserts' | 'artisan'>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const categories = [
    { id: 'all', title: 'Complete Menu' },
    { id: 'coffee', title: 'Coffee & Slow Bar' },
    { id: 'pastries', title: 'Viennoiserie' },
    { id: 'desserts', title: 'Patisserie' },
    { id: 'artisan', title: 'Kitchen & Tartines' },
  ];

  const displayed = activeTab === 'all'
    ? items
    : items.filter((i) => i.category === activeTab);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#29211D]/65 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#FFF9F2] rounded-2xl shadow-2xl border border-[#E8D6C4] overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#F5EADF] to-[#FFF9F2] border-b border-[#E8D6C4] flex items-center justify-between shrink-0">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A66B45] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Maison Velouté Menu
                </span>
                <h3 className="font-serif text-2xl text-[#4A2C20] font-medium mt-0.5">
                  Artisanal Food & Beverage Archive
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#E8D6C4]/60 transition-colors"
                aria-label="Close Full Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-6 pt-4 pb-2 border-b border-[#E8D6C4]/70 flex items-center gap-2 overflow-x-auto shrink-0 bg-[#FFF9F2]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    activeTab === cat.id
                      ? 'bg-[#4A2C20] text-[#FFF9F2]'
                      : 'text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#F5EADF]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Item List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {displayed.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#FFF9F2] hover:bg-[#F5EADF]/40 border border-[#E8D6C4] transition-colors flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-[#F5EADF] shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base font-medium text-[#4A2C20] truncate">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-[#A66B45] font-medium hidden sm:inline">
                          · {item.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-[#29211D]/75 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                      {item.notes && (
                        <p className="text-[11px] text-[#A66B45] italic mt-0.5 hidden xs:block">
                          {item.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-semibold text-sm text-[#4A2C20] tabular-nums">
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`p-2 rounded-md transition-all ${
                        addedIds[item.id]
                          ? 'bg-emerald-700 text-[#FFF9F2]'
                          : 'bg-[#F5EADF] text-[#4A2C20] hover:bg-[#4A2C20] hover:text-[#FFF9F2]'
                      }`}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {addedIds[item.id] ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#F5EADF]/50 border-t border-[#E8D6C4] flex items-center justify-between text-xs text-[#4A2C20]/75 shrink-0">
              <span>All milk beverages available with oat or almond milk upon request</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#4A2C20] text-[#FFF9F2] rounded-md hover:bg-[#382016] transition-colors"
              >
                Close Menu
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
