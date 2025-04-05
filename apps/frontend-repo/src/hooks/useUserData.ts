'use client';

import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { getUserData } from '@/apis/userApis';
import { UseAuthUserDataReturn, UserDetails } from '@/types/User/user';
import { AlertColor } from '@mui/material';

export function useAuthUserData(): UseAuthUserDataReturn {
  const { user } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alert, setAlert] = useState<{
    type: AlertColor;
    message: string;
  } | null>(null);

  const handleCloseAlert = () => setAlert(null);

  const refetch = useCallback(
    async (reason: 'initial' | 'update' = 'initial') => {
      if (!user?.uid) return;

      setLoading(true);
      setError(null);
      try {
        const data = await getUserData(user.uid);
        setUserData(data);

        const message =
          reason === 'update'
            ? 'User data updated successfully.'
            : 'User data fetched successfully.';
        setAlert({ type: 'success', message });
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch user data.');
        setAlert({ type: 'error', message: 'Failed to fetch user data.' });
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  return {
    userData,
    loading,
    error,
    alert,
    handleCloseAlert,
    refetch,
  };
}
