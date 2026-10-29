import { afterAll, afterEach, describe, expect, it, jest } from '@jest/globals';
import { logger } from '../src/utils/logger.js';

describe('logger', () => {
  const spies = {
    log: jest.spyOn(console, 'log').mockImplementation(() => {}),
    warn: jest.spyOn(console, 'warn').mockImplementation(() => {}),
    error: jest.spyOn(console, 'error').mockImplementation(() => {}),
    debug: jest.spyOn(console, 'debug').mockImplementation(() => {}),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    Object.values(spies).forEach((spy) => spy.mockRestore());
  });

  it('logs info messages with timestamp and INFO level', () => {
    logger.info('hello');
    expect(spies.log).toHaveBeenCalledTimes(1);
    expect(spies.log.mock.calls[0][0]).toMatch(/^\[\d{4}-\d{2}-\d{2}T.*\] \[INFO\] hello$/);
  });

  it('logs warn messages with WARN level', () => {
    logger.warn('careful');
    expect(spies.warn).toHaveBeenCalledTimes(1);
    expect(spies.warn.mock.calls[0][0]).toMatch(/\[WARN\] careful$/);
  });

  it('logs error messages with ERROR level', () => {
    logger.error('boom');
    expect(spies.error).toHaveBeenCalledTimes(1);
    expect(spies.error.mock.calls[0][0]).toMatch(/\[ERROR\] boom$/);
  });

  it('logs debug messages with DEBUG level', () => {
    logger.debug('details');
    expect(spies.debug).toHaveBeenCalledTimes(1);
    expect(spies.debug.mock.calls[0][0]).toMatch(/\[DEBUG\] details$/);
  });
});
