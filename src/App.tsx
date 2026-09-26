import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { MasterCourse } from './components/MasterCourse';
import { PracticalDrivingTraining } from './components/PracticalDrivingTraining';
import { Features } from './components/Features';
import { PracticeVisuals } from './components/PracticeVisuals';
import { Pickup } from './components/Pickup';
import { LicenceGuidance } from './components/LicenceGuidance';
import { TrainingProcess } from './components/TrainingProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Safety } from './components/Safety';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { FinalCTA } from './components/FinalCTA';
import { LotusStudioSection } from './components/LotusStudioSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryModal } from './components/EnquiryModal';
import { updatePageSEO } from './utils/seo';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const meta = updatePageSEO(path);

      if (meta.targetSectionId && meta.targetSectionId !== 'home') {
        setTimeout(() => {
          const el = document.getElementById(meta.targetSectionId!);
          if (el) {
            const topOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 150);
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#1a1a1a] selection:bg-red-600 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Full-Width Hero Section with Video Background */}
        <Hero onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Trust Metric Strip */}
        <TrustStrip />

        {/* About Section */}
        <About />

        {/* Master Course Pricing & Inclusions Card */}
        <MasterCourse onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Dedicated Practical Driving Training Visual Section (Steering, Parking, Reverse, Road, Traffic, Vehicle Control) */}
        <PracticalDrivingTraining />

        {/* 6 Key Feature Cards */}
        <Features />

        {/* Driving Practice Ko Samjhiye: Interactive Controls + 10 Practical Topics */}
        <PracticeVisuals />

        {/* Dedicated Free Pickup Section */}
        <Pickup onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Dedicated Licence Guidance Section */}
        <LicenceGuidance />

        {/* 5-Step Training Journey Timeline */}
        <TrainingProcess onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Road Safety Education & Habits */}
        <Safety />

        {/* Academy Location & Google Maps Card */}
        <Location />

        {/* Frequently Asked Questions Accordion */}
        <FAQ />

        {/* Primary Contact CTA Block */}
        <ContactCTA />

        {/* Final Conversion CTA Banner */}
        <FinalCTA onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      </main>

      {/* Dedicated Lotus Web Studio Description Section at Very Bottom */}
      <LotusStudioSection />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Sticky Bar + Desktop Floating Contacts + Right-Side Floating Lotus Web Studio Badge */}
      <FloatingActions />

      {/* Interactive Booking / Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
