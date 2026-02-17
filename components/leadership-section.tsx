'use client';

import Image from 'next/image';

export function LeadershipSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Welcome & Greetings!
            </h2>

            <div className="relative pl-6 border-l-4 border-accent">
              <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground/85 italic font-medium">
                It is with great pleasure that I welcome you to Lagos State University, the citadel of learning, the University of First Choice and the Nation's pride. Over the years, the institution has demonstrated excellence in its activities. We are irrevocably committed to sustaining this culture and indeed transmitting it from excellence to distinction. I once again welcome you to the "Preferred State University at the Centre of Excellence".
              </blockquote>
            </div>

            <div className="pt-4 space-y-2">
              <p className="text-2xl sm:text-3xl font-bold text-primary">
                Prof. Ibiyemi Olaitanji-Bello, mni, fnli, FSPSP, NPOM
              </p>
              <p className="text-lg text-secondary font-semibold">
                Vice Chancellor, Lagos State University
              </p>
            </div>
          </div>

          {/* Right: Placeholder for portrait */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-accent/20 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center space-y-4 px-6">
                <div className="text-6xl">👔</div>
                <p className="text-primary font-semibold">Prof. Ibiyemi Olaitanji-Bello</p>
                <p className="text-sm text-foreground/60">Vice Chancellor</p>
                <p className="text-xs text-foreground/50">Lagos State University</p>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Faculty & Department Info */}
        <div className="mt-20 sm:mt-28 pt-20 sm:pt-28 border-t-2 border-accent/20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Faculty Info */}
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-primary">Faculty of Education</h3>
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-accent/20">
                <p className="text-lg font-bold text-primary mb-4">Prof. Akindoju Olugbenga Gabriel</p>
                <p className="text-secondary font-semibold mb-4">Dean of Faculty</p>
                <p className="text-foreground/80 leading-relaxed">
                  Welcome to the Faculty of Education, the hub for training of 21st century would-be teachers. The Faculty provides the pedagogical knowledge and pedagogical content knowledge to make an effective teacher. There are presently five Departments: Educational Management, Human Kinetic Sports and Health Education, Language Arts and Social Science Education, Educational Foundation and Counseling Psychology and Science and Technology Education. It is the largest Faculty in the University and accommodates 22 programmes. All programmes of the Faculty are approved by the National Universities Commission.
                </p>
              </div>
            </div>

            {/* Right: Placeholder */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-accent/20 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center space-y-4 px-6">
                  <div className="text-6xl">👩‍🎓</div>
                  <p className="text-primary font-semibold">Prof. Akindoju Olugbenga Gabriel</p>
                  <p className="text-sm text-foreground/60">Dean of Faculty</p>
                  <p className="text-xs text-foreground/50">Faculty of Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Section */}
        <div className="mt-20 sm:mt-28 pt-20 sm:pt-28 border-t-2 border-accent/20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Placeholder */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-accent/20 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center space-y-4 px-6">
                  <div className="text-6xl">🔬</div>
                  <p className="text-primary font-semibold">Assoc Prof Alabi Olaide Bukola</p>
                  <p className="text-sm text-foreground/60">Head of Department</p>
                  <p className="text-xs text-foreground/50">Science & Technology Education</p>
                </div>
              </div>
            </div>

            {/* Right: Department Info */}
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-primary">Department of Science & Technology Education</h3>
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-accent/20">
                <p className="text-lg font-bold text-primary mb-4">Assoc Prof Alabi Olaide Bukola</p>
                <p className="text-secondary font-semibold mb-4">Head of Department</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The Department of Science and Technology Education resides in the Faculty of Education, Lagos State University, Ojo campus. The department has six units:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Biology Education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Chemistry Education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Computer Science Education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Educational Technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Mathematics Education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Physics Education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
