export interface BrandDNA {
  id: string;
  name: string;
  industry?: string;
  logoUrl?: string;
  websiteUrl?: string;
  socialAccounts?: {
    platform: 'instagram' | 'linkedin' | 'facebook' | 'twitter' | 'other';
    url: string;
  }[];
  
  // Brand Copy
  description?: string;
  tagline?: string;
  mission?: string;
  vision?: string;
  values?: {
    label: string;
    description: string;
  }[];

  // Voice & Positioning
  toneOfVoice?: {
    description: string;
    keywords: string[];
  };
  audience?: string;
  usp?: string;
  primaryCta?: string;

  // Visual Identity
  colors?: {
    primary: string;
    secondary: string[];
    accent?: string;
  };
  typography?: {
    display: string;
    body: string;
  };
  visualStyle?: string;

  // Content Guidelines
  contentPillars?: string[];
  avoidTopics?: string[];
  postingPlatforms?: string[];
}

export type BrandDNASetupPath = 'import' | 'manual';

export interface BrandSetupState {
  path: BrandDNASetupPath | null;
  step: 'selection' | 'input' | 'processing' | 'review' | 'success';
  importUrls: string[];
  manualData: {
    logo?: File | string;
    name?: string;
    description?: string;
  };
}

export interface Asset {
  id: string;
  name: string;
  url: string;
  category: 'logos' | 'images' | 'models' | 'social-designs' | 'videos' | 'directions' | 'brand-space';
  format: string;
  size: number;
  createdAt: string;
}

export interface StorageStats {
  used: number;
  limit: number;
  unit: 'MB' | 'GB';
}
