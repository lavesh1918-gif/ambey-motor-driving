import { GalleryItem, FeatureItem, FAQItem, TrainingStep, PracticeTopic } from '../types';

export const BUSINESS_INFO = {
  name: 'SHREE AMBHEY MOTOR DRIVING',
  shortName: 'Shree Ambhey',
  phone: '7300436787',
  formattedPhone: '+91 73004 36787',
  address: 'P-19, Durga Vihar B, Nangal Jaisa Bhora Niwaru Road Jaipur, Rajasthan, India',
  city: 'Jaipur, Rajasthan',
  courseName: 'MASTER DRIVING COURSE',
  coursePrice: '₹3,000',
  courseDuration: '15 Days',
  dailyKm: 'Approximately 8 km daily practice',
  facilities: [
    'Free Pickup',
    'Practical Driving Training',
    'Licence Guidance / Assistance',
    'Beginner-Friendly Training',
  ],
  callUrl: 'tel:7300436787',
  whatsappUrl:
    'https://wa.me/917300436787?text=Hello%2C%20mujhe%20Shree%20Ambhey%20Motor%20Driving%20ke%20%E2%82%B93000%20Master%20Course%20ke%20baare%20mein%20details%20chahiye.',
  mapsUrl: 'https://maps.app.goo.gl/uSvBqygcH62zTrTd9',
  lotusWebStudioUrl: 'https://lotuswebstudio.netlify.app/',
  lotusPhone: '+91 9983992084',
  lotusWhatsappUrl: 'https://wa.me/919983992084',
  lotusCallUrl: 'tel:+919983992084',
};

// Hero fallback poster only (all other images removed in favor of pure CSS/icons)
export const IMAGES = {
  heroPoster: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop',
};

// 6 Core Features: Why This Course
export const FEATURES: FeatureItem[] = [
  {
    id: 'practical-training',
    title: 'Practical Training',
    description: 'Direct hands-on steering, clutch and gear practice on actual Jaipur roads with dual-control vehicle setup.',
    iconName: 'Compass',
  },
  {
    id: 'daily-practice',
    title: 'Daily Practice',
    description: 'Approx. 8 km dedicated daily driving session every day across your 15-day course schedule.',
    iconName: 'Gauge',
  },
  {
    id: 'free-pickup',
    title: 'Free Pickup',
    description: 'Convenient doorstep pickup facility arranged for your daily practical training sessions.',
    iconName: 'MapPin',
  },
  {
    id: 'road-confidence',
    title: 'Road Confidence',
    description: 'Step-by-step progress to overcome hesitation, nervousness in traffic, and sudden braking anxiety.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'parking-practice',
    title: 'Parking Practice',
    description: 'Essential perpendicular, parallel and reverse parking training using precise side mirror cues.',
    iconName: 'Car',
  },
  {
    id: 'licence-guidance',
    title: 'Licence Guidance',
    description: 'Complete guidance and advisory support regarding learner licence procedures and RTO testing formalities.',
    iconName: 'FileCheck',
  },
];

// 5-Step Training Journey
export const TRAINING_JOURNEY: TrainingStep[] = [
  {
    step: '01',
    title: 'Contact Us',
    subtitle: 'Call ya WhatsApp par connect kijiye',
    description: '7300436787 par call ya WhatsApp karein aur apni convenient batch timing discuss kijiye.',
  },
  {
    step: '02',
    title: 'Course Details',
    subtitle: '15 Days schedule & pickup coordination',
    description: 'Master Driving Course fee (₹3,000), 15-day timeline aur free pickup location confirm kijiye.',
  },
  {
    step: '03',
    title: 'Daily Driving Practice',
    subtitle: 'Steering, clutch & gear basics',
    description: 'ABC pedals (Accelerator, Brake, Clutch), smooth gear shifts aur car control ki shuruat.',
  },
  {
    step: '04',
    title: 'Road Practice',
    subtitle: 'Approx 8 km daily on Jaipur roads',
    description: 'Traffic signals, turning maneuvers, speed breakers aur busy residential roads par practical exposure.',
  },
  {
    step: '05',
    title: 'Confidence Building',
    subtitle: 'Independently drive karne ki aadat',
    description: 'Reverse parking, mirror checking aur calm driving habits ke saath road par complete confidence.',
  },
];

// 10 Practice Simulation & Visual Areas for "Driving Practice Ko Samjhiye"
export const PRACTICE_TOPICS: PracticeTopic[] = [
  {
    id: 'steering-control',
    number: '01',
    title: 'Steering Wheel Control',
    hindiTitle: 'Steering Grip & Smooth Turns',
    category: 'Vehicle Control',
    description: 'Gaadi ko seedhi line mein rakhna aur smooth turnings lena driving ki sabse pehli basic skill hai. 10-to-2 ya quarter-to-three hand position se gaadi par poora control rehta hai.',
    keyRule: 'Quarter-to-three hand position & smooth push-pull steering',
    iconName: 'Compass',
    tips: [
      'Both hands on wheel at 9-and-3 or 10-and-2 position',
      'Never cross arms abruptly during normal turns',
      'Allow steering to naturally center back after completing a curve',
    ],
  },
  {
    id: 'gear-shifting',
    number: '02',
    title: 'Gear Shifting Technique',
    hindiTitle: 'H-Pattern Gears & Speed Sync',
    category: 'Transmission',
    description: 'Manual transmission mein right speed par right gear select karna car ki smooth movement aur engine health ke liye zaroori hai. Clutch ko poora press karke gear shift kiya jaata hai.',
    keyRule: '1st: 0-15 km/h • 2nd: 15-25 km/h • 3rd: 25-40 km/h • 4th: 40+ km/h',
    iconName: 'Sliders',
    tips: [
      'Clutch ko fully press karein gear shift karte waqt',
      'Smooth palm grip se H-pattern guide karein',
      'Sudden jerks se bachne ke liye clutch progressively release karein',
    ],
  },
  {
    id: 'pedal-awareness',
    number: '03',
    title: 'Clutch / Brake / Accelerator',
    hindiTitle: 'A-B-C Pedals & Biting Point',
    category: 'Foot Coordination',
    description: 'Left foot sirf Clutch (C) ke liye reserve hota hai. Right foot Brake (B) aur Accelerator (A) ke beech switch karta hai. Half-clutch biting point samajhne se gaadi band nahi hoti.',
    keyRule: 'Left foot = Clutch only • Right foot = Brake & Accelerator',
    iconName: 'Footprints',
    tips: [
      'Never rest left foot on clutch pedal while cruising (riding clutch)',
      'Find the "Biting Point" where car begins to vibrate slightly forward',
      'Brake press karne se pehle rear mirror glance zaroori hai',
    ],
  },
  {
    id: 'dashboard-awareness',
    number: '04',
    title: 'Dashboard & Speed Awareness',
    hindiTitle: 'Speedometer, RPM & Instrument Cluster',
    category: 'Cockpit Awareness',
    description: 'Speedometer, fuel gauge, engine temperature aur warning lights ko read karna har driver ko aana chahiye. Road par chalte waqt steady speed aur RPM maintain karna sikhaya jaata hai.',
    keyRule: 'Keep speed disciplined as per local Jaipur road limits (30-40 km/h in city)',
    iconName: 'Gauge',
    tips: [
      'Keep eye on speedometer periodically without taking focus off road',
      'Ensure handbrake icon goes off before driving',
      'Notice coolant and fuel levels during pre-drive check',
    ],
  },
  {
    id: 'parking-practice',
    number: '05',
    title: 'Parking Practice',
    hindiTitle: 'Perpendicular & Parallel Parking',
    category: 'Precision Maneuvers',
    description: 'Car parking beginners ke liye sabse intimidating lagti hai. Shree Ambhey mein learners ko side reference points aur steering locking angles se accurate parking sikhayi jaati hai.',
    keyRule: 'Use side mirrors to judge kerb distance & maintain 1.5 ft buffer',
    iconName: 'ParkingSquare',
    tips: [
      'Maintain slow clutch crawl speed during parking maneuvers',
      'Align rear bumper with adjacent car before full steering lock',
      'Straighten wheels once car enters parking bay',
    ],
  },
  {
    id: 'reverse-driving',
    number: '06',
    title: 'Reverse Driving Practice',
    hindiTitle: 'Peeche Gaadi Lena & Mirror Checks',
    category: 'Spatial Judgment',
    description: 'Reverse gear mein car ka steering response opposite feel hota hai. Side mirrors aur rear windshield ka use karke narrow space mein gaadi smoothly reverse karna sikhate hain.',
    keyRule: 'Slow half-clutch crawl with continuous 3-mirror scanning',
    iconName: 'RotateCcw',
    tips: [
      'Pehle neutral phir Reverse gear engage karein',
      'Dono side mirrors aur center rear-view mirror ko alternate scan karein',
      'Right turn ke liye steering right, left ke liye steering left ghumaayein',
    ],
  },
  {
    id: 'turning-practice',
    number: '07',
    title: 'Turning Practice',
    hindiTitle: 'Right & Left Turns & Indicator Timing',
    category: 'Maneuvers',
    description: 'Jaipur ke colony turns aur crossings par safe turning ke liye speed slow karna, right-of-way judge karna aur turning point par steering rotate karna step-by-step master karwaya jaata hai.',
    keyRule: 'Turn indicator 30 meters pehle dein aur 2nd gear mein turn karein',
    iconName: 'CornerUpRight',
    tips: [
      'Turn lene se 30-40 meter pehle indicator zaroor dein',
      'Turn se pehle speed reduce karke appropriate lower gear select karein',
      'Opposite lane ke oncoming traffic aur blind corners ka dhyan rakhein',
    ],
  },
  {
    id: 'indian-road-driving',
    number: '08',
    title: 'Indian Road Driving',
    hindiTitle: 'Colony Streets, Speed Breakers & Pedestrians',
    category: 'Local Road Conditions',
    description: 'Indian residential roads par sudden auto rickshaws, pedestrians, stray animals aur unmarked speed breakers aate hain. Yahan defensive driving aur calm temperament sabse zaroori hai.',
    keyRule: 'Slow down at intersections and keep foot hovering over brake pedal',
    iconName: 'Navigation',
    tips: [
      'Speed breakers par 1st ya 2nd gear mein slow climb karein',
      'Parked cars ke doors khulne ke risk ke liye buffer space rakhein',
      'Pedestrians aur two-wheelers ke liye safe passing distance maintain karein',
    ],
  },
  {
    id: 'traffic-awareness',
    number: '09',
    title: 'Traffic Awareness',
    hindiTitle: 'Chauraha / T-Junctions & Gap Assessment',
    category: 'Road Discipline',
    description: 'Traffic signals, roundabouts aur busy road cuts par gaadi nikalne ka confidence tab aata hai jab learner traffic speed aur safe gap ko accurately judge karna seekh leta hai.',
    keyRule: 'Maintain 2-second gap from vehicle in front in stop-and-go traffic',
    iconName: 'Eye',
    tips: [
      'Traffic light yellow hone par hurry na karein, safely stop karein',
      'Aage wali gaadi ke rear tyres road par visible rehne chahiye stopping distance mein',
      'Roundabout par entering traffic ko yield karein',
    ],
  },
  {
    id: 'lane-positioning',
    number: '10',
    title: 'Lane Positioning',
    hindiTitle: 'Gaadi Seedhi Rakhna & Mirror Signals',
    category: 'Highway & City Lanes',
    description: 'Road par chalte waqt lane ke center mein car maintain karna aur bina soche samjhe idhar-udhar sway na karna safe driving ki nishani hai. Lane change se pehle Mirror-Signal-Maneuver zaroori hai.',
    keyRule: 'M-S-M Rule: Mirror check → Signal turn → Maneuver smoothly',
    iconName: 'ShieldAlert',
    tips: [
      'Look far ahead on road to naturally keep car centered in lane',
      'Never change lanes abruptly without side mirror check',
      'Use horn or dipper only when genuinely required for safety',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [];

// FAQ items matching prompt
export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Master Course ki fees kitni hai?',
    answer:
      'Master Driving Course ki fees ₹3,000 hai. Isme 15 days ki daily practical driving training, approx 8 km daily practice aur free pickup facility shamil hai.',
  },
  {
    id: 'faq-2',
    question: 'Course kitne din ka hai?',
    answer:
      'Yeh Master Course poore 15 Days ka comprehensive program hai, jisme daily practical training sessions provide kiye jaate hain.',
  },
  {
    id: 'faq-3',
    question: 'Daily kitni driving practice hoti hai?',
    answer:
      'Training ke dauran daily approximately 8 km practical road driving practice karwayi jaati hai, taaki learner ko real-world roads ka solid experience mile.',
  },
  {
    id: 'faq-4',
    question: 'Kya free pickup available hai?',
    answer:
      'Haan, Shree Ambhey Motor Driving ke Master Course mein Free Pickup facility available hai training sessions ke liye.',
  },
  {
    id: 'faq-5',
    question: 'Kya beginners join kar sakte hain?',
    answer:
      'Bilkul! Yeh training specially zero-experience first-time beginners ke liye design ki gayi hai. Bilkul basic level se patient and supportive tarike se guide kiya jaata hai.',
  },
  {
    id: 'faq-6',
    question: 'Licence ke liye guidance milti hai?',
    answer:
      'Haan, driving licence process ko samajhne mein poori guidance provide ki jaati hai. (Dhyan rahe: Licence approval aur eligibility applicable government rules aur RTO par depend karti hai).',
  },
  {
    id: 'faq-7',
    question: 'Course book kaise karein?',
    answer:
      'Aap seedhe phone number 7300436787 par Call kar sakte hain ya WhatsApp par message bhej kar apna preferred batch timing aur start date discuss kar sakte hain.',
  },
  {
    id: 'faq-8',
    question: 'Location kahan hai?',
    answer:
      'Shree Ambhey Motor Driving P-19, Durga Vihar B, Nangal Jaisa Bhora Niwaru Road Jaipur, Rajasthan par situated hai. Aap Google Maps link se direct navigation le sakte hain.',
  },
];

// Road Safety Education Points
export const SAFETY_POINTS = [
  {
    title: 'Seatbelt First Habit',
    desc: 'Gaadi start karne se pehle seatbelt lock karna compulsory safety discipline hai.',
  },
  {
    title: 'Regular Mirror Scanning',
    desc: 'Har 8-10 seconds mein rear aur side mirrors par glance daal kar road surrounding ka pata rakhein.',
  },
  {
    title: 'Safe Stopping Distance',
    desc: 'Aage chal rahi gaadi se hamesha safe buffer space banaye rakhein taaki emergency braking mein collision se bacha ja sake.',
  },
  {
    title: 'Speed Breaker Caution',
    desc: 'Colony speed breakers se pehle car slow karke lower gear mein cross karein taaki suspension aur control stable rahe.',
  },
  {
    title: 'Defensive Driving Awareness',
    desc: 'Blind corners aur chowk par proactive alert rehna aur achanak aane wale pedestrians ka anticipation karna.',
  },
  {
    title: 'Dual-Control Peace of Mind',
    desc: 'Instructor ke paas co-driver dual pedals rehte hain, jisse beginner kisi bhi critical situation mein 100% safe rehta hai.',
  },
];

// Why Learners Choose Practical Training Points
export const WHY_CHOOSE_POINTS = [
  {
    title: 'Real Road Practical Training',
    desc: 'Khali ground ki jagah actual Jaipur traffic aur colony streets par practice.',
  },
  {
    title: 'Daily ~8 km Driving Practice',
    desc: 'Rozana generous distance cover karna taaki steering aur clutch reflexes naturally develop hon.',
  },
  {
    title: '₹3,000 Complete Transparent Fee',
    desc: 'Full 15 Days Master Course fee mein sab kuch include hai bina kisi hidden surcharge ke.',
  },
  {
    title: 'Doorstep Free Pickup',
    desc: 'Training sessions ke scheduled batch timing par convenience ke liye doorstep pickup.',
  },
  {
    title: 'Beginner-Friendly Environment',
    desc: 'Calm, patient aur supportive atmosphere taaki nervousness door ho sake.',
  },
  {
    title: 'Licence Process Guidance',
    desc: 'RTO application aur driving test requirements ko samajhne mein clear guidance.',
  },
];

