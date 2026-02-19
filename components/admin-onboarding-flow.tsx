'use client';

import { useState, useEffect } from 'react';

interface AdminOnboardingFlowProps {
  onComplete: () => void;
}

export function AdminOnboardingFlow({ onComplete }: AdminOnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const ONBOARDING_KEY = 'admin_onboarding_completed';

  // Check only once on mount whether onboarding was already shown
  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem(ONBOARDING_KEY) === 'true';
      if (!hasSeen) {
        setIsVisible(true);
      } else {
        // If already completed, immediately call onComplete
        onComplete();
      }
    } catch (error) {
      // If localStorage is blocked/disabled, show it once anyway
      setIsVisible(true);
    }
  }, [onComplete]);

  const steps = [
    {
      title: 'Welcome to LASU Admin Portal',
      description: 'You now have full access to manage content, faculty, courses, and resources for the LASU STESSA Hub.',
      icon: '🎓',
    },
    {
      title: 'Manage Faculty & Staff',
      description: 'Add, update, or remove faculty profiles — including courses taught, specializations, and contact details.',
      icon: '👨‍🏫',
    },
    {
      title: 'Create & Promote Events',
      description: 'Schedule seminars, workshops, guest lectures, and more. Upload banners, flyers, and videos easily.',
      icon: '📅',
    },
    {
      title: 'Organize Courses & Curriculum',
      description: 'Create courses, assign lecturers, define credits, semesters, and prerequisites — all in one place.',
      icon: '📚',
    },
    {
      title: 'Powerful File & Resource Management',
      description: 'Upload lecture notes, past questions, syllabi, and media files with drag-and-drop support and folders.',
      icon: '📁',
    },
    {
      title: 'We Are LASU — We Are Great!',
      description: 'Your admin portal is ready. Let’s build an exceptional digital experience for our students and faculty together.',
      icon: '⭐',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      markAsCompleted();
    }
  };

  const handleSkip = () => {
    markAsCompleted();
  };

  const markAsCompleted = () => {
    try {
      localStorage.setItem(ONBOARDING_KEY, 'true');
    } catch (error) {
      console.warn('Could not save onboarding status to localStorage');
    }
    setIsVisible(false);
    onComplete();
  };

  // Don't render anything if onboarding is already completed
  if (!isVisible) return null;

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 border border-accent/20 shadow-2xl relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center animate-fade-in-up">
          {/* Icon with subtle animation */}
          <div className="text-7xl drop-shadow-xl transform transition-all duration-500 hover:scale-110">
            {step.icon}
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {step.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
              {step.description}
            </p>
          </div>

          {/* Quick highlights for first step */}
          {currentStep === 0 && (
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                'Multi-Admin Access',
                'Secure & Audited',
                'Media Uploads',
                'Real-time Sync',
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-center"
                >
                  <p className="text-sm font-medium text-accent">{feature}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={handleSkip}
            className="flex-1 px-6 py-3.5 rounded-xl font-medium text-gray-300 bg-gray-700/80 hover:bg-gray-600 transition-all duration-300 border border-gray-600"
          >
            Skip Tour
          </button>

          <button
            onClick={handleNext}
            className="flex-1 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-accent to-primary hover:brightness-110 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            {currentStep === steps.length - 1 ? 'Enter Dashboard' : 'Continue'}
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-400 ${index <= currentStep
                  ? 'bg-gradient-to-r from-accent to-primary scale-125'
                  : 'bg-gray-600'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}