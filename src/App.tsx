import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedMenu } from './components/FeaturedMenu';
import { SignatureExperience } from './components/SignatureExperience';
import { Gallery } from './components/Gallery';
import { VisitCafe } from './components/VisitCafe';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { CoffeeProfileModal } from './components/CoffeeProfileModal';
import { FullMenuModal } from './components/FullMenuModal';
import { LightboxModal } from './components/LightboxModal';
import { StoryModal } from './components/StoryModal';
import { LegalModal } from './components/LegalModal';
import { Toast, ToastMessage } from './components/Toast';

import { MENU_ITEMS, GALLERY_ITEMS, TESTIMONIALS, COFFEE_ORIGINS } from './data/cafeData';
import { MenuItem, CartItem, GalleryPhoto } from './types/cafe';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mv_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCoffeeProfileOpen, setIsCoffeeProfileOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('mv_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' = 'success') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    addToast(
      `Added to order: ${item.name}`,
      `₹${item.price} · View your bag anytime via Order Online`
    );
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const nextQty = ci.quantity + delta;
            return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#29211D] flex flex-col font-sans selection:bg-[#E8D6C4] selection:text-[#4A2C20]">
      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Homepage */}
        <Hero
          onExploreMenu={scrollToMenu}
          onDiscoverStory={scrollToAbout}
        />

        {/* 2. About Section — Our Philosophy */}
        <About onOpenStoryModal={() => setIsStoryModalOpen(true)} />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. Featured Menu Section */}
        <FeaturedMenu
          items={MENU_ITEMS}
          onAddToCart={handleAddToCart}
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
        />

        {/* 5. Signature Coffee Experience */}
        <SignatureExperience
          onDiscoverCoffee={() => setIsCoffeeProfileOpen(true)}
        />

        {/* 6. Gallery Section */}
        <Gallery
          photos={GALLERY_ITEMS}
          onSelectPhoto={(photo) => setSelectedGalleryPhoto(photo)}
        />

        {/* 7. Visit Our Café Section */}
        <VisitCafe
          onOpenReservation={() => setIsReservationOpen(true)}
          onCopyAddress={() => addToast('Address copied to clipboard', '14 Rue du Palais, Heritage Quarter', 'info')}
        />

        {/* 8. Customer Testimonials */}
        <Testimonials testimonials={TESTIMONIALS} />

        {/* 9. Newsletter Section */}
        <Newsletter
          onSubscribeSuccess={(email) =>
            addToast('Welcome to Maison Velouté!', `A 15% discount code has been sent to ${email}`)
          }
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onReservationConfirmed={({ name, date, time, guests }) =>
          addToast(
            `Table Confirmed for ${name}`,
            `${guests} guests on ${date} at ${time}`
          )
        }
      />

      <CoffeeProfileModal
        isOpen={isCoffeeProfileOpen}
        onClose={() => setIsCoffeeProfileOpen(false)}
        origins={COFFEE_ORIGINS}
      />

      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        items={MENU_ITEMS}
        onAddToCart={handleAddToCart}
      />

      <LightboxModal
        photo={selectedGalleryPhoto}
        onClose={() => setSelectedGalleryPhoto(null)}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Global Toast Stack */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
