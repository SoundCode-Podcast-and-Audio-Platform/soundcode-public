import type { LegalDoc } from '../components/LegalDocument';

export const communityGuidelinesDoc: LegalDoc = {
  title: 'Community Guidelines',
  sections: [
    {
      heading: 'Our Mission',
      blocks: [
        'SoundCode exists to provide a safe, welcoming, and Christ-centered environment where listeners and creators can share music, podcasts, testimonies, teachings, and discussions that encourage faith, learning, and positive community engagement.',
      ],
    },
    {
      heading: 'Respect Others',
      blocks: [
        'Users must treat all members with dignity and respect.',
        'The following behaviors are prohibited:',
        [
          'Harassment',
          'Bullying',
          'Threats',
          'Hate speech',
          'Intimidation',
          'Personal attacks',
          'Discrimination',
        ],
        'Healthy discussion and respectful disagreement are permitted.',
      ],
    },
    {
      heading: 'Gifting',
      blocks: [
        "SoundCode allows users to support their favorite creators through the platform's gifting system using Espees.",
        'Espees are the only approved method for financial gifting on SoundCode. Gifts should be provided through the official gifting features available within the platform.',
        'For the safety and protection of the SoundCode community:',
        [
          'Creators must not request bank transfers from users.',
          'Creators must not request cash payments through private messages.',
          'Creators must not request payments through third-party payment platforms unless officially approved by SoundCode.',
          'Users should only send gifts using the official Espees gifting system.',
        ],
        'Any creator who solicits or accepts gifts through unauthorized methods may be subject to investigation, suspension, removal of creator privileges, or permanent account termination.',
        "Users who encounter creators requesting money outside the official gifting system should report the account immediately through SoundCode's reporting tools or support channels.",
        'SoundCode is not responsible for losses resulting from payments made outside the official Espees gifting system.',
      ],
    },
    {
      heading: 'Authentic Participation',
      blocks: [
        'Users must provide truthful information about themselves.',
        'The following are prohibited:',
        [
          'Impersonating creators',
          'Impersonating ministries',
          'Impersonating churches',
          'Creating fake accounts',
          'Misrepresenting affiliations',
        ],
      ],
    },
    {
      heading: 'Safe Content',
      blocks: [
        'Content must:',
        [
          'Comply with applicable laws',
          'Respect intellectual property rights',
          'Be appropriately categorized',
          'Avoid misleading viewers',
        ],
      ],
    },
    {
      heading: 'Copyright Protection',
      blocks: [
        'Only upload content that:',
        ['You created; or', 'You have permission to publish'],
        'Copyright violations may result in immediate content removal.',
      ],
    },
    {
      heading: 'Community Safety',
      blocks: [
        'The following activities are prohibited:',
        [
          'Spam',
          'Scams',
          'Fraudulent fundraising',
          'Malware',
          'Unauthorized advertising',
          'Account manipulation',
        ],
      ],
    },
    {
      heading: 'Reporting Violations',
      blocks: [
        'Users may report:',
        [
          'Copyright infringement',
          'Abuse',
          'Harassment',
          'Fraud',
          'Misleading content',
        ],
        'Reports are reviewed by the SoundCode administration team. You can also contact support@soundcodeapp.com.',
      ],
    },
    {
      heading: 'Enforcement',
      blocks: [
        'Violations of these Community Guidelines may result in:',
        [
          'Warning',
          'Content removal',
          'Temporary suspension',
          'Permanent account termination',
        ],
        'SoundCode reserves the right to take appropriate action based on the severity, frequency, or impact of a violation.',
      ],
    },
  ],
  footerNote: '© 2026 SoundCode. All Rights Reserved.',
};
