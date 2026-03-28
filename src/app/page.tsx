'use client';

import dynamic from 'next/dynamic';
import { HorizontalScrollLayout } from '@/components/layout/HorizontalScrollLayout';

// Dynamic imports for heavy animation components
const EntryScreen = dynamic(() => import('@/components/sections/EntryScreen').then(mod => mod.EntryScreen), { ssr: false });
const ProductDemo = dynamic(() => import('@/components/sections/ProductDemo').then(mod => mod.ProductDemo), { ssr: false });
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection').then(mod => mod.FeaturesSection), { ssr: false });
const SocialStats = dynamic(() => import('@/components/sections/SocialStats').then(mod => mod.SocialStats), { ssr: false });
const Pricing = dynamic(() => import('@/components/sections/Pricing').then(mod => mod.Pricing), { ssr: false });
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA').then(mod => mod.FinalCTA), { ssr: false });

export default function Home() {
  return (
    <HorizontalScrollLayout>
      <EntryScreen />
      <ProductDemo />
      <FeaturesSection />
      <SocialStats />
      <Pricing />
      <FinalCTA />
    </HorizontalScrollLayout>
  );
}
