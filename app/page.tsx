'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { ScrollObserver } from '@/components/scroll-observer';
import { HeroCarousel } from '@/components/hero-carousel';
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-white">
            Welcome to STESA
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-md text-accent">
            Science and Technology Education
          </p>
          <p className="text-lg sm:text-xl opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
            Your comprehensive hub for accessing courses, learning resources, and staying updated with departmental announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/academics"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Courses
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary-foreground"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
              Explore Courses
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/60 text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Browse Resources
            </Link>
          </div>
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

      {/* Our Catalogue – demure & detailed services overview */}
      <ScrollObserver>
        <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight">
              Our Catalogue
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover the core offerings of STESSA — from structured academic programs to rich learning materials and timely departmental updates.
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
                  <h3 className="text-2xl font-semibold text-primary">Academics</h3>
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
                  <h3 className="text-2xl font-semibold text-primary">Learning Resources</h3>
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
                  <h3 className="text-2xl font-semibold text-primary">News & Department Updates</h3>
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
