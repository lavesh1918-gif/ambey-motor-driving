import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { CheckCircle2, Shield, HeartHandshake, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column: High-Craft CSS Academy Blueprint Card (Zero Photos) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-white shadow-2xl border border-neutral-800 overflow-hidden">
              {/* Subtle road graphic background pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                      Training Standard
                    </div>
                    <div className="text-sm font-bold text-white font-['Outfit']">
                      Practical Driving Academy
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                  ESTD. JAIPUR
                </span>
              </div>

              {/* 4 Core Pillars Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-3 my-6">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-black font-['Outfit'] text-red-500">
                    15
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Days Course
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">
                    Structured daily modules
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-black font-['Outfit'] text-white">
                    ~8 <span className="text-sm font-bold text-red-400">KM</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Daily Road Run
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">
                    Real traffic exposure
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xl font-black font-['Outfit'] text-white">
                    Dual
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Pedal Safety
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">
                    Instructor control
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xl font-black font-['Outfit'] text-white">
                    Free
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Doorstep Pickup
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">
                    Scheduled slots
                  </div>
                </div>
              </div>

              {/* Academy Practical Philosophy Card */}
              <div className="relative z-10 p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                    Training Methodology
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  No empty ground circles. Day 1 se clutch bite, steering precision aur real Jaipur roads par systematic driving confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>About Shree Ambhey Motor Driving</span>
            </div>

            {/* Exact Required Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight leading-tight">
              Driving Sirf Gaadi Chalana Nahi Hai.
            </h2>

            {/* Exact Required Copy */}
            <div className="mt-6 space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                Achhi driving ke liye vehicle control, road awareness aur regular practical practice zaroori hai. Shree Ambhey Motor Driving ka focus practical training ke through driving confidence develop karne par hai.
              </p>
              <p className="text-sm sm:text-base text-neutral-600">
                Hamara objective har student ko road par calm, safe aur independent driver banana hai. Initial clutch-accelerator balance se lekar busy market turns aur parking tak, har skill systematic real-world practice ke zariye sikhayi jaati hai.
              </p>

              {/* Professional Trainer Text Mention (No photo, respectful & simple) */}
              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80 text-neutral-800">
                <div className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">
                  Experienced Instructor
                </div>
                <div className="text-base font-bold text-neutral-900">
                  Training guided by Satyanarayan Sharma (Satish Sharma)
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Patient, practical guidance designed to eliminate driving fear and cultivate real road confidence for every learner.
                </p>
              </div>
            </div>

            {/* Core Values Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2.5 font-bold text-neutral-900 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Beginner-Friendly Learning</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
                  Zero pressure environment — step-by-step guidance designed specifically for first-time learners.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2.5 font-bold text-neutral-900 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Practical Road Exposure</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
                  Daily approximately 8 km practical road driving so you gain authentic traffic instincts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2.5 font-bold text-neutral-900 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Free Doorstep Pickup</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
                  Daily hassle-free pickup arranged directly for your scheduled training slot.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2.5 font-bold text-neutral-900 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Licence Assistance</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
                  Transparent guidance for understanding the learner licence and official RTO formalities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
