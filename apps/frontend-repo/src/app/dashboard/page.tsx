'use client';

import ProtectedRoute from '@/components/templates/ProtectedRoutes';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '@/store/actions';
import { logoutUser } from '@/apis/authApis';
import { useRouter } from 'next/navigation';
import { useAuthUserData } from '@/hooks/useUserData';
import AlertSnackbar from '@/components/atoms/AlertSnackbar';
import { useState } from 'react';
import EditUserDialog from '@/components/organisms/DialogEditUser';
import { updateUserData } from '@/apis/userApis';
import UserCard from '@/components/molecules/UserCard';

export default function DashboardPage() {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { userData, loading, alert, handleCloseAlert, refetch } =
    useAuthUserData();

  const handleLogout = async () => {
    await logoutUser();
    dispatch(logoutAction());
    router.push('/login');
  };

  const handleSave = async (updatedData: { name: string; email: string }) => {
    if (!userData?.uid) return;

    try {
      await updateUserData(userData.uid, updatedData);
      refetch('update');
    } catch (err) {
      console.error('Update error:', err);
    } finally {
      setOpenEdit(false);
    }
  };

  return (
    <ProtectedRoute>
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Typography variant="h4" gutterBottom>
                🔐 Protected Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Welcome! You have access to this page because you're
                authenticated.
              </Typography>

              <Button
                variant="contained"
                disabled={userData ? true : false}
                onClick={() => refetch('initial')}
              >
                Fetch User Info
              </Button>

              <UserCard
                loading={loading}
                userData={userData}
                setOpenEdit={setOpenEdit}
              />

              <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
                sx={{ mt: 4 }}
              >
                Logout
              </Button>
            </Box>
          </Paper>
        </Box>
        {alert && (
          <AlertSnackbar
            open={!!alert}
            type={alert?.type || 'info'}
            message={alert?.message || ''}
            onClose={handleCloseAlert}
          />
        )}
        <EditUserDialog
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          onSave={handleSave}
          defaultName={userData?.name || ''}
          defaultEmail={userData?.email || ''}
        />
      </Container>
    </ProtectedRoute>
  );
}
