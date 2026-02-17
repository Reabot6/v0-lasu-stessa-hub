'use client';

import { useEffect, useRef, useState } from 'react';

const departments = [
  { 
    name: 'Biology Education',
    icon: '🧬',
    description: 'Life sciences education',
    position: 0 
  },
  { 
    name: 'Chemistry Education',
    icon: '⚗️',
    description: 'Chemical sciences learning',
    position: 1 
  },
  { 
    name: 'Computer Science Education',
    icon: '💻',
    description: 'Digital technology training',
    position: 2 
  },
  { 
    name: 'Educational Technology',
    icon: '📱',
    description: 'Tech-enhanced learning',
    position: 3 
  },
  { 
    name: 'Mathematics Education',
    icon: '∑',
    description: 'Quantitative skills',
    position: 4 
  },
  { 
    name: 'Physics Education',
    icon: '⚡',
    description: 'Physical sciences',
    position: 5 
  },
];

export function DepartmentTree() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = containerRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-gradient-to-b from-white via-primary/2 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            Academic Departments
          </h2>
          <p className="text-xl text-secondary font-semibold mb-2">
            Department of Science and Technology Education
          </p>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Six specialized units providing comprehensive education in science and technology
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-secondary to-primary transform -translate-x-1/2 rounded-full" />

          {/* Departments Grid */}
          <div className="space-y-12 sm:space-y-16 relative">
            {departments.map((dept, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Left Side Content */}
                  <div className={`${isLeft ? 'order-1' : 'order-2 md:order-3'}`}>
                    <div
                      className={`group relative p-6 sm:p-8 rounded-xl bg-white border-2 border-primary/20 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-105 transform cursor-pointer ${
                        isLeft ? 'md:text-right' : ''
                      }`}
                    >
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <span className="text-4xl">{dept.icon}</span>
                          <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                            {dept.name}
                          </h3>
                        </div>
                        <p className="text-foreground/70 text-sm sm:text-base">
                          {dept.description}
                        </p>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-1 h-8 bg-accent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Center Timeline Dot */}
                  <div className="flex justify-center md:order-2">
                    <div className="relative flex flex-col items-center">
                      {/* Animated Dot */}
                      <div
                        className={`w-5 h-5 rounded-full bg-accent border-4 border-white shadow-lg transform transition-all duration-500 ${
                          isVisible ? 'scale-100' : 'scale-0'
                        }`}
                      >
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-full bg-accent animate-pulse opacity-75" />
                      </div>

                      {/* Connecting Lines */}
                      {index !== departments.length - 1 && (
                        <div
                          className={`w-1 bg-gradient-to-b from-accent to-secondary transition-all duration-700 ${
                            isVisible ? 'h-12 sm:h-16' : 'h-0'
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Right Side - Empty for spacing */}
                  <div className={`hidden md:block ${isLeft ? 'order-3' : 'order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent decoration */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
