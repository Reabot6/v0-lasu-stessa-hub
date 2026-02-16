'use client';

import { useState } from 'react';

export function LeadershipSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const leaders = [
    {
      title: 'Vice Chancellor',
      name: 'Prof. Lanre Fagbohun',
      description: 'Leading academic excellence and institutional innovation',
      color: 'cyan',
    },
    {
      title: 'Deputy Vice Chancellor (Academic)',
      name: 'Prof. Toyin Adebayo',
      description: 'Overseeing academic programs and faculty development',
      color: 'purple',
    },
    {
      title: 'Dean, College of Science',
      name: 'Prof. Adekunle Olusola',
      description: 'Directing science education and research initiatives',
      color: 'gold',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a0f1c] via-[#1a1f3a] to-[#0a0f1c] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#9d00ff] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00f5ff] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-cyan animate-neon-glow">
            Leadership Vision
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f5ff] to-[#9d00ff] mx-auto mb-6" />
          <p className="text-[#a0a6b8] text-lg max-w-2xl mx-auto">
            Meet the visionary leaders driving STESA's mission forward
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Holographic Card */}
              <div className={`glass-cyber rounded-xl p-8 transition-all duration-500 overflow-hidden ${
                hoveredIndex === idx ? 'neon-glow-cyan' : ''
              }`}>
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f5ff] opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#9d00ff] opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Animated Avatar Circle */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${
                    leader.color === 'cyan' ? 'from-[#00f5ff]/30 to-[#9d00ff]/10' :
                    leader.color === 'purple' ? 'from-[#9d00ff]/30 to-[#ffd700]/10' :
                    'from-[#ffd700]/30 to-[#00f5ff]/10'
                  } border border-${leader.color === 'cyan' ? '[#00f5ff]' : leader.color === 'purple' ? '[#9d00ff]' : '[#ffd700]'} flex items-center justify-center ${
                    hoveredIndex === idx ? 'animate-holographic-3d' : ''
                  }`}>
                    <span className={`text-4xl font-bold ${
                      leader.color === 'cyan' ? 'neon-text-cyan' :
                      leader.color === 'purple' ? 'neon-text-purple' :
                      'neon-text-gold'
                    }`}>
                      {leader.name.split(' ')[0][0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 text-center ${
                  leader.color === 'cyan' ? 'text-[#00f5ff]' :
                  leader.color === 'purple' ? 'text-[#9d00ff]' :
                  'text-[#ffd700]'
                }`}>
                  {leader.title}
                </h3>
                <h4 className="text-xl font-bold text-[#e0e6ff] text-center mb-3">
                  {leader.name}
                </h4>
                <p className="text-[#a0a6b8] text-center text-sm leading-relaxed">
                  {leader.description}
                </p>

                {/* Scanline effect on hover */}
                {hoveredIndex === idx && (
                  <div className="absolute inset-0 animate-scanlines pointer-events-none opacity-30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
