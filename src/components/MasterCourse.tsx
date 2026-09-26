import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import {
  Check,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Car,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
} from 'lucide-react';

interface MasterCourseProps {
  onOpenEnquiry: () => void;
}

export const MasterCourse: React.FC<MasterCourseProps> = ({ onOpenEnquiry }) => {
  const courseFeatures = [
    {
      title: 'Daily Practical Driving',
      detail: 'Har din dedicated time driving sheet par hands-on vehicle steering.',
    },
    {
      title: 'Approximately 8 km Daily Practice',
      detail: 'Jaipur ki actual road conditions par ~8 km daily running practice.',
    },
    {
      title: 'Free Pickup Facility',
      detail: 'Training session ke liye convenient pickup facility shamil hai.',
    },
    {
      title: 'Licence Guidance & Assistance',
      detail: 'RTO application aur slot booking ke steps ke liye proper advice.',
    },
    {
      title: 'Practical Road Training',
      detail: 'Traffic observation, lane discipline, signals aur intersection turns.',
    },
    {
      title: 'Beginner-Friendly Approach',
      detail: 'Zero driving experience wale first-time learners ke liye calm pacing.',
    },
  ];

  return (
    <section id="master-course" className="py-16 sm:py-24 bg-neutral-50/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Transparent Pricing • Complete Package</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Master Driving Course
          </h2>

          <p className="mt-3 text-base text-neutral-600">
            Koi hidden charges nahi. 15 Days ka comprehensive practical course jisme daily driving, free pickup
            aur licence assistance shamil hai.
          </p>
        </div>

        {/* Master Course Highlight Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border-2 border-red-500 shadow-xl overflow-hidden text-left transition-all hover:shadow-2xl">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Primary Training Program</span>
              </div>
              <div className="text-xs font-medium text-red-100 bg-red-800/40 px-2.5 py-0.5 rounded-full">
                Admission Open • Durga Vihar B, Jaipur
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side: Course Title, Price & Duration */}
                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-200 pb-6 lg:pb-0 lg:pr-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block">
                    All-Inclusive Course
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-neutral-900 mt-1">
                    MASTER DRIVING COURSE
                  </h3>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-['Outfit'] text-neutral-900">
                      ₹3,000
                    </span>
                    <span className="text-sm font-semibold text-neutral-500">
                      / Complete Course
                    </span>
                  </div>

                  {/* Key Stats Pill */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>Duration: <strong>15 Days</strong> (Daily Sessions)</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80">
                      <Car className="w-4 h-4 text-red-600" />
                      <span>Daily Practice: <strong>~8 km per day</strong></span>
                    </div>

                    <div className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80">
                      <CalendarCheck className="w-4 h-4 text-emerald-600" />
                      <span>Free Pickup Included</span>
                    </div>
                  </div>

                  {/* Booking CTA buttons */}
                  <div className="mt-6 space-y-2.5">
                    <button
                      onClick={onOpenEnquiry}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.99] rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <span>Book Driving Class</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={BUSINESS_INFO.callUrl}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs sm:text-sm font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg border border-neutral-300/70 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-red-600" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                        <span>WhatsApp Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side: Checklist of Features */}
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
                    Course Inclusions & Practical Features:
                  </h4>

                  <ul className="space-y-3.5">
                    {courseFeatures.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <strong className="text-sm font-bold text-neutral-900 block">
                            {item.title}
                          </strong>
                          <span className="text-xs text-neutral-600 leading-normal">
                            {item.detail}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Mandatory Content Rule Note */}
                  <div className="mt-6 p-3.5 bg-amber-50/90 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">Important Government Rule Note:</strong>
                      <span>
                        Licence approval/process government rules aur eligibility par depend karta hai.
                        Hum process aur application guidance provide karte hain, RTO official norms strictly follow kiye jaate hain.
                      </span>
                    </div>
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
