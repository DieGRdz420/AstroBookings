import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal server error' });
};
