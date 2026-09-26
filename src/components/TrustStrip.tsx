import React from 'react';
import { Sparkles, Calendar, Gauge, Car, ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Sparkles,
      title: '₹3,000 Master Course',
      subtitle: 'Honest & affordable fee structure',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Calendar,
      title: '15 Days Training',
      subtitle: 'Structured daily curriculum',
      color: 'text-neutral-800',
      bg: 'bg-neutral-100',
    },
    {
      icon: Gauge,
      title: 'Daily Practical Driving',
      subtitle: 'Approx 8 km hands-on road practice',
      color: 'text-neutral-800',
      bg: 'bg-neutral-100',
    },
    {
      icon: Car,
      title: 'Free Pickup',
      subtitle: 'Convenient training pickup facility',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <section className="bg-white border-b border-neutral-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-3.5 ${
                  index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
