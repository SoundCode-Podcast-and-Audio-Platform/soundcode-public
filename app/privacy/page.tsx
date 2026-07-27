import type { Metadata } from 'next';
import { LegalDocument } from '../../components/LegalDocument';

export const metadata: Metadata = { title: 'Privacy policy' };

export default function PrivacyPage() {
  return (
    <main className="site-main is-legal">
      <LegalDocument title="Privacy Policy" />
    </main>
  );
}
