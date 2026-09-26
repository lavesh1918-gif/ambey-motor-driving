import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageCircle, Navigation, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-neutral-950 overflow-hidden text-center">
      {/* Pure CSS Dark Background with Crimson Glow & Radial Pattern (Zero Photos) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>Admissions Open In Jaipur</span>
        </div>

        {/* Exact Requested Heading */}
        <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
          Driving Start Karni Hai?
        </h2>

        {/* Exact Requested Subheading */}
        <div className="mt-4 text-lg sm:text-2xl font-bold text-neutral-200 max-w-2xl mx-auto">
          ₹3,000 Master Course ke saath 15 Days ki practical driving training.
        </div>

        <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
          Daily practical training, free doorstep pickup facility aur licence assistance ke saath road par full confidence hasil kijiye.
        </p>

        {/* 3 Buttons: CALL NOW, WHATSAPP NOW, GET DIRECTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-2xl mx-auto">
          <a
            href={BUSINESS_INFO.callUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl shadow-lg transition-all"
          >
            <Phone className="w-5 h-5 text-red-600" />
            <span>CALL NOW ({BUSINESS_INFO.phone})</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WHATSAPP NOW</span>
          </a>

          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl shadow-lg transition-all"
          >
            <Navigation className="w-4 h-4 text-red-400" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-neutral-400">
          P-19, Durga Vihar B, Nangal Jaisa Bhora Niwaru Road Jaipur, Rajasthan, India • Free pickup facility available.
        </p>
      </div>
    </section>
  );
};
