const format = (level: string, message: string): string =>
  `[${new Date().toISOString()}] [${level}] ${message}`;

export const logger = {
  info: (message: string): void => console.log(format('INFO', message)),
  warn: (message: string): void => console.warn(format('WARN', message)),
  error: (message: string): void => console.error(format('ERROR', message)),
  debug: (message: string): void => console.debug(format('DEBUG', message)),
};
