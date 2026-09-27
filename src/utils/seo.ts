export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  targetSectionId?: string;
  keywords?: string[];
}

export const SITE_DOMAIN = 'https://shree-ambey-motor-driving-school.com';

export const ROUTES_METADATA: Record<string, PageMeta> = {
  '/': {
    title: 'Shree Ambhey Motor Driving | Car Driving School in Jaipur',
    description:
      'Shree Ambhey Motor Driving in Jaipur offers a 15 Days Master Driving Course for ₹3,000 with daily ~8 km practical training, free doorstep pickup, and licence guidance.',
    canonicalPath: '/',
    targetSectionId: 'home',
    keywords: [
      'driving school in Jaipur',
      'car driving school Jaipur',
      'driving classes in Jaipur',
      'car driving lessons Jaipur',
    ],
  },
  '/about': {
    title: 'About Us | Shree Ambhey Motor Driving School Jaipur',
    description:
      'Learn about Shree Ambhey Motor Driving Academy in Jaipur, guided by experienced instructor Satyanarayan Sharma with beginner-friendly practical training.',
    canonicalPath: '/about',
    targetSectionId: 'about',
    keywords: [
      'about driving school Jaipur',
      'driving instructor Jaipur',
      'experienced driving trainer Jaipur',
    ],
  },
  '/course': {
    title: '15 Days Master Driving Course (₹3,000) | Shree Ambhey Motor Driving Jaipur',
    description:
      'Enroll in our 15 Days Master Driving Course in Jaipur for ₹3,000. Includes daily ~8 km road practice, dual-control safety, free pickup, and licence advisory.',
    canonicalPath: '/course',
    targetSectionId: 'master-course',
    keywords: [
      'driving course Jaipur',
      '15 days driving class Jaipur',
      'driving school fees Jaipur',
      'affordable car driving classes Jaipur',
    ],
  },
  '/services': {
    title: 'Car Driving Classes & Training Services in Jaipur | Shree Ambhey',
    description:
      'Explore practical driving training services in Jaipur: clutch control, steering precision, reverse parking, colony driving, and learner licence assistance.',
    canonicalPath: '/services',
    targetSectionId: 'training',
    keywords: [
      'driving training services Jaipur',
      'driving classes Jaipur',
      'car driving training Jaipur',
    ],
  },
  '/training': {
    title: 'Practical Driving Training & Lessons Jaipur | Shree Ambhey Motor Driving',
    description:
      'Master 10 practical driving topics including steering control, ABC pedals, gear shifting, parallel parking, and traffic navigation on Jaipur roads.',
    canonicalPath: '/training',
    targetSectionId: 'training',
    keywords: [
      'practical driving training Jaipur',
      'car driving lessons Jaipur',
      'learn car driving in Jaipur',
    ],
  },
  '/pickup': {
    title: 'Free Doorstep Pickup Driving Classes Jaipur | Shree Ambhey Motor Driving',
    description:
      'Enjoy hassle-free doorstep pickup facility for daily driving classes in Jaipur with Shree Ambhey Motor Driving Academy.',
    canonicalPath: '/pickup',
    targetSectionId: 'pickup',
    keywords: [
      'free pickup driving school Jaipur',
      'doorstep driving classes Jaipur',
    ],
  },
  '/licence': {
    title: 'Driving Licence Guidance & RTO Test Advisory Jaipur | Shree Ambhey',
    description:
      'Get clear guidance and assistance for learner licence applications and RTO driving test preparation in Jaipur.',
    canonicalPath: '/licence',
    targetSectionId: 'licence',
    keywords: [
      'driving licence assistance Jaipur',
      'learner licence guidance Jaipur',
      'RTO test preparation Jaipur',
    ],
  },
  '/location': {
    title: 'Driving School Location Niwaru Road Jaipur | Shree Ambhey Motor Driving',
    description:
      'Find Shree Ambhey Motor Driving at P-19, Durga Vihar B, Nangal Jaisa Bhora Niwaru Road, Jaipur. Easy access and Google Maps navigation.',
    canonicalPath: '/location',
    targetSectionId: 'location',
    keywords: [
      'driving school Niwaru Road Jaipur',
      'driving school location Jaipur',
    ],
  },
  '/faq': {
    title: 'Driving School FAQs & Fees | Shree Ambhey Motor Driving Jaipur',
    description:
      'Got questions about course fees (₹3,000), 15-day schedule, daily km, pickup, or licence support? Read our driving school FAQs.',
    canonicalPath: '/faq',
    targetSectionId: 'faq',
    keywords: [
      'driving school FAQ Jaipur',
      'car driving classes questions',
    ],
  },
  '/contact': {
    title: 'Contact Shree Ambhey Motor Driving Jaipur | Call 7300436787',
    description:
      'Contact Shree Ambhey Motor Driving Academy in Jaipur. Call or WhatsApp 7300436787 to book your 15 Days Master Driving Course batch.',
    canonicalPath: '/contact',
    targetSectionId: 'contact',
    keywords: [
      'contact driving school Jaipur',
      'book driving classes Jaipur',
    ],
  },
};

// Aliases for common user entries
const ROUTE_ALIASES: Record<string, string> = {
  '/home': '/',
  '/courses': '/course',
  '/master-course': '/course',
  '/pricing': '/course',
  '/practice': '/training',
  '/lessons': '/training',
  '/license': '/licence',
  '/address': '/location',
  '/map': '/location',
  '/faqs': '/faq',
  '/enquiry': '/contact',
  '/book': '/contact',
};

export function getMetaForPath(pathname: string): PageMeta {
  // Normalize path (strip trailing slash except for root)
  let normalized = pathname.toLowerCase();
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  const resolved = ROUTE_ALIASES[normalized] || normalized;
  return (
    ROUTES_METADATA[resolved] || {
      title: 'Shree Ambhey Motor Driving | Car Driving School in Jaipur',
      description:
        'Shree Ambhey Motor Driving in Jaipur offers a 15 Days Master Driving Course for ₹3,000 with daily practical training, free pickup and licence guidance.',
      canonicalPath: '/',
      targetSectionId: 'home',
    }
  );
}

export function updatePageSEO(pathname: string): PageMeta {
  const meta = getMetaForPath(pathname);
  const canonicalUrl = `${SITE_DOMAIN}${meta.canonicalPath === '/' ? '/' : meta.canonicalPath}`;

  // Update Title
  document.title = meta.title;

  // Update Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.description);

  // Update Canonical
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', canonicalUrl);

  // Update OpenGraph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  // Update Twitter
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', meta.title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', meta.description);

  // Ensure index, follow
  let robotsTag = document.querySelector('meta[name="robots"]');
  if (!robotsTag) {
    robotsTag = document.createElement('meta');
    robotsTag.setAttribute('name', 'robots');
    document.head.appendChild(robotsTag);
  }
  robotsTag.setAttribute('content', 'index, follow');

  // Send Google Analytics page_view event on SPA route changes
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
      page_title: meta.title,
      page_location: canonicalUrl,
      page_path: meta.canonicalPath,
    });
  }

  return meta;
}
