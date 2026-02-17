'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Navigation } from './navigation';
import { AdminNavigation } from './admin-navigation';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        // Check if user has admin role in metadata
        const isAdminUser = session.user.user_metadata?.role === 'admin';
        setIsAdmin(isAdminUser);
      } catch (error) {
        console.error('Error checking user role:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setIsAdmin(false);
      } else if (session?.user) {
        const isAdminUser = session.user.user_metadata?.role === 'admin';
        setIsAdmin(isAdminUser);
      }
    });

    return () => subscription?.unsubscribe();
  }, [supabase.auth]);

  // Don't render navigation on auth pages
  const isAuthPage = pathname?.startsWith('/auth/') || pathname?.startsWith('/admin/login');

  return (
    <>
      {!loading && !isAuthPage && (isAdmin ? <AdminNavigation /> : <Navigation />)}
      {children}
    </>
  );
}
