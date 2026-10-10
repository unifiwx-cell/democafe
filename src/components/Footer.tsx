import React from 'react';
import { Coffee, Instagram, Music, MapPin, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A2C20] text-[#FFF9F2] pt-16 pb-12 px-6 sm:px-8 border-t border-[#A66B45]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#A66B45]/20">
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-serif font-semibold text-[#FFF9F2] tracking-tight hover:text-[#E8D6C4] transition-colors"
            >
              Maison Velouté
            </a>
            <p className="mt-1 text-xs uppercase tracking-widest text-[#E8D6C4]/70 font-medium">
              {CAFE_INFO.tagline}
            </p>
            <p className="mt-4 text-sm text-[#E8D6C4]/80 leading-relaxed max-w-sm">
              An unhurried sanctuary dedicated to single-origin roasts, laminated French butter pastries, and genuine human warmth.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#FFF9F2]/10 hover:bg-[#FFF9F2]/20 text-[#FFF9F2] transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#FFF9F2]/10 hover:bg-[#FFF9F2]/20 text-[#FFF9F2] transition-colors"
                aria-label="Café Spotify Lounge Playlist"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#FFF9F2]/10 hover:bg-[#FFF9F2]/20 text-[#FFF9F2] transition-colors"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#E8D6C4] font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FFF9F2]/80">
              <li>
                <a href="#about" className="hover:text-[#FFF9F2] transition-colors">
                  Our Philosophy & Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFF9F2] transition-colors">
                  Daily Roasts & Bakery
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#FFF9F2] transition-colors">
                  Signature Slow Bar
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFF9F2] transition-colors">
                  Atmosphere & Spaces
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FFF9F2] transition-colors">
                  Directions & Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#E8D6C4] font-semibold mb-4">
              Hours of Service
            </h3>
            <div className="space-y-2 text-sm text-[#FFF9F2]/80">
              <div>
                <p className="text-xs text-[#E8D6C4]/60">Monday — Friday</p>
                <p className="font-serif">07:30 – 22:00</p>
              </div>
              <div className="pt-1">
                <p className="text-xs text-[#E8D6C4]/60">Saturday — Sunday</p>
                <p className="font-serif">08:00 – 23:00</p>
              </div>
              <p className="text-xs text-[#E8D6C4]/60 pt-2">
                Last slow bar pour 30 mins before closing
              </p>
            </div>
          </div>

          {/* Location & Contact (Span 2) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#E8D6C4] font-semibold mb-4">
                Location
              </h3>
              <p className="text-sm text-[#FFF9F2]/80 leading-relaxed font-serif">
                {CAFE_INFO.address}
              </p>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="inline-block mt-3 text-sm text-[#E8D6C4] hover:underline"
              >
                {CAFE_INFO.phone}
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#E8D6C4]/80 hover:text-[#FFF9F2] transition-colors group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D6C4]/60">
          <p>© {new Date().getFullYear()} Maison Velouté. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
