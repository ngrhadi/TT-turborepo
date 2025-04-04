import 'server-only';
import { headers } from 'next/headers';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth, Auth, DecodedIdToken } from 'firebase-admin/auth';


let app: App;
if (getApps().length === 0) {
  app = initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(
        /\\n/g,
        '\n'
      ),
    }),
  });
} else {
  app = getApps()[0];
}

export const adminAuth: Auth = getAuth(app);

/**
 * Extracts the Firebase ID token from the Authorization header
 * and verifies it on the server side.
 */
export async function getAuthenticatedAppForUser(): Promise<DecodedIdToken> {
  const headerList = headers();
  const authorization = headerList.get('Authorization');

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new Error('No authorization token provided');
  }

  const idToken = authorization.split('Bearer ')[1];

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    console.error('Token verification failed:', error);
    throw new Error('Unauthorized');
  }
}
