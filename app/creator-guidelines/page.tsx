import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';
import { creatorGuidelinesDoc } from '../../content/creator-guidelines';

export const metadata: Metadata = { title: 'Creator guidelines' };

export default function CreatorGuidelinesPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument doc={creatorGuidelinesDoc} />
    </main>
  );
}
