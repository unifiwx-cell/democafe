import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Craft', href: '#signature' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF9F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8D6C4]/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className={`text-2xl sm:text-[26px] font-serif font-semibold tracking-tight transition-colors whitespace-nowrap shrink-0 ${
              isScrolled
                ? 'text-[#4A2C20] hover:text-[#A66B45]'
                : 'text-[#FFF9F2] hover:text-[#E8D6C4]'
            }`}
          >
            Maison Velouté
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-250 ${
                  isScrolled
                    ? 'text-[#4A2C20]/80 hover:text-[#4A2C20] after:bg-[#A66B45]'
                    : 'text-[#FFF9F2]/90 hover:text-[#FFF9F2] after:bg-[#E8D6C4]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className={`hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-wide uppercase rounded-md transition-all whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'text-[#4A2C20] border border-[#A66B45]/40 hover:border-[#4A2C20] hover:bg-[#F5EADF]/60'
                  : 'text-[#FFF9F2] border border-[#FFF9F2]/40 hover:border-[#FFF9F2] hover:bg-[#FFF9F2]/10'
              }`}
            >
              <Calendar className={`w-3.5 h-3.5 ${isScrolled ? 'text-[#A66B45]' : 'text-[#E8D6C4]'}`} />
              Table
            </button>

            <button
              onClick={onOpenCart}
              className={`relative inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium active:scale-[0.98] rounded-md transition-all shadow-xs whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'bg-[#4A2C20] text-[#FFF9F2] hover:bg-[#382016]'
                  : 'bg-[#FFF9F2] text-[#4A2C20] hover:bg-[#F5EADF]'
              }`}
              aria-label={`Open Order Cart with ${cartCount} items`}
            >
              <ShoppingBag className={`w-4 h-4 ${isScrolled ? 'text-[#E8D6C4]' : 'text-[#4A2C20]'}`} />
              <span>Order Online</span>
              {cartCount > 0 && (
                <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full min-w-5 text-center leading-none ${
                  isScrolled ? 'bg-[#A66B45] text-[#FFF9F2]' : 'bg-[#4A2C20] text-[#FFF9F2]'
                }`}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-[#4A2C20] hover:text-[#A66B45]' : 'text-[#FFF9F2] hover:text-[#E8D6C4]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#FFF9F2] border-b border-[#E8D6C4] shadow-lg p-6 md:hidden flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-[#4A2C20] hover:text-[#A66B45] py-1 border-b border-[#E8D6C4]/40"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#4A2C20] border border-[#A66B45]/50 rounded-md bg-[#F5EADF]/40"
              >
                <Calendar className="w-4 h-4 text-[#A66B45]" />
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
