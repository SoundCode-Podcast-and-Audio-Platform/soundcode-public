import type { LegalDoc } from '../components/LegalDocument';

export const creatorGuidelinesDoc: LegalDoc = {
  title: 'Creator Guidelines',
  intro: [
    'These Creator Guidelines apply to all creators publishing audio or visual content on Kingly, including recording artists, podcast hosts, church ministries, pastors, worship collectives, and Christian media organizations.',
    'Our mission is to empower faith-filled voices with world-class publishing, distribution, and community tools while cultivating a sanctuary of uplifting, values-safe audio experiences.',
  ],
  sections: [
    {
      heading: 'Music & Audio Standards',
      blocks: [
        'Creators should provide master-quality audio to ensure the best listener experience across mobile and web:',
        [
          'Lossless or high-bitrate source files (WAV, FLAC, or minimum 320 kbps MP3)',
          'Professionally mixed and mastered audio levels without clipping or heavy distortion',
          'High-resolution cover artwork (minimum 1400x1400px, 1:1 square aspect ratio)',
          'Accurate track titles, artist credits, featured contributors, and genre tags',
        ],
        'Music creators must own all rights to their recordings or hold explicit written distribution licenses.',
      ],
    },
    {
      heading: 'Podcast & Sermon Standards',
      blocks: [
        'Podcasters and ministers should ensure:',
        [
          'Clear spoken-word audio with minimal background interference',
          'Accurate episode titles and descriptive summaries reflecting biblical discussions or sermons',
          'Correct topical categorization (e.g., Theology, Marriage, Youth, Worship, Devotional)',
          'Clear series organization with seasons and chronological episode ordering',
        ],
        'Guest appearances and external audio samples must be published with proper legal consent.',
      ],
    },
    {
      heading: 'Creator Profiles & Discography',
      blocks: [
        'To establish credibility and foster community connection, creators should maintain:',
        [
          'Accurate, inspiring biographies highlighting their faith journey and ministry mission',
          'Current, authentic profile and banner photography',
          'Verified social media and ministry links',
          'Organized discography with officially tagged albums, singles, and podcast collections',
        ],
      ],
    },
    {
      heading: 'Metadata & Content Integrity',
      blocks: [
        'Creators must uphold transparency in all published metadata:',
        [
          'No keyword stuffing or misleading clickbait titles',
          'No deceptive artist names or impersonation of established Christian ministers/bands',
          'No misrepresenting collaborations or guest appearances',
          'Accurate publication dates and copyright notices',
        ],
      ],
    },
    {
      heading: 'Churches and Ministries',
      blocks: [
        'Churches and ministry accounts must ensure:',
        [
          'Accounts are administered by authorized staff or media representatives',
          'Sermons and worship services belong to the ministry or are appropriately licensed',
          'Broadcast-scale listening parties and live streams adhere to community safety standards',
        ],
      ],
    },
    {
      heading: 'Kingly Creator Tiers',
      blocks: [
        'Kingly provides tailored creator tiers to support everyone from emerging independent artists to global media ministries:',
        [
          'Creator Starter (Free application): 300 minutes lifetime upload quota, standard transcoding and moderation queue, basic listener play/follower analytics, synchronized lyrics, host listening parties up to 10 listeners.',
          'Creator Growth ($9.99/mo): 600 monthly minutes recurring quota, listener completion and drop-off analytics, host listening parties up to 100 listeners with synced crossfade, exclusive draft song/episode premieres.',
          'Studio Pro ($24.99/mo): Unlimited upload minutes and catalog storage, priority master transcoding queue, deep audience source attribution analytics (search vs feed vs share), host large listening parties (up to 500 listeners), instant album publishing, Verified Studio Pro Creator badge.',
          'Ministry & Label Enterprise ($79.99/mo): Multi-member team access (10 editor seats), network-wide exportable analytics, broadcast-scale listening parties (up to 5,000 listeners) with co-host moderation controls.',
        ],
        'All creator tiers require approval by the Kingly administration team to protect content quality and community standards.',
      ],
    },
    {
      heading: 'Community Listening Parties & Premieres',
      blocks: [
        'Kingly Listening Parties enable creators to connect directly with fans through live, synchronized playback:',
        [
          'Creators can host listening sessions with live chat, reactions, and smooth crossfades',
          'Growth and Studio Pro creators can premiere unpublished draft tracks or upcoming albums exclusively to room attendees prior to public release',
          'Creators must maintain respectful moderation in listening party chat and ensure guest behavior aligns with Community Guidelines',
        ],
      ],
    },
    {
      heading: 'Monetization and Fan Support',
      blocks: [
        'Kingly provides approved creators with avenues to receive direct fan contributions and support:',
        'Fans can send tips, offerings, and appreciation using the official in-app gifting system (including Espees).',
        'To ensure safety, fraud protection, and financial integrity:',
        [
          'Creators may only accept gifts through the official Kingly in-app payment and gifting features',
          'Creators must never request direct bank transfers, wires, or cash from listeners',
          'Creators must not solicit payments through unauthorized third-party links or private messaging',
          'Creators are required to direct fans to official platform support mechanisms',
        ],
      ],
    },
    {
      heading: 'Impersonation and Fraud Protection',
      blocks: [
        'If a creator discovers impersonators soliciting funds or distributing unauthorized content under their name, they should:',
        [
          'Immediately notify their audience through verified social channels',
          'Report the offending profile to the Kingly support team',
          'Cooperate with Kingly trust and safety investigations',
        ],
      ],
    },
    {
      heading: 'Violations and Enforcement',
      blocks: [
        'Failure to comply with these Creator Guidelines may result in:',
        [
          'Rejection or removal of uploaded audio/video content',
          'Revocation of premiere privileges or listening party hosting rights',
          'Downgrade or suspension of creator membership',
          'Permanent account closure for repeated or fraudulent misconduct',
        ],
        'Kingly reserves the right to make moderation decisions that protect listeners, creators, and the integrity of the Christian community.',
      ],
    },
  ],
  footerNote: '© 2026 Kingly. All Rights Reserved.',
};
