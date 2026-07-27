import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';
import { communityGuidelinesDoc } from '../../content/community-guidelines';

export const metadata: Metadata = { title: 'Community guidelines' };

export default function CommunityGuidelinesPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument doc={communityGuidelinesDoc} />
    </main>
  );
}
