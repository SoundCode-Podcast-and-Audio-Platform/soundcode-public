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
        id: 'what-is-kingly',
        question: 'What is Kingly?',
        answer:
          'Kingly is a next-generation Christian music, podcast, and audio streaming platform. It combines high-fidelity faith streaming with community-first features like live Listening Parties, custom Discovery Sliders, synchronized lyrics, and professional tools for Christian creators, churches, and ministries.',
      },
      {
        id: 'is-kingly-free',
        question: 'Is Kingly free to use?',
        answer:
          'Yes! Kingly Free offers full access to faith-based music, podcasts, and sermons with values-safe promotions, personalized discovery feeds, synchronized lyrics, and the ability to join or host Close Friends listening parties (up to 5 listeners). We also offer Kingly Plus, Duo, and Family plans for ad-free listening, 320 kbps lossless audio, offline downloads, and Discovery Slider controls.',
      },
      {
        id: 'supported-devices',
        question: 'What devices and platforms support Kingly?',
        answer:
          'Kingly is available on iOS, Android, web browsers, tablets, and desktop devices. Your library, bookmarks, listening history, and discovery preferences sync seamlessly across all your devices.',
      },
      {
        id: 'content-types',
        question: 'What kind of audio content is available on Kingly?',
        answer:
          'Kingly hosts a rich library of worship music, gospel, contemporary Christian music (CCM), urban gospel, hymns, and instrumentals, alongside sermons, faith podcasts, devotionals, and theological teachings from inspiring ministries around the world.',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features & Experience',
    accent: 'amber',
    items: [
      {
        id: 'listening-parties',
        question: 'What are Kingly Listening Parties?',
        answer:
          'Listening Parties let you listen to music and podcasts simultaneously with friends, family, or entire congregations in real time. Features include synchronized audio playback across all participants, live party crossfade between songs, text chat, emoji reactions, and exclusive pre-release premieres where creators can preview upcoming albums before public release.',
      },
      {
        id: 'discovery-slider',
        question: 'How does the Discovery Mode Slider work?',
        answer:
          'Available on Kingly Plus, the Discovery Mode Slider gives you real-time control over recommendation adventurousness. Slide toward "Familiar" to hear trusted favorites and familiar worship anthems, "Balanced" for a healthy blend of beloved tracks and tailored suggestions, or "Adventurous" to explore emerging indie artists, diverse languages, and new faith genres.',
      },
      {
        id: 'offline-downloads',
        question: 'Can I download songs and podcasts for offline listening?',
        answer:
          'Yes. With a Kingly Plus, Duo, or Family subscription, you can securely download albums, individual tracks, playlists, and podcast episodes directly to your device for offline listening without an internet connection.',
      },
      {
        id: 'audio-quality-equalizer',
        question: 'What audio quality does Kingly offer?',
        answer:
          'Free listeners stream at up to 128 kbps (with a 48 kbps Data Saver mode for low-bandwidth mobile connections). Kingly Plus subscribers enjoy studio-grade 320 kbps High Fidelity audio. Kingly also includes a custom audio equalizer with specialized presets for Bass Boost and Vocal/Sermon Clarity, plus gapless crossfade transitions.',
      },
      {
        id: 'lyrics-transcripts',
        question: 'Does Kingly support lyrics and podcast transcripts?',
        answer:
          'Yes! Kingly features real-time, time-synchronized lyrics for worship songs and full synchronized transcripts for podcast episodes and sermons, making it easy to sing along or study biblical teachings.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Plans & Subscriptions',
    accent: 'emerald',
    items: [
      {
        id: 'listener-plans',
        question: 'What listener subscription plans are available?',
        answer:
          'We offer Kingly Free ($0 forever), Kingly Plus ($4.99/mo) for single users with 320 kbps audio, offline downloads, and Discovery Slider, Kingly Duo ($7.99/mo) for two independent Plus accounts, and Kingly Family ($11.99/mo) for up to six accounts with parental controls and automated Family Mix.',
      },
      {
        id: 'creator-plans-overview',
        question: 'What are the Creator subscription plans?',
        answer:
          'Creators can choose between Creator Starter (Free upon application, 300 minutes upload quota, basic stats), Creator Growth ($9.99/mo with 600 monthly minutes, drop-off analytics, draft premieres), Studio Pro ($24.99/mo with unlimited uploads, priority transcoding, deep source attribution, 500-capacity parties, verified badge), and Ministry Enterprise ($79.99/mo with multi-member team access and 5,000-capacity broadcast rooms).',
      },
      {
        id: 'payment-methods',
        question: 'What payment methods are supported?',
        answer:
          'Kingly supports credit and debit cards, Apple Pay, and Google Pay via Stripe worldwide, as well as local bank transfers, USSD, and Mobile Money (MoMo) rails across Africa powered by Paystack.',
      },
      {
        id: 'cancel-subscription',
        question: 'Can I cancel or change my plan anytime?',
        answer:
          'Yes. You can upgrade, downgrade, or cancel your subscription at any time directly through your Account settings. If you cancel, your premium benefits remain active until the end of your current billing period.',
      },
    ],
  },
  {
    id: 'creators',
    title: 'Creators & Studio',
    accent: 'purple',
    items: [
      {
        id: 'become-creator',
        question: 'How do I become an approved creator on Kingly?',
        answer:
          'Anyone producing faith-based music, spoken-word teachings, or podcasts can apply for creator status via the Kingly Creator application. Our administration team reviews applications to verify content alignment with our community standards.',
      },
      {
        id: 'creator-studio',
        question: 'What is Kingly Studio and Backstage?',
        answer:
          'Kingly Studio is your web and mobile upload hub for publishing music, albums, and podcasts with synchronized lyrics. Backstage is your analytics dashboard, giving you detailed insights into total plays, listener retention drop-off graphs, demographic locations, and traffic discovery sources.',
      },
      {
        id: 'draft-premieres',
        question: 'How do pre-release listening party premieres work?',
        answer:
          'Creators on Growth, Studio Pro, and Enterprise tiers can upload draft unreleased tracks or albums and host private or public listening party premieres before official publication. Listeners can react and comment in real time, and creators can tap "Publish Album Now" right from the session.',
      },
      {
        id: 'monetization-gifting',
        question: 'How can creators monetize and receive fan support?',
        answer:
          'Kingly provides an in-app fan appreciation and gifting system where listeners can send gifts and tokens (including Espees). Creators can view accumulated offerings and request verified payouts through their creator dashboard.',
      },
    ],
  },
  {
    id: 'churches',
    title: 'Churches & Ministries',
    accent: 'blue',
    items: [
      {
        id: 'church-accounts',
        question: 'Can churches and ministries publish their services on Kingly?',
        answer:
          'Yes! Churches, campus ministries, and global broadcast organizations use Kingly to distribute weekly sermon series, worship nights, conference audio, and daily devotionals to a worldwide audience.',
      },
      {
        id: 'team-collaboration',
        question: 'Can multiple media team members manage a single ministry profile?',
        answer:
          'Yes. With our Ministry & Label Enterprise plan, organizations receive up to 10 team seats, allowing media directors, sound engineers, and communications coordinators to collaborate securely without sharing passwords.',
      },
      {
        id: 'broadcast-scale-parties',
        question: 'Can we host church-wide live listening parties?',
        answer:
          'Yes! Enterprise accounts can host large-scale broadcast listening parties for up to 5,000 simultaneous listeners with co-host moderation tools, ideal for album releases, online prayer watches, and sermon discussions.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety, Content & Support',
    accent: 'rose',
    items: [
      {
        id: 'values-safe',
        question: 'How does Kingly ensure content is safe for families?',
        answer:
          'Every creator is reviewed before gaining publishing rights, and all promotional campaigns are strictly vetted. We have zero tolerance for explicit content, profanity, vulgarity, or harmful discussions, making Kingly safe for listeners of all ages.',
      },
      {
        id: 'report-content',
        question: 'How do I report copyright violations or inappropriate content?',
        answer:
          'You can flag any track, playlist, or listening party using the in-app "Report" button, or email our Trust & Safety team directly at support@kinglyapp.com with links and details.',
      },
      {
        id: 'contact-support',
        question: 'How can I get in touch with Kingly support?',
        answer:
          'Our support team is available at support@kinglyapp.com. We typically respond within 24–48 hours for general inquiries, creator onboarding questions, and account assistance.',
      },
    ],
  },
];
