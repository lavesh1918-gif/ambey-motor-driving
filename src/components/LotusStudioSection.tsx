import React from 'react';
import { LotusLogo } from './LotusLogo';
import { BUSINESS_INFO } from '../data/content';
import { ExternalLink, Phone, Globe, CheckCircle2 } from 'lucide-react';

export const LotusStudioSection: React.FC = () => {
  const services = [
    'Website Design',
    'Business Websites',
    'SEO',
    'Google Business Profile',
    'Digital Marketing',
    'E-commerce',
    'Web Development',
  ];

  return (
    <section className="bg-neutral-900 border-t border-neutral-800 text-neutral-300 py-12 sm:py-14 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950/80 rounded-3xl border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Logo & Headline */}
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg flex-shrink-0">
                <LotusLogo size={64} dark={false} />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-500 block">
                  Web Development Partner
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white mt-0.5 tracking-tight">
                  Website Designed & Managed by Lotus Web Studio
                </h3>
              </div>
            </div>

            {/* Description & Tags */}
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Lotus Web Studio helps local businesses build modern, fast and professional websites that create a strong online presence and make it easier for customers to connect with their business.
              </p>

              {/* Services Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {services.map((service) => (
                  <span
                    key={service}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact & Link Actions */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <div className="text-xs text-neutral-400">
                Contact: <strong className="text-white font-semibold">{BUSINESS_INFO.lotusPhone}</strong>
              </div>

              <a
                href={BUSINESS_INFO.lotusWebStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-white hover:bg-neutral-200 rounded-xl shadow-md transition-all group"
              >
                <span>Visit Lotus Web Studio</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-700 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.lotusPhone}`}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>Call {BUSINESS_INFO.lotusPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
