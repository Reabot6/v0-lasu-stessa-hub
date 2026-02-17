'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
      } else if (data.user) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-x opacity-30" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow opacity-20" />

      <div className="w-full max-w-md relative z-10">
        {/* Card Container */}
        <div className={`p-8 sm:p-10 rounded-2xl backdrop-blur-sm border-2 bg-white/95 shadow-2xl transition-all duration-500 transform ${
          success ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}>
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in-up">
            <div className="mb-4 text-5xl">🎓</div>
            <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
            <p className="text-foreground/60">Sign in to access your courses and resources</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-semibold text-primary mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-white/50 text-foreground placeholder-foreground/40 transition-all duration-300 focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 hover:border-primary/40"
              />
            </div>

            {/* Password Input */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <label className="block text-sm font-semibold text-primary mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-white/50 text-foreground placeholder-foreground/40 transition-all duration-300 focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 hover:border-primary/40"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm animate-fade-in-up">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group ${
                loading
                  ? 'bg-accent/70 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg'
              } animate-fade-in-up`}
              style={{ animationDelay: '0.3s' }}
            >
              {/* Button shimmer effect */}
              {!loading && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500" />
              )}
              
              <span className="relative flex items-center justify-center gap-2">
                {loading && (
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {loading ? 'Signing in...' : 'Sign In'}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/20" />
            <span className="text-xs text-foreground/50 font-semibold">OR</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          {/* Sign Up Link */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-foreground/70">
              Don't have an account?{' '}
              <Link
                href="/auth/sign-up"
                className="font-bold text-accent hover:text-accent/80 transition-colors duration-300 underline decoration-accent/30 hover:decoration-accent"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="text-center animate-fade-in-up">
            <div className="inline-block p-6 rounded-full bg-green-100/50 border-2 border-green-400 mb-4 animate-pulse-glow">
              <svg className="w-12 h-12 text-green-600 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg font-bold text-primary">Sign in successful!</p>
            <p className="text-foreground/60 text-sm">Redirecting...</p>
          </div>
        )}
      </div>
    </div>
  );
}
