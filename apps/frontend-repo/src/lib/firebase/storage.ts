// apis/storageApi.ts

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from './clientApp';
import { updateUserData } from './firestore';

/**
 * Upload file to Firebase Storage and optionally update Firestore.
 */
export async function uploadUserFile(
  file: File,
  userId: string,
  folder: string = 'uploads',
  updateInFirestore: boolean = true
): Promise<string> {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${folder}/${userId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Redux integration
      },
      (error) => {
        console.error('Upload failed:', error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          if (updateInFirestore) {
            await updateUserData(userId, { photoURL: downloadURL });
          }

          resolve(downloadURL);
        } catch (error) {
          console.error('Error getting download URL:', error);
          reject(error);
        }
      }
    );
  });
}
