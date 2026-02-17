'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { isAdminLoggedIn, clearAdminSession } from '@/lib/storage';
import { useRouter } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const handleLogout = () => {
    clearAdminSession();
    setIsAdmin(false);
    router.push('/');
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/academics', label: 'Academics' },
    { href: '/resources', label: 'Resources' },
    { href: '/news', label: 'News' },
  ];

  return (
    <>
      {/* LASU Motto Banner */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-2 relative">
        <div className="animate-scroll whitespace-nowrap flex relative z-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-block text-sm sm:text-base md:text-lg font-bold px-8">
              We are LASU We are Great
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b-2 border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3"
              title="LASU - Lagos State University"
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
                <span className="text-primary font-bold text-sm">LASU</span>
                <span className="text-accent text-xs font-semibold">STE Hub</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-300 pb-2 border-b-2 ${
                    isActive(item.href)
                      ? 'text-primary border-accent'
                      : 'text-muted-foreground border-transparent hover:text-primary hover:border-accent/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right: Auth Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              {isAdmin ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/admin"
                    className="hidden sm:block px-4 py-2 rounded-lg bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition"
                  >
                    Panel
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-destructive text-white font-medium text-sm hover:bg-destructive/90 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/admin/login" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition">
                  Admin
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
              >
                <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-20 right-0 h-screen w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out z-40 lg:hidden border-l-2 border-accent/20 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl text-primary hover:opacity-60"
          >
            ✕
          </button>

          {/* Mobile Menu Items */}
          <div className="pt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  isActive(item.href)
                    ? 'bg-accent/20 text-primary border-l-4 border-accent'
                    : 'text-muted-foreground hover:bg-accent/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Admin Section */}
          <div className="space-y-3">
            {isAdmin ? (
              <>
                <Link
                  href="/admin"
                  className="block px-4 py-3 rounded-lg bg-secondary/20 text-secondary font-bold text-center text-sm hover:bg-secondary/30 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Panel
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-destructive/20 text-destructive font-bold text-sm hover:bg-destructive/30 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className="block px-4 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-center text-sm hover:bg-accent/90 transition"
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
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left: Animated LASU Logo/Crest */}
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              title="LASU - Lagos State University"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#00f5ff] flex items-center justify-center group-hover:animate-holographic-3d bg-gradient-to-br from-[#00f5ff]/20 to-[#9d00ff]/20">
                <span className="text-[#00f5ff] font-bold text-sm sm:text-base animate-neon-glow">L</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[#00f5ff] font-bold text-sm neon-text-cyan">LASU</span>
                <span className="text-[#9d00ff] text-xs font-semibold">STESA</span>
              </div>
            </Link>

            {/* Center: Navigation Menu (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-[#00f5ff]'
                      : 'text-[#a0a6b8] hover:text-[#00f5ff]'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right: AI Search Orb & Auth */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* AI Search Orb */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#00f5ff]/30 to-[#9d00ff]/30 border border-[#00f5ff] flex items-center justify-center hover:border-[#9d00ff] transition-all duration-300 hover:shadow-lg hover:neon-glow-cyan"
                title="AI Search"
              >
                <span className="text-[#00f5ff] text-lg">◉</span>
              </button>

              {/* Admin/Auth Button */}
              {isAdmin ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/admin"
                    className="hidden sm:block cyber-button text-xs"
                  >
                    Panel
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="cyber-button text-xs"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/admin/login" className="cyber-button purple text-xs">
                  Login
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1 hover:opacity-80 transition"
              >
                <span className={`w-6 h-0.5 bg-[#00f5ff] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-6 h-0.5 bg-[#00f5ff] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-[#00f5ff] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Panel (Full Screen) */}
        {showSearch && (
          <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-[rgba(10,15,28,0.95)] to-[rgba(10,15,28,0.8)] border-t border-[#00f5ff]/30 p-8">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search courses, resources, news..."
                className="w-full px-4 py-3 bg-rgba(0,245,255,0.05) border border-[#00f5ff]/50 rounded-lg text-[#e0e6ff] placeholder-[#a0a6b8]/50 focus:border-[#00f5ff] focus:outline-none focus:neon-glow-cyan transition-all"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-[7.5rem] sm:h-[8.5rem]" />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 glass-neon transform transition-transform duration-300 ease-out z-40 lg:hidden pt-20 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl neon-text-cyan hover:opacity-70"
          >
            ✕
          </button>

          {/* Mobile Menu Items */}
          <div className="pt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 uppercase text-sm font-bold tracking-wider ${
                  isActive(item.href)
                    ? 'bg-[#9d00ff]/30 border border-[#9d00ff] text-[#9d00ff]'
                    : 'text-[#a0a6b8] hover:text-[#00f5ff] hover:bg-[#00f5ff]/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#00f5ff]/20" />

          {/* Admin Section */}
          <div className="space-y-3">
            {isAdmin ? (
              <>
                <Link
                  href="/admin"
                  className="block px-4 py-3 rounded-lg bg-[#9d00ff]/30 border border-[#9d00ff] text-[#9d00ff] font-bold text-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Panel
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-[#ff0055]/30 border border-[#ff0055] text-[#ff0055] font-bold text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className="block px-4 py-3 rounded-lg cyber-button purple text-center"
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
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
