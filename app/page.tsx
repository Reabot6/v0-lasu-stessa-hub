'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { PremiumHero } from '@/components/premium-hero';
import { LeadershipSection } from '@/components/leadership-section';
import { DepartmentTree } from '@/components/department-tree';
import { PremiumStats } from '@/components/premium-stats';
import { SimpleCatalogue } from '@/components/simple-catalogue';
import { PremiumFooter } from '@/components/premium-footer';
import { initializeStorage } from '@/lib/storage';

export default function Home() {
  useEffect(() => {
    initializeStorage();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <PremiumHero />

      {/* Leadership Vision */}
      <LeadershipSection />

      {/* Academic Departments Tree */}
      <DepartmentTree />

      {/* Statistics Section */}
      <PremiumStats />

      {/* Service Catalogue */}
      <SimpleCatalogue />

      {/* Footer */}
      <PremiumFooter />
    </div>
  );
}
