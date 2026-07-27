import type { ReactNode } from 'react';

export type LegalBlock = string | string[];

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  effectiveDate?: string;
  intro?: string[];
  sections: LegalSection[];
  footerNote?: string;
};

function renderBlock(block: LegalBlock, key: number): ReactNode {
  if (Array.isArray(block)) {
    return (
      <ul key={key}>
        {block.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p key={key}>{block}</p>;
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="legal-page">
      <h1>{doc.title}</h1>
      {doc.effectiveDate ? (
        <p className="legal-effective">Effective Date: {doc.effectiveDate}</p>
      ) : null}
      {doc.intro?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      {doc.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, index) => renderBlock(block, index))}
        </section>
      ))}
      {doc.footerNote ? <p className="legal-footer-note">{doc.footerNote}</p> : null}
    </article>
  );
}
