import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';

export const metadata: Metadata = { title: 'Terms of use' };

export default function TermsPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument title="Terms and Conditions" />
    </main>
  );
}
