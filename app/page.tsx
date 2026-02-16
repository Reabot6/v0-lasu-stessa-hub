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
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:order-2">
              <div className="relative w-48 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E0xF3lk30cDqt6SiWNNnKDSBhTz49z.png"

                  alt="Prof Akindoju Olugbenga Gabriel– Dean of Faculty"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Faculty of Education</h2>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-foreground/90 mb-4 leading-relaxed font-semibold text-lg">
                  PROF AKINDOJU OLUGBENGA GABRIEL
                </p>
                <p className="text-foreground/70 mb-4 font-semibold">Dean of Faculty</p>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  Welcome to the Faculty of Education, the hub for training of 21st century would-be teachers. The Faculty provides the pedagogical knowledge and pedagogical content knowledge to make an effective teacher. There are presently five Departments: Educational Management, Human Kinetic Sports and Health Education, Language Arts and Social Science Education, Educational Foundation and Counseling Psychology and Science and Technology Education. It is the largest Faculty in the University and accommodates 22 programmes. All programmes of the Faculty are approved by the National Universities Commission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollObserver>

      {/* Department of Science and Technology Education */}
      <ScrollObserver>
        <section className="py-12 sm:py-16 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center">
              <div className="relative w-48 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y5m5ft6lOPdMmx0pDU1dKlcllHINAo.png"
                  alt="Assoc Prof Alabi Olaide Bukola  – Head of Department"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
                Department of Science & Technology Education
              </h2>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-foreground/90 mb-4 leading-relaxed font-semibold text-lg">

                  ASSOC PROF ALABI OLAIDE BUKOLA
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
      </ScrollObserver>

      {/* Our Catalogue – Bento Grid Layout */}
      <ScrollObserver>
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <AnimateOnScroll animationType="fadeUp" className="text-center mb-16 md:mb-20">
              <h2 className="text-section-title gradient-text mb-6">Our Catalogue</h2>
              <p className="text-section-subtitle">
                Discover the core offerings of STESSA — from structured academic programs to rich learning materials and timely departmental updates.
              </p>
            </AnimateOnScroll>

            <BentoGrid>
              {/* Academics Card - Highlight */}
              <AnimateOnScroll animationType="revealLeft">
                <BentoGridItem span="half" highlight>
                  <div className="space-y-6">
                    <div className="text-6xl">📚</div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-3">Academics</h3>
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        Explore our full curriculum across departments including Biology Education, Chemistry, Computer Science, Educational Technology, Mathematics, and Physics Education. View detailed course descriptions and learning outcomes.
                      </p>
                    </div>
                    <Link
                      href="/academics"
                      className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent/80 transition-colors group"
                    >
                      View Full Course Catalogue
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </BentoGridItem>
              </AnimateOnScroll>

              {/* Resources Card */}
              <AnimateOnScroll animationType="fadeUp" delay={0.2}>
                <BentoGridItem span="third">
                  <div className="space-y-6">
                    <div className="text-5xl">📖</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Learning Resources</h3>
                      <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                        Curated educational materials including lecture notes, videos, research papers, laboratory guides, and past exams.
                      </p>
                    </div>
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors group"
                    >
                      Browse
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </BentoGridItem>
              </AnimateOnScroll>

              {/* News Card */}
              <AnimateOnScroll animationType="revealRight" delay={0.4}>
                <BentoGridItem span="third">
                  <div className="space-y-6">
                    <div className="text-5xl">📰</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">News & Updates</h3>
                      <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                        Stay informed with official announcements, event schedules, seminars, examination timetables, and faculty achievements.
                      </p>
                    </div>
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors group"
                    >
                      Updates
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </BentoGridItem>
              </AnimateOnScroll>
            </BentoGrid>
          </div>
        </section>
      </ScrollObserver>

      {/* LASU Motto Footer Banner */}
      <div className="bg-accent text-primary font-semibold text-center py-4 shadow-inner">
        <p className="text-base md:text-lg tracking-wide">
          WE ARE LASU • WE ARE GREAT
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <p className="text-base opacity-90">
            © {new Date().getFullYear()} LASU STESSA. All rights reserved.
          </p>
          <p className="text-sm md:text-base opacity-75">
            Department of Science and Technology Education | Faculty of Education, Lagos State University
          </p>
          <p className="text-sm md:text-base opacity-70 pt-4 border-t border-primary-foreground/20 mt-6">
            Made with ❤️ for LASUites by{' '}
            <a
              href="mailto:onimisiadeolu@gmail.com"
              className="text-accent hover:text-accent/80 font-medium transition-colors underline underline-offset-2"
            >
              reabot6
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
