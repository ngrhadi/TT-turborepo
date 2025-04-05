import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import EyeIcon from '../icons/EyeOpen';
import EyeOffIcon from '../icons/EyeClose';

export default function PasswordInputComponent({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      label="Password"
      type={showPassword ? 'text' : 'password'}
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <EyeIcon /> : <EyeOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
