import { Box, Typography } from '@mui/material';
import { getTimeServer } from '@/apis/timeServer';
import ProtectedRoute from '@/components/templates/ProtectedRoutes';
import { Providers } from '@/store/Provider';
import ThemeRegistry from '@/theme/ThemeRegistry';
import React from 'react';

export const metadata = {
  title: 'Dashboard',
  description: 'Protected dashboard layout',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let time: string | null = null;

  try {
    time = await getTimeServer();
  } catch (err) {
    console.error('Failed to fetch server time:', err);
  }

  return (
    <html lang="en">
      <body>
        <ProtectedRoute>
          <Providers>
            <Box
              sx={{
                px: 2,
                py: 1,
                backgroundColor: '#f5f5f5',
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="body2" fontWeight={500}>
                🕒 Server Time
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {time || 'N/A'}
              </Typography>
            </Box>
            <ThemeRegistry>{children}</ThemeRegistry>
          </Providers>
        </ProtectedRoute>
      </body>
    </html>
  );
}
