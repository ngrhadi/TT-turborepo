'use client';

import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface UserCardProps {
  loading: boolean;
  userData: {
    name?: string;
    email: string;
  } | null;
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
}

export default function UserCard({
  loading,
  userData,
  setOpenEdit,
}: UserCardProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="200px"
      position="relative"
      gap={2}
    >
      {loading ? (
        <CircularProgress size={32} />
      ) : userData ? (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            width: '100%',
            maxWidth: 400,
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={() => setOpenEdit(true)}
            sx={{ position: 'absolute', top: 12, right: 12 }}
            aria-label="Edit user"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: 24, height: 24 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </IconButton>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 64,
              height: 64,
              mx: 'auto',
              mb: 2,
              fontSize: 28,
            }}
          >
            {userData.name?.charAt(0).toUpperCase() || 'U'}
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Welcome, {userData.name || 'User'}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {userData.email}
          </Typography>
        </Paper>
      ) : (
        <Typography color="text.secondary">
          Please click the button above to load user data.
        </Typography>
      )}
    </Box>
  );
}
