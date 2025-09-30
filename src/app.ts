import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import { HttpError } from 'http-errors';

import logger from './config/logger.ts';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to auth-service.');
});

// Global Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: [{ type: err.name, message: err.message, path: '', location: '' }],
  });
});

export default app;
