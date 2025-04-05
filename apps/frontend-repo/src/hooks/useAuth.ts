'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/apis/firebase';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '@/store/actions';

export const useAuthEffect = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          loginSuccess({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return authChecked;
};
