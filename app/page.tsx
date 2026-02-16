'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { ScrollObserver } from '@/components/scroll-observer';
import { HeroCarousel } from '@/components/hero-carousel';
import { AnimateOnScroll, ParallaxImage, CountUp } from '@/components/advanced-scroll-animation';
import { BentoGrid, BentoGridItem, FeatureCard } from '@/components/bento-grid';
import { initializeStorage } from '@/lib/storage';

export default function Home() {
  useEffect(() => {
    initializeStorage();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Carousel Background */}
      <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <HeroCarousel isBackground={true} />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 text-center">
          <AnimateOnScroll animationType="fadeUp" duration={0.8}>
            <h1 className="text-hero mb-6 drop-shadow-lg text-white animate-float-in">
              Welcome to STESA
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animationType="fadeUp" duration={0.8} delay={0.2}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-md text-accent">
              Science and Technology Education
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animationType="fadeUp" duration={0.8} delay={0.4}>
            <p className="text-lg sm:text-xl opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
              Your comprehensive hub for accessing courses, learning resources, and staying updated with departmental announcements.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animationType="scale" duration={0.8} delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/academics"
                className="btn-cta inline-flex items-center justify-center px-8 py-4 font-bold text-lg"
              >
                Explore Courses
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 glass-card text-primary-foreground font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Browse Resources
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Vice Chancellor's Welcome – styled like the reference */}
      <ScrollObserver>
        <section className="py-16 md:py-20 bg-gradient-to-br from-card via-card to-background/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight">
                Welcome & Greetings!
              </h2>

              <div className="relative pl-12 md:pl-16">
                {/* Large decorative quote mark */}
                <span className="absolute left-0 top-[-0.2em] text-8xl sm:text-9xl md:text-[10rem] font-black text-accent/40 leading-none select-none">
                  “
                </span>

                <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/90 italic font-medium">
                  It is with great pleasure that I welcome you to Lagos State University, the citadel of learning, the University of First Choice and the Nation’s pride. Over the years, the institution has demonstrated excellence in its activities. We are irrevocably committed to sustaining this culture and indeed transmitting it from excellence to distinction. I once again welcome you to the "Preferred State University at the Centre of Excellence".
                </blockquote>
              </div>

              <div className="pt-6 space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  Prof. Ibiyemi Olaitanji-Bello, mni, fnli, FSPSP, NPOM
                </p>
                <p className="text-xl text-foreground/80 font-medium">
                  Vice Chancellor, Lagos State University
                </p>
              </div>
            </div>

            {/* Right: Large portrait with red/gown vibe */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/40">
                <Image
                  src="https://lasu.edu.ng/home/img/our_vc.png"
                  alt="Prof. Ibiyemi Olaitanji-Bello – Vice Chancellor"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Optional subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Optional decorative blur element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      </ScrollObserver>

      {/* Faculty of Education */}
      <ScrollObserver>
        <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
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
