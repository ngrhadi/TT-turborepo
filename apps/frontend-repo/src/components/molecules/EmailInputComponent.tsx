import { TextField } from '@mui/material';

export default function EmailInputComponent({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextField
      label="Email"
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}
