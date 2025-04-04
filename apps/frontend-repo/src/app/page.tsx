'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);

  const callApi = async () => {
    try {
      const res = await fetch(
        'http://127.0.0.1:5001/emulator-demo-fb/us-central1/meiCantik'
      );
      const data = await res.text();
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error('API call failed:', error);
      setResponse('Error calling API');
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className={styles.page}>
      <h1>Hello World</h1>
      <p>Response from API: {response ?? 'Loading...'}</p>
    </div>
  );
}
