import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';

export const metadata: Metadata = { title: 'FAQ' };

export default function FaqPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument title="Frequently Asked Questions" />
    </main>
  );
}
