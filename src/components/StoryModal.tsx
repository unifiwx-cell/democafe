import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, HeartHandshake, Flame, Wheat } from 'lucide-react';
import { CAFE_IMAGES } from '../data/cafeData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
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
            className="relative w-full max-w-2xl bg-[#FFF9F2] rounded-2xl shadow-2xl border border-[#E8D6C4] overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#F5EADF] to-[#FFF9F2] border-b border-[#E8D6C4] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A66B45] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Story & Heritage
                </span>
                <h3 className="font-serif text-2xl text-[#4A2C20] font-medium mt-0.5">
                  The Maison Velouté Journey
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#E8D6C4]/60 transition-colors"
                aria-label="Close Story"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#29211D]/80 leading-relaxed">
              <div className="rounded-xl overflow-hidden border border-[#E8D6C4] bg-[#F5EADF] h-48">
                <img
                  src={CAFE_IMAGES.cafeInteriorCozy}
                  alt="Maison Velouté space"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-serif text-xl text-[#4A2C20] font-medium mb-2">
                  Founded on a Simple Conviction
                </h4>
                <p>
                  In the winter of 2021, we set out to build an antidote to rushing. We wanted a sanctuary where coffee is not treated like a generic caffeine delivery mechanism, but as an agricultural wonder—rich with floral notes, mountain terroir, and human care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F5EADF]/60 border border-[#E8D6C4]">
                  <Flame className="w-5 h-5 text-[#A66B45] mb-1.5" />
                  <h5 className="font-serif text-sm font-semibold text-[#4A2C20]">Micro-Roasting</h5>
                  <p className="text-xs text-[#29211D]/70 mt-1">Small 5kg drum roaster calibrated to honor each bean's origin sweetness.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5EADF]/60 border border-[#E8D6C4]">
                  <Wheat className="w-5 h-5 text-[#A66B45] mb-1.5" />
                  <h5 className="font-serif text-sm font-semibold text-[#4A2C20]">36-Hour Dough</h5>
                  <p className="text-xs text-[#29211D]/70 mt-1">Slow cold fermentation with natural levain for delicate, digestible pastries.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5EADF]/60 border border-[#E8D6C4]">
                  <HeartHandshake className="w-5 h-5 text-[#A66B45] mb-1.5" />
                  <h5 className="font-serif text-sm font-semibold text-[#4A2C20]">Direct Trade</h5>
                  <p className="text-xs text-[#29211D]/70 mt-1">Direct relationships paying 45% above Fair Trade minimums to growers.</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E8D6C4]">
                <p className="font-serif italic text-base text-[#4A2C20]">
                  “When you walk through our arches, leave the haste of the city behind. Your table, your cup, and your time are honored here.”
                </p>
                <p className="text-xs text-[#A66B45] font-medium mt-2">
                  — The Barista & Kitchen Collective at Maison Velouté
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#F5EADF]/50 border-t border-[#E8D6C4] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#4A2C20] text-[#FFF9F2] text-xs font-medium rounded-md hover:bg-[#382016] transition-colors"
              >
                Close Story
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
