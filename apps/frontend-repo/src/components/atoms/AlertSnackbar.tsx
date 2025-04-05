'use client';

import { AlertSnackbarProps } from '@/types/Ui/alert';
import { Alert, Snackbar } from '@mui/material';

export default function AlertSnackbar({
  open,
  type,
  message,
  onClose,
}: AlertSnackbarProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
