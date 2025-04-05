'use client';

import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { loginUser } from '@/apis/authApis';
import { loginSuccess } from '@/store/actions';
import LoginForm from '@/components/organisms/LoginForm';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const handleLogin = async (e: FormEvent) => {
    setAlertMessage('');
    setAlertType(null);
    e.preventDefault();
    try {
      const userCredential = await loginUser(email, password);
      const user = userCredential.user;

      dispatch(
        loginSuccess({
          uid: user.uid,
          email: user.email,
        })
      );
      router.push('/dashboard');
      setAlertType('success');
      setAlertMessage('Wellcome in');
      router.push('/dashboard');
    } catch (error: any) {
      setAlertType('error');
      setAlertMessage(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <LoginForm
        email={email}
        password={password}
        alertMessage={alertMessage}
        alertType={alertType}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </Container>
  );
}
