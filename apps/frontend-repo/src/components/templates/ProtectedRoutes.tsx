'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store/store';
import { useAuthEffect } from '@/hooks/useAuth';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const authChecked = useAuthEffect();

  useEffect(() => {
    if (authChecked && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authChecked, router]);

  if (!authChecked) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <p>Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
}
