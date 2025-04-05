import { firebaseApp, db as firebaseDb } from '@/lib/firebase/clientApp';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(firebaseApp);
export const db = firebaseDb;
