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

function PartyIcon() {
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

function SliderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 8H16M22 8H24" stroke="#7B39ED" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="19" cy="8" r="3" stroke="#7B39ED" strokeWidth="2.1" fill="#06060B" />
      <path d="M4 20H8M14 20H24" stroke="#7B39ED" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="11" cy="20" r="3" stroke="#7B39ED" strokeWidth="2.1" fill="#06060B" />
    </svg>
  );
}

function AudioHifiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M4 14C4 8.477 8.477 4 14 4C19.523 4 24 8.477 24 14V21C24 22.657 22.657 24 21 24H19C17.895 24 17 23.105 17 22V17C17 15.895 17.895 15 19 15H22V14C22 9.582 18.418 6 14 6C9.582 6 6 9.582 6 14V15H9C10.105 15 11 15.895 11 17V22C11 23.105 10.105 24 9 24H7C5.343 24 4 22.657 4 21V14Z"
        stroke="#65E6F7"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StudioIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M5 21V11L14 4L23 11V21C23 22.105 22.105 23 21 23H7C5.895 23 5 22.105 5 21Z"
        stroke="#F5A00C"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 23V15H18V23"
        stroke="#F5A00C"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    title: 'Worship & Music',
    description:
      'Thousands of master-quality tracks from worship collectives, gospel ministers, and emerging Christian artists — curated for every prayer and walk of life.',
    accent: 'cyan' as const,
    icon: <MusicIcon />,
  },
  {
    title: 'Podcasts & Sermons',
    description:
      'Transformational sermons, biblical deep-dives, and conversations from inspiring voices, complete with time-synced transcripts and cross-device resume.',
    accent: 'amber' as const,
    icon: <PodcastIcon />,
  },
  {
    title: 'Interactive Listening Parties',
    description:
      'Gather friends, small groups, or church communities to listen in real time with synchronized crossfade, live room chat, and exclusive artist draft premieres.',
    accent: 'purple' as const,
    icon: <PartyIcon />,
  },
  {
    title: 'Discovery Mode Slider',
    description:
      'Fine-tune your listening in real time — slide from Familiar worship favorites to Balanced, or venture into Adventurous new releases and international gospel.',
    accent: 'purple' as const,
    icon: <SliderIcon />,
  },
  {
    title: 'Lossless Audio & Offline Freedom',
    description:
      'Stream studio-grade 320 kbps high-fidelity audio or take your songs and sermons anywhere with encrypted device downloads for completely offline listening.',
    accent: 'cyan' as const,
    icon: <AudioHifiIcon />,
  },
  {
    title: 'Kingly Studio & Backstage',
    description:
      'Powerful publishing, synchronized lyrics, fast master ingestion, and deep retention & source attribution analytics built specifically for faith creators and ministries.',
    accent: 'amber' as const,
    icon: <StudioIcon />,
  },
];

export default function HomePage() {
  return (
    <main className="site-main landing">
      {/* Hero Section */}
      <section className="hero" aria-label="Kingly introduction">
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
          <p className="hero-eyebrow">Faith · Music · Audio Experience</p>
          <Image
            src="/logo-waveform.png"
            alt="Kingly waveform logo"
            width={160}
            height={61}
            className="hero-logo"
            priority
          />
          <h1 className="hero-wordmark">
            King<span className="accent">ly</span>
          </h1>
          <p className="hero-categories">
            <span className="cat-music">Music</span>
            <span className="divider"> · </span>
            <span className="cat-podcasts">Podcasts</span>
            <span className="divider"> · </span>
            <span className="cat-live">Listening Parties</span>
            <span className="divider"> · </span>
            <span className="cat-music">Discovery</span>
          </p>
          <p className="hero-pitch">
            The next-generation faith-based audio platform built for community.
            <br />
            Stream high-fidelity worship, host live listening parties, control your discovery, and empower Christian creators.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#features">
              Explore Features
            </a>
            <Link className="btn btn-emerald" href="/pricing">
              View Plans & Pricing
            </Link>
            <Link className="btn btn-ghost" href="/faq">
              Learn More
            </Link>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <div className="scroll-line" />
            <span className="scroll-label">Scroll</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features" id="features" aria-labelledby="features-heading">
        <div className="features-inner">
          <p className="features-eyebrow">Everything in one sanctuary</p>
          <h2 className="features-headline" id="features-heading">
            Built for the faithful.
            <br />
            <span className="muted">Engineered for connection.</span>
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
        </div>
      </section>

      {/* Experience Highlights Showcase */}
      <section className="showcase-section" aria-labelledby="showcase-heading">
        <div className="showcase-inner">
          <div className="showcase-card showcase-card-slider">
            <div className="showcase-text">
              <span className="badge-pill badge-pill-emerald">Discovery Mode</span>
              <h3>Take Command of Your Faith Soundtrack</h3>
              <p>
                Unlike rigid algorithms, Kingly puts you in the driver&apos;s seat. Adjust our signature
                Discovery Mode Slider from Familiar worship favorites to Balanced recommendations, or slide all the
                way to Adventurous to discover anointed independent creators and international languages.
              </p>
              <ul className="showcase-list">
                <li>Real-time session adaptation to your mood</li>
                <li>Made For You & Kingly Curated editorial shelves</li>
                <li>Values-safe catalog with zero explicit or harmful content</li>
              </ul>
            </div>
            <div className="showcase-visual">
              <div className="slider-mockup">
                <div className="slider-label-row">
                  <span className="slider-label active">Familiar</span>
                  <span className="slider-label active">Balanced</span>
                  <span className="slider-label">Adventurous</span>
                </div>
                <div className="slider-track">
                  <div className="slider-fill" style={{ width: '60%' }} />
                  <div className="slider-thumb" style={{ left: '60%' }} />
                </div>
                <div className="slider-caption">Active: Balanced Discovery</div>
              </div>
            </div>
          </div>

          <div className="showcase-card showcase-card-party">
            <div className="showcase-visual">
              <div className="party-mockup">
                <div className="party-header">
                  <div className="party-live-badge">
                    <span className="pulse-dot" /> LIVE PARTY
                  </div>
                  <div className="party-count">48 Listening</div>
                </div>
                <div className="party-track">
                  <div className="party-art">
                    <img src="/logo-cyan.png" alt="" width={32} height={32} />
                  </div>
                  <div className="party-meta">
                    <strong>Grace & Majesty (Live Premiere)</strong>
                    <span>Kingly Worship Collectives</span>
                  </div>
                </div>
                <div className="party-bubbles">
                  <div className="bubble">“This bridge is so powerful! 🙌”</div>
                  <div className="bubble">“Synced crossfade feels amazing!”</div>
                </div>
              </div>
            </div>
            <div className="showcase-text">
              <span className="badge-pill badge-pill-purple">Listening Parties</span>
              <h3>Worship Together in Real Time</h3>
              <p>
                Experience fellowship through shared sound. Gather with friends, host church listening circles, or
                join an artist for a live pre-release album premiere with synced party crossfade, reactions, and real-time chat.
              </p>
              <ul className="showcase-list">
                <li>Close Friends rooms (up to 5 listeners) on Free</li>
                <li>Large Community rooms (up to 500–5,000 listeners) on Plus & Studio Pro</li>
                <li>Draft track premieres before public release</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Preview Callout */}
      <section className="plans-callout" aria-labelledby="plans-callout-heading">
        <div className="plans-callout-inner">
          <p className="plans-eyebrow">Listener & Creator Subscriptions</p>
          <h2 id="plans-callout-heading">Choose the plan that fits your walk</h2>
          <p className="plans-description">
            From free standard streaming to high-fidelity audio with offline downloads, or professional studio analytics for ministers and artists — Kingly has a plan for you.
          </p>

          <div className="plans-split-preview">
            <div className="preview-card">
              <span className="preview-badge">For Listeners</span>
              <h3>Free, Plus, Duo & Family</h3>
              <p>
                Stream ad-free, download for offline travels, customize your equalizer, and tune the Discovery Slider.
              </p>
              <div className="preview-price">
                Starting at <span className="highlight">$0</span> / month
              </div>
              <Link className="btn btn-primary" href="/pricing?audience=listener">
                View Listener Tiers →
              </Link>
            </div>

            <div className="preview-card preview-card-creator">
              <span className="preview-badge preview-badge-creator">For Creators</span>
              <h3>Starter, Growth, Studio Pro & Enterprise</h3>
              <p>
                Publish master audio, analyze listener retention curves, host live album premieres, and collaborate across your team.
              </p>
              <div className="preview-price">
                Starting at <span className="highlight">$0</span> / application
              </div>
              <Link className="btn btn-emerald" href="/pricing?audience=creator">
                View Creator Tiers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
