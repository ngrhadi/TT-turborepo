import dotenv from 'dotenv';
dotenv.config();
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './firebaseServiceAccountKey.json' assert { type: 'json' };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const auth = admin.auth();
const db = admin.firestore();
const firestore = getFirestore();

if (process.env.FIRESTORE_EMULATOR_HOST) {
  console.log(
    `📦 Connecting Firebase Admin SDK to Firestore Emulator at ${process.env.FIRESTORE_EMULATOR_HOST}`
  );
  firestore.settings({
    host: process.env.FIRESTORE_EMULATOR_HOST,
    ssl: false,
  });
}

export { admin, auth, db, firestore };
