/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const helloWorld = onRequest((req, res) => {
  logger.info('Hello logs!', { structuredData: true });
  res.send('Hello from Firebase!');
});

export const meiCantik = onRequest((req, res) => {
  logger.info('meiCantik!', { structuredData: true });
  res.send('meiCantik!');
});

export const testingLagi = onRequest((req, res) => {
  logger.info('testingLagi!', { structuredData: true });
  res.send('testingLagi!');
});
