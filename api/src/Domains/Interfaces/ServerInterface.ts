import * as express from 'express';
import { HttpException } from '@mmartan/App/Exception';

/**
 * @export
 * @interface IServer
 */
export interface IServer {
  app: express.Application;
}

/**
 * @export
 * @interface IConnectOptions
 */
export interface IConnectOptions {
  autoReconnect: boolean;
  useNewUrlParser: boolean;
  reconnectTries: number; // Never stop trying to reconnect
  reconnectInterval: number;
  loggerLevel?: string;
}

/**
 *
 * @export
 * @interface CustomResponse
 * @extends {express.Response}
 */
export interface CustomResponse extends express.Response {
  sendHttpException: (error: HttpException | Error, message?: string) => void;
  error(message: string, name: string, status?: number): any;
  ok(data?: any, status?: number): any;
}
