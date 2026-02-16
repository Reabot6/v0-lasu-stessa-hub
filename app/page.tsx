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
    <div className="min-h-screen bg-background antialiased">
      <Navigation />

      {/* Rolling Motto Banner – smoother & less distracting */}
      <div className="bg-accent/90 text-primary font-semibold text-center py-2.5 px-4 overflow-hidden shadow-sm">
        <style>{`
          @keyframes roll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .roll-text {
            animation: roll 20s linear infinite;
            display: inline-block;
            white-space: nowrap;
          }
        `}</style>
        <div className="roll-text text-sm md:text-base tracking-wide">
          WE ARE LASU • WE ARE GREAT &nbsp; • &nbsp; WE ARE LASU • WE ARE GREAT &nbsp; • &nbsp; WE ARE LASU • WE ARE GREAT
        </div>
      </div>

      {/* Hero Section – modern, bold, full-bleed feel */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Optional: subtle background image – uncomment & replace src */}
        {/* <div className="absolute inset-0">
          <Image
            src="/images/campus-hero.jpg" // or a science/lab/graduation image
            alt="LASU Campus"
            fill
            className="object-cover brightness-[0.45] scale-105"
            priority
          />
        </div> */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Welcome to STESA
              </h1>
              <p className="text-xl sm:text-2xl font-medium opacity-95">
                Science, Technology, Engineering and Skills Services for Africa
              </p>
              <p className="text-lg opacity-85 max-w-xl">
                The hub for innovative Science and Technology Education at Lagos State University
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 text-lg"
                >
                  Explore Academics
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 text-lg"
                >
                  Browse Resources
                </Link>
              </div>
            </div>

            {/* Optional hero image / illustration on right – can be a group of students, lab, etc. */}
            <div className="hidden md:block relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y5m5ft6lOPdMmx0pDU1dKlcllHINAo.png" // replace with better hero image
                alt="STESA at LASU"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vice Chancellor Welcome – cleaner, larger image */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Vice Chancellor's Welcome</h2>
              <div className="bg-background/70 backdrop-blur-sm p-7 rounded-xl border border-border/50 shadow-sm">
                <p className="text-lg leading-relaxed text-foreground/90 italic mb-6">
                  "It is with great pleasure that I welcome you to Lagos State University, the citadel of learning, the University of First Choice and the Nation's pride..."
                </p>
                <p className="font-bold text-xl text-primary">Prof. Ibiyemi Olatunji-Bello, mni, fnli, FSPSP, NPOM</p>
                <p className="text-foreground/70">Vice Chancellor, Lagos State University</p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/30">
                <Image
                  src="https://lasu.edu.ng/home/img/our_vc.png"
                  alt="Vice Chancellor Prof. Ibiyemi Olatunji-Bello"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty of Education – image on left for variety */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="md:col-span-2 flex justify-center order-1 md:order-1">
              <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y5m5ft6lOPdMmx0pDU1dKlcllHINAo.png"
                  alt="Assoc Prof Alabi Olaide Bukola – Dean"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3 order-2 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Faculty of Education</h2>
              <div className="bg-card p-7 rounded-xl border border-border/50 shadow-sm">
                <p className="text-xl font-semibold text-primary mb-2">ASSOC PROF ALABI OLAIDE BUKOLA</p>
                <p className="text-foreground/80 font-medium mb-4">Dean of Faculty</p>
                <p className="text-foreground/90 leading-relaxed">
                  Welcome to the Faculty of Education, the hub for training 21st-century educators...
                  {/* (keep your full text) */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department – keep similar structure but polished */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* similar grid as above, image first or second – I kept image first */}
          {/* ... paste similar structure as Faculty section, update text & image */}
        </div>
      </section>

      {/* Services – modern cards with icons, hover scale */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-primary">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: '📚',
                title: 'Academics',
                desc: 'Explore our full course catalog with descriptions, codes, and department details.',
                link: '/academics',
              },
              {
                icon: '📖',
                title: 'Resources',
                desc: 'Access videos, PDFs, notes, and curated materials for your courses.',
                link: '/resources',
              },
              {
                icon: '📰',
                title: 'News & Updates',
                desc: 'Latest announcements, events, and department highlights.',
                link: '/news',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-card p-8 rounded-2xl border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-accent text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-foreground/80 mb-6">{item.desc}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Motto & Footer */}
      <div className="bg-accent/90 text-primary font-semibold text-center py-4 shadow-inner">
        <p className="text-base md:text-lg tracking-wide">WE ARE LASU • WE ARE GREAT</p>
      </div>

      <footer className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-lg opacity-90 mb-3">
            © {new Date().getFullYear()} LASU STESA – Science, Technology, Engineering and Skills Services for Africa
          </p>
          <p className="opacity-70">
            Department of Science and Technology Education | Faculty of Education | Lagos State University
          </p>
        </div>
      </footer>
    </div>
  );
}