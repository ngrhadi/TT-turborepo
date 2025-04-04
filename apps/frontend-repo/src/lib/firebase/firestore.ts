// apis/userApi.ts

import {
  collection,
  doc,
  getDoc,
  updateDoc,
  getFirestore,
  addDoc,
  DocumentReference,
  DocumentData,
  QuerySnapshot,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from './clientApp';

export interface UserData {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  createdAt?: Date;
  [key: string]: any;
}

/**
 * Add a new user to the USERS collection.
 */
export async function addUser(
  userData: UserData
): Promise<DocumentReference<DocumentData>> {
  try {
    const usersRef = collection(db, 'USERS');
    const response = await addDoc(usersRef, userData);
    return response;
  } catch (error) {
    console.error('Failed to add user:', error);
    throw error;
  }
}

/**
 * Fetch a user document from USERS collection using UID.
 */
export async function fetchUserData(uid: string): Promise<UserData | null> {
  try {
    const usersRef = collection(db, 'USERS');
    const q = query(usersRef, where('uid', '==', uid));
    const querySnapshot: QuerySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data() as UserData;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}

/**
 * Update an existing user document.
 */
export async function updateUserData(
  documentId: string,
  updates: Partial<UserData>
): Promise<void> {
  try {
    const userDocRef = doc(db, 'USERS', documentId);
    await updateDoc(userDocRef, updates);
  } catch (error) {
    console.error('Failed to update user:', error);
    throw error;
  }
}
