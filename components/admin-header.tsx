'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface AdminHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
}

export function AdminHeader({ title, description, breadcrumbs }: AdminHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    if (breadcrumbs) return breadcrumbs;

    const segments = pathname.split('/').filter(Boolean);
    const crumbs = [{ label: 'Dashboard', href: '/admin/dashboard' }];

    if (segments.length > 2) {
      const pageType = segments[1];
      crumbs.push({
        label: pageType.charAt(0).toUpperCase() + pageType.slice(1),
        href: `/admin/${pageType}`,
      });
    }

    return crumbs;
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-4">
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition flex items-center gap-1"
          >
            <span>🏠</span>
            <span>Home</span>
          </Link>
          {getBreadcrumbs().map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-slate-600">/</span>
              <Link
                href={crumb.href}
                className="text-slate-400 hover:text-white transition"
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Title and Description */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            {description && <p className="text-slate-400 mt-1">{description}</p>}
          </div>

          {/* Back Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition"
            >
              ← Back
            </button>
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
