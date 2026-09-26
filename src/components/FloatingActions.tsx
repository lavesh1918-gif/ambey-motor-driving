import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { LotusLogo } from './LotusLogo';
import { LotusModal } from './LotusModal';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [isLotusModalOpen, setIsLotusModalOpen] = useState(false);

  return (
    <>
      {/* MOBILE STICKY BOTTOM ACTION BAR (CALL, WHATSAPP, DIRECTIONS) */}
      <nav
        aria-label="Mobile Action Bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2 shadow-2xl safe-area-bottom"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Now */}
          <a
            href={BUSINESS_INFO.callUrl}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-950 text-white active:scale-95 transition-transform"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4 text-red-500 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:scale-95 transition-transform shadow-xs"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-100 text-neutral-800 border border-neutral-300 active:scale-95 transition-transform"
            aria-label="Directions"
          >
            <Navigation className="w-4 h-4 text-red-600 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">Directions</span>
          </a>
        </div>
      </nav>

      {/* DESKTOP FLOATING ACTION BUTTONS (Floating Call + WhatsApp on bottom right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Call Now Button */}
        <a
          href={BUSINESS_INFO.callUrl}
          className="group flex items-center gap-2.5 bg-neutral-950 text-white hover:bg-neutral-800 px-4 py-3 rounded-full shadow-xl hover:shadow-2xl border border-neutral-700 transition-all hover:scale-105 cursor-pointer"
          aria-label={`Call ${BUSINESS_INFO.phone}`}
        >
          <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <div className="text-left leading-none pr-1">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Quick Call</span>
            <span className="text-xs font-black">{BUSINESS_INFO.phone}</span>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <div className="text-left leading-none pr-1">
            <span className="text-[10px] uppercase font-bold text-emerald-100 block">Instant Chat</span>
            <span className="text-xs font-black">WhatsApp Now</span>
          </div>
        </a>
      </div>

      {/* LOTUS WEB STUDIO — RIGHT SIDE VERTICAL FLOATING WIDGET (DESKTOP) */}
      {/* Sleek vertical pill pinned to the right edge at vertical center; opens interactive modal on click */}
      <aside
        aria-label="Website developer attribution"
        className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-30"
      >
        <button
          onClick={() => setIsLotusModalOpen(true)}
          type="button"
          className="group flex flex-col items-center gap-2 py-3 px-1.5 rounded-l-2xl bg-white/95 hover:bg-white border-l border-t border-b border-neutral-300 shadow-xl hover:shadow-2xl text-neutral-700 hover:text-neutral-950 transition-all backdrop-blur-md cursor-pointer hover:-translate-x-1"
          title="Lotus Web Studio - Click to learn more"
          aria-haspopup="dialog"
        >
          <LotusLogo size={22} className="group-hover:rotate-12 transition-transform" />
          <div className="flex items-center gap-1 [writing-mode:vertical-rl] rotate-180 text-[11px] font-semibold tracking-tight">
            <span className="text-neutral-400 font-normal">Website by</span>
            <span className="font-extrabold text-neutral-900 group-hover:text-red-600 transition-colors">
              Lotus Web Studio
            </span>
          </div>
        </button>
      </aside>

      {/* LOTUS WEB STUDIO — FLOATING BADGE (MOBILE) */}
      {/* Positioned comfortably above the mobile sticky action bar to prevent any overlap */}
      <aside
        aria-label="Mobile developer attribution"
        className="md:hidden fixed bottom-20 right-3 z-30"
      >
        <button
          onClick={() => setIsLotusModalOpen(true)}
          type="button"
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white border border-neutral-300 shadow-lg text-neutral-800 text-[11px] font-bold backdrop-blur-md active:scale-95 cursor-pointer"
          title="Website by Lotus Web Studio"
          aria-haspopup="dialog"
        >
          <LotusLogo size={16} />
          <span className="text-neutral-500 font-normal text-[10px]">By</span>
          <span className="text-neutral-900 group-hover:text-red-600">Lotus Studio</span>
        </button>
      </aside>

      {/* Lotus Web Studio Interactive Popup Modal (Same-Page Experience) */}
      <LotusModal
        isOpen={isLotusModalOpen}
        onClose={() => setIsLotusModalOpen(false)}
      />
    </>
  );
};
