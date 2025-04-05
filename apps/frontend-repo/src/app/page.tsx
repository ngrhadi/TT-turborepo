'use client';

import styles from './page.module.css';
import ProtectedRoute from '@/components/templates/ProtectedRoutes';

export default function Home() {
  return (
    <ProtectedRoute>
      <div className={styles.page}>
        <h1>Hello World</h1>
      </div>
    </ProtectedRoute>
  );
}
