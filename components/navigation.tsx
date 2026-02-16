'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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

  return (
    <>
      {/* Repeating "We are LASU We are Great" Header */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-2 sm:py-3">
        <div className="animate-scroll whitespace-nowrap flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-block text-lg sm:text-xl md:text-2xl font-bold px-8">
              We are LASU We are Great
            </span>
          ))}
        </div>
      </div>

      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-lg sm:text-xl hover:opacity-90 transition">
              STE Hub
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'bg-secondary' : ''}`}
              >
                Home
              </Link>
              <Link
                href="/academics"
                className={`nav-link ${isActive('/academics') ? 'bg-secondary' : ''}`}
              >
                Academics
              </Link>
              <Link
                href="/resources"
                className={`nav-link ${isActive('/resources') ? 'bg-secondary' : ''}`}
              >
                Resources
              </Link>
              <Link
                href="/news"
                className={`nav-link ${isActive('/news') ? 'bg-secondary' : ''}`}
              >
                News
              </Link>
            </div>

            {/* Desktop Admin Section */}
            <div className="hidden md:flex items-center gap-3">
              {isAdmin ? (
                <>
                  <Link href="/admin" className="nav-link text-sm">
                    Admin Panel
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/admin/login" className="btn-secondary text-sm">
                  Admin
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary-foreground text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Slide from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-primary-foreground shadow-2xl transform transition-transform duration-300 ease-out z-40 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-4">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl font-bold text-primary-foreground hover:opacity-70"
          >
            ×
          </button>

          {/* Menu Items */}
          <div className="pt-8 space-y-3">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/') ? 'bg-secondary' : 'hover:bg-primary-foreground/10'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/academics"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/academics') ? 'bg-secondary' : 'hover:bg-primary-foreground/10'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/resources"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/resources') ? 'bg-secondary' : 'hover:bg-primary-foreground/10'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/news"
              className={`block px-4 py-3 rounded-lg transition ${
                isActive('/news') ? 'bg-secondary' : 'hover:bg-primary-foreground/10'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20" />

          {/* Admin Section */}
          <div className="space-y-3 pt-3">
            {isAdmin ? (
              <>
                <Link
                  href="/admin"
                  className="block px-4 py-3 rounded-lg bg-secondary/50 hover:bg-secondary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Panel
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/admin/login"
                className="block px-4 py-3 rounded-lg bg-secondary hover:bg-secondary-foreground/10 transition text-center font-semibold"
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
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
