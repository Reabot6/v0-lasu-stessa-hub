'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

      {/* Department of Science and Tech */}
      <section className="py-12 sm:py-16 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center">
              <div className="relative w-48 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E0xF3lk30cDqt6SiWNNnKDSBhTz49z.png"
                  alt="Head of Department"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Department of Science & Technology Education</h2>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-foreground/90 mb-4 leading-relaxed font-semibold text-lg">

                  PROF AKINDOJU OLUGBENGA GABRIEL
                </p>
                <p className="text-foreground/70 mb-4 font-semibold">Head of Department</p>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  The Department of Science and Technology Education resides in the Faculty of Education, Lagos State University, Ojo campus. The department has six units:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                  <li>Biology Education</li>
                  <li>Chemistry Education</li>
                  <li>Computer Science Education</li>
                  <li>Educational Technology</li>
                  <li>Mathematics Education</li>
                  <li>Physics Education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Catalogue – demure & detailed services overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight">
              Our Catalogue
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover the core offerings of STESA — from structured academic programs to rich learning materials and timely departmental updates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Academics Card */}
            <div className="group bg-card rounded-2xl border border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="text-accent text-5xl md:text-6xl opacity-90 group-hover:opacity-100 transition-opacity">
                  📚
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-primary">
                    Academics
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    Explore our full curriculum across departments including Biology Education, Chemistry, Computer Science, Educational Technology, Mathematics, and Physics Education. View detailed course descriptions, codes, learning outcomes, prerequisites, and semester structures.
                  </p>
                </div>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  View Full Course Catalogue
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Resources Card */}
            <div className="group bg-card rounded-2xl border border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="text-accent text-5xl md:text-6xl opacity-90 group-hover:opacity-100 transition-opacity">
                  📖
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-primary">
                    Learning Resources
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    Access a curated collection of high-quality educational materials: lecture notes, instructional videos, research papers, laboratory guides, past examination questions, recommended textbooks, and external reference links — all organized by course and unit for easy navigation.
                  </p>
                </div>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  Browse All Resources
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* News & Updates Card */}
            <div className="group bg-card rounded-2xl border border-border/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="text-accent text-5xl md:text-6xl opacity-90 group-hover:opacity-100 transition-opacity">
                  📰
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-primary">
                    News & Department Updates
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">
                    Stay informed with official announcements, event schedules, seminar notices, examination timetables, faculty achievements, student opportunities, important deadlines, and departmental circulars — regularly updated to keep our community connected and prepared.
                  </p>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  Read Latest Updates
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LASU Motto Footer Banner */}
      <div className="bg-accent text-primary font-semibold text-center py-4 shadow-inner">
        <p className="text-base md:text-lg tracking-wide">
          WE ARE LASU • WE ARE GREAT
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80">
            &copy; 2024 LASU STESSA. All rights reserved.
            <br />
            Made with ❤️ for Lasuites by{" "}
            <a href="mailto:onimisiadeolu@gmail.com" className="underline hover:opacity-70">
              reabot6
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
