import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight, Utensils, Package } from 'lucide-react';
import { CartItem } from '../types/cafe';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [customerName, setCustomerName] = useState('');
  const [tableOrPhone, setTableOrPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% cafe GST
  const packagingFee = orderType === 'takeaway' ? 20 : 0;
  const total = subtotal + gst + packagingFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName) return;
    const generatedId = `MV-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);
  };

  const resetOrder = () => {
    setOrderPlaced(false);
    onClearCart();
    setCustomerName('');
    setTableOrPhone('');
    setSpecialNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#29211D]/60 backdrop-blur-xs transition-opacity"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="relative w-full max-w-md bg-[#FFF9F2] shadow-2xl flex flex-col h-full z-10 border-l border-[#E8D6C4]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E8D6C4] flex items-center justify-between bg-[#F5EADF]/50">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#4A2C20]" />
                <h2 className="font-serif text-xl font-medium text-[#4A2C20]">Your Order</h2>
                {cart.length > 0 && !orderPlaced && (
                  <span className="text-xs bg-[#4A2C20] text-[#FFF9F2] px-2 py-0.5 rounded-full font-medium">
                    {cart.reduce((sum, i) => sum + i.quantity, 0)} items
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#E8D6C4]/60 transition-colors"
                aria-label="Close Order Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            {orderPlaced ? (
              <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-700" />
                </motion.div>

                <h3 className="font-serif text-2xl text-[#4A2C20] font-medium">Order Confirmed!</h3>
                <p className="text-sm text-[#A66B45] font-mono font-medium mt-1">Order #{orderId}</p>

                <p className="text-sm text-[#29211D]/80 mt-3 max-w-xs leading-relaxed">
                  Thank you, <strong>{customerName}</strong>! Our baristas and bakers have received your ticket.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-[#F5EADF]/80 border border-[#E8D6C4] w-full text-left text-xs space-y-1.5">
                  <div className="flex justify-between text-[#4A2C20]">
                    <span>Mode:</span>
                    <span className="font-medium capitalize">{orderType}</span>
                  </div>
                  {tableOrPhone && (
                    <div className="flex justify-between text-[#4A2C20]">
                      <span>{orderType === 'dine-in' ? 'Table / Note:' : 'Contact:'}</span>
                      <span className="font-medium">{tableOrPhone}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#4A2C20] pt-2 border-t border-[#E8D6C4]">
                    <span>Estimated Prep:</span>
                    <span className="font-medium text-emerald-800">12 – 15 minutes</span>
                  </div>
                  <div className="flex justify-between text-[#4A2C20] font-semibold">
                    <span>Total Amount:</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={resetOrder}
                  className="mt-8 w-full py-3 bg-[#4A2C20] hover:bg-[#382016] text-[#FFF9F2] text-sm font-medium rounded-md shadow-xs transition-colors"
                >
                  Done
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center text-[#29211D]/60">
                <div className="w-16 h-16 rounded-full bg-[#F5EADF] flex items-center justify-center mb-4 text-[#A66B45]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#4A2C20]">Your bag is quiet</h3>
                <p className="text-xs text-[#29211D]/70 max-w-xs mt-1.5 leading-relaxed">
                  Explore our roasted coffee, morning croissants, and artisan tartines to craft your moment.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2.5 bg-[#4A2C20] text-[#FFF9F2] text-xs font-medium rounded-md hover:bg-[#382016] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckout} className="flex-1 flex flex-col overflow-hidden">
                {/* Scrollable Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {/* Dine-In / Takeaway Selector */}
                  <div className="p-1 bg-[#F5EADF] rounded-lg flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
                        orderType === 'dine-in'
                          ? 'bg-[#FFF9F2] text-[#4A2C20] shadow-xs'
                          : 'text-[#4A2C20]/70 hover:text-[#4A2C20]'
                      }`}
                    >
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Dine-In</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
                        orderType === 'takeaway'
                          ? 'bg-[#FFF9F2] text-[#4A2C20] shadow-xs'
                          : 'text-[#4A2C20]/70 hover:text-[#4A2C20]'
                      }`}
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Takeaway Box</span>
                    </button>
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cart.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="bg-[#FFF9F2] p-3.5 rounded-xl border border-[#E8D6C4] flex items-center gap-3 shadow-2xs"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-lg object-cover bg-[#F5EADF] shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-medium text-[#4A2C20] truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#29211D]/70 tabular-nums">
                            ₹{item.price} × {quantity} = <strong className="text-[#4A2C20]">₹{item.price * quantity}</strong>
                          </p>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1 bg-[#F5EADF]/80 p-1 rounded-md border border-[#E8D6C4]/60 shrink-0">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 text-[#4A2C20] hover:bg-[#FFF9F2] rounded transition-colors"
                            aria-label={`Decrease ${item.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-medium text-[#4A2C20] tabular-nums">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 text-[#4A2C20] hover:bg-[#FFF9F2] rounded transition-colors"
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-[#4A2C20]/40 hover:text-rose-600 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Customer Details Form */}
                  <div className="pt-2 border-t border-[#E8D6C4]/80 space-y-2.5">
                    <label className="block text-xs font-medium text-[#4A2C20]">
                      Guest Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name for the order"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                    />

                    <label className="block text-xs font-medium text-[#4A2C20] pt-1">
                      {orderType === 'dine-in' ? 'Table Number (if seated)' : 'Contact Number'}
                    </label>
                    <input
                      type="text"
                      placeholder={orderType === 'dine-in' ? 'e.g. Table 04 or Lounge' : 'e.g. +91 98450 00000'}
                      value={tableOrPhone}
                      onChange={(e) => setTableOrPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                    />

                    <label className="block text-xs font-medium text-[#4A2C20] pt-1">
                      Dietary / Preparation Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra hot, oat milk, cinnamon dusted"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                    />
                  </div>
                </div>

                {/* Footer Subtotal & Checkout */}
                <div className="p-6 border-t border-[#E8D6C4] bg-[#F5EADF]/40 space-y-3">
                  <div className="space-y-1.5 text-xs text-[#29211D]/80">
                    <div className="flex justify-between">
                      <span>Item Subtotal</span>
                      <span className="tabular-nums">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Café GST (5%)</span>
                      <span className="tabular-nums">₹{gst}</span>
                    </div>
                    {orderType === 'takeaway' && (
                      <div className="flex justify-between">
                        <span>Eco-Packaging</span>
                        <span className="tabular-nums">₹{packagingFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-serif text-base font-medium text-[#4A2C20] pt-2 border-t border-[#E8D6C4]">
                      <span>Grand Total</span>
                      <span className="tabular-nums font-sans font-semibold">₹{total}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!customerName}
                    className="w-full py-3 bg-[#4A2C20] hover:bg-[#382016] disabled:opacity-60 text-[#FFF9F2] text-sm font-medium rounded-md shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>Place Order · ₹{total}</span>
                    <ArrowRight className="w-4 h-4 text-[#E8D6C4]" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
