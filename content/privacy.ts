import type { LegalDoc } from '../components/LegalDocument';

export const privacyDoc: LegalDoc = {
  title: 'Privacy Policy',
  effectiveDate: 'July 2026',
  intro: [
    'At Kingly, we respect your privacy and are committed to protecting the personal information you share with us. Kingly is a Christian music, podcast, and audio streaming platform that enables users to discover, stream, share, and experience faith-based audio from creators around the world.',
    'This Privacy Policy explains what information we collect, how we use it, who we share it with, and the choices available to you regarding your personal information.',
    'By accessing or using Kingly, you agree to the practices described in this Privacy Policy.',
  ],
  sections: [
    {
      heading: 'Information We Collect',
      blocks: [
        'When you use Kingly, we may collect the following information:',
      ],
    },
    {
      heading: 'Account Information',
      blocks: [
        'When creating an account or subscribing to a plan, we may collect:',
        ['Name', 'Email address', 'Profile picture (if provided)', 'Authentication credentials', 'Subscription and billing details processed securely through authorized payment gateways'],
      ],
    },
    {
      heading: 'Sign-In Methods',
      blocks: [
        'Kingly may allow users to sign in using:',
        ['Email and password', 'Google Sign-In', 'KingsChat Login'],
        'When you use a third-party sign-in service, we may receive authentication information associated with your account as permitted by that provider.',
      ],
    },
    {
      heading: 'Listening and Viewing Activity',
      blocks: [
        'To provide personalized discovery feeds and playback continuity, we collect information about:',
        [
          'Music, albums, and playlists you stream',
          'Podcasts and sermons you listen to',
          'Discovery Mode Slider settings and recommendation feedback',
          'Listening party participation and room interactions',
          'Search queries and mood selections',
          'Favorites, offline downloads, and library bookmarks',
          'Creator follows and subscriptions',
        ],
      ],
    },
    {
      heading: 'Device Information',
      blocks: [
        'We may collect:',
        [
          'Device model and manufacturer',
          'Operating system and version',
          'Browser type and technical specifications',
          'Device identifiers necessary for playback session security and offline sync',
          'Application version',
        ],
      ],
    },
    {
      heading: 'Network Information',
      blocks: [
        'We may collect:',
        [
          'IP address',
          'Time zone and locale',
          'Approximate geographic region (used for local CDN audio routing and regional currency display)',
          'Network connection speed and quality',
        ],
      ],
    },
    {
      heading: 'How We Use Your Information',
      blocks: [
        'We use your information to operate and maintain accounts, authenticate users, deliver uninterrupted audio streaming, and remember your playback progress across devices.',
        'Your listening history informs our recommendation engine, powering personalized shelves such as Made For You, Kingly Curated, and dynamic Discovery Mode preferences.',
        'We analyze aggregate platform telemetry to diagnose audio issues, enhance transcoding pipelines, and continuously develop new features.',
        'We use security signals to prevent fraud, detect suspicious access attempts, protect user accounts, and preserve platform integrity.',
      ],
    },
    {
      heading: 'Information Sharing',
      blocks: [
        'Kingly does not sell your personal information to third parties.',
        'We share data solely with trusted infrastructure partners who provide essential hosting, audio delivery (CDN), analytics, billing integration (such as Stripe and Paystack), and authentication services under strict confidentiality agreements.',
        'When required by valid legal process or law, we may disclose information to government or law enforcement authorities.',
        'We may disclose relevant records where necessary to protect Kingly, safeguard users, or investigate egregious violations of platform policies.',
      ],
    },
    {
      heading: 'Data Retention',
      blocks: [
        'We retain personal information only for as long as necessary to provide platform services, maintain security, comply with legal obligations, and resolve disputes.',
        'When an account is deleted or data is no longer required, information is securely purged or anonymized.',
      ],
    },
    {
      heading: 'User Rights',
      blocks: [
        'Depending on your jurisdiction, you may have the right to:',
        [
          'Access the personal information Kingly holds about you',
          'Correct inaccurate or outdated records',
          'Request permanent deletion of your account and personal data',
          'Export a machine-readable copy of your profile and library data',
          'Withdraw previously granted consent at any time',
        ],
        'Requests may be submitted to the Kingly support team at support@kinglyapp.com.',
      ],
    },
    {
      heading: "Children's Privacy",
      blocks: [
        'Kingly is designed for audiences aged 8 and older. Children under the age of 13 must have parent or legal guardian consent to register an account.',
        'Parents or guardians who believe a child under their care has submitted information without consent can contact us for immediate assistance and account review.',
      ],
    },
    {
      heading: 'Account Security',
      blocks: [
        'We utilize modern administrative, cryptographic, and operational safeguards to protect user and payment data.',
        'Users are encouraged to choose unique passwords, safeguard login tokens, and avoid sharing credentials across devices.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      blocks: [
        'Kingly may revise this Privacy Policy to reflect platform evolution or regulatory updates.',
        'Updated versions will be published on our website and apps, taking effect immediately upon posting.',
        'Continued usage of Kingly services constitutes awareness and acceptance of current privacy practices.',
      ],
    },
    {
      heading: 'Contact Us',
      blocks: [
        'Questions, privacy concerns, or data requests should be directed to the Kingly team at support@kinglyapp.com.',
        'For guidelines on content and user interactions, please consult our Community Guidelines and Terms and Conditions.',
      ],
    },
  ],
  footerNote: '© 2026 Kingly. All Rights Reserved.',
};
