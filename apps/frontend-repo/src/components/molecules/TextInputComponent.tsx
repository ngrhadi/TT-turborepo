import { TextField } from '@mui/material';

export default function TextInputComponent({
  label,
  value,
  autoFocus,
  onChange,
}: {
  autoFocus: boolean;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextField
      autoFocus={autoFocus}
      label={label}
      fullWidth
      margin="dense"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}
