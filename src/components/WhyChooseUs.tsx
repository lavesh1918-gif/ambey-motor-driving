import React from 'react';
import { WHY_CHOOSE_POINTS } from '../data/content';
import { CheckCircle2, Award, Shield, XCircle, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: High-Craft Comparison Card (Zero Photos) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-6 sm:p-7 border border-neutral-200 shadow-xl text-left relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-600">
                    Training Standard
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 font-['Outfit']">
                    The Practical Difference
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Comparison Points */}
              <div className="mt-5 space-y-4">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <XCircle className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Typical Ground Driving</span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Khaali ground par gol-gol chakkhar lagwana jisse traffic ka dar door nahi hota.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-red-50/80 border border-red-200">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Check className="w-3.5 h-3.5 text-red-600" />
                    <span>Shree Ambhey Practical Training</span>
                  </div>
                  <p className="text-xs text-neutral-800 font-medium">
                    Day 1 se dual-pedal safety ke sath actual Jaipur road par direct real-world practice.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-neutral-100/70 border border-neutral-200 text-center">
                    <div className="text-lg font-black font-['Outfit'] text-neutral-900">
                      100%
                    </div>
                    <div className="text-[11px] font-semibold text-neutral-600">
                      Real Road Running
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-100/70 border border-neutral-200 text-center">
                    <div className="text-lg font-black font-['Outfit'] text-red-600">
                      ~8 KM
                    </div>
                    <div className="text-[11px] font-semibold text-neutral-600">
                      Daily Practical Run
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Points */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>Learner-Centric Approach</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
              Why Learners Choose Practical Training
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Shree Ambhey Motor Driving mein hum theory ke bajaye direct road exposure aur patient guidance ko sabse badi priority maante hain.
            </p>

            {/* List of 6 points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_POINTS.map((pt, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <h3 className="text-sm font-bold text-neutral-900">{pt.title}</h3>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
