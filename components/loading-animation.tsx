'use client';

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <style>{`
        @keyframes roll-text {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .roll-text {
          animation: roll-text 4s linear infinite;
          white-space: nowrap;
          font-size: 2rem;
          font-weight: bold;
          color: #fbbf24;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 0.1em;
        }
        .pulse-dot {
          animation: pulse-dot 1s ease-in-out infinite;
        }
      `}</style>
      <div className="text-center">
        <div className="overflow-hidden w-full mb-8">
          <div className="roll-text">WE ARE LASU WE ARE GREAT</div>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="pulse-dot w-3 h-3 bg-accent rounded-full" style={{ animationDelay: '0s' }} />
          <div className="pulse-dot w-3 h-3 bg-accent rounded-full" style={{ animationDelay: '0.2s' }} />
          <div className="pulse-dot w-3 h-3 bg-accent rounded-full" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
}
