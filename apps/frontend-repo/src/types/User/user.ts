import { AlertColor } from "@mui/material";

export interface UserDetails {
  uid: string;
  name: string;
  email: string;
  role: string;
}

export interface UseAuthUserDataReturn {
  userData: UserDetails | null;
  loading: boolean;
  error: string | null;
  alert: { type: AlertColor; message: string } | null;
  handleCloseAlert: () => void;
  refetch: (reason?: 'initial' | 'update') => Promise<void>;
}

export interface EditUserDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedData: { name: string; email: string }) => void;
  defaultName: string;
  defaultEmail: string;
}
