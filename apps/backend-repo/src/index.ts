import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// import { configureCors } from './config/corsConfig';
// import { requestLogger, addTimeStamp } from './middleware/customMiddleware';
// import { globalErrorhandler } from './middleware/errorHandler';
// import { urlVersioning } from './middleware/apiVersioning';
// import { createBasicRateLimiter } from './middleware/rateLimiter';
// import Route from './routes/index';

import { configureCors } from './config/corsConfig.js';
import { requestLogger, addTimeStamp } from './middleware/customMiddleware.js';
import { globalErrorhandler } from './middleware/errorHandler.js';
import { urlVersioning } from './middleware/apiVersioning.js';
import { createBasicRateLimiter } from './middleware/rateLimiter.js';
import Route from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Express JSON middleware
app.use(requestLogger);
app.use(addTimeStamp);

// Config CORS
app.use(configureCors());

// Rate limiter middleware (5 requests per 1 minute)
app.use(createBasicRateLimiter(5, 1 * 60 * 1000));

// Body parser
app.use(express.json());

// API Versioning
app.use(urlVersioning(process.env.VERSI || 'v1'));

// API Routes
app.use('/api/v1', Route);

// Global Error Handler
app.use(globalErrorhandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
