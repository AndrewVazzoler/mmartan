import Logger from '@mmartan/App/Core/Logger';
import { isString } from 'util';
/**
 * @export
 * @param {(number | string)} val
 * @returns {(number | string | boolean)}
 */
export function normalizePort(val: number | string): number | string | boolean {
  const port: number = typeof val === 'string' ? parseInt(val, 10) : val;

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * @export
 * @param {(number | string)} val
 * @returns {(number | string | boolean)}
 */
export function normalizeHost(val: string): string | boolean {
  const HOST = env('HOST', 'localhost');
  const host: string = HOST === 'localhost' ? 'localhost' : HOST;

  if (isString(host)) {
    return host;
  }

  return false;
}

/**
 * @param  {NodeJS.ErrnoException} error
 * @param  {number|string|boolean} port
 * @returns throw error
 */
export function onError(
  error: NodeJS.ErrnoException,
  port: number | string | boolean
): void {
  const logger = new Logger();

  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind: string =
    typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requer privilégios elevados`);
      process.exit(1);

      break;
    case 'EADDRINUSE':
      logger.error(`${bind} já está em uso`);
      process.exit(1);

      break;
    default:
      throw error;
  }
}

/**
 * @export
 */
export function onListening(): void {
  const addr: any = this.address();
  const host = normalizeHost(addr.address);

  const logger = new Logger();
  logger.info(`servidor iniciado em http://${host}:${addr.port}`);

  const bind: string =
    typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
}
