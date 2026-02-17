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

              {/* Mobile Menu Button - Now Visible */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col justify-center gap-1.5 p-2 hover:bg-accent/10 rounded-lg transition-all"
                title="Menu"
              >
                <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Slides from Right */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transform transition-all duration-300 ease-out z-40 lg:hidden border-l-2 border-accent/20 flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-accent/20">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-accent/10 rounded-lg transition-all"
            title="Close menu"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Mobile Menu Items */}
          <div className="space-y-2">
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
          className="fixed inset-0 bg-black/30 z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
