import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GalleryPhoto } from '../types/cafe';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#29211D]/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl w-full bg-[#FFF9F2] rounded-2xl overflow-hidden shadow-2xl z-10 border border-[#E8D6C4]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#29211D]/60 hover:bg-[#29211D] text-[#FFF9F2] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] bg-[#29211D] flex items-center justify-center overflow-hidden">
              <img
                src={photo.src}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-5 bg-[#FFF9F2] border-t border-[#E8D6C4] flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg font-medium text-[#4A2C20]">
                  {photo.title}
                </h4>
                <p className="text-xs text-[#29211D]/75 mt-0.5">
                  {photo.subtitle}
                </p>
              </div>
              <span className="text-xs font-serif italic text-[#A66B45]">
                Maison Velouté Sanctuary
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
