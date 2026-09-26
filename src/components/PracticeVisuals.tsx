import React, { useState } from 'react';
import { PRACTICE_TOPICS } from '../data/content';
import { PracticeTopic } from '../types';
import {
  Compass,
  Sliders,
  Footprints,
  Gauge,
  ParkingSquare,
  RotateCcw,
  CornerUpRight,
  Navigation,
  Eye,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Info,
  Car,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Sliders,
  Footprints,
  Gauge,
  ParkingSquare,
  RotateCcw,
  CornerUpRight,
  Navigation,
  Eye,
  ShieldAlert,
};

export const PracticeVisuals: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<PracticeTopic>(PRACTICE_TOPICS[0]);
  const [activePedal, setActivePedal] = useState<'clutch' | 'brake' | 'acc'>('clutch');
  const [activeGear, setActiveGear] = useState<string>('1');

  const categories = [
    { id: 'all', label: 'All 10 Practical Topics' },
    { id: 'cockpit', label: 'Vehicle Controls (ABC & Gears)' },
    { id: 'maneuvers', label: 'Parking & Turns' },
    { id: 'road', label: 'Indian Road & Traffic' },
  ];

  const filteredTopics = PRACTICE_TOPICS.filter((t) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'cockpit')
      return ['steering-control', 'gear-shifting', 'pedal-awareness', 'dashboard-awareness'].includes(t.id);
    if (activeCategory === 'maneuvers')
      return ['parking-practice', 'reverse-driving', 'turning-practice'].includes(t.id);
    if (activeCategory === 'road')
      return ['indian-road-driving', 'traffic-awareness', 'lane-positioning'].includes(t.id);
    return true;
  });

  const gearSpeeds: Record<string, { speed: string; desc: string; tip: string }> = {
    '1': { speed: '0 - 15 km/h', desc: 'Starting from complete stop & parking crawl', tip: 'Slowly release clutch to biting point while gently holding accelerator.' },
    '2': { speed: '15 - 25 km/h', desc: 'Taking colony turns & crossing speed breakers', tip: 'Smooth transition after clearing intersections; prevents engine knocking.' },
    '3': { speed: '25 - 40 km/h', desc: 'Main residential roads & medium city traffic', tip: 'Most versatile city gear with responsive acceleration & engine braking.' },
    '4': { speed: '40 - 55 km/h', desc: 'Open city avenues & straight boulevards', tip: 'Light throttle cruising with optimal fuel efficiency.' },
    '5': { speed: '55+ km/h', desc: 'Outer ring roads & highway cruising', tip: 'Overdrive gear for smooth high-speed highway travel.' },
    'R': { speed: 'Reverse crawl', desc: 'Backing into parking slots & turning bays', tip: 'Car must be 100% stationary before engaging Reverse; rely on 3 mirrors.' },
  };

  return (
    <section id="training" className="py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 border border-red-200">
            <Car className="w-3.5 h-3.5 text-red-600" />
            <span>Practical Driving Anatomy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-neutral-900 tracking-tight">
            Driving Practice Ko Samjhiye
          </h2>

          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Shree Ambhey Motor Driving mein theoretical baatein kam aur actual practical vehicle control aur road skills par maximum focus hota hai. Yeh 10 core practical areas aapko 15 days ke dauran sikhaye jaate hain.
          </p>
        </div>

        {/* INTERACTIVE CONTROLS SIMULATION HUB */}
        <div className="mt-12 bg-white rounded-3xl border border-neutral-200 shadow-md p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                Interactive Learning Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-neutral-900 mt-0.5">
                Car Cockpit & Foot Coordination Guide
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-lg">
              <Info className="w-4 h-4 text-red-600" />
              <span>Click pedals or gears to inspect operation rules</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive A-B-C Pedals Visualizer */}
            <div className="lg:col-span-6 bg-neutral-900 text-white p-6 sm:p-7 rounded-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                  Pedal Architecture (Manual Car)
                </span>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Dual-Control Assisted
                </span>
              </div>

              {/* 3 Pedals Graphic */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-6">
                {/* Clutch */}
                <button
                  onClick={() => setActivePedal('clutch')}
                  className={`p-4 rounded-xl flex flex-col items-center justify-between h-36 sm:h-40 border-2 transition-all cursor-pointer ${
                    activePedal === 'clutch'
                      ? 'bg-red-950/70 border-red-500 shadow-lg shadow-red-500/20 scale-[1.02]'
                      : 'bg-neutral-800/80 border-neutral-700 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-xs font-bold text-neutral-400">Left Foot Only</span>
                  <div className="w-12 sm:w-14 h-16 sm:h-20 rounded bg-neutral-700 border border-neutral-500 flex items-center justify-center shadow-inner">
                    <span className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">C</span>
                  </div>
                  <span className="text-xs font-bold text-red-400">CLUTCH</span>
                </button>

                {/* Brake */}
                <button
                  onClick={() => setActivePedal('brake')}
                  className={`p-4 rounded-xl flex flex-col items-center justify-between h-36 sm:h-40 border-2 transition-all cursor-pointer ${
                    activePedal === 'brake'
                      ? 'bg-amber-950/70 border-amber-500 shadow-lg shadow-amber-500/20 scale-[1.02]'
                      : 'bg-neutral-800/80 border-neutral-700 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-xs font-bold text-neutral-400">Right Foot</span>
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded bg-neutral-700 border border-neutral-500 flex items-center justify-center shadow-inner">
                    <span className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">B</span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">BRAKE</span>
                </button>

                {/* Accelerator */}
                <button
                  onClick={() => setActivePedal('acc')}
                  className={`p-4 rounded-xl flex flex-col items-center justify-between h-36 sm:h-40 border-2 transition-all cursor-pointer ${
                    activePedal === 'acc'
                      ? 'bg-emerald-950/70 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                      : 'bg-neutral-800/80 border-neutral-700 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-xs font-bold text-neutral-400">Right Foot</span>
                  <div className="w-10 sm:w-12 h-20 sm:h-24 rounded bg-neutral-700 border border-neutral-500 flex items-center justify-center shadow-inner">
                    <span className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">A</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">ACCEL</span>
                </button>
              </div>

              {/* Pedal Detail Box */}
              <div className="bg-neutral-800/90 rounded-xl p-4 border border-neutral-700 text-left">
                {activePedal === 'clutch' && (
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                      Clutch Operation & Biting Point:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-relaxed">
                      Left foot sirf Clutch ke liye use hota hai. Car rokne, gear badalne aur starting ke waqt ise poora press karein. Dheere-dheere release karte waqt car ka vibration point "Biting Point" hota hai.
                    </p>
                  </div>
                )}
                {activePedal === 'brake' && (
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Brake Control & Smooth Stopping:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-relaxed">
                      Right foot hamesha Accelerator aur Brake ke beech switch karta hai. Sudden jhatke se bachne ke liye progressive pressure apply karein. Car stop hone se pehle clutch press karein taaki engine band na ho.
                    </p>
                  </div>
                )}
                {activePedal === 'acc' && (
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Accelerator (Race) & Speed Regulation:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-relaxed">
                      Right foot ki heel floor par steady rakh kar toe se gentle pressure dein. City driving mein Jaipur ki residential colonies mein smooth, steady throttle maintain karna sikhaya jaata hai.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Manual Gear Shift Simulator */}
            <div className="lg:col-span-6 bg-neutral-100 p-6 sm:p-7 rounded-2xl border border-neutral-200 text-left">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                  Manual H-Pattern Gear Matrix
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  Select Gear:
                </span>
              </div>

              {/* Interactive Gear Gates */}
              <div className="grid grid-cols-3 gap-2.5 max-w-xs mx-auto my-4">
                {['1', '3', '5', '2', '4', 'R'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setActiveGear(g)}
                    className={`py-3 rounded-xl font-black font-['Outfit'] text-lg transition-all cursor-pointer border ${
                      activeGear === g
                        ? 'bg-red-600 text-white border-red-600 shadow-md scale-105'
                        : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    {g === 'R' ? 'R (Rev)' : `${g}st`}
                  </button>
                ))}
              </div>

              {/* Selected Gear Insight */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-neutral-900">
                    Gear {activeGear === 'R' ? 'Reverse' : activeGear}:{' '}
                    <span className="text-red-600">{gearSpeeds[activeGear].speed}</span>
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 bg-red-50 text-red-700 rounded">
                    Manual Sync
                  </span>
                </div>
                <p className="text-xs text-neutral-700 font-medium mt-1">
                  {gearSpeeds[activeGear].desc}
                </p>
                <div className="mt-2 pt-2 border-t border-neutral-100 text-xs text-neutral-500">
                  <strong className="text-neutral-700">Practical Tip:</strong> {gearSpeeds[activeGear].tip}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 PRACTICAL TOPICS GRID */}
        <div className="mt-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredTopics.map((topic) => {
              const IconComp = iconMap[topic.iconName] || Car;
              return (
                <div
                  key={topic.id}
                  className="bg-white rounded-2xl border border-neutral-200 hover:border-red-300 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Premium CSS Technical Banner (Zero Photos) */}
                  <div className="relative p-5 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:14px_14px]" />
                    
                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black font-['Outfit'] px-2.5 py-1 rounded-md bg-red-600 text-white shadow-xs">
                        MOD {topic.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-neutral-200 border border-white/10">
                        {topic.category}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 mt-2">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-red-400 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                          {topic.hindiTitle}
                        </div>
                        <h4 className="text-base font-bold text-white font-['Outfit'] line-clamp-1">
                          {topic.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100">
                      <div className="text-[11px] font-bold text-red-700 bg-red-50 p-2 rounded-lg border border-red-200/60 mb-3">
                        Rule: {topic.keyRule}
                      </div>

                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {topic.tips.slice(0, 2).map((tip, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
