import React, { useState } from 'react';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import {
  Calendar,
  Gauge,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Car,
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-neutral-950 text-white"
    >
      {/* FULL-WIDTH CINEMATIC BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Poster Fallback Image always present until video plays smoothly */}
        <img
          src={IMAGES.heroPoster}
          alt="Car driving training session on Jaipur road with dual-control vehicle"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          width="1600"
          height="900"
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {!videoError && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={IMAGES.heroPoster}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.42] contrast-105"
          >
            <source src="/assets/hero-driving-training.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Cinematic Dual-Tone Overlays for Pristine Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
      </div>

      {/* FOREGROUND HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-8 flex flex-col text-left">
            {/* Small Badge: JAIPUR DRIVING TRAINING */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>JAIPUR DRIVING TRAINING</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 font-medium normal-case flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-red-400" />
                Niwaru Road, Durga Vihar B
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-[1.12]">
              Driving Seekhiye{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-400">
                Confidence
              </span>{' '}
              Ke Saath
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed font-normal">
              Car driving school in Jaipur with 15 Days practical Master Driving Course — daily ~8 km driving practice, free doorstep pickup aur licence guidance ke saath.
            </p>

            {/* Highlights Grid (15 Days, Daily Practice, Approx 8 KM Daily, Free Pickup) */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  <span>Duration</span>
                </div>
                <div className="text-base sm:text-lg font-black text-white mt-1">15 Days</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                  <Car className="w-3.5 h-3.5 text-red-400" />
                  <span>Training</span>
                </div>
                <div className="text-base sm:text-lg font-black text-white mt-1">Daily Practice</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                  <Gauge className="w-3.5 h-3.5 text-red-400" />
                  <span>Kilometers</span>
                </div>
                <div className="text-base sm:text-lg font-black text-white mt-1">~8 KM Daily</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Facility</span>
                </div>
                <div className="text-base sm:text-lg font-black text-white mt-1">Free Pickup</div>
              </div>
            </div>

            {/* Buttons: Primary Book, WhatsApp, Call */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-xl">
              {/* Primary Button */}
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-extrabold text-white bg-red-600 hover:bg-red-700 active:scale-[0.99] rounded-xl shadow-xl shadow-red-600/30 transition-all cursor-pointer"
              >
                <span>Book Driving Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Button: WhatsApp Now */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
                aria-label="Connect on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Now</span>
              </a>

              {/* Call Link */}
              <a
                href={BUSINESS_INFO.callUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-bold text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-sm transition-all"
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Micro reassurance checklist */}
            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero experience beginner friendly
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" /> Dual-controlled learner car
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Licence guidance support
              </span>
            </div>
          </div>

          {/* Right Column: Hero Price Card Floating in Spotlight */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md text-neutral-900 shadow-2xl border-2 border-white/80 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-600 text-[11px] font-black uppercase tracking-wider">
                  MASTER COURSE
                </span>
                <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Batches Open
                </span>
              </div>

              <div className="mt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Total Course Fee
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black font-['Outfit'] text-neutral-950 tracking-tight">
                    ₹3,000
                  </span>
                  <span className="text-sm font-extrabold text-neutral-500 uppercase">
                    / 15 Days
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-neutral-200/80 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-neutral-900">15 Days Comprehensive Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Daily Practical Driving (~8 km/day)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-emerald-800">Free Doorstep Pickup Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Licence Guidance & Advisory</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-red-400" />
                  <span>Enroll in Master Course</span>
                </button>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-neutral-500">
                  Call directly at{' '}
                  <a href={BUSINESS_INFO.callUrl} className="font-bold text-red-600 underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
