'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  CREATOR_TIERS,
  LISTENER_COMPARISON,
  LISTENER_TIERS,
  type Audience,
  type BillingCycle,
  type PlanTier,
} from './pricingData';

function CheckIcon({ accent = 'cyan' }: { accent?: string }) {
  const colorMap: Record<string, string> = {
    cyan: '#65E6F7',
    emerald: '#11BA82',
    amber: '#F5A00C',
    purple: '#7B39ED',
  };
  const color = colorMap[accent] || '#65E6F7';

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="check-icon">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" opacity="0.3" />
      <path d="M8 12.5L10.5 15L16 9.5" stroke={color} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="cross-icon">
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <path d="M9 9L15 15M15 9L9 15" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PricingPageClient({ initialAudience }: { initialAudience?: Audience }) {
  const [audience, setAudience] = useState<Audience>(initialAudience === 'creator' ? 'creator' : 'listener');
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  const [showComparison, setShowComparison] = useState(false);

  const activeTiers: PlanTier[] = useMemo(() => {
    return audience === 'creator' ? CREATOR_TIERS : LISTENER_TIERS;
  }, [audience]);

  return (
    <div className="pricing-page">
      {/* Header */}
      <header className="pricing-header">
        <p className="pricing-eyebrow">Plans & Subscriptions</p>
        <h1 className="pricing-title">Simple, transparent plans for worship & ministry</h1>
        <p className="pricing-subtitle">
          Whether you want ad-free high fidelity audio for daily devotionals or broadcast tools for your church or music career, Kingly has you covered.
        </p>

        {/* Audience Toggle (Listeners vs Creators) */}
        <div className="audience-toggle-wrapper" role="tablist" aria-label="Select pricing audience">
          <button
            type="button"
            role="tab"
            aria-selected={audience === 'listener'}
            className={`audience-tab${audience === 'listener' ? ' is-active' : ''}`}
            onClick={() => setAudience('listener')}
          >
            For Listeners
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={audience === 'creator'}
            className={`audience-tab${audience === 'creator' ? ' is-active' : ''}`}
            onClick={() => setAudience('creator')}
          >
            For Creators & Ministries
          </button>
        </div>

        {/* Billing Interval Toggle (Monthly vs Annual) */}
        <div className="billing-cycle-toggle">
          <span className={`cycle-label${cycle === 'monthly' ? ' is-active' : ''}`}>Monthly billing</span>
          <button
            type="button"
            role="switch"
            aria-checked={cycle === 'annual'}
            aria-label="Toggle annual billing discount"
            className={`switch-track${cycle === 'annual' ? ' is-annual' : ''}`}
            onClick={() => setCycle((prev) => (prev === 'monthly' ? 'annual' : 'monthly'))}
          >
            <span className="switch-thumb" />
          </button>
          <span className={`cycle-label${cycle === 'annual' ? ' is-active' : ''}`}>
            Annual billing <span className="discount-pill">Save ~17%</span>
          </span>
        </div>
      </header>

      {/* Pricing Cards Grid */}
      <section className="pricing-grid-section" aria-label="Subscription Tiers">
        <div className={`pricing-cards-grid tiers-count-${activeTiers.length}`}>
          {activeTiers.map((tier) => {
            const price = cycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
            const period = cycle === 'annual' ? tier.periodAnnual : tier.periodMonthly;

            return (
              <div
                key={tier.id}
                className={`pricing-card pricing-card-${tier.accent}${tier.isPopular ? ' is-popular' : ''}`}
              >
                {tier.badge ? (
                  <div className={`tier-badge tier-badge-${tier.accent}`}>{tier.badge}</div>
                ) : null}

                <div className="tier-header">
                  <h2 className="tier-name">{tier.name}</h2>
                  <p className="tier-subtitle">{tier.subtitle}</p>
                </div>

                <div className="tier-pricing">
                  <div className="tier-price-row">
                    <span className="tier-amount">{price}</span>
                    {price !== '$0' ? <span className="tier-slash">/</span> : null}
                    <span className="tier-period">{period}</span>
                  </div>
                </div>

                <div className="tier-cta-box">
                  <Link
                    href={tier.ctaHref}
                    className={`btn tier-btn ${
                      tier.isPopular ? 'btn-primary' : tier.accent === 'emerald' ? 'btn-emerald' : 'btn-ghost'
                    }`}
                  >
                    {tier.ctaLabel}
                  </Link>
                </div>

                <div className="tier-perks">
                  <p className="tier-perks-label">What&apos;s included:</p>
                  <ul className="tier-perks-list">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="perk-item">
                        <CheckIcon accent={tier.accent} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Drawer / Section for Listeners */}
      {audience === 'listener' ? (
        <section className="comparison-section">
          <div className="comparison-toggle-box">
            <button
              type="button"
              className="btn btn-ghost comparison-btn"
              onClick={() => setShowComparison((prev) => !prev)}
            >
              {showComparison ? 'Hide Feature Comparison ↑' : 'Compare All Listener Features In Detail ↓'}
            </button>
          </div>

          {showComparison ? (
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="feature-col">Feature</th>
                    <th>Free</th>
                    <th className="th-highlight">Plus</th>
                    <th>Duo</th>
                    <th>Family</th>
                  </tr>
                </thead>
                <tbody>
                  {LISTENER_COMPARISON.map((row) => (
                    <tr key={row.feature}>
                      <td className="feature-col">
                        <span className="feature-title">{row.feature}</span>
                        <span className="feature-sub">{row.category}</span>
                      </td>
                      <td>
                        {typeof row.free === 'boolean' ? (
                          row.free ? <CheckIcon accent="cyan" /> : <CrossIcon />
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="td-highlight">
                        {typeof row.plus === 'boolean' ? (
                          row.plus ? <CheckIcon accent="cyan" /> : <CrossIcon />
                        ) : (
                          row.plus
                        )}
                      </td>
                      <td>
                        {typeof row.duo === 'boolean' ? (
                          row.duo ? <CheckIcon accent="purple" /> : <CrossIcon />
                        ) : (
                          row.duo
                        )}
                      </td>
                      <td>
                        {typeof row.family === 'boolean' ? (
                          row.family ? <CheckIcon accent="amber" /> : <CrossIcon />
                        ) : (
                          row.family
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      ) : (
        <section className="creator-note-section">
          <div className="creator-note-card">
            <h3>Need custom storage or larger broadcast scale?</h3>
            <p>
              For established recording labels, international church campuses, or multi-campus networks with custom bandwidth and audio engineering requirements, contact our ministry team.
            </p>
            <a
              href="mailto:support@kinglyapp.com?subject=Enterprise%20Broadcast%20Inquiry"
              className="btn btn-emerald"
            >
              Contact Ministry Partnerships
            </a>
          </div>
        </section>
      )}

      {/* Pricing FAQ Section */}
      <section className="pricing-faq-section" aria-labelledby="pricing-faq-heading">
        <h2 id="pricing-faq-heading" className="pricing-faq-title">
          Frequently Asked Questions About Subscriptions
        </h2>
        <div className="pricing-faq-grid">
          <div className="pricing-faq-item">
            <h3>How does the 30-day free trial work?</h3>
            <p>
              When you start a trial for Kingly Plus, you receive full access to all premium features with zero ads, lossless audio, and offline downloads. You can cancel anytime before day 30 and you won&apos;t be billed.
            </p>
          </div>
          <div className="pricing-faq-item">
            <h3>Can I switch between plans later?</h3>
            <p>
              Yes! You can upgrade from Free to Plus, Duo, or Family anytime. If you upgrade, the new tier applies instantly with prorated credit toward your new subscription.
            </p>
          </div>
          <div className="pricing-faq-item">
            <h3>What payment methods are supported?</h3>
            <p>
              We accept international debit/credit cards, Apple Pay, and Google Pay through Stripe, as well as local bank transfers, USSD, and Mobile Money rails across Africa powered by Paystack.
            </p>
          </div>
          <div className="pricing-faq-item">
            <h3>How do Church & Ministry accounts work?</h3>
            <p>
              Churches can apply for Creator Starter or upgrade to Enterprise for multi-staff seats. This allows media directors, sound technicians, and pastors to manage series without sharing personal passwords.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pricing-bottom-cta">
        <h2>Experience the Kingly difference today</h2>
        <p>No credit card required to start listening to thousands of faith-based tracks and sermons.</p>
        <div className="cta-actions">
          <Link href="/faq" className="btn btn-primary">
            Download Kingly App
          </Link>
          <Link href="/creator-guidelines" className="btn btn-ghost">
            Learn About Creator Tools
          </Link>
        </div>
      </section>
    </div>
  );
}
