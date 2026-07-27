import Link from 'next/link';
import { navLinks } from './SiteHeader';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="22" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 5.5v7l6-3.5-6-3.5z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 11v6M8 8v.01M12 17v-4.5a2.5 2.5 0 015 0V17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const socials = [
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { label: 'X', href: '#', icon: <XIcon /> },
  { label: 'YouTube', href: '#', icon: <YouTubeIcon /> },
  { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-panel">
        <div className="footer-watermark" aria-hidden="true">
          SoundCode
        </div>
        <div className="footer-glow" aria-hidden="true" />

        <div className="footer-body">
          <nav className="footer-nav" aria-label="Footer">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer-aside">
            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <a href="mailto:support@soundcode.com">support@soundcode.com</a>
              <p>Faith · Music · Community</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} SoundCode. All rights reserved.</p>
          <p>Policy version reference: 2026-06-01</p>
        </div>
      </div>
    </footer>
  );
}
