import type { LegalDoc } from '../components/LegalDocument';

export const privacyDoc: LegalDoc = {
  title: 'Privacy Policy',
  effectiveDate: 'July 2026',
  intro: [
    'At SoundCode, we respect your privacy and are committed to protecting the personal information you share with us. SoundCode is a Christian music and podcast streaming platform that allows users to discover, listen to, watch, and share faith-based content from creators around the world.',
    'This Privacy Policy explains what information we collect, how we use it, who we share it with, and the choices available to you regarding your information.',
    'By accessing or using SoundCode, you agree to the practices described in this Privacy Policy.',
  ],
  sections: [
    {
      heading: 'Information We Collect',
      blocks: [
        'When you use SoundCode, we may collect the following information.',
      ],
    },
    {
      heading: 'Account Information',
      blocks: [
        'When creating an account, we may collect:',
        ['Name', 'Email address', 'Profile picture (if provided)', 'Authentication information'],
      ],
    },
    {
      heading: 'Sign-In Methods',
      blocks: [
        'SoundCode may allow users to sign in using:',
        ['Email and password', 'Google Sign-In', 'KingsChat Login'],
        'When you use a third-party sign-in service, we may receive information associated with your account as permitted by that provider.',
      ],
    },
    {
      heading: 'Listening and Viewing Activity',
      blocks: [
        'To provide personalized experiences, we may collect information about:',
        [
          'Music you listen to',
          'Podcasts you listen to',
          'Videos you watch',
          'Search history',
          'Playlists',
          'Favorites and saved content',
          'Creator subscriptions and follows',
        ],
      ],
    },
    {
      heading: 'Device Information',
      blocks: [
        'We may collect:',
        [
          'Device type',
          'Operating system',
          'Browser information',
          'Device identifiers',
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
          'Time zone',
          'Approximate location based on IP address',
          'Network connection information',
        ],
      ],
    },
    {
      heading: 'How We Use Your Information',
      blocks: [
        'We use your information to create and manage accounts, authenticate users, deliver music and podcasts, enable streaming services, and save preferences.',
        'Your listening and watching activity may be used to recommend music and podcasts, highlight creators you may enjoy, and improve content discovery.',
        'We analyze usage data to improve platform functionality, identify technical problems, monitor performance, and develop new features.',
        'We also use information to prevent fraud, detect suspicious activity, protect user accounts, and maintain platform security.',
      ],
    },
    {
      heading: 'Information Sharing',
      blocks: [
        'SoundCode does not sell personal information to third parties.',
        'We may share information with trusted providers who assist with hosting, cloud services, analytics, authentication, and security monitoring.',
        'When required by law, we may disclose information to government agencies, courts, or law enforcement authorities.',
        'We may disclose information where necessary to protect SoundCode, protect our users, or investigate violations of our policies.',
      ],
    },
    {
      heading: 'Data Retention',
      blocks: [
        'We retain information only as long as necessary to operate the platform, maintain security, comply with legal obligations, and resolve disputes.',
        'When information is no longer needed, it may be securely deleted or anonymized.',
      ],
    },
    {
      heading: 'User Rights',
      blocks: [
        'Depending on applicable laws, users may have the right to:',
        [
          'Access personal information',
          'Correct inaccurate information',
          'Request deletion of data',
          'Request a copy of stored information',
          'Withdraw consent where applicable',
        ],
        'Requests may be submitted through SoundCode support channels, including support@soundcodeapp.com.',
      ],
    },
    {
      heading: "Children's Privacy",
      blocks: [
        'SoundCode is intended for users aged 8 and older.',
        'Users under the age of 13 must have parental or guardian permission to use the platform.',
        'Parents who believe a child has provided personal information without consent may contact us for assistance.',
      ],
    },
    {
      heading: 'Account Security',
      blocks: [
        'We implement reasonable administrative, technical, and organizational measures to protect user information.',
        'However, no online service can guarantee complete security, and users are encouraged to use strong passwords, protect login credentials, and avoid sharing account access.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      blocks: [
        'SoundCode may update this Privacy Policy from time to time.',
        'Updated versions will be posted on the platform and become effective upon publication.',
        'Continued use of SoundCode after updates indicates acceptance of the revised Privacy Policy.',
      ],
    },
    {
      heading: 'Contact Us',
      blocks: [
        'Questions regarding this Privacy Policy may be directed to the SoundCode support team through the official contact channels available on the platform, including support@soundcodeapp.com.',
        'For related rules of conduct, see our Community Guidelines and Terms and Conditions.',
      ],
    },
  ],
  footerNote: '© 2026 SoundCode. All Rights Reserved.',
};
