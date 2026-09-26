import React, { useEffect } from 'react';
import { LotusLogo } from './LotusLogo';
import { X, ExternalLink, Phone, Globe, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LotusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_TAGS = [
  'Website Design',
  'Business Websites',
  'SEO',
  'Google Business Profile',
  'Digital Marketing',
  'E-commerce',
  'Web Development',
];

export const LotusModal: React.FC<LotusModalProps> = ({ isOpen, onClose }) => {
  // Prevent background scrolling when open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lotus-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop with soft blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Centered Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-neutral-900 z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top subtle branding strip */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 text-left">
          {/* Header with Lotus Branding */}
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-md flex-shrink-0">
              <LotusLogo size={30} dark />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200/80 mb-0.5">
                <Sparkles className="w-3 h-3" />
                <span>Web Agency</span>
              </div>
              <h3
                id="lotus-modal-title"
                className="text-2xl font-black font-['Outfit'] text-neutral-950 tracking-tight"
              >
                Lotus Web Studio
              </h3>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base font-bold text-neutral-800">
            Professional Websites for Local Businesses
          </p>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Lotus Web Studio helps local businesses build modern, fast and professional websites that create a strong online presence and make it easier for customers to connect with their business.
          </p>

          {/* Service Tags */}
          <div className="mt-5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Capabilities & Services
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200/80"
                >
                  <CheckCircle2 className="w-3 h-3 text-red-600 flex-shrink-0" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Contact Details Quick Strip */}
          <div className="mt-6 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider">
                Direct Phone / WhatsApp
              </div>
              <a
                href={`tel:${BUSINESS_INFO.lotusPhone}`}
                className="font-bold text-neutral-900 hover:text-red-600 transition-colors flex items-center gap-1.5 mt-0.5"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>{BUSINESS_INFO.lotusPhone}</span>
              </a>
            </div>

            <div>
              <div className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider">
                Official Website
              </div>
              <a
                href={BUSINESS_INFO.lotusWebStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-neutral-900 hover:text-red-600 transition-colors flex items-center gap-1.5 mt-0.5 truncate"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                <span className="truncate">lotuswebstudio.netlify.app</span>
              </a>
            </div>
          </div>

          {/* Action Buttons: Visit Website, Call, WhatsApp */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <a
              href={BUSINESS_INFO.lotusWebStudioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer group"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href={BUSINESS_INFO.lotusWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.lotusPhone}`}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Lotus</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
