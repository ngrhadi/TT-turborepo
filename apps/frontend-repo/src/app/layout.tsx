import type { Metadata } from "next";
import ThemeRegistry from '@/theme/ThemeRegistry';
import { Providers } from '@/store/Provider';

import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/800.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Frontend Repo',
  description: 'Generated using terminal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeRegistry>{children}</ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
