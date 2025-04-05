'use client';

import { Alert, AlertColor, AlertTitle } from '@mui/material';

interface AlertMessageProps {
  type: AlertColor;
  message: string;
  title?: string;
}

export default function AlertMessage({
  type,
  message,
  title,
}: AlertMessageProps) {
  return (
    <Alert severity={type} sx={{ width: '100%' }}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
}
