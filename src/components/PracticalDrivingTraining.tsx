import React from 'react';
import {
  Compass,
  Sliders,
  ParkingSquare,
  Navigation,
  Eye,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface TrainingModule {
  number: string;
  title: string;
  subTitle: string;
  tag: string;
  icon: React.ElementType;
  description: string;
  keyTechnique: string;
  focusAreas: string[];
}

const MODULES: TrainingModule[] = [
  {
    number: '01',
    title: 'Steering Control',
    subTitle: 'Grip & Precision Steering',
    tag: '10-and-2 Position',
    icon: Compass,
    description:
      'Sahi hand placement aur smooth push-pull steering technique se gaadi har turn aur curve par poore balance ke sath track mein rehti hai.',
    keyTechnique: 'Quarter-to-three balance & effortless automatic centering',
    focusAreas: ['10-and-2 & 9-and-3 Hand Grips', 'Smooth Hand-Over-Hand Turning', 'Body Lean Prevention on Curves'],
  },
  {
    number: '02',
    title: 'Gear & Pedal Control',
    subTitle: 'Clutch Biting & Smooth Shifts',
    tag: 'ABC Coordination',
    icon: Sliders,
    description:
      'Accelerator, Brake aur Clutch (ABC) ka accurate balance. Half-clutch biting point ki practical samajh taaki slope ya bumper traffic mein gaadi band na ho.',
    keyTechnique: 'Dedicated left-foot clutch discipline with zero stalling',
    focusAreas: ['Smooth H-Pattern 1-to-5 Upshift & Downshift', 'Slope / Inclination Hold without Handbrake Panic', 'Feathered Braking without Sudden Jerks'],
  },
  {
    number: '03',
    title: 'Parking Practice',
    subTitle: 'Parallel, Perpendicular & Reverse',
    tag: 'Kerb & Space Judgment',
    icon: ParkingSquare,
    description:
      'Bheed-bhaad wale market aur colony lanes mein gaadi ko safely park karna. Side-mirror angle setup aur accurate kerb distance measurement.',
    keyTechnique: '1.5 ft kerb buffer with systematic 45-degree angle entry',
    focusAreas: ['Parallel Parking in Tight Gaps', 'Perpendicular Bay In & Out', 'Kerb Distance Optical Judgment'],
  },
  {
    number: '04',
    title: 'Road Awareness',
    subTitle: 'Lane Discipline & Mirror Scanning',
    tag: '~8 KM Daily Highway & City',
    icon: Navigation,
    description:
      'Rozana lagbhag 8 km real Jaipur road running. Straight cruising, safe following distance, overtake protocol aur 3-second safety gap maintenance.',
    keyTechnique: 'Continuous 3-mirror sweep (Left, Center IRVM, Right) every 8-10 seconds',
    focusAreas: ['Straight Lane Tracking without Wavering', 'Safe 2-Car Space Following Distance', 'Timely Indicator Signals 30m Prior to Turn'],
  },
  {
    number: '05',
    title: 'Traffic Observation',
    subTitle: 'Intersections, Chowks & Density',
    tag: 'Defensive Driving',
    icon: Eye,
    description:
      'Jaipur ke busy chowk, T-intersections, roundabouts aur auto-rickshaw density ke beech calm decision making aur defensive road instinct.',
    keyTechnique: 'Anticipate moving pedestrians and sudden two-wheeler cuts calmly',
    focusAreas: ['Traffic Light Timing & Stop-Line Discipline', 'Uncontrolled T-Junction Right-of-Way Logic', 'Pedestrian & Cattle Hazard Anticipation'],
  },
  {
    number: '06',
    title: 'Confidence Building',
    subTitle: 'Fear Elimination & Solo Readiness',
    tag: 'Calm & Independent',
    icon: ShieldCheck,
    description:
      'Driving phobia ko completely eliminate karna. Patient dual-control guidance ke sath student ko day 1 se relaxed aur independent mindset dena.',
    keyTechnique: 'Gradual transition from trainer co-steering to 100% independent driver command',
    focusAreas: ['Eliminating Horn Panic & Over-Honking Stress', 'Calm Recovery from Engine Stalls in Traffic', 'Independent Solo Readiness for Daily Commute'],
  },
];

export const PracticalDrivingTraining: React.FC = () => {
  return (
    <section id="training" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
            <span>Core Practical Curriculum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Practical Car Driving Lessons & Training in Jaipur
          </h2>

          <p className="mt-3 text-base text-neutral-600">
            Real Indian road conditions par daily hands-on practice. Zero artificial simulators — 100% practical technique, step-by-step master progression.
          </p>
        </div>

        {/* 6 High-Craft Numbered CSS Modules (Zero Photos) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.number}
                className="group relative rounded-2xl bg-white border border-neutral-200 hover:border-red-300 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar: Number + Icon + Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      {/* Big Modern Number Display */}
                      <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-neutral-900 group-hover:text-red-600 transition-colors tracking-tight">
                        {mod.number}
                      </span>
                      <div className="h-4 w-px bg-neutral-200" />
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/80">
                      {mod.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-['Outfit'] text-neutral-900 group-hover:text-red-600 transition-colors">
                    {mod.title}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
                    {mod.subTitle}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Bullet Focus Points */}
                  <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                    {mod.focusAreas.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Technique Strip at Bottom */}
                <div className="mt-6 pt-4 border-t border-neutral-100/90 bg-neutral-50 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl border-b-2 border-b-transparent group-hover:border-b-red-600 transition-colors">
                  <div className="text-[10px] font-extrabold text-red-700 uppercase tracking-wider mb-0.5">
                    Trainer's Key Technique
                  </div>
                  <div className="text-xs font-medium text-neutral-800 flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span>{mod.keyTechnique}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
