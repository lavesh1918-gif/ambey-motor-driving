import React from 'react';
import { SAFETY_POINTS } from '../data/content';
import { ShieldCheck, Check, AlertTriangle } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Safety First Education</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Safe Driving Starts With Good Training
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Good driving habits car start karne ke pehle second se shuru hoti hain. Hum har session mein road discipline aur proactive safety ko inculcate karte hain.
          </p>
        </div>

        {/* Safety Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAFETY_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 text-left hover:border-neutral-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-red-600 flex items-center justify-center font-bold text-sm shadow-xs mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Small Safety Disclaimer */}
        <div className="mt-8 text-center text-xs text-neutral-500 max-w-xl mx-auto">
          *All practical driving sessions are conducted under experienced instructor supervision in a dual-controlled training car for maximum road safety.
        </div>
      </div>
    </section>
  );
};
