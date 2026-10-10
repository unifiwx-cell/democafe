import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Calendar, Navigation, Copy, Check, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface VisitCafeProps {
  onOpenReservation: () => void;
  onCopyAddress: () => void;
}

export const VisitCafe: React.FC<VisitCafeProps> = ({
  onOpenReservation,
  onCopyAddress,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    onCopyAddress();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#FFF9F2] via-[#F5EADF]/50 to-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Info, Timings, Reservation CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3 text-[#A66B45]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Join Us in Person</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal tracking-tight text-balance"
            >
              Your Table Is Waiting.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-[#29211D]/80 leading-relaxed"
            >
              Whether it’s your morning coffee, a slow afternoon, or a catch-up with friends, we’d love to welcome you.
            </motion.p>

            {/* Address & Hours Cards */}
            <div className="w-full mt-8 space-y-4">
              {/* Address card */}
              <div className="bg-[#FFF9F2] p-5 rounded-xl border border-[#E8D6C4] shadow-2xs flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F5EADF] text-[#4A2C20] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#A66B45]" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-[#A66B45] tracking-wider">Address</h3>
                    <p className="font-serif text-base text-[#4A2C20] mt-0.5">{CAFE_INFO.address}</p>
                    <p className="text-xs text-[#29211D]/60 mt-1">Heritage Quarter · Near Central Botanical Garden</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopy}
                    className="p-2 text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#F5EADF] rounded-md transition-colors"
                    title="Copy Address"
                    aria-label="Copy Address to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#4A2C20] bg-[#F5EADF] hover:bg-[#E8D6C4] rounded-md transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#A66B45]" />
                    <span>Map</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-[#FFF9F2] p-5 rounded-xl border border-[#E8D6C4] shadow-2xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F5EADF] text-[#4A2C20] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#A66B45]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase font-semibold text-[#A66B45] tracking-wider">Opening Hours</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5 text-sm text-[#4A2C20]">
                    <p className="font-medium">{CAFE_INFO.hours.weekdays}</p>
                    <p className="font-medium">{CAFE_INFO.hours.weekends}</p>
                  </div>
                  <p className="text-xs text-[#29211D]/60 mt-1">Kitchen closes 45 mins prior to shutting</p>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="bg-[#FFF9F2] p-5 rounded-xl border border-[#E8D6C4] shadow-2xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#F5EADF] text-[#4A2C20] shrink-0">
                    <Phone className="w-5 h-5 text-[#A66B45]" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-[#A66B45] tracking-wider">Telephone</h3>
                    <a href={`tel:${CAFE_INFO.phone}`} className="font-serif text-base text-[#4A2C20] hover:text-[#A66B45] transition-colors">
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FFF9F2] bg-[#4A2C20] hover:bg-[#382016] rounded-md transition-all shadow-xs shrink-0 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-[#E8D6C4]" />
                  <span>Reserve a Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Three attractive café photographs collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-2 rounded-2xl overflow-hidden shadow-lg border border-[#E8D6C4] h-64 sm:h-72 bg-[#F5EADF] relative group"
              >
                <img
                  src="/src/assets/images/cafe_interior_cozy_1791626484992.jpg"
                  alt="Sunlit corner booth with oak table and linen cushions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-4 text-xs font-serif text-[#FFF9F2] font-medium">The Arched Sanctuary Lounge</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-xl overflow-hidden shadow-md border border-[#E8D6C4] h-48 bg-[#F5EADF] relative group"
              >
                <img
                  src="/src/assets/images/barista_craft_latte_1791626513600.jpg"
                  alt="Barista brewing single origin espresso"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-serif text-[#FFF9F2] font-medium">The Slow Bar</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="rounded-xl overflow-hidden shadow-md border border-[#E8D6C4] h-48 bg-[#F5EADF] relative group"
              >
                <img
                  src="/src/assets/images/bakery_pastry_croissant_1791626497832.jpg"
                  alt="Fresh bakery showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-serif text-[#FFF9F2] font-medium">Morning Viennoiserie</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
