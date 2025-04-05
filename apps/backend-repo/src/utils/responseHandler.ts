type Status = 'success' | 'fail' | 'error';

interface ApiResponse<T = any> {
  status: Status;
  message: string;
  data?: T;
}

export function sendSuccess<T>(
  res: any,
  message: string,
  data?: T,
  statusCode = 200
): void {
  const response: ApiResponse<T> = { status: 'success', message, data };
  res.status(statusCode).json(response);
}

export function sendFail(res: any, message: string, statusCode = 400): void {
  const response: ApiResponse = { status: 'fail', message };
  res.status(statusCode).json(response);
}

export function sendError(res: any, error: any, statusCode = 500): void {
  const response: ApiResponse = {
    status: 'error',
    message: error?.message || 'Something went wrong',
  };
  res.status(statusCode).json(response);
}
