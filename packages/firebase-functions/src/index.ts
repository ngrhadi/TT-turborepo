import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';

/**
 * Sample HTTP function to return the current server time.
 */
export const getServerTime = onRequest((request, response) => {
  logger.info('Server time requested', { structuredData: true });

  const serverTime = new Date().toISOString();
  response.status(200).json({
    status: 'success',
    message: 'Current server time',
    data: { serverTime },
  });
});
