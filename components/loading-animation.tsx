'use client';

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#001F3F] via-[#0A1F3D] to-[#001F3F] flex items-center justify-center z-50 overflow-hidden">
      <style>{`
        @keyframes fadePulse {
          0%, 100% { opacity: 0.4; }
          50%   { opacity: 1; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes subtleRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scaleFade {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }

        .lasu-crest {
          animation: gentleFloat 5s ease-in-out infinite, subtleRotate 24s linear infinite;
          will-change: transform;
        }

        .motto-marquee {
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }

        .fade-pulse {
          animation: fadePulse 2.8s ease-in-out infinite;
        }

        .loading-text {
          animation: scaleFade 1.2s ease-out forwards;
        }
      `}</style>

      <div className="relative z-10 text-center max-w-md px-6">
        {/* LASU Crest – centerpiece */}
        <div className="mb-10 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative lasu-crest">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#001F3F]/30 blur-xl" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Lagos_State_University_logo.png"
              alt="Lagos State University Crest"
              className="w-full h-full object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Scrolling motto – elegant & slower */}
        <div className="overflow-hidden h-9 mb-10">
          <div
            className="motto-marquee text-[#D4AF37] text-xl sm:text-2xl font-bold tracking-wider"
            style={{ textShadow: '0 2px 10px rgba(212,175,55,0.3)' }}
          >
            FOR TRUTH AND SERVICE  •  WE ARE LASU  •  WE ARE GREAT  •  SINCE 1983  • {' '}
            FOR TRUTH AND SERVICE  •  WE ARE LASU  •  WE ARE GREAT  •  SINCE 1983  •
          </div>
        </div>

        {/* Main loading message */}
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4 loading-text">
          Preparing your academic space...
        </h2>

        <p className="text-white/70 text-base sm:text-lg mb-8 max-w-sm mx-auto fade-pulse">
          Department of Science and Technology Education<br />
          Faculty of Education • Lagos State University
        </p>

        {/* Elegant progress indicators */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#D4AF37]/70 animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-[#D4AF37]/70 animate-pulse" style={{ animationDelay: '300ms' }} />
          <div className="w-3 h-3 rounded-full bg-[#D4AF37]/70 animate-pulse" style={{ animationDelay: '600ms' }} />
        </div>
      </div>

      {/* Very subtle background glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A8A0]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '18s', animationDelay: '4s' }} />
      </div>
    </div>
  );
}