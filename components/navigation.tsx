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
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-lg sm:text-xl hover:opacity-90 transition">
              STESA Hub
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground border-b border-secondary">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className={`block nav-link ${isActive('/') ? 'bg-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/academics"
              className={`block nav-link ${isActive('/academics') ? 'bg-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/resources"
              className={`block nav-link ${isActive('/resources') ? 'bg-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/news"
              className={`block nav-link ${isActive('/news') ? 'bg-secondary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <div className="pt-4 border-t border-secondary space-y-2">
              {isAdmin ? (
                <>
                  <Link
                    href="/admin"
                    className="block nav-link text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left btn-secondary text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/admin/login"
                  className="block btn-secondary text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
