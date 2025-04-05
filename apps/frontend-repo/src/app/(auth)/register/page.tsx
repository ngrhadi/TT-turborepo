'use client';

import { Container } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/apis/authApis';
import { loginSuccess } from '@/store/actions';
import RegisterForm from '@/components/organisms/RegisterForm';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const handleRegister = async () => {
    setAlertMessage('');
    setAlertType(null);
    try {
      const result = await registerUser(email, password);
      dispatch(
        loginSuccess({ uid: result.user.uid, email: result.user.email })
      );

      setAlertType('success');
      setAlertMessage('Account created successfully! Redirecting...');
      setTimeout(() => router.push('/dashboard'), 1500);
    } catch (error: any) {
      setAlertType('error');
      setAlertMessage(error.message || 'Registration failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <RegisterForm
        email={email}
        password={password}
        alertMessage={alertMessage}
        alertType={alertType}
        setEmail={setEmail}
        setPassword={setPassword}
        handleRegister={handleRegister}
      />
    </Container>
  );
}
