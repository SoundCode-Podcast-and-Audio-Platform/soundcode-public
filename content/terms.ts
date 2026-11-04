import type { LegalDoc } from '../components/LegalDocument';

export const termsDoc: LegalDoc = {
  title: 'Terms and Conditions',
  effectiveDate: 'July 2026',
  intro: [
    'Welcome to Kingly, a Christian music, podcast, and listening platform created to provide a safe, high-fidelity, and encouraging environment where Christian creators can share the Word of God, communicate biblical teachings, inspire global audiences, and express their creativity through music, podcasts, sermons, testimonies, devotionals, interactive listening parties, and faith-based audio experiences.',
    'Kingly exists to empower creators to reach listeners around the world without unnecessary restrictions while maintaining a respectful, lawful, values-safe, and community-focused platform.',
    'By creating an account, accessing the platform, streaming content, participating in listening parties, or using any Kingly feature, you agree to comply with these Terms and Conditions.',
  ],
  sections: [
    {
      heading: '1. Eligibility',
      blocks: [
        'Kingly is available to users aged 8 years and older.',
        'Users under the age of 13 must obtain permission from a parent or legal guardian before creating an account or using the platform. Parents and guardians are responsible for monitoring the activities of children under their care.',
        'By creating an account, you confirm that the information you provide is accurate and that you meet the eligibility requirements described in these Terms.',
      ],
    },
    {
      heading: '2. User Accounts & Subscriptions',
      blocks: [
        'Users are responsible for maintaining the security of their accounts and passwords. You agree not to share your login credentials with unauthorized persons.',
        'Kingly offers free standard listener accounts as well as optional premium subscriptions (including Kingly Plus, Duo, and Family plans) which provide ad-free high-fidelity streaming, offline encrypted downloads, and enhanced discovery tools.',
        'You are responsible for all activities conducted through your account. Kingly reserves the right to remove, suspend, or terminate accounts that provide false information or violate these Terms.',
      ],
    },
    {
      heading: '3. Creator Program & Tiers',
      blocks: [
        'Kingly provides dedicated creator membership tiers (Starter, Growth, Studio Pro, and Ministry & Label Enterprise) to support individual artists, podcasters, ministers, and organizations.',
        'Creator accounts require an initial application and approval process conducted by the Kingly administration team to preserve our community standards and content integrity.',
        'Approved creators gain access to Kingly Studio and Backstage tools, enabling them to:',
        [
          'Upload music, sermons, and audio/video podcasts.',
          'Host interactive Community Listening Parties and exclusive draft premieres.',
          'Access deep listener analytics, retention drop-off graphs, and discovery attribution.',
          'Manage public creator discography, bios, synchronized lyrics, and episode transcripts.',
          'Receive direct fan appreciation and gifts through official platform channels.',
        ],
        'Kingly reserves the right to review, approve, reclassify, or revoke creator status if content or conduct violates community rules.',
      ],
    },
    {
      heading: '4. Creator Responsibilities',
      blocks: [
        'Creators must own or hold all required intellectual property rights, licenses, or permissions for all audio, video, artwork, and metadata uploaded to Kingly.',
        'Creators may not upload content that infringes copyrights, trademarks, privacy rights, or other legal protections belonging to third parties.',
        'Creators are responsible for ensuring that all published material aligns with Christian values and complies with all applicable local and international laws.',
      ],
    },
    {
      heading: '5. Acceptable Use',
      blocks: [
        'Users agree not to:',
        [
          'Upload unlawful, harmful, defamatory, or vulgar content.',
          'Impersonate another person, church, ministry, or organization.',
          'Attempt unauthorized access to Kingly systems, servers, or user data.',
          'Distribute malware, spam, or automated bot traffic.',
          'Interfere with platform operations, audio playback streams, or listening party rooms.',
          'Use Kingly for fraudulent activity, unauthorized financial solicitation, or scams.',
        ],
      ],
    },
    {
      heading: '6. Intellectual Property',
      blocks: [
        'All platform branding, trademarks, logos, audio algorithms, software, and interface designs remain the exclusive property of Kingly.',
        'Creators retain full ownership of their original recordings and content while granting Kingly a non-exclusive license to host, stream, transcode, display, and distribute the content through Kingly services and applications.',
      ],
    },
    {
      heading: '7. Suspension and Termination',
      blocks: [
        'Accounts may be suspended, restricted, or terminated whenever a user violates these Terms, Community Guidelines, copyright standards, or applicable legislation.',
        'Severe violations, including fraudulent activity, harassment, or deliberate copyright infringement, may result in immediate account termination without prior notice.',
      ],
    },
    {
      heading: '8. Changes to Terms',
      blocks: [
        'Kingly may update these Terms and Conditions periodically to reflect new features, legal obligations, or operational adjustments. Continued use of the platform after updates are published constitutes acceptance of the revised Terms.',
      ],
    },
    {
      heading: '9. Contact',
      blocks: [
        'Questions regarding these Terms may be directed to the Kingly administration and support team at support@kinglyapp.com.',
      ],
    },
  ],
  footerNote: '© 2026 Kingly. All Rights Reserved.',
};
