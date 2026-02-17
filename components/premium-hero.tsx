'use client';

export function PremiumHero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-primary/10 to-secondary/5 py-20 sm:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Welcome to <span className="text-accent">STE</span>
            </h1>
            <p className="text-xl sm:text-2xl text-secondary font-semibold">
              Science and Technology Education
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Your comprehensive hub for accessing courses, learning resources, and staying updated with departmental announcements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#academics"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Explore Courses
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-accent text-primary font-semibold hover:bg-accent/10 transition-all"
            >
              Browse Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
