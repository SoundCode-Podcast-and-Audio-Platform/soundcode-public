import Link from 'next/link';

/** Primary nav links inside the floating pill */
export const centerNavLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/creator-guidelines', label: 'Creators' },
];

/** Full site links for footer */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/creator-guidelines', label: 'Creator guidelines' },
  { href: '/community-guidelines', label: 'Community guidelines' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-pill">
        <Link href="/" className="header-logo" aria-label="Kingly home">
          <span className="header-logo-mark" aria-hidden="true">
            <img src="/logo-cyan.png" alt="" width={22} height={22} />
          </span>
          <span className="brand header-brand-text">
            King<span>ly</span>
          </span>
        </Link>

        <nav className="nav nav-center" aria-label="Primary">
          {centerNavLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/pricing" className="header-cta">
          Get the app
        </Link>
      </div>
    </header>
  );
}
