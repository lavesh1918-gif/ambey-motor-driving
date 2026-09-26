export type GalleryCategory = 'all' | 'practice' | 'interior' | 'road' | 'parking' | 'safety';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'practice' | 'interior' | 'road' | 'parking' | 'safety';
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrainingStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PracticeTopic {
  id: string;
  number: string;
  title: string;
  hindiTitle: string;
  category: string;
  description: string;
  keyRule: string;
  imageUrl?: string;
  iconName: string;
  tips: string[];
}
