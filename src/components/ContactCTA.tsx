import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageCircle, Navigation, MapPin, CheckCircle } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-60 h-60 bg-red-800/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Admissions Open • 15 Days Master Course</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
              Driving Start Karni Hai?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Course details aur available training schedule ke liye humein call ya WhatsApp karein.
            </p>

            {/* Direct Academy Helpline Box */}
            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Direct Academy Contact
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-3">
                <a
                  href={BUSINESS_INFO.callUrl}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white hover:text-red-400 transition-colors tracking-tight"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="text-xs text-neutral-400 mt-2 flex items-center gap-2">
                <span>P-19, Durga Vihar B, Jaipur</span>
                <span>•</span>
                <span>Free Pickup Facility</span>
              </div>
            </div>

            {/* Action Buttons: CALL NOW, WHATSAPP NOW, GET DIRECTIONS */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={BUSINESS_INFO.callUrl}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-extrabold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span>CALL NOW</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WHATSAPP NOW</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-bold text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-red-400" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            {/* Inclusions summary */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> ₹3,000 Fee
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 15 Days Course
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Daily ~8 km Practice
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Free Pickup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
