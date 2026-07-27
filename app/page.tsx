import Image from 'next/image';
import Link from 'next/link';

function MusicIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M6.05 24.55V9.38L20.05 7.05V22.22"
        stroke="#65E6F7"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.55 25.05C11.483 25.05 13.05 23.483 13.05 21.55C13.05 19.617 11.483 18.05 9.55 18.05C7.617 18.05 6.05 19.617 6.05 21.55C6.05 23.483 7.617 25.05 9.55 25.05Z"
        stroke="#65E6F7"
        strokeWidth="2.1"
      />
      <path
        d="M23.55 22.72C25.483 22.72 27.05 21.153 27.05 19.22C27.05 17.287 25.483 15.72 23.55 15.72C21.617 15.72 20.05 17.287 20.05 19.22C20.05 21.153 21.617 22.72 23.55 22.72Z"
        stroke="#65E6F7"
        strokeWidth="2.1"
      />
    </svg>
  );
}

function PodcastIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3.05C14.928 3.05 15.819 3.419 16.475 4.075C17.131 4.731 17.5 5.622 17.5 6.55V14.72C17.5 15.648 17.131 16.538 16.475 17.194C15.819 17.851 14.928 18.22 14 18.22C13.072 18.22 12.182 17.851 11.525 17.194C10.869 16.538 10.5 15.648 10.5 14.72V6.55C10.5 5.622 10.869 4.731 11.525 4.075C12.182 3.419 13.072 3.05 14 3.05Z"
        stroke="#F5A00C"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M6.05 8.05V10.38C6.05 12.546 6.91 14.623 8.442 16.155C9.973 17.686 12.051 18.547 14.217 18.547C16.383 18.547 18.46 17.686 19.991 16.155C21.523 14.623 22.383 12.546 22.383 10.38V8.05M14.217 18.547V22.05M9.55 22.05H18.883"
        stroke="#F5A00C"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 25.38C20.443 25.38 25.667 20.157 25.667 13.713C25.667 7.27 20.443 2.047 14 2.047C7.557 2.047 2.333 7.27 2.333 13.713C2.333 20.157 7.557 25.38 14 25.38Z"
        stroke="#7B39ED"
        strokeWidth="2.1"
      />
      <circle cx="14" cy="13.72" r="3.5" fill="#7B39ED" />
      <path
        d="M14 2.05V6.72M14 20.72V25.38M2.33 13.72H7M21 13.72H25.67"
        stroke="#7B39ED"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const features = [
  {
    title: 'Music',
    description:
      'Thousands of tracks from worship, gospel, and faith-based artists — curated for your walk.',
    accent: 'cyan' as const,
    icon: <MusicIcon />,
  },
  {
    title: 'Podcasts',
    description:
      'Sermons, conversations, and teachings from voices that inspire — on demand, anytime.',
    accent: 'amber' as const,
    icon: <PodcastIcon />,
  },
  {
    title: 'Live Streaming',
    description:
      'Join live services, concerts, and events in real time — wherever you are in the world.',
    accent: 'purple' as const,
    icon: <LiveIcon />,
  },
];

export default function HomePage() {
  return (
    <main className="site-main landing">
      <section className="hero" aria-label="SoundCode introduction">
        <div className="hero-bg" aria-hidden="true">
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/intro-bg.png"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-bg-overlay" />
          <div className="hero-orb hero-orb-purple" />
          <div className="hero-orb hero-orb-green" />
          <div className="hero-ring hero-ring-purple" />
          <div className="hero-ring hero-ring-cyan" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Faith · Music · Community</p>
          <Image
            src="/logo-waveform.png"
            alt="SoundCode waveform logo"
            width={160}
            height={61}
            className="hero-logo"
            priority
          />
          <h1 className="hero-wordmark">
            Sound<span className="accent">Code</span>
          </h1>
          <p className="hero-categories">
            <span className="cat-music">Music</span>
            <span className="divider"> · </span>
            <span className="cat-podcasts">Podcasts</span>
            <span className="divider"> · </span>
            <span className="cat-live">Live Streaming</span>
          </p>
          <p className="hero-pitch">
            The faith-based audio platform built for the community.
            <br />
            Discover music, sermons, and voices that move you.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#features">
              Explore Now
            </a>
            {/* App download / signup destinations TBD */}
            <Link className="btn btn-ghost" href="/faq">
              Sign Up Free
            </Link>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <div className="scroll-line" />
            <span className="scroll-label">Scroll</span>
          </div>
        </div>
      </section>

      <section className="features" id="features" aria-labelledby="features-heading">
        <div className="features-inner">
          <p className="features-eyebrow">Everything in one place</p>
          <h2 className="features-headline" id="features-heading">
            Built for the faithful.
            <br />
            <span className="muted">Designed for discovery.</span>
          </h2>

          <div className="feature-grid">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`feature-card feature-card-${feature.accent}`}
              >
                <div className="feature-glow" aria-hidden="true" />
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="features-cta">
            {/* App store / listen destinations TBD */}
            <Link className="btn btn-emerald" href="/faq">
              Start Listening →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
