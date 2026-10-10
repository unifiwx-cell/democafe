import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && type && (
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
            <div className="p-6 bg-gradient-to-r from-[#F5EADF] to-[#FFF9F2] border-b border-[#E8D6C4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A66B45]" />
                <h3 className="font-serif text-2xl text-[#4A2C20] font-medium">
                  {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#E8D6C4]/60 transition-colors"
                aria-label="Close legal modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#29211D]/80 leading-relaxed">
              {type === 'privacy' ? (
                <>
                  <p>
                    At Maison Velouté, we respect your peace and your personal data. This privacy document outlines how we treat information when you place orders, make table reservations, or subscribe to our newsletter.
                  </p>
                  <h4 className="font-serif text-base text-[#4A2C20] font-medium pt-2">
                    1. Reservation & Order Information
                  </h4>
                  <p>
                    We collect your name, contact phone, and any specified dietary preferences solely to fulfill your dine-in table or online take-away ticket. We never sell or distribute your contact details to third-party telemarketers.
                  </p>
                  <h4 className="font-serif text-base text-[#4A2C20] font-medium pt-2">
                    2. Seasonal Dispatches & Newsletter
                  </h4>
                  <p>
                    When you subscribe to our newsletter, your email is stored securely to send you notices regarding seasonal bean releases, bakery specials, and private tasting workshops. You may unsubscribe at any time with a single click.
                  </p>
                  <h4 className="font-serif text-base text-[#4A2C20] font-medium pt-2">
                    3. Contact & Inquiries
                  </h4>
                  <p>
                    For inquiries about data management or our roastery practices, reach us at bonjour@maisonveloute.com or at our physical address at 14 Rue du Palais, Heritage Quarter, Bengaluru.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to Maison Velouté. By visiting our roastery café, ordering online, or reserving tables, you agree to the following terms designed to ensure a peaceful atmosphere for all patrons.
                  </p>
                  <h4 className="font-serif text-base text-[#4A2C20] font-medium pt-2">
                    1. Table Reservations & Punctuality
                  </h4>
                  <p>
                    We hold reserved tables for 15 minutes beyond your scheduled seating time. If you anticipate delays, kindly call our front desk so we can adjust our floor seating without releasing your spot.
                  </p>
                  <h4 className="font-serif text-base text-[#4A2C20] font-medium pt-2">
                    2. Kitchen Hours & Fresh Production
                  </h4>
                  <p>
                    Our viennoiserie and pastries are baked fresh at dawn every day in limited quantities. While we strive to meet demand, select items may sell out before close of business. Our kitchen closes 45 minutes prior to cafe shutdown.
                  </p>
                  <h4 className="font-serif text-base text-[#4A2C20] font-medium pt-2">
                    3. Allergen Awareness
                  </h4>
                  <p>
                    While we maintain strict sanitary standards, our bakery actively uses tree nuts, dairy butter, and gluten flours. Please notify your barista of severe allergies before placing an order.
                  </p>
                </>
              )}
            </div>

            <div className="p-4 bg-[#F5EADF]/50 border-t border-[#E8D6C4] flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#4A2C20] text-[#FFF9F2] text-xs font-medium rounded-md hover:bg-[#382016] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
