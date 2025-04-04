import { Request, Response, NextFunction } from 'express';

// Extend Request type to include timeStamp
declare global {
    namespace Express {
        interface Request {
            timeStamp?: string;
        }
    }
}

export const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const startTime = Date.now();
    res.on('finish', () => {
      const timeStamp = new Date().toISOString();
      const method = req.method;
      const url = req.url;
      const userAgent = req.get('User-Agent');
      const statusCode = res.statusCode;
      const duration = Date.now() - startTime;

      const statusIcon =
        statusCode >= 500 ? '❌' : statusCode >= 400 ? '⚠️' : '✅';

      console.log(
        `⏰[${timeStamp}] - ⚙️ ${method} 🚀${url} | ${statusIcon} ${statusCode} (${duration}ms)`
      );
    });

    next();
};

export const addTimeStamp = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    req.timeStamp = new Date().toISOString();
    next();
};
