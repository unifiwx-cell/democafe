import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Droplets, Mountain, Compass, Coffee } from 'lucide-react';
import { CoffeeOrigin } from '../types/cafe';

interface CoffeeProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  origins: CoffeeOrigin[];
}

export const CoffeeProfileModal: React.FC<CoffeeProfileModalProps> = ({
  isOpen,
  onClose,
  origins,
}) => {
  const [selectedOrigin, setSelectedOrigin] = useState<CoffeeOrigin>(origins[0] || {} as CoffeeOrigin);

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
            className="relative w-full max-w-2xl bg-[#FFF9F2] rounded-2xl shadow-2xl border border-[#E8D6C4] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#F5EADF] to-[#FFF9F2] border-b border-[#E8D6C4] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A66B45] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Roaster's Archive
                </span>
                <h3 className="font-serif text-2xl text-[#4A2C20] font-medium mt-0.5">
                  Single-Origin Sourcing & Profiles
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#E8D6C4]/60 transition-colors"
                aria-label="Close Coffee Explorer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Tabs for origins */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#E8D6C4]/80">
                {origins.map((origin) => (
                  <button
                    key={origin.id}
                    onClick={() => setSelectedOrigin(origin)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      selectedOrigin.id === origin.id
                        ? 'bg-[#4A2C20] text-[#FFF9F2] shadow-xs'
                        : 'bg-[#F5EADF]/60 text-[#4A2C20] hover:bg-[#E8D6C4]'
                    }`}
                  >
                    {origin.name}
                  </button>
                ))}
              </div>

              {/* Selected Origin Card */}
              {selectedOrigin && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-2xl text-[#4A2C20] font-medium">
                        {selectedOrigin.name}
                      </h4>
                      <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#F5EADF] text-[#4A2C20] border border-[#E8D6C4]">
                        {selectedOrigin.roastLevel} Roast
                      </span>
                    </div>
                    <p className="text-xs text-[#A66B45] font-medium mt-1 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      {selectedOrigin.region}
                    </p>
                    <p className="mt-3 text-sm text-[#29211D]/80 leading-relaxed">
                      {selectedOrigin.description}
                    </p>
                  </div>

                  {/* Micro Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                    <div className="p-3 rounded-xl bg-[#F5EADF]/60 border border-[#E8D6C4]">
                      <div className="flex items-center gap-1.5 text-xs text-[#A66B45] font-semibold">
                        <Mountain className="w-3.5 h-3.5" />
                        <span>Elevation</span>
                      </div>
                      <p className="text-xs font-medium text-[#4A2C20] mt-1">{selectedOrigin.elevation}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F5EADF]/60 border border-[#E8D6C4]">
                      <div className="flex items-center gap-1.5 text-xs text-[#A66B45] font-semibold">
                        <Droplets className="w-3.5 h-3.5" />
                        <span>Processing</span>
                      </div>
                      <p className="text-xs font-medium text-[#4A2C20] mt-1">{selectedOrigin.process}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F5EADF]/60 border border-[#E8D6C4] col-span-2 sm:col-span-1">
                      <div className="flex items-center gap-1.5 text-xs text-[#A66B45] font-semibold">
                        <Coffee className="w-3.5 h-3.5" />
                        <span>Extraction</span>
                      </div>
                      <p className="text-xs font-medium text-[#4A2C20] mt-1">V60 & Aeropress</p>
                    </div>
                  </div>

                  {/* Tasting notes */}
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#A66B45] mb-2.5">
                      Tasting Notes Palette
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedOrigin.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1 bg-[#FFF9F2] text-xs font-medium text-[#4A2C20] rounded border border-[#E8D6C4] shadow-2xs"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#F5EADF]/50 border-t border-[#E8D6C4] flex items-center justify-between">
              <span className="text-xs text-[#4A2C20]/75">Available daily at our slow bar</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#4A2C20] text-[#FFF9F2] text-xs font-medium rounded-md hover:bg-[#382016] transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
