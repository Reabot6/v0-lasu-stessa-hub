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
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl hover:opacity-90 transition">
            STESSA Hub
          </Link>

          {/* Main Navigation */}
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

          {/* Admin Section */}
          <div className="flex items-center gap-3">
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
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap gap-1 pb-4">
          <Link
            href="/"
            className={`nav-link text-sm ${isActive('/') ? 'bg-secondary' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/academics"
            className={`nav-link text-sm ${isActive('/academics') ? 'bg-secondary' : ''}`}
          >
            Academics
          </Link>
          <Link
            href="/resources"
            className={`nav-link text-sm ${isActive('/resources') ? 'bg-secondary' : ''}`}
          >
            Resources
          </Link>
          <Link
            href="/news"
            className={`nav-link text-sm ${isActive('/news') ? 'bg-secondary' : ''}`}
          >
            News
          </Link>
        </div>
      </div>
    </nav>
  );
}
