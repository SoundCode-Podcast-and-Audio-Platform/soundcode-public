import type { Metadata } from 'next';
import { FaqPageClient } from '../../components/faq/FaqPageClient';

export const metadata: Metadata = { title: 'FAQ' };

export default function FaqPage() {
  return (
    <main className="site-main is-faq">
      <FaqPageClient />
    </main>
  );
}
