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

      {/* LASU Motto Banner */}
      <div className="bg-accent text-primary font-bold text-center py-3 px-4 overflow-hidden">
        <style>{`
          @keyframes roll-banner {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .roll-banner {
            animation: roll-banner 6s linear infinite;
            display: inline-block;
            white-space: nowrap;
          }
        `}</style>
        <div className="roll-banner text-sm sm:text-base">
          WE ARE LASU WE ARE GREAT • WE ARE LASU WE ARE GREAT • WE ARE LASU WE ARE GREAT
        </div>
      </div>

      {/* Hero Section with Vice Chancellor */}
      <section className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Welcome to STESA
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-6">
                Science, Technology, Engineering and Skills Services for Africa
              </p>
              <p className="text-base sm:text-lg opacity-80 mb-6">
                Lagos State University's hub for Science and Technology Education
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/academics" className="btn-primary inline-block text-center">
                  Explore Academics
                </Link>
                <Link href="/resources" className="btn-secondary inline-block text-center">
                  Browse Resources
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NFYOghHtnv4zOUbaOGVVLHh1JJIiao.png"
                  alt="Vice Chancellor Prof. Ibiyemi Olatunji-Bello"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vice Chancellor Welcome */}
      <section className="py-12 sm:py-16 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Vice Chancellor's Welcome</h2>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-foreground/90 mb-4 leading-relaxed italic">
                  "It is with great pleasure that I welcome you to Lagos State University, the citadel of learning, the University of First Choice and the Nation's pride. Over the years, the institution has demonstrated excellence in its activities. We are irrevocably committed to sustaining this culture and indeed transmitting it from excellence to distinction. I once again welcome you to the 'Preferred State University at the Centre of Excellence'."
                </p>
                <p className="font-bold text-primary">Prof. Ibiyemi Olatunji-Bello, mni, fnli, FSPSP, NPOM</p>
                <p className="text-foreground/70 text-sm">Vice Chancellor, Lagos State University</p>
              </div>
            </div>
            <div className="flex justify-center md:block">
              <div className="relative w-48 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NFYOghHtnv4zOUbaOGVVLHh1JJIiao.png"
                  alt="Vice Chancellor"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty of Education */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:order-2">
              <div className="relative w-48 h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y5m5ft6lOPdMmx0pDU1dKlcllHINAo.png"
                  alt="Dean of Faculty"
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

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Academics Card */}
            <div className="resource-card hover:shadow-lg transition">
              <div className="text-accent text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Academics</h3>
              <p className="text-foreground/80 mb-6">
                Browse our comprehensive course catalog organized by department with detailed descriptions and course codes.
              </p>
              <Link href="/academics" className="text-primary font-semibold hover:text-accent transition">
                View Courses →
              </Link>
            </div>

            {/* Resources Card */}
            <div className="resource-card hover:shadow-lg transition">
              <div className="text-accent text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Resources</h3>
              <p className="text-foreground/80 mb-6">
                Access educational materials including videos, PDFs, documents, and links related to your courses.
              </p>
              <Link href="/resources" className="text-primary font-semibold hover:text-accent transition">
                Explore Resources →
              </Link>
            </div>

            {/* News Card */}
            <div className="resource-card hover:shadow-lg transition">
              <div className="text-accent text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold mb-3 text-primary">News & Updates</h3>
              <p className="text-foreground/80 mb-6">
                Stay informed with the latest announcements, updates, and news from the STESA department.
              </p>
              <Link href="/news" className="text-primary font-semibold hover:text-accent transition">
                Read News →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LASU Motto Footer Banner */}
      <div className="bg-accent text-primary font-bold text-center py-3 px-4">
        <p className="text-sm sm:text-base">WE ARE LASU • WE ARE GREAT</p>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="opacity-80 mb-2">
            &copy; 2024 LASU STESA - Science, Technology, Engineering and Skills Services for Africa
          </p>
          <p className="text-sm opacity-70">
            Department of Science and Technology Education, Faculty of Education
          </p>
        </div>
      </footer>
    </div>
  );
}
