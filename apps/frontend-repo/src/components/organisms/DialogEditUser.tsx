import { EditUserDialogProps } from '@/types/User/user';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import TextInputComponent from '../molecules/TextInputComponent';
import EmailInputComponent from '../molecules/EmailInputComponent';

export default function EditUserDialog({
  open,
  onClose,
  onSave,
  defaultName,
  defaultEmail,
}: EditUserDialogProps) {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);

  useEffect(() => {
    setName(defaultName);
    setEmail(defaultEmail);
  }, [defaultName, defaultEmail]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User Info</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <TextInputComponent
          autoFocus={true}
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <EmailInputComponent
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onSave({ name, email });
            onClose();
          }}
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
