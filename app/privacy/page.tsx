import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';
import { privacyDoc } from '../../content/privacy';

export const metadata: Metadata = { title: 'Privacy policy' };

export default function PrivacyPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument doc={privacyDoc} />
    </main>
  );
}
