'use client';

import { useEffect, useRef, useState } from 'react';

const departments = [
  { name: 'Biology Education', position: 0 },
  { name: 'Chemistry Education', position: 1 },
  { name: 'Computer Science Education', position: 2 },
  { name: 'Educational Technology', position: 3 },
  { name: 'Mathematics Education', position: 4 },
  { name: 'Physics Education', position: 5 },
];

export function DepartmentTree() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress as element scrolls into view
      const progress = Math.max(0, Math.min(1, 1 - (elementTop - windowHeight) / elementHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Academic Departments</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Department of Science and Technology Education
          </p>
        </div>

        {/* Tree visualization */}
        <div className="relative flex flex-col items-center space-y-12">
          {/* Root: Faculty of Education */}
          <div className="relative">
            <div className="w-48 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary text-center">
              <p className="font-bold text-primary text-lg">Faculty of Education</p>
              <p className="text-sm text-foreground/60 mt-2">5 Departments</p>
            </div>
            
            {/* Connecting line */}
            <div 
              className="absolute top-full left-1/2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"
              style={{
                height: '40px',
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* Departments in scrollable view */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {departments.map((dept, index) => (
                <div 
                  key={index}
                  className="relative"
                  style={{
                    opacity: Math.min(1, scrollProgress * 2),
                    transform: `translateY(${Math.max(0, (1 - scrollProgress) * 30)}px)`,
                    transition: 'all 0.3s ease-out',
                  }}
                >
                  {/* Vertical line from center */}
                  <div 
                    className="absolute -top-12 left-1/2 w-0.5 bg-gradient-to-t from-accent/60 to-transparent"
                    style={{ height: '48px', transform: 'translateX(-50%)' }}
                  />
                  
                  {/* Department card */}
                  <div className="p-6 rounded-lg bg-white border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all text-center group cursor-pointer">
                    <h3 className="font-semibold text-primary text-base group-hover:text-accent transition-colors">
                      {dept.name}
                    </h3>
                    <div className="flex justify-center mt-3 space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info text */}
          <div className="mt-12 text-center text-sm text-foreground/60">
            <p>Scroll to see all departments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
