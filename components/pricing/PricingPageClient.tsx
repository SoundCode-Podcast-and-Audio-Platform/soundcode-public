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
              {showComparison ? 'Hide detailed feature comparison' : 'Compare all listener features in detail'}
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
      ) : null}

      {/* Bottom CTA Banner */}
      <section className="pricing-bottom-cta">
        <h2>Experience the Kingly difference today</h2>
        <p>Explore thousands of faith-based songs, sermons, and interactive listening parties.</p>
        <div className="cta-actions">
          <Link href="/faq" className="btn btn-primary">
            Frequently Asked Questions
          </Link>
          <Link href="/creator-guidelines" className="btn btn-ghost">
            Creator Guidelines
          </Link>
        </div>
      </section>
    </div>
  );
}
