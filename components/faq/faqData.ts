export type FaqAccent = 'cyan' | 'amber' | 'purple' | 'emerald' | 'rose' | 'blue';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  accent: FaqAccent;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: 'general',
    title: 'General',
    accent: 'cyan',
    items: [
      {
        id: 'what-is-soundcode',
        question: 'What is SoundCode?',
        answer:
          'SoundCode is a Christian music and podcast streaming platform where creators can share faith-based content with listeners worldwide.',
      },
      {
        id: 'is-soundcode-free',
        question: 'Is SoundCode free?',
        answer:
          'Yes. Listening to content and creating a standard account on SoundCode is free.',
      },
      {
        id: 'devices',
        question: 'What devices support SoundCode?',
        answer:
          'SoundCode is available on supported web browsers, smartphones, tablets, and other compatible devices where the platform is available.',
      },
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts',
    accent: 'emerald',
    items: [
      {
        id: 'create-account',
        question: 'How do I create an account?',
        answer:
          'Select the Sign Up option on the platform and follow the registration instructions. You can register with your email address and verify it to complete signup.',
      },
      {
        id: 'reset-password',
        question: 'How do I reset my password?',
        answer:
          'Use the Forgot Password option on the login page and follow the instructions provided.',
      },
      {
        id: 'update-profile',
        question: 'How do I update my profile?',
        answer:
          'Navigate to your profile settings and edit your information, then save your changes.',
      },
    ],
  },
  {
    id: 'listening',
    title: 'Listening and Watching',
    accent: 'amber',
    items: [
      {
        id: 'follow-creators',
        question: 'How do I follow creators?',
        answer:
          "Visit a creator's profile and select the Follow button. Followed creators appear in Your Library so you can keep up with their content.",
      },
      {
        id: 'recommendations',
        question: 'How do recommendations work?',
        answer:
          'Discover content through browse, search, followed creators, and your saved library. As the platform grows, recommendations continue to improve with your activity.',
      },
    ],
  },
  {
    id: 'creators',
    title: 'Creators',
    accent: 'purple',
    items: [
      {
        id: 'become-creator',
        question: 'How do I become a creator?',
        answer:
          'Apply for Premium Creator Membership through the creator application process available on SoundCode.',
      },
      {
        id: 'premium-membership',
        question: 'What is Premium Creator Membership?',
        answer:
          'Premium Creator Membership gives approved creators access to upload content, creator tools, analytics, and profile management features.',
      },
      {
        id: 'membership-cost',
        question: 'How much does Premium Creator Membership cost?',
        answer:
          'Premium Creator Membership is free but requires application and approval.',
      },
      {
        id: 'upload-music',
        question: 'How do I upload music?',
        answer:
          'Approved creators can upload music through the creator dashboard using the upload tools provided.',
      },
      {
        id: 'upload-podcasts',
        question: 'How do I upload podcasts?',
        answer:
          'Approved creators can upload podcast episodes from their creator dashboard.',
      },
    ],
  },
  {
    id: 'churches',
    title: 'Churches and Ministries',
    accent: 'blue',
    items: [
      {
        id: 'church-accounts',
        question: 'Can churches create accounts?',
        answer:
          'Yes. Churches are welcome to create accounts and participate on the platform.',
      },
      {
        id: 'ministry-sermons',
        question: 'Can ministries upload sermons?',
        answer:
          'Yes. Approved creator accounts representing ministries may upload sermons, teachings, devotionals, and other faith-based content.',
      },
      {
        id: 'church-verification',
        question: 'How do church accounts get verified?',
        answer:
          'Verification requests may be submitted through SoundCode support channels and are reviewed by the administration team.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety and Policies',
    accent: 'rose',
    items: [
      {
        id: 'report-content',
        question: 'How do I report content?',
        answer:
          'Contact SoundCode support through the official support channels on the platform to report content that may violate our policies.',
      },
      {
        id: 'report-copyright',
        question: 'How do I report copyright infringement?',
        answer:
          'Submit a copyright complaint through SoundCode support with details that identify the disputed material and supporting evidence.',
      },
      {
        id: 'violations',
        question: 'What happens if content violates the rules?',
        answer:
          'Violating content may be removed, restricted, or lead to account suspension or termination depending on the severity of the violation.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    accent: 'cyan',
    items: [
      {
        id: 'contact',
        question: 'How do I contact SoundCode?',
        answer:
          'Reach us at support@soundcodeapp.com or through the official support channels on the platform.',
      },
      {
        id: 'delete-account',
        question: 'How do I delete my account?',
        answer:
          'Account deletion requests can be made through account settings when available, or by contacting SoundCode support.',
      },
    ],
  },
];
