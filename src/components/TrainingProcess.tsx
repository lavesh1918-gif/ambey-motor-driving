import React from 'react';
import { TRAINING_JOURNEY } from '../data/content';
import { Route, CheckCircle2, ArrowRight } from 'lucide-react';

interface TrainingProcessProps {
  onOpenEnquiry: () => void;
}

export const TrainingProcess: React.FC<TrainingProcessProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="journey" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3 border border-red-200">
            <Route className="w-3.5 h-3.5" />
            <span>Step-By-Step Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Training Journey
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Enquiry se lekar road par independently car drive karne tak ka systematic 5-step learning path.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-14 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-neutral-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {TRAINING_JOURNEY.map((item, index) => (
              <div
                key={item.step}
                className="group p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between text-left"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-red-600 text-neutral-800 group-hover:text-white font-extrabold font-mono text-base flex items-center justify-center transition-colors shadow-xs">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Stage {index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-red-600/90 mt-0.5">
                    {item.subtitle}
                  </div>

                  <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1 text-[11px] font-semibold text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Progression</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA prompt below timeline */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Start Step 01 — Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
