'use client';

import { useMemo, useState } from 'react';
import { faqSections, type FaqAccent, type FaqSection } from './faqData';

function SectionIcon({ accent }: { accent: FaqAccent }) {
  const stroke = 'currentColor';
  switch (accent) {
    case 'cyan':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 19.5V6.5L12 4l8 2.5v13L12 22l-8-2.5z"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 4v18" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case 'emerald':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="3.5" stroke={stroke} strokeWidth="1.6" />
          <path
            d="M5 19.5c0-3.2 3.1-5.5 7-5.5s7 2.3 7 5.5"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'amber':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 18V6l10-2v12"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="18" r="2.5" stroke={stroke} strokeWidth="1.6" />
          <circle cx="17" cy="16" r="2.5" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case 'purple':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="3" stroke={stroke} strokeWidth="1.6" />
          <circle cx="16" cy="10" r="2.5" stroke={stroke} strokeWidth="1.6" />
          <path
            d="M4 19c.8-2.6 2.9-4 5-4s4.2 1.4 5 4M14 19c.4-1.5 1.5-2.5 3-2.5s2.4.8 3 2.5"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'blue':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 20V9l8-5 8 5v11"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M9 20v-6h6v6" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case 'rose':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6l7-3z"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function filterSections(query: string, category: string): FaqSection[] {
  const q = query.trim().toLowerCase();
  return faqSections
    .filter((section) => category === 'all' || section.id === category)
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        if (!q) return true;
        return (
          item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
        );
      }),
    }))
    .filter((section) => section.items.length > 0);
}

export function FaqPageClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const visible = useMemo(() => filterSections(query, category), [query, category]);

  return (
    <div className="faq-page">
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about SoundCode.</p>
        <label className="faq-search">
          <span className="faq-search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            aria-label="Search FAQ questions"
          />
        </label>
      </header>

      <div className="faq-pills" role="tablist" aria-label="FAQ categories">
        <button
          type="button"
          role="tab"
          aria-selected={category === 'all'}
          className={`faq-pill${category === 'all' ? ' is-active' : ''}`}
          onClick={() => setCategory('all')}
        >
          All
        </button>
        {faqSections.map((section) => (
          <button
            key={section.id}
            type="button"
            role="tab"
            aria-selected={category === section.id}
            className={`faq-pill faq-pill-${section.accent}${
              category === section.id ? ' is-active' : ''
            }`}
            onClick={() => setCategory(section.id)}
          >
            <span className="faq-pill-icon">
              <SectionIcon accent={section.accent} />
            </span>
            {section.title}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="faq-empty">No questions match your search.</p>
      ) : (
        visible.map((section) => (
          <section key={section.id} className={`faq-section faq-accent-${section.accent}`}>
            <h2 className="faq-section-title">
              <span className="faq-section-icon">
                <SectionIcon accent={section.accent} />
              </span>
              {section.title}
            </h2>
            <div className="faq-accordion">
              {section.items.map((item) => (
                <details key={item.id} className="faq-item">
                  <summary>
                    <span>{item.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
