import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { FileCheck, ShieldCheck, AlertCircle, CheckCircle2, Phone, ExternalLink } from 'lucide-react';

export const LicenceGuidance: React.FC = () => {
  return (
    <section id="licence" className="py-16 sm:py-24 bg-neutral-50/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-200/80 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Advisory & Process Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Driving Licence Guidance & RTO Test Advisory in Jaipur
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">
            Driving training ke saath licence process ko samajhne mein guidance provide ki jaati hai. Licence approval aur eligibility applicable government rules par depend karti hai.
          </p>
        </div>

        {/* 3 Step Guidance Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Learner Licence (LL) Advice
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Online Parivahan portal par application submit karne, required documents (age/address proof) aur online traffic signs test ke baare mein complete guidance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Practical RTO Test Preparation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Official RTO driving track ke standard driving maneuvers (H-track, reverse parking, gradient climb) ki targeted training taaki test day par confidence rahe.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Permanent Licence (DL) Process
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Learner licence ke valid duration ke baad permanent driving licence ke slot booking aur ground testing formalities ke steps ki clear understanding.
            </p>
          </div>
        </div>

        {/* Clear & Honest Disclaimer Box */}
        <div className="mt-8 max-w-3xl mx-auto p-4 sm:p-5 bg-amber-50/90 rounded-2xl border border-amber-200/90 text-left text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold block text-amber-900">
              Honest & Transparent Regulatory Disclaimer:
            </strong>
            <p className="leading-relaxed text-amber-900/90">
              Shree Ambhey Motor Driving sirf practical training aur licence application process ke regarding educational guidance provide karta hai. Licence approval, test clearance aur eligibility entirely Transport Department (RTO) Rajasthan aur applicable motor vehicle rules par depend karta hai.
            </p>
          </div>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-neutral-600">
            Licence process ya batch timings ke baare mein poochne ke liye sampark karein:{' '}
            <a
              href={BUSINESS_INFO.callUrl}
              className="font-bold text-red-600 hover:text-red-700 underline inline-flex items-center gap-1 ml-1"
            >
              <Phone className="w-3.5 h-3.5" />
              {BUSINESS_INFO.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
