import { afterEach, describe, expect, it, jest } from '@jest/globals';
import type { NextFunction, Request, Response } from 'express';
import { requestLogger } from '../src/middlewares/request-logger.js';

const buildResponse = (statusCode: number): Response & { emitFinish: () => void } => {
  const handlers: Record<string, () => void> = {};
  return {
    statusCode,
    on: (event: string, handler: () => void) => {
      handlers[event] = handler;
      return undefined as never;
    },
    emitFinish: () => handlers.finish?.(),
  } as unknown as Response & { emitFinish: () => void };
};

describe('requestLogger middleware', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  afterEach(() => {
    logSpy.mockClear();
  });

  it('calls next to continue the chain', () => {
    const req = { method: 'GET', originalUrl: '/api/health' } as Request;
    const res = buildResponse(200);
    const next: NextFunction = jest.fn();

    requestLogger(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  it('logs method, url and status code when the response finishes', () => {
    const req = { method: 'POST', originalUrl: '/api/rockets' } as Request;
    const res = buildResponse(201);

    requestLogger(req, res, jest.fn());
    res.emitFinish();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy.mock.calls[0][0]).toMatch(
      /^\[\d{4}-\d{2}-\d{2}T.*\] \[INFO\] POST \/api\/rockets 201 \d+ms$/
    );
  });
});
