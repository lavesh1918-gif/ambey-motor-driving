import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageCircle, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About Us', href: '#about', path: '/about' },
    { name: 'Master Course (₹3,000)', href: '#master-course', path: '/course' },
    { name: 'Practical Driving Training', href: '#training', path: '/training' },
    { name: 'Free Doorstep Pickup', href: '#pickup', path: '/pickup' },
    { name: 'Licence Guidance', href: '#licence', path: '/licence' },
    { name: 'Location & Map', href: '#location', path: '/location' },
    { name: 'FAQ', href: '#faq', path: '/faq' },
    { name: 'Contact & Admissions', href: '#contact', path: '/contact' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    path: string
  ) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    updatePageSEO(path);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-24 md:pb-16 border-t border-neutral-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-5">
            <Logo variant="dark" />

            <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Shree Ambhey Motor Driving provides structured 15 Days practical driving training with daily road
              practice, free pickup and patient instruction in Jaipur.
            </p>

            {/* Address */}
            <div className="mt-4 text-xs text-neutral-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={BUSINESS_INFO.callUrl} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.path)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Summary & Action CTAs Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Connect With Us
            </h4>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 mb-4">
              <div className="text-xs font-bold text-red-500">MASTER DRIVING COURSE</div>
              <div className="text-xl font-extrabold text-white mt-0.5">₹3,000 / 15 Days</div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Daily ~8 km practice • Free Pickup • Licence guidance
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={BUSINESS_INFO.callUrl}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-800 text-neutral-300 font-medium text-xs hover:bg-neutral-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-red-400" />
                <span>Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Lotus Web Studio Secondary Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            <div className="text-[11px] text-neutral-600 mt-0.5">
              Licence approval/process is subject to official government and RTO regulations.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-neutral-400">
            <span>
              Website Managed by{' '}
              <a
                href={BUSINESS_INFO.lotusWebStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white underline underline-offset-2 transition-colors font-medium"
              >
                Lotus Web Studio
              </a>
            </span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span className="text-[11px] text-neutral-500">
              Lotus Studio Contact:{' '}
              <a
                href={`tel:${BUSINESS_INFO.lotusPhone}`}
                className="text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                {BUSINESS_INFO.lotusPhone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
