'use client';

import { Box, Button, Typography } from '@mui/material';
import EmailInputComponent from '@/components/molecules/EmailInputComponent';
import PasswordInputComponent from '@/components/molecules/PasswordInputComponent';
import AlertMessage from '@/components/atoms/AlertMessage';
import Link from 'next/link';

interface RegisterFormProps {
  email: string;
  password: string;
  alertMessage: string;
  alertType: 'success' | 'error' | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleRegister: () => void;
}

export default function RegisterForm({
  email,
  password,
  alertMessage,
  alertType,
  setEmail,
  setPassword,
  handleRegister,
}: RegisterFormProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={4}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <Typography variant="h4" component="h1">
        Register
      </Typography>

      {alertMessage && alertType && (
        <AlertMessage type={alertType} message={alertMessage} />
      )}

      <EmailInputComponent
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInputComponent
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Register
      </Button>

      <Typography align="center" width="100%">
        <Link href="/login">Already have account</Link>
      </Typography>
    </Box>
  );
}
