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
    subtitle: 'Essential faith-based streaming for everyone',
    audience: 'listener',
    priceMonthly: '$0',
    priceAnnual: '$0',
    periodMonthly: 'forever',
    periodAnnual: 'forever',
    accent: 'cyan',
    perks: [
      'Standard 128 kbps audio streaming with 48 kbps Data Saver mode',
      'Values-safe, vetted faith and partner promotional listening',
      'Personalized Made For You and Kingly Curated discovery feeds',
      'Synchronized worship lyrics and sermon/podcast transcripts',
      'Up-Next queue lineup, continuous radio, and cross-device resume',
      'Join unlimited listening parties & host close friend sessions (up to 5 listeners)',
    ],
    ctaLabel: 'Sign Up Free',
    ctaHref: '/faq',
  },
  {
    id: 'plus',
    planCode: 'listener_plus_monthly',
    name: 'Plus',
    subtitle: 'Studio-grade fidelity with zero interruptions',
    audience: 'listener',
    priceMonthly: '$4.99',
    priceAnnual: '$49.99',
    periodMonthly: 'per month',
    periodAnnual: 'per year (~17% off)',
    badge: 'MOST POPULAR',
    isPopular: true,
    accent: 'cyan',
    perks: [
      '100% Ad-Free listening experience across all music and podcasts',
      'High-Fidelity 320 kbps lossless audio streaming',
      'Encrypted offline device downloads for songs, albums, and series',
      'Discovery Mode Slider: dial from Familiar to Balanced to Adventurous',
      'Host Community Listening Parties for up to 50 listeners with synced crossfade',
      'Custom Audio Equalizer presets (Bass Boost, Vocal & Sermon clarity)',
      'Verified Plus subscriber badge on profile and live room chats',
    ],
    ctaLabel: 'Start 30-Day Free Trial',
    ctaHref: '/faq',
  },
  {
    id: 'duo',
    planCode: 'listener_duo_monthly',
    name: 'Duo',
    subtitle: 'Two independent accounts under one simple bill',
    audience: 'listener',
    priceMonthly: '$7.99',
    priceAnnual: '$79.99',
    periodMonthly: 'per month',
    periodAnnual: 'per year (~17% off)',
    accent: 'purple',
    perks: [
      '2 independent Kingly Plus accounts on one discounted subscription',
      'Separate private libraries, saved favorites, downloads, and search histories',
      'Individual Discovery Mode Sliders and personalized feeds for both members',
      'Automated Shared Duo Mix playlist updated weekly with favorite tracks',
      'Up to 50 listeners per hosted Listening Party for each member',
    ],
    ctaLabel: 'Get Kingly Duo',
    ctaHref: '/faq',
  },
  {
    id: 'family',
    planCode: 'listener_family_monthly',
    name: 'Family',
    subtitle: 'Sanctuary of sound for up to six household members',
    audience: 'listener',
    priceMonthly: '$11.99',
    priceAnnual: '$119.99',
    periodMonthly: 'per month',
    periodAnnual: 'per year (~17% off)',
    accent: 'amber',
    perks: [
      'Up to 6 independent Kingly Plus accounts under one roof',
      'Separate offline downloads, libraries, and personal playlists for every member',
      'Family safety filters and parent administrator controls',
      'Automated Family Mix playlist blending favorite worship anthems',
      'Up to 50 listeners per hosted Listening Party for each family member',
    ],
    ctaLabel: 'Get Kingly Family',
    ctaHref: '/faq',
  },
];

export const CREATOR_TIERS: PlanTier[] = [
  {
    id: 'creator_starter',
    planCode: 'creator_starter',
    name: 'Creator Starter',
    subtitle: 'Begin publishing and sharing your faith walk',
    audience: 'creator',
    priceMonthly: '$0',
    priceAnnual: '$0',
    periodMonthly: 'free application',
    periodAnnual: 'free application',
    accent: 'cyan',
    perks: [
      '300 minutes (5 hours) lifetime total audio/video upload storage',
      'Standard audio processing and automated ingestion queue',
      'Basic creator analytics: aggregate plays, impressions, and follower counts',
      'Public creator profile, discography, bio, and ministry links',
      'Publish time-synchronized lyrics and podcast transcripts',
      'Host Community Listening Parties for up to 10 listeners with published catalog',
      'Receive fan gifts, tips, and offerings via official platform channels',
    ],
    ctaLabel: 'Apply as Creator',
    ctaHref: '/creator-guidelines',
  },
  {
    id: 'creator_growth',
    planCode: 'creator_growth_monthly',
    name: 'Creator Growth',
    subtitle: 'Deepen your engagement with richer audience analytics',
    audience: 'creator',
    priceMonthly: '$9.99',
    priceAnnual: '$99.99',
    periodMonthly: 'per month',
    periodAnnual: 'per year (~17% off)',
    accent: 'amber',
    perks: [
      '600 minutes/month (10 hours/month) recurring upload quota',
      'Listener Completion & Drop-Off Analytics (track drop points and skip trends)',
      'Host Community Listening Parties for up to 100 listeners with synced crossfade',
      'Exclusive Pre-Release & Draft premieres inside live parties before public launch',
      'Receive fan gifts and tokens with reduced platform fees',
    ],
    ctaLabel: 'Upgrade to Growth',
    ctaHref: '/faq',
  },
  {
    id: 'studio_pro',
    planCode: 'creator_pro_monthly',
    name: 'Studio Pro',
    subtitle: 'Maximum publishing power for artists & podcasters',
    audience: 'creator',
    priceMonthly: '$24.99',
    priceAnnual: '$249.99',
    periodMonthly: 'per month',
    periodAnnual: 'per year (~17% off)',
    badge: 'POPULAR FOR ARTISTS',
    isPopular: true,
    accent: 'emerald',
    perks: [
      'Unlimited audio and video upload capacity & permanent catalog storage',
      'Priority master audio transcoding and accelerated moderation review queue',
      'Deep Audience & Source Attribution Analytics (search vs feed vs share breakdown)',
      'Host large Listening Parties for up to 500 listeners with one-tap Instant Publish',
      'Verified Studio Pro Creator Badge on profile, search, and party chats',
      'Fan offerings and tips with lower platform fee structure',
    ],
    ctaLabel: 'Get Studio Pro',
    ctaHref: '/faq',
  },
  {
    id: 'creator_enterprise',
    planCode: 'creator_enterprise_monthly',
    name: 'Ministry & Label Enterprise',
    subtitle: 'Multi-seat access for churches, labels & broadcast ministries',
    audience: 'creator',
    priceMonthly: '$79.99',
    priceAnnual: '$799.99',
    periodMonthly: 'per month',
    periodAnnual: 'per year (~17% off)',
    accent: 'purple',
    perks: [
      'Multi-Member Team Access with 10 staff/editor seats to manage uploads',
      'Network-wide exportable analytics across all series, seasons, and artists',
      'Broadcast-Scale Listening Parties (up to 5,000 listeners) with co-host moderation',
      'Pre-scheduled multi-series release calendar and instant draft premieres',
      'Lowest VIP platform fee on fan offerings and ministry gifts',
      'Dedicated partner support and expedited media verification',
    ],
    ctaLabel: 'Contact Ministry Sales',
    ctaHref: 'mailto:support@kinglyapp.com?subject=Ministry%20Enterprise%20Inquiry',
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
