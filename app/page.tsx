'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { CyberHero } from '@/components/cyber-hero';
import { LeadershipSection } from '@/components/leadership-section';
import { HexagonalDepartments } from '@/components/hexagonal-departments';
import { StatsSection } from '@/components/stats-section';
import { NewsCarousel } from '@/components/news-carousel';
import { CatalogueDashboard } from '@/components/catalogue-dashboard';
import { CyberFooter } from '@/components/cyber-footer';
import { initializeStorage } from '@/lib/storage';

export default function Home() {
  useEffect(() => {
    initializeStorage();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Navigation />

      {/* Hero Section */}
      <CyberHero />

      {/* Leadership Vision */}
      <LeadershipSection />

      {/* Academic Departments */}
      <HexagonalDepartments />

      {/* Statistics Section */}
      <StatsSection />

      {/* Service Catalogue */}
      <CatalogueDashboard />

      {/* News Carousel */}
      <NewsCarousel />

      {/* Footer */}
      <CyberFooter />
    </div>
  );
}
