'use client';

import { useState, useEffect } from 'react';

interface ModuleLoadingProps {
  moduleType: 'resources' | 'news' | 'academics';
}

const moduleMessages = {
  resources: [
    'Assembling knowledge modules...',
    'Decrypting lecture archives...',
    'Synchronizing learning assets...',
    'Calibrating resource matrix...',
  ],
  news: [
    'Intercepting campus transmissions...',
    'Decoding latest announcements...',
    'Aligning news quantum stream...',
    'Propagating updates across nodes...',
  ],
  academics: [
    'Initializing curriculum lattice...',
    'Mapping departmental pathways...',
    'Loading academic core protocols...',
    'Constructing syllabus holograms...',
  ],
};

export function ModuleLoading({ moduleType }: ModuleLoadingProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = moduleMessages[moduleType];
  const messageCount = messages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messageCount);
    }, 2800); // slightly slower for more premium feel

    return () => clearInterval(interval);
  }, [messageCount]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0a132f] via-[#0f1a44] to-[#0a132f] flex items-center justify-center z-50 overflow-hidden">
      {/* Background subtle animated grid/particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#00f5ff15_0%,transparent_60%)] animate-pulse" style={{ animationDuration: '18s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#d4af3710_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '22s', animationDelay: '4s' }} />
      </div>

      <div className="relative text-center z-10 max-w-md px-6">
        {/* Central futuristic orb + orbiting ring */}
        <div className="relative mx-auto mb-12 w-40 h-40">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#00f5ff]/30 animate-spin-slow" style={{ animationDuration: '14s' }}>
            <div className="absolute inset-[6px] rounded-full border border-[#00f5ff]/40" />
          </div>

          {/* Glowing central orb */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00f5ff]/20 via-[#00f5ff]/10 to-transparent backdrop-blur-xl flex items-center justify-center animate-pulse-glow">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#00b4cc] opacity-40 blur-xl absolute" />
            {/* Inner LASU-inspired accent */}
            <div className="w-14 h-14 rounded-full border-2 border-[#d4af37]/60 flex items-center justify-center relative">
              <span className="text-[#d4af37] text-2xl font-bold tracking-widest drop-shadow-lg">L</span>
              <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#d4af37]/40" />
            </div>
          </div>

          {/* Orbiting small particles */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00f5ff] rounded-full animate-orbit-1" style={{ animationDuration: '9s' }} />
            <div className="absolute bottom-0 right-1/2 w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-orbit-2" style={{ animationDuration: '12s', animationDelay: '-3s' }} />
            <div className="absolute left-0 top-1/2 w-2 h-2 bg-[#00f5ff]/70 rounded-full animate-orbit-3" style={{ animationDuration: '15s', animationDelay: '-6s' }} />
          </div>
        </div>

        {/* Module badge */}
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-md border border-[#00f5ff]/30 rounded-full text-[#00f5ff] text-sm font-medium uppercase tracking-wider">
            Initializing {moduleType.toUpperCase()}
          </span>
        </div>

        {/* Dynamic futuristic message */}
        <div className="mb-10 h-8 overflow-hidden">
          <p
            key={messageIndex}
            className="text-[#e0f7ff] text-xl sm:text-2xl font-light tracking-wide animate-text-fade-in"
          >
            {messages[messageIndex]}
          </p>
        </div>

        {/* Scanning line effect + dots */}
        <div className="relative h-1 w-64 mx-auto bg-[#00f5ff]/10 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f5ff]/60 to-transparent animate-scan" />
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <div className="w-3 h-3 rounded-full bg-[#d4af37]/60 animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 rounded-full bg-[#d4af37]/60 animate-pulse" style={{ animationDelay: '0.4s' }} />
          <div className="w-3 h-3 rounded-full bg-[#d4af37]/60 animate-pulse" style={{ animationDelay: '0.8s' }} />
        </div>
      </div>

      {/* Add these keyframes in your global CSS or inside <style> */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,245,255,0.4), inset 0 0 20px rgba(0,245,255,0.2); }
          50%      { box-shadow: 0 0 40px rgba(0,245,255,0.7), inset 0 0 30px rgba(0,245,255,0.4); }
        }
        @keyframes ping-slow {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes orbit-1 { 0% { transform: rotate(0deg) translateX(80px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); } }
        @keyframes orbit-2 { 0% { transform: rotate(120deg) translateX(90px) rotate(-120deg); } 100% { transform: rotate(480deg) translateX(90px) rotate(-480deg); } }
        @keyframes orbit-3 { 0% { transform: rotate(240deg) translateX(70px) rotate(-240deg); } 100% { transform: rotate(600deg) translateX(70px) rotate(-600deg); } }
        @keyframes scan {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes text-fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow     { animation: spin-slow 20s linear infinite; }
        .animate-pulse-glow    { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-ping-slow     { animation: ping-slow 6s ease-in-out infinite; }
        .animate-text-fade-in  { animation: text-fade-in 0.8s ease-out; }
        .animate-scan          { animation: scan 3.5s linear infinite; }
      `}</style>
    </div>
  );
}