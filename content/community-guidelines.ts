import type { LegalDoc } from '../components/LegalDocument';

export const communityGuidelinesDoc: LegalDoc = {
  title: 'Community Guidelines',
  sections: [
    {
      heading: 'Our Mission',
      blocks: [
        'Kingly exists to provide a safe, uplifting, and Christ-centered sanctuary where listeners and creators gather to share music, podcasts, sermons, testimonies, and fellowship that glorify God and strengthen faith.',
      ],
    },
    {
      heading: 'Respect & Christ-like Fellowship',
      blocks: [
        'We ask all listeners, creators, and moderators to interact with mutual love, dignity, and respect.',
        'The following behaviors are strictly prohibited on Kingly:',
        [
          'Harassment, bullying, or targeted intimidation',
          'Profanity, vulgarity, or obscene language in user profiles, party chats, or lyrics',
          'Hate speech, personal slurs, or discriminatory rhetoric',
          'Slanderous attacks against churches, ministries, or individual believers',
        ],
        'Constructive theological dialogue and respectful discussion conducted with grace and humility are welcomed.',
      ],
    },
    {
      heading: 'Gifting and Fan Contributions',
      blocks: [
        "Kingly allows users to support their favorite creators and ministries through the platform's official gifting system using Espees and authorized payment channels.",
        'To protect our community against scams and unauthorized solicitations:',
        [
          'Creators must never request direct bank transfers, wires, or unverified off-platform payments from users',
          'Creators must not solicit donations or cash gifts via direct messaging',
          'Users must only send financial tokens and gifts using official in-app Kingly mechanisms',
        ],
        'Any user or creator attempting fraudulent solicitations will have their accounts immediately investigated and subject to termination.',
        'Users should report any suspicious payment requests to support@thekinglyapp.com.',
      ],
    },
    {
      heading: 'Authentic Representation',
      blocks: [
        'Users and creators must represent themselves truthfully:',
        [
          'Do not impersonate artists, pastors, worship leaders, or church organizations',
          'Do not create misleading bot accounts or manipulate stream counts and follower numbers',
          'Do not falsely claim affiliation with established ministries or labels',
        ],
      ],
    },
    {
      heading: 'Safe & Uplifting Content',
      blocks: [
        'All audio, podcasts, cover art, synchronized lyrics, and discussions hosted on Kingly must align with wholesome, faith-affirming standards:',
        [
          'Content must comply with applicable intellectual property and copyright laws',
          'Explicit, sexually suggestive, or violent media is not permitted',
          'Sermons and teachings should accurately communicate biblical truths and sound doctrine',
        ],
      ],
    },
    {
      heading: 'Listening Party Room Etiquette',
      blocks: [
        'During live Listening Parties, attendees and hosts should maintain an encouraging atmosphere:',
        [
          'Do not flood or spam the live room chat',
          'Follow instructions from designated party co-hosts and room moderators',
          'Celebrate new music and artist premieres with constructive encouragement',
        ],
      ],
    },
    {
      heading: 'Reporting Violations',
      blocks: [
        'If you encounter content or user behavior that violates these guidelines:',
        [
          'Use the in-app reporting tools on any track, artist profile, or listening party',
          'Contact the Kingly administration and safety team directly at support@thekinglyapp.com',
        ],
        'All reports are treated with confidentiality and reviewed promptly by our human moderation team.',
      ],
    },
    {
      heading: 'Enforcement and Appeals',
      blocks: [
        'Violations of these guidelines may result in warnings, content removal, temporary suspension, or permanent account forfeiture.',
        'Account holders may appeal moderation decisions by contacting support@thekinglyapp.com with supporting documentation.',
      ],
    },
  ],
  footerNote: '© 2026 Kingly. All Rights Reserved.',
};
