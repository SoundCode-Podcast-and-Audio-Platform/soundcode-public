import type { LegalDoc } from '../components/LegalDocument';

export const termsDoc: LegalDoc = {
  title: 'Terms and Conditions',
  effectiveDate: 'July 2026',
  intro: [
    'Welcome to SoundCode, a Christian music and podcast streaming platform created to provide a safe and encouraging environment where Christian creators can share the Word of God, communicate biblical teachings, inspire audiences, and express their creativity through music, podcasts, sermons, testimonies, devotionals, discussions, and other faith-based content.',
    'SoundCode exists to support creators who wish to reach listeners around the world without unnecessary restrictions while maintaining a respectful, lawful, and community-focused platform.',
    'By creating an account, accessing the platform, listening to content, viewing content, or using any SoundCode feature, you agree to comply with these Terms and Conditions.',
  ],
  sections: [
    {
      heading: '1. Eligibility',
      blocks: [
        'SoundCode is available to users aged 8 years and older.',
        'Users under the age of 13 must obtain permission from a parent or legal guardian before creating an account or using the platform. Parents and guardians are responsible for monitoring the activities of children under their care.',
        'By creating an account, you confirm that the information you provide is accurate and that you meet the eligibility requirements described in these Terms.',
      ],
    },
    {
      heading: '2. User Accounts',
      blocks: [
        'Users are responsible for maintaining the security of their accounts and passwords. You agree not to share your login credentials with unauthorized persons.',
        'You are responsible for all activities conducted through your account. SoundCode reserves the right to remove, suspend, or terminate accounts that provide false information or violate these Terms.',
      ],
    },
    {
      heading: '3. Premium Creator Membership',
      blocks: [
        'SoundCode offers a Premium Creator Membership designed specifically for creators.',
        'Premium Creator Membership is free of charge but requires an application and approval process conducted by the SoundCode administration team.',
        'Premium membership allows approved creators to:',
        [
          'Upload music.',
          'Upload podcasts.',
          'Publish video podcasts where available.',
          'Access creator tools and analytics.',
          'Build and manage a creator profile.',
        ],
        'Premium creator levels may be assigned according to follower counts, audience engagement, platform activity, or other criteria determined by SoundCode.',
        'SoundCode reserves the right to approve, reject, suspend, or revoke creator status at its discretion.',
      ],
    },
    {
      heading: '4. Creator Responsibilities',
      blocks: [
        'Creators must own or have permission to use all content uploaded to SoundCode.',
        'Creators may not upload content that infringes copyrights, trademarks, intellectual property rights, or other legal protections belonging to third parties.',
        'Creators are responsible for ensuring that all uploaded content complies with applicable laws.',
      ],
    },
    {
      heading: '5. Acceptable Use',
      blocks: [
        'Users agree not to:',
        [
          'Upload unlawful content.',
          'Impersonate another person or organization.',
          'Attempt unauthorized access to the platform.',
          'Distribute malware or harmful software.',
          'Interfere with platform operations.',
          'Use SoundCode for fraudulent activity.',
        ],
      ],
    },
    {
      heading: '6. Intellectual Property',
      blocks: [
        'All platform branding, logos, software, and platform features remain the property of SoundCode.',
        'Creators retain ownership of their original content while granting SoundCode a non-exclusive license to host, stream, display, and distribute content through the platform.',
      ],
    },
    {
      heading: '7. Suspension and Termination',
      blocks: [
        'Accounts may be suspended or terminated whenever a user violates these Terms, Community Guidelines, copyright requirements, or applicable laws.',
        'Serious violations may result in immediate account termination without prior notice.',
      ],
    },
    {
      heading: '8. Changes to Terms',
      blocks: [
        'SoundCode may update these Terms and Conditions from time to time. Continued use of the platform after updates are published constitutes acceptance of the revised Terms.',
      ],
    },
    {
      heading: '9. Contact',
      blocks: [
        'Questions regarding these Terms may be directed to the SoundCode administration team through the official support channels published on the platform, including support@soundcodeapp.com.',
      ],
    },
  ],
  footerNote: '© 2026 SoundCode. All Rights Reserved.',
};
