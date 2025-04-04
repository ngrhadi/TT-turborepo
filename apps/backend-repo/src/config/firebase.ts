import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './firebaseServiceAccountKey.json' assert { type: 'json' };

// Ensure only one app is initialized (important in dev/with nodemon)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const auth = admin.auth();
const db = admin.firestore();
const firestore = getFirestore();

export { admin, auth, db, firestore };
