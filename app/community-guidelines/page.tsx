import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';

export const metadata: Metadata = { title: 'Community guidelines' };

export default function CommunityGuidelinesPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument title="Community Guidelines" />
    </main>
  );
}
