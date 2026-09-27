# SEO Keyword Usage & Implementation Map

This document maps all 20 categories of keywords (1,000+ unique keywords total) to their target sections, pages, headings, body copy, FAQs, metadata, and structured data on the Shree Ambhey Motor Driving School website.

---

## Category Mapping Overview

| Category # | Category Name | Primary Search Intent | Target Page / Section | Implementation Types |
| :--- | :--- | :--- | :--- | :--- |
| **Cat 1** | Brand Keywords | Navigational / Brand Discovery | Global (Navbar, Header, Footer, Hero) | Title, Logo alt, H1, Schema Organization, Body |
| **Cat 2** | Brand + Jaipur | Local Brand Search | Home, About, Location, Footer | Page Titles, Meta Descriptions, H1/H2, Schema LocalBusiness |
| **Cat 3** | Driving School in Jaipur | High-Intent Commercial / Local | Hero, About, TrustStrip, Location | H1, Subtitles, Meta Descriptions, OG Tags, Body |
| **Cat 4** | Car Driving Classes | Service Discovery | PracticalDrivingTraining, Course | H2, H3, Service cards, Bullet points, Alt text |
| **Cat 5** | Beginner Driving | Informational / Educational | About, Features, WhyChooseUs | H2/H3, Philosophy card, Pedagogical copy, FAQ |
| **Cat 6** | Practical Driving Training | Skill-Specific Commercial | PracticalDrivingTraining, PracticeVisuals | H2/H3 module titles, Focus area bullets, Technique tags |
| **Cat 7** | Driving Course | Educational / Course Search | MasterCourse, TrainingProcess | Section headers, Course overview copy, Comparison |
| **Cat 8** | Master Driving Course | Product Search / Commercial | MasterCourse (`#master-course`) | Course Title H2, Badge, Highlights, Price tag, Schema Offer |
| **Cat 9** | ₹3,000 / Affordable Course | Price Sensitivity / Budget Search | MasterCourse, TrustStrip, Pricing Badge | Price display, Value proposition copy, FAQ answers |
| **Cat 10** | 15-Day Course | Duration / Timeline Intent | MasterCourse, TrainingProcess, Hero | 15-Day Roadmap, Step-by-step milestones, Badges |
| **Cat 11** | Free Pickup | Convenience / Feature Intent | Pickup (`#pickup`), TrustStrip, Hero | Dedicated Pickup Section H2, Step cards, FAQ item |
| **Cat 12** | Daily Practice / ~8 KM | Rigor / Mileage Verification | Hero Highlights, About Stats, Course Features | Stat pills, Module description, Value summary |
| **Cat 13** | Driving Instructor | Authority / Trust Verification | About (`#about`), Instructor Box | Instructor card, Satyanarayan Sharma bio, Schema Person |
| **Cat 14** | Driving Licence / RTO Guidance | Compliance / Regulatory Assistance | LicenceGuidance (`#licence`), FAQ | Clear advisory disclaimer, RTO steps, Parivahan guidance |
| **Cat 15** | Driving Test Preparation | Skill Assessment / Test Prep | LicenceGuidance, TrainingProcess, FAQ | Automated track prep tips, H & 8 track mentions, FAQ |
| **Cat 16** | Local / Nearby Search | Geotargeted Proximity Search | Location (`#location`), Geo Meta Tags | Geo tags, Google Maps link, Address card, Schema |
| **Cat 17** | Durga Vihar / Local Area | Hyper-Local Neighborhood Intent | Location (`#location`), Hero Badge | Niwaru Road / Durga Vihar B mentions, Landmarking |
| **Cat 18** | Jaipur Road / Traffic Training | Real-World Urban Driving | Safety (`#safety`), PracticalDrivingTraining | Road safety rules, Traffic etiquette, Colony turns |
| **Cat 19** | Question / Voice Search | Conversational / Voice Search | FAQ (`#faq`), JSON-LD FAQPage Schema | FAQ question headers, Accordion items, Schema mainEntity |
| **Cat 20** | Long-Tail / Hinglish | Conversational Hindi-English Query | FAQ Answers, Hero Subtitles, Testimonials/Tips | Natural bilingual explanations, Common query phrasing |

---

## Detailed Section-by-Section Keyword Integration Plan

### 1. Homepage Hero (`Hero.tsx`)
- **Primary H1:** "Shree Ambhey Motor Driving School in Jaipur – Professional Car Driving Training"
- **Keywords Incorporated:** 
  - `Shree Ambhey Motor Driving School Jaipur` (Cat 2)
  - `car driving school Jaipur` (Cat 3)
  - `15 Days Master Driving Course` (Cat 8, 10)
  - `₹3,000 driving course Jaipur` (Cat 9)
  - `approximately 8 km driving practice` (Cat 12)
  - `free pickup driving classes Jaipur` (Cat 11)
  - `driving school Durga Vihar B Niwaru Road` (Cat 17)
- **Image Alt Tags:**
  - Hero Background Poster: `"Car driving training session on Jaipur road with dual-control vehicle - Shree Ambhey Motor Driving"`
  - Brand Logo: `"Shree Ambhey Motor Driving School Jaipur Official Logo"`

### 2. About Section (`About.tsx`)
- **Primary H2:** "Practical Driving Academy in Jaipur – Driving Sirf Gaadi Chalana Nahi Hai"
- **Keywords Incorporated:**
  - `driving instructor Satyanarayan Sharma (Satish Sharma)` (Cat 13)
  - `beginner driving classes Jaipur` (Cat 5)
  - `learn driving from zero` (Cat 5)
  - `patient driving instructor Jaipur` (Cat 13)
  - `dual pedal safety driving training` (Cat 6)
  - `practical driving school in Jaipur` (Cat 3)

### 3. Master Course Section (`MasterCourse.tsx`)
- **Primary H2:** "Master Driving Course in Jaipur (₹3,000 Complete Package)"
- **Keywords Incorporated:**
  - `15 days driving course Jaipur` (Cat 10)
  - `₹3,000 Master Driving Course` (Cat 8, 9)
  - `daily driving practice Jaipur` (Cat 12)
  - `~8 km daily driving practice` (Cat 12)
  - `free pickup facility driving school` (Cat 11)
  - `driving licence guidance Jaipur` (Cat 14)
  - `dual control car practical practice` (Cat 6)

### 4. Practical Training Modules (`PracticalDrivingTraining.tsx`)
- **Primary H2:** "Practical Car Driving Lessons & Skill Modules in Jaipur"
- **Keywords Incorporated:**
  - `steering control practical training` (Cat 6)
  - `clutch biting point practical practice` (Cat 6)
  - `parallel parking practical training Jaipur` (Cat 6, 15)
  - `traffic driving practice Jaipur` (Cat 18)
  - `hill stop and start driving test preparation` (Cat 15)
  - `Jaipur road driving training` (Cat 18)

### 5. Doorstep Pickup Section (`Pickup.tsx`)
- **Primary H2:** "Free Doorstep Pickup Driving Classes in Jaipur"
- **Keywords Incorporated:**
  - `driving school with pickup Jaipur` (Cat 11)
  - `doorstep pickup driving classes Jaipur` (Cat 11)
  - `home pickup driving school Jaipur` (Cat 11)
  - `free pickup driving school Niwaru Road` (Cat 11, 17)
  - `convenient pickup driving course Jaipur` (Cat 11)

### 6. Licence Guidance Section (`LicenceGuidance.tsx`)
- **Primary H2:** "Driving Licence Guidance & RTO Test Advisory Jaipur"
- **Keywords Incorporated:**
  - `driving licence guidance Jaipur` (Cat 14)
  - `RTO driving test preparation` (Cat 15)
  - `learner licence guidance Jaipur` (Cat 14)
  - `Sarathi Parivahan guidance Jaipur` (Cat 14)
  - `RTO automated driving test training` (Cat 15)
  - *Compliance Disclaimer preserved:* Official licence approval strictly depends on government norms, documents, and clearing the mandatory RTO test.

### 7. Location & Service Area Section (`Location.tsx`)
- **Primary H2:** "Find Shree Ambhey Motor Driving – Durga Vihar B, Niwaru Road, Jaipur"
- **Keywords Incorporated:**
  - `driving school Durga Vihar B Jaipur` (Cat 17)
  - `driving school Niwaru Road Nangal Jaisa Bhora` (Cat 17)
  - `car driving school near me` (Cat 16)
  - `nearest driving school in Jaipur` (Cat 16)
  - `driving school near Jhotwara Jaipur` (Cat 16)

### 8. Expanded FAQ Section (`FAQ.tsx` & Structured Data)
- **Primary H2:** "Frequently Asked Questions — Car Driving Classes & Fees in Jaipur"
- **Keywords Incorporated (Natural Questions from Cat 19 & Hinglish from Cat 20):**
  - Q1: `Master Course ki fees kitni hai? (₹3,000 driving course fee Jaipur)`
  - Q2: `Course kitne din ka hai? (15 days driving course Jaipur)`
  - Q3: `Daily kitni driving practice hoti hai? (~8 km daily driving practice)`
  - Q4: `Kya free doorstep pickup available hai? (driving school with pickup Jaipur)`
  - Q5: `Kya beginners learn driving from zero join kar sakte hain?`
  - Q6: `Driving licence aur RTO test ke liye kya guidance milti hai?`
  - Q7: `Jaipur mein driving class batch timing kya hai?`
  - Q8: `Training car mein safety features (dual controls) kya hain?`
  - Q9: `Location aur admission process kahan aur kaise complete karein?`

### 9. Metadata & Technical Integration (`index.html`, `src/utils/seo.ts`)
- Schema types: `LocalBusiness`, `AutomotiveBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Offer`
- Canonical: `https://shree-ambey-motor-driving-school.com/`
- Sitemap: `https://shree-ambey-motor-driving-school.com/sitemap.xml`
- Robots: `https://shree-ambey-motor-driving-school.com/robots.txt`
