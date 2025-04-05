import { AlertColor } from "@mui/material";

export interface AlertSnackbarProps {
  open: boolean;
  type: AlertColor;
  message: string;
  onClose: () => void;
}
