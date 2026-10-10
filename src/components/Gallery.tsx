import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { GalleryPhoto } from '../types/cafe';

interface GalleryProps {
  photos: GalleryPhoto[];
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ photos, onSelectPhoto }) => {
  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#FFF9F2] relative">
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
            <span className="text-xs uppercase tracking-widest font-semibold">Atmosphere & Moments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal tracking-tight text-balance"
          >
            A Glimpse Into Our World
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-base text-[#29211D]/75 leading-relaxed"
          >
            Snapshots from slow mornings, fragrant bakeries, and heartfelt conversations.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Item 1 (Large left vertical / span 7) */}
          {photos[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => onSelectPhoto(photos[0])}
              className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#F5EADF] cursor-pointer h-[360px] sm:h-[440px] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={photos[0].src}
                alt={photos[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFF9F2] font-medium">{photos[0].title}</h3>
                  <p className="text-xs sm:text-sm text-[#E8D6C4]/90 mt-1">{photos[0].subtitle}</p>
                </div>
                <div className="p-2 bg-[#FFF9F2]/20 backdrop-blur-md rounded-full text-[#FFF9F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Item 2 (Span 5) */}
          {photos[1] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => onSelectPhoto(photos[1])}
              className="md:col-span-5 group relative rounded-2xl overflow-hidden bg-[#F5EADF] cursor-pointer h-[360px] sm:h-[440px] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={photos[1].src}
                alt={photos[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFF9F2] font-medium">{photos[1].title}</h3>
                  <p className="text-xs sm:text-sm text-[#E8D6C4]/90 mt-1">{photos[1].subtitle}</p>
                </div>
                <div className="p-2 bg-[#FFF9F2]/20 backdrop-blur-md rounded-full text-[#FFF9F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Item 3 (Span 4) */}
          {photos[2] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => onSelectPhoto(photos[2])}
              className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-[#F5EADF] cursor-pointer h-[300px] sm:h-[340px] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={photos[2].src}
                alt={photos[2].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#FFF9F2] font-medium">{photos[2].title}</h3>
                  <p className="text-xs text-[#E8D6C4]/90 mt-1">{photos[2].subtitle}</p>
                </div>
                <div className="p-2 bg-[#FFF9F2]/20 backdrop-blur-md rounded-full text-[#FFF9F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Item 4 (Span 4) */}
          {photos[3] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              onClick={() => onSelectPhoto(photos[3])}
              className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-[#F5EADF] cursor-pointer h-[300px] sm:h-[340px] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={photos[3].src}
                alt={photos[3].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#FFF9F2] font-medium">{photos[3].title}</h3>
                  <p className="text-xs text-[#E8D6C4]/90 mt-1">{photos[3].subtitle}</p>
                </div>
                <div className="p-2 bg-[#FFF9F2]/20 backdrop-blur-md rounded-full text-[#FFF9F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Item 5 (Span 4) */}
          {photos[4] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => onSelectPhoto(photos[4])}
              className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-[#F5EADF] cursor-pointer h-[300px] sm:h-[340px] shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={photos[4].src}
                alt={photos[4].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29211D]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#FFF9F2] font-medium">{photos[4].title}</h3>
                  <p className="text-xs text-[#E8D6C4]/90 mt-1">{photos[4].subtitle}</p>
                </div>
                <div className="p-2 bg-[#FFF9F2]/20 backdrop-blur-md rounded-full text-[#FFF9F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
