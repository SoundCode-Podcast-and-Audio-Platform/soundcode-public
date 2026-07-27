import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';

export const metadata: Metadata = { title: 'Creator guidelines' };

export default function CreatorGuidelinesPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument title="Creator Guidelines" />
    </main>
  );
}
