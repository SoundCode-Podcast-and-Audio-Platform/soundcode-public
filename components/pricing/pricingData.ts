export type Audience = 'listener' | 'creator';
export type BillingCycle = 'monthly' | 'annual';

export interface PlanTier {
  id: string;
  planCode: string;
  name: string;
  subtitle: string;
  audience: Audience;
  priceMonthly: string;
  priceAnnual: string;
  periodMonthly: string;
  periodAnnual: string;
  badge?: string;
  isPopular?: boolean;
  accent: 'cyan' | 'purple' | 'amber' | 'emerald';
  perks: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const LISTENER_TIERS: PlanTier[] = [
  {
    id: 'free',
    planCode: 'listener_free',
    name: 'Free',
    subtitle: 'Essential faith streaming for everyone',
    audience: 'listener',
    priceMonthly: '$0',
    priceAnnual: '$0',
    periodMonthly: 'forever',
    periodAnnual: 'forever',
    accent: 'cyan',
    perks: [
      'Standard 128 kbps streaming with 48 kbps Data Saver mode',
      'Values-safe, vetted faith and partner promotional listening',
      'Personalized Made For You and Kingly Curated feeds',
      'Synchronized worship lyrics and sermon transcripts',
      'Continuous radio, Up-Next queue, and playback resume',
      'Join unlimited listening parties & host close friend sessions',
    ],
    ctaLabel: 'Get Started Free',
    ctaHref: '/faq',
  },
  {
    id: 'plus',
    planCode: 'listener_plus_monthly',
    name: 'Plus',
    subtitle: 'Studio-grade audio with zero interruptions',
    audience: 'listener',
    priceMonthly: '$4.99',
    priceAnnual: '$49.99',
    periodMonthly: '/ mo',
    periodAnnual: '/ yr',
    badge: 'MOST POPULAR',
    isPopular: true,
    accent: 'cyan',
    perks: [
      '100% Ad-Free listening experience across all music & podcasts',
      'High-Fidelity 320 kbps lossless audio streaming',
      'Encrypted offline device downloads for songs and series',
      'Discovery Mode Slider: dial from Familiar to Adventurous',
      'Host Community Listening Parties for up to 50 listeners',
      'Custom Audio Equalizer presets (Bass Boost, Sermon Clarity)',
      'Verified Plus subscriber badge on profile and room chats',
    ],
    ctaLabel: 'Start 30-Day Trial',
    ctaHref: '/faq',
  },
  {
    id: 'duo',
    planCode: 'listener_duo_monthly',
    name: 'Duo',
    subtitle: 'Two accounts on one discounted bill',
    audience: 'listener',
    priceMonthly: '$7.99',
    priceAnnual: '$79.99',
    periodMonthly: '/ mo',
    periodAnnual: '/ yr',
    accent: 'purple',
    perks: [
      '2 independent Kingly Plus accounts on one single subscription',
      'Separate private libraries, saved favorites, and downloads',
      'Individual Discovery Mode Sliders for both members',
      'Automated Shared Duo Mix playlist updated weekly',
      'Up to 50 listeners per hosted party for each member',
    ],
    ctaLabel: 'Get Kingly Duo',
    ctaHref: '/faq',
  },
  {
    id: 'family',
    planCode: 'listener_family_monthly',
    name: 'Family',
    subtitle: 'Up to six accounts for the household',
    audience: 'listener',
    priceMonthly: '$11.99',
    priceAnnual: '$119.99',
    periodMonthly: '/ mo',
    periodAnnual: '/ yr',
    accent: 'amber',
    perks: [
      'Up to 6 independent Kingly Plus accounts under one roof',
      'Separate offline downloads and playlists for every member',
      'Family safety filters and parent administrator controls',
      'Automated Family Mix playlist blending favorite worship tracks',
      'Up to 50 listeners per hosted party for each family member',
    ],
    ctaLabel: 'Get Kingly Family',
    ctaHref: '/faq',
  },
];

export const CREATOR_TIERS: PlanTier[] = [
  {
    id: 'creator_starter',
    planCode: 'creator_starter',
    name: 'Starter',
    subtitle: 'Publish audio and build your reach',
    audience: 'creator',
    priceMonthly: '$0',
    priceAnnual: '$0',
    periodMonthly: 'free application',
    periodAnnual: 'free application',
    accent: 'cyan',
    perks: [
      '300 minutes (5 hours) lifetime total audio/video upload storage',
      'Standard audio processing and automated ingestion queue',
      'Basic creator analytics: aggregate plays and follower counts',
      'Public creator profile, discography, bio, and ministry links',
      'Publish time-synchronized lyrics and podcast transcripts',
      'Host Community Listening Parties for up to 10 listeners',
      'Receive fan gifts and offerings via official platform channels',
    ],
    ctaLabel: 'Apply as Creator',
    ctaHref: '/creator-guidelines',
  },
  {
    id: 'creator_growth',
    planCode: 'creator_growth_monthly',
    name: 'Growth',
    subtitle: 'Expand reach with richer analytics',
    audience: 'creator',
    priceMonthly: '$9.99',
    priceAnnual: '$99.99',
    periodMonthly: '/ mo',
    periodAnnual: '/ yr',
    accent: 'amber',
    perks: [
      '600 minutes/month (10 hours/month) recurring upload quota',
      'Listener Completion & Drop-Off Analytics (track drop points)',
      'Host Community Listening Parties for up to 100 listeners',
      'Exclusive Pre-Release & Draft premieres inside live parties',
      'Receive fan gifts and tokens with reduced platform fees',
    ],
    ctaLabel: 'Get Creator Growth',
    ctaHref: '/creator-guidelines',
  },
  {
    id: 'studio_pro',
    planCode: 'creator_pro_monthly',
    name: 'Studio Pro',
    subtitle: 'Unlimited publishing for producers',
    audience: 'creator',
    priceMonthly: '$24.99',
    priceAnnual: '$249.99',
    periodMonthly: '/ mo',
    periodAnnual: '/ yr',
    badge: 'POPULAR FOR ARTISTS',
    isPopular: true,
    accent: 'emerald',
    perks: [
      'Unlimited audio and video upload capacity & catalog storage',
      'Priority master audio transcoding and accelerated moderation queue',
      'Deep Audience & Source Attribution Analytics (search vs feed)',
      'Host large Listening Parties for up to 500 listeners',
      'Verified Studio Pro Creator Badge on profile and search',
      'Fan offerings and tips with lower platform fee structure',
    ],
    ctaLabel: 'Get Studio Pro',
    ctaHref: '/creator-guidelines',
  },
  {
    id: 'creator_enterprise',
    planCode: 'creator_enterprise_monthly',
    name: 'Enterprise',
    subtitle: 'Multi-seat access for ministries',
    audience: 'creator',
    priceMonthly: '$79.99',
    priceAnnual: '$799.99',
    periodMonthly: '/ mo',
    periodAnnual: '/ yr',
    accent: 'purple',
    perks: [
      'Multi-Member Team Access with 10 staff/editor seats for ministries',
      'Network-wide exportable analytics across all series and artists',
      'Broadcast-Scale Listening Parties (up to 5,000 listeners)',
      'Pre-scheduled multi-series release calendar and draft premieres',
      'Lowest VIP platform fee on fan offerings and ministry gifts',
      'Expedited media verification and dedicated publishing queue',
    ],
    ctaLabel: 'Learn in Guidelines',
    ctaHref: '/creator-guidelines',
  },
];

export interface ComparisonRow {
  feature: string;
  category: string;
  free: string | boolean;
  plus: string | boolean;
  duo: string | boolean;
  family: string | boolean;
}

export const LISTENER_COMPARISON: ComparisonRow[] = [
  {
    feature: 'Audio Streaming Quality',
    category: 'Audio Experience',
    free: '128 kbps (Standard)',
    plus: '320 kbps (Lossless Hi-Fi)',
    duo: '320 kbps (Lossless Hi-Fi)',
    family: '320 kbps (Lossless Hi-Fi)',
  },
  {
    feature: 'Ad-Free Playback',
    category: 'Audio Experience',
    free: false,
    plus: true,
    duo: true,
    family: true,
  },
  {
    feature: 'Offline Encrypted Downloads',
    category: 'Audio Experience',
    free: false,
    plus: true,
    duo: true,
    family: true,
  },
  {
    feature: 'Discovery Mode Slider',
    category: 'Discovery & Personalization',
    free: false,
    plus: true,
    duo: true,
    family: true,
  },
  {
    feature: 'Listening Party Capacity',
    category: 'Community',
    free: 'Up to 5 listeners',
    plus: 'Up to 50 listeners',
    duo: 'Up to 50 listeners',
    family: 'Up to 50 listeners',
  },
  {
    feature: 'Custom Audio Equalizer & Crossfade',
    category: 'Audio Experience',
    free: false,
    plus: true,
    duo: true,
    family: true,
  },
  {
    feature: 'Synchronized Lyrics & Transcripts',
    category: 'Discovery & Personalization',
    free: true,
    plus: true,
    duo: true,
    family: true,
  },
  {
    feature: 'Included Independent Accounts',
    category: 'Account & Family',
    free: '1 Account',
    plus: '1 Account',
    duo: '2 Accounts',
    family: 'Up to 6 Accounts',
  },
  {
    feature: 'Family Content Filtering Controls',
    category: 'Account & Family',
    free: false,
    plus: false,
    duo: false,
    family: true,
  },
];
