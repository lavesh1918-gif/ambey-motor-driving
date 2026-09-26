import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { X, Phone, MessageCircle, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (7 AM - 10 AM)');
  const [pickupNeeded, setPickupNeeded] = useState('Yes, Free Pickup Needed');

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Shree Ambhey Motor Driving, mujhe ₹3,000 Master Course mein admission lena hai.
Name: ${name || 'Interested Learner'}
Phone: ${phone || 'Not provided'}
Slot: ${preferredSlot}
Pickup: ${pickupNeeded}`;

    const url = `https://wa.me/917300436787?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span>Admission Enquiry</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-['Outfit']">
              Book Master Driving Course
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              ₹3,000 • 15 Days • Daily Practical Training • Free Pickup
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Aapka Naam (Your Name)
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 98290XXXXX"
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Preferred Timing Slot
            </label>
            <select
              value={preferredSlot}
              onChange={(e) => setPreferredSlot(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
            >
              <option value="Morning (7 AM - 10 AM)">Morning (7:00 AM – 10:00 AM)</option>
              <option value="Afternoon (12 PM - 3 PM)">Afternoon (12:00 PM – 3:00 PM)</option>
              <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM – 7:00 PM)</option>
              <option value="Flexible Timing">Flexible Timing (Discuss on call)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Free Pickup Requirement
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPickupNeeded('Yes, Free Pickup Needed')}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                  pickupNeeded.startsWith('Yes')
                    ? 'bg-red-50 border-red-400 text-red-700'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                }`}
              >
                ✓ Yes, Pickup Needed
              </button>
              <button
                type="button"
                onClick={() => setPickupNeeded('No, I will reach center')}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                  pickupNeeded.startsWith('No')
                    ? 'bg-red-50 border-red-400 text-red-700'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                }`}
              >
                Direct at Academy
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Confirm & Send on WhatsApp</span>
            </button>

            <a
              href={BUSINESS_INFO.callUrl}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl border border-neutral-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Call Academy Directly ({BUSINESS_INFO.phone})</span>
            </a>
          </div>

          <div className="text-[11px] text-neutral-500 text-center pt-1">
            *Fees: ₹3,000 for full 15 Days. No hidden charges.
          </div>
        </form>
      </div>
    </div>
  );
};
