'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { initializeStorage } from '@/lib/storage';

export default function Home() {
  useEffect(() => {
    initializeStorage();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Welcome to STESSA
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8">
            Science and  Technology  Education
          </p>
          <p className="text-base sm:text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Your comprehensive hub for accessing courses, learning resources, and staying updated with departmental announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/academics"
              className="btn-primary inline-block text-center"
            >
              Explore Courses
            </Link>
            <Link
              href="/resources"
              className="btn-secondary inline-block text-center"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Academics Card */}
            <div className="resource-card">
              <div className="text-accent text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Academics</h3>
              <p className="text-foreground/80 mb-6">
                Browse our comprehensive course catalog organized by department with detailed descriptions and course codes.
              </p>
              <Link href="/academics" className="text-primary font-semibold hover:text-accent">
                View Courses →
              </Link>
            </div>

            {/* Resources Card */}
            <div className="resource-card">
              <div className="text-accent text-3xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3">Resources</h3>
              <p className="text-foreground/80 mb-6">
                Access educational materials including videos, PDFs, documents, and links related to your courses.
              </p>
              <Link href="/resources" className="text-primary font-semibold hover:text-accent">
                Explore Resources →
              </Link>
            </div>

            {/* News Card */}
            <div className="resource-card">
              <div className="text-accent text-3xl mb-4">📰</div>
              <h3 className="text-xl font-bold mb-3">News & Updates</h3>
              <p className="text-foreground/80 mb-6">
                Stay informed with the latest announcements, updates, and news from the STESSA department.
              </p>
              <Link href="/news" className="text-primary font-semibold hover:text-accent">
                Read News →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80">
            &copy; 2024 LASU STESSA. All rights reserved.
 made with ❤️ for Lasuites by{" "}
      <a href="mailto:onimisiadeolu@gmail.com">
        reabot6
          </p>
        </div>
      </footer>
    </div>
  );
}
