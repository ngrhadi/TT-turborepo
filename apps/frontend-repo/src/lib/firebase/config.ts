type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const rawConfig: Record<keyof FirebaseConfig, string | undefined> = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseConfig: FirebaseConfig = Object.entries(rawConfig).reduce(
  (acc, [key, value]) => {
    if (!value) {
      throw new Error(`Missing Firebase config value for ${key}`);
    }

    // Strip quotes if present
    const cleanedValue = value.charAt(0) === `"` ? value.slice(1, -1) : value;

    acc[key as keyof FirebaseConfig] = cleanedValue;
    return acc;
  },
  {} as FirebaseConfig
);

export { firebaseConfig };
