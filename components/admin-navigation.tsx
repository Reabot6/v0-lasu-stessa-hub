'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export function AdminNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const adminNavItems = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/news', label: 'News' },
    { href: '/admin/resources', label: 'Resources' },
    { href: '/admin/faq', label: 'FAQ' },
    { href: '/admin/faculty', label: 'Faculty Management' },
    { href: '/admin/events', label: 'Event Management' },
    { href: '/admin/courses', label: 'Course Management' },
  ];

  return (
    <>
      {/* Admin Navigation Bar */}
      <nav className="bg-slate-950 border-b-2 border-purple-600/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/admin/dashboard" 
              className="flex items-center gap-3"
              title="Admin Dashboard"
            >
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mpTnb738j4RnEJqbsLPg3shxG2Ap2a.png"
                  alt="LASU Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-bold text-sm">LASU</span>
                <span className="text-purple-400 text-xs font-semibold">Admin</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {adminNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right: Auth Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="hidden sm:block px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 font-medium text-sm">
                    {user.email?.split('@')[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition transform hover:scale-105 active:scale-95"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/admin/login" className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium text-sm hover:bg-purple-700 transition transform hover:scale-105 active:scale-95">
                  Admin Login
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col justify-center gap-1.5 p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
                title="Menu"
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-slate-950 shadow-2xl transform transition-all duration-300 ease-out z-40 lg:hidden border-l-2 border-purple-600/30 flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-purple-600/30">
          <h2 className="text-xl font-bold text-white">Admin Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-all"
            title="Close menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Mobile Menu Items */}
          <div className="space-y-2">
            {adminNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  isActive(item.href)
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700" />

          {/* Admin Section */}
          <div className="space-y-3">
            {user ? (
              <>
                <div className="px-4 py-3 rounded-lg bg-purple-600/20 text-purple-300 font-bold text-center text-sm">
                  {user.email}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-red-600/20 text-red-400 font-bold text-sm hover:bg-red-600/30 transition transform hover:scale-105 active:scale-95"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className="block px-4 py-3 rounded-lg bg-purple-600 text-white font-bold text-center text-sm hover:bg-purple-700 transition transform hover:scale-105 active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
