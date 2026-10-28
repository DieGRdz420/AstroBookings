import { Request, Response } from 'express';
import { env } from '../config/env';

const startedAt = Date.now();

export const getHealth = (_req: Request, res: Response): void => {
  const memory = process.memoryUsage();

  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: Math.floor((Date.now() - startedAt) / 1000),
    environment: env.NODE_ENV,
    version: process.version,
    memory: {
      rss: memory.rss,
      heapUsed: memory.heapUsed,
      heapTotal: memory.heapTotal,
    },
  });
};
