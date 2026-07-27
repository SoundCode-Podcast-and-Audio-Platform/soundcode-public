import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';
import { termsDoc } from '../../content/terms';

export const metadata: Metadata = { title: 'Terms of use' };

export default function TermsPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument doc={termsDoc} />
    </main>
  );
}
