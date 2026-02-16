'use client';

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-50">
      <style>{`
        @keyframes roll-text {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; scale: 1; }
          50% { opacity: 0.5; scale: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .roll-text {
          animation: roll-text 4s linear infinite;
          white-space: nowrap;
          font-size: 2rem;
          font-weight: bold;
          color: #d4a574;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 0.1em;
        }
        .pulse-dot {
          animation: pulse-dot 1s ease-in-out infinite;
        }
        .float-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 float-icon">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-5xl font-bold text-accent">
            S
          </div>
        </div>

        {/* Scrolling Motto */}
        <div className="overflow-hidden w-full mb-12 h-16 flex items-center justify-center">
          <div className="roll-text">WE ARE LASU WE ARE GREAT</div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-3 justify-center">
          <div className="pulse-dot w-3 h-3 bg-accent rounded-full" style={{ animationDelay: '0s' }} />
          <div className="pulse-dot w-3 h-3 bg-accent rounded-full" style={{ animationDelay: '0.2s' }} />
          <div className="pulse-dot w-3 h-3 bg-accent rounded-full" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Status Text */}
        <p className="text-white/70 mt-8 text-sm font-medium">Loading your education hub...</p>
      </div>
    </div>
  );
}
