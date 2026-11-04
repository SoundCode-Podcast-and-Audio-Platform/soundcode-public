import type { Metadata } from 'next';
import { PricingPageClient } from '../../components/pricing/PricingPageClient';
import type { Audience } from '../../components/pricing/pricingData';

export const metadata: Metadata = {
  title: 'Pricing & Plans · Listener & Creator Tiers',
  description:
    'Explore Kingly plans for listeners and creators. From Free worship streaming to Kingly Plus high-fidelity audio, offline downloads, and Studio Creator tools.',
};

type Props = {
  searchParams: Promise<{
    audience?: string;
  }>;
};

export default async function PricingPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const initialAudience: Audience = resolvedParams.audience === 'creator' ? 'creator' : 'listener';

  return (
    <main className="site-main is-pricing">
      <PricingPageClient initialAudience={initialAudience} />
    </main>
  );
}
