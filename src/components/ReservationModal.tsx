import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReservationConfirmed: (details: { name: string; date: string; time: string; guests: number }) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onReservationConfirmed,
}) => {
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState('Sanctuary Arched Lounge');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const timeSlots = [
    '08:30 AM', '10:00 AM', '11:30 AM',
    '02:00 PM', '04:00 PM', '05:30 PM',
    '07:00 PM', '08:30 PM'
  ];

  const seatingAreas = [
    { id: 'Sanctuary Arched Lounge', desc: 'Soft acoustics, lime-wash arches & oak tables' },
    { id: 'Courtyard Patio', desc: 'Open-air morning sunlight & olive trees' },
    { id: 'Espresso Slow Bar', desc: 'High-stool seating alongside master barista' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    const code = `VEL-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setIsSuccess(true);
    onReservationConfirmed({ name: guestName, date, time: timeSlot, guests });
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#29211D]/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FFF9F2] rounded-2xl shadow-2xl border border-[#E8D6C4] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#F5EADF] to-[#FFF9F2] border-b border-[#E8D6C4] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A66B45] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Table Reservation
                </span>
                <h3 className="font-serif text-2xl text-[#4A2C20] font-medium mt-0.5">
                  Reserve Your Table
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-md text-[#4A2C20]/70 hover:text-[#4A2C20] hover:bg-[#E8D6C4]/60 transition-colors"
                aria-label="Close reservation modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            {isSuccess ? (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                </div>

                <h4 className="font-serif text-2xl text-[#4A2C20] font-medium">Table Confirmed</h4>
                <p className="text-xs font-mono text-[#A66B45] font-semibold mt-1">Ref: {reservationCode}</p>

                <p className="text-sm text-[#29211D]/80 mt-3 max-w-sm leading-relaxed">
                  We look forward to welcoming you, <strong>{guestName}</strong>. Your table is reserved for <strong>{guests} {guests > 1 ? 'guests' : 'guest'}</strong> on <strong>{date}</strong> at <strong>{timeSlot}</strong>.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-[#F5EADF]/80 border border-[#E8D6C4] w-full text-left text-xs space-y-2">
                  <div className="flex justify-between text-[#4A2C20]">
                    <span>Seating:</span>
                    <span className="font-medium">{seatingArea}</span>
                  </div>
                  <div className="flex justify-between text-[#4A2C20]">
                    <span>Location:</span>
                    <span className="font-medium">{CAFE_INFO.address}</span>
                  </div>
                  <div className="flex justify-between text-[#4A2C20]">
                    <span>Grace Period:</span>
                    <span className="font-medium text-emerald-800">15 minutes</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="mt-8 w-full py-3 bg-[#4A2C20] hover:bg-[#382016] text-[#FFF9F2] text-sm font-medium rounded-md shadow-xs transition-colors"
                >
                  Return to Café
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
                {/* Date & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4A2C20] mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A66B45]" />
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A2C20] mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#A66B45]" />
                      Number of Guests
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 4, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuests(num)}
                          className={`flex-1 py-1.5 text-xs font-medium rounded border transition-all ${
                            guests === num
                              ? 'bg-[#4A2C20] text-[#FFF9F2] border-[#4A2C20]'
                              : 'bg-[#F5EADF]/60 text-[#4A2C20] border-[#E8D6C4] hover:bg-[#E8D6C4]'
                          }`}
                        >
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time slot picker */}
                <div>
                  <label className="block text-xs font-medium text-[#4A2C20] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#A66B45]" />
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`py-2 text-xs rounded border transition-all ${
                          timeSlot === slot
                            ? 'bg-[#4A2C20] text-[#FFF9F2] border-[#4A2C20] font-medium'
                            : 'bg-[#FFF9F2] text-[#4A2C20] border-[#E8D6C4] hover:bg-[#F5EADF]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating preference */}
                <div>
                  <label className="block text-xs font-medium text-[#4A2C20] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A66B45]" />
                    Seating Experience
                  </label>
                  <div className="space-y-2">
                    {seatingAreas.map((area) => (
                      <label
                        key={area.id}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          seatingArea === area.id
                            ? 'bg-[#F5EADF]/70 border-[#A66B45]'
                            : 'bg-[#FFF9F2] border-[#E8D6C4] hover:bg-[#F5EADF]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="seating"
                          value={area.id}
                          checked={seatingArea === area.id}
                          onChange={() => setSeatingArea(area.id)}
                          className="mt-0.5 text-[#4A2C20] focus:ring-[#4A2C20]"
                        />
                        <div className="text-xs">
                          <p className="font-medium text-[#4A2C20]">{area.id}</p>
                          <p className="text-[#29211D]/70 mt-0.5">{area.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Guest details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8D6C4]">
                  <div>
                    <label className="block text-xs font-medium text-[#4A2C20] mb-1">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Iyer"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A2C20] mb-1">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98450 12345"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A2C20] mb-1">
                    Special Occasion or Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anniversary celebration, quiet reading table"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FFF9F2] border border-[#E8D6C4] rounded-md text-[#29211D] focus:outline-none focus:border-[#4A2C20]"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#4A2C20] hover:bg-[#382016] text-[#FFF9F2] text-sm font-medium rounded-md shadow-xs transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-4 h-4 text-[#E8D6C4]" />
                  </button>
                  <p className="text-[11px] text-[#29211D]/60 text-center mt-2">
                    No deposit required. Cancellations accepted up to 2 hours in advance.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
