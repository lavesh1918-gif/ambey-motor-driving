import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About', href: '#about', path: '/about' },
    { name: 'Master Course', href: '#master-course', path: '/course', badge: '₹3,000' },
    { name: 'Practice', href: '#training', path: '/training' },
    { name: 'Pickup', href: '#pickup', path: '/pickup' },
    { name: 'Journey', href: '#journey', path: '/training' },
    { name: 'Location', href: '#location', path: '/location' },
    { name: 'FAQ', href: '#faq', path: '/faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '#home', '/')}
            className="group flex items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
            aria-label="Shree Ambhey Motor Driving Home"
          >
            <Logo variant="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.href, link.path)}
                className="relative px-2.5 py-2 text-sm font-semibold text-neutral-700 hover:text-red-600 transition-colors rounded-md group"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-red-50 text-red-600 border border-red-200 rounded">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTAs: Highly visible CALL NOW button in the TOP RIGHT */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Highly Visible Call Button: Call Now (7300436787) */}
            <a
              href={BUSINESS_INFO.callUrl}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-extrabold text-white bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg rounded-xl transition-all cursor-pointer active:scale-95"
              aria-label={`Call Shree Ambhey Motor Driving at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-white animate-pulse" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all active:scale-95"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
              <span>WhatsApp Now</span>
            </a>

            {/* Book Class CTA */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-xl transition-all cursor-pointer"
            >
              <span>Book Class</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </button>
          </div>

          {/* Mobile Header Action */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.callUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-lg shadow-sm active:scale-95"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Fully Opaque & High Contrast) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.href, link.path)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-red-600 rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-red-50 text-red-600 border border-red-200 rounded">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.callUrl}
                className="flex items-center justify-center gap-2 py-3 px-3 text-sm font-bold text-white bg-red-600 rounded-lg shadow-sm"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg shadow-xs cursor-pointer"
            >
              <span>Book 15 Days Master Course (₹3,000)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
