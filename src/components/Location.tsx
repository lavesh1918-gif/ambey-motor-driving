import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3 border border-red-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>Academy Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Driving School Location — Durga Vihar B, Niwaru Road, Jaipur
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            P-19, Durga Vihar B, Nangal Jaisa Bhora Niwaru Road Jaipur, Rajasthan, India par easily accessible location. Training sessions ke liye doorstep pickup bhi available hai.
          </p>
        </div>

        {/* Location & Map Card */}
        <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-lg overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Address & Actions */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1">
                  Driving Academy Address
                </span>
                <h3 className="text-2xl font-black font-['Outfit'] text-neutral-900">
                  SHREE AMBHEY MOTOR DRIVING
                </h3>

                <div className="mt-5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-neutral-900 leading-snug">
                        {BUSINESS_INFO.address}
                      </div>
                      <div className="text-xs text-neutral-600 mt-1">
                        Jaipur, Rajasthan, India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pickup highlight */}
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free Pickup Available for registered Master Course learners!</span>
                </div>

                <div className="mt-5 text-xs text-neutral-600 space-y-1">
                  <div><strong>Phone:</strong> {BUSINESS_INFO.formattedPhone}</div>
                  <div><strong>Course:</strong> 15 Days Master Driving Course (₹3,000)</div>
                </div>
              </div>

              {/* Action Buttons: Get Directions, Call Now, WhatsApp */}
              <div className="mt-8 space-y-2.5">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={BUSINESS_INFO.callUrl}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-xl border border-neutral-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="lg:col-span-6 bg-neutral-100 min-h-[340px] relative border-t lg:border-t-0 lg:border-l border-neutral-200 flex flex-col">
              <iframe
                title="Google Maps Location of Shree Ambhey Motor Driving, Jaipur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113915.20173673733!2d75.7196024972656!3d26.885141699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db673752e5057%3A0x889dc6881775f0a0!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[340px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Link Over Map */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 text-neutral-900 text-xs font-bold shadow-md border border-neutral-200 hover:bg-neutral-100 transition-colors"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5 text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
