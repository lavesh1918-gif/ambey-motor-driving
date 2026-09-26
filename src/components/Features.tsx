import React from 'react';
import { FEATURES } from '../data/content';
import {
  Compass,
  Gauge,
  MapPin,
  FileCheck,
  ShieldCheck,
  Car,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Gauge,
  MapPin,
  FileCheck,
  ShieldCheck,
  Car,
};

export const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
            <span>Core Inclusions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Why This Course
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            15 Days ke Master Course ke 6 core advantages jo aapko ek confident aur responsible driver banate hain.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || ShieldCheck;
            return (
              <div
                key={feature.id}
                className="group p-6 rounded-2xl bg-neutral-50/70 hover:bg-white border border-neutral-200 hover:border-red-300 shadow-xs hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-red-50 border border-neutral-200 group-hover:border-red-200 flex items-center justify-center transition-colors shadow-xs">
                    <IconComponent className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-red-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
