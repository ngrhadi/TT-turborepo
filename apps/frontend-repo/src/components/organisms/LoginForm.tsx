'use client';

import { Box, Button, Typography } from '@mui/material';
import { FormEvent } from 'react';
import AlertMessage from '@/components/atoms/AlertMessage';
import EmailInputComponent from '@/components/molecules/EmailInputComponent';
import PasswordInputComponent from '@/components/molecules/PasswordInputComponent';

interface LoginFormProps {
  email: string;
  password: string;
  alertMessage: string;
  alertType: 'success' | 'error' | null;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (e: FormEvent) => void;
}

export default function LoginForm({
  email,
  password,
  alertMessage,
  alertType,
  setEmail,
  setPassword,
  handleLogin,
}: LoginFormProps) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        gap={4}
        component="form"
        onSubmit={handleLogin}
      >
        <Typography variant="h4" component="h1">
          Login Page
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
          Login
        </Button>

        <Typography align="center" width="100%">
          <a href="/register">Don't have account?</a>
        </Typography>
      </Box>
    );
}
