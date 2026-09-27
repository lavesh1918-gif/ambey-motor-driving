import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight, UserCheck, Car } from 'lucide-react';

interface PickupProps {
  onOpenEnquiry: () => void;
}

export const Pickup: React.FC<PickupProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="pickup" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Doorstep Convenience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
              Free Doorstep Pickup Driving Classes in Jaipur
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              Training ko convenient banane ke liye free pickup facility available hai.
            </p>

            <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Learners ko driving academy aane-jaane ki pareshani na ho, isliye scheduled practical session timing par doorstep pickup coordinate kiya jaata hai. Isse aapka precious time bachta hai aur aap direct apne session par focus kar sakte hain.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Included in ₹3,000 Master Course</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Pickup ke liye koi separate hidden transport charges nahi liye jaate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Coordinated Batch Slots</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Morning aur evening shifts mein timely pickup coordinate kiya jaata hai.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Safe Dual-Control Training Car</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Clean, certified everyday Indian hatchback with co-driver safety pedals.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Check Pickup Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={BUSINESS_INFO.callUrl}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-sm rounded-xl border border-neutral-300 transition-colors"
              >
                <span>Call 7300436787</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Craft Doorstep Routine Card (Zero Photos) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-neutral-900 p-6 sm:p-7 text-white border border-neutral-800 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Daily Routine
                    </span>
                    <span className="text-sm font-bold text-white font-['Outfit']">
                      Doorstep Pickup Flow
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Zero Extra Charge
                </span>
              </div>

              {/* 4 Step Timeline */}
              <div className="relative z-10 mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Time Slot Selection
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Morning ya evening batch mein se apna preferred driving slot confirm kijiye.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Car Arrival at Location
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Training hatchback instructor ke sath aapke designated point par time par pohchegi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Direct Driver-Seat Takeover
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Seat, side mirror aur seatbelt calibrate karke aap turant driving seat par baithenge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      ~8 KM Road Practice & Safe Return
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Active practical drive complete karke gaadi aapko wapas pickup spot par chhodegi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
