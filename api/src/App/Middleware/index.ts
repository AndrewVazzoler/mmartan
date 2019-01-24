import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { HttpException } from '@mmartan/App/Exception';
import { CustomResException } from '@mmartan/App/Exception/CustomResponse';
import { SendHttpException } from '@mmartan/App/Exception/SendHttpException';

import {
  IServer,
  CustomResponse
} from '@mmartan/Domains/Interfaces/ServerInterface';

/**
 * @export
 * @class Middleware
 */
export default class Middleware {
  /**
   * @static
   * @param {IServer} server
   * @memberof Middleware
   */
  static init(server: IServer): void {
    // express middleware
    server.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    server.app.use(bodyParser.json());
    // parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    server.app.use(cookieParser());
    // returns the compression middleware
    server.app.use(compression());
    // helps you secure your Express apps by setting various HTTP headers
    server.app.use(helmet());
    // providing a Connect/Express middleware that can be used to enable CORS with various options
    server.app.use(cors());
    // Para servir arquivos estáticos, como imagens, arquivos CSS e arquivos JavaScript
    server.app.use(express.static(path.join(__dirname, '../../../public')));

    // custom errors
    server.app.use(CustomResException);

    // cors
    server.app.use((req: any, res: any, next: any) => {
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS '
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,' +
          ' Content-Type, Accept,' +
          ' Authorization,' +
          ' Access-Control-Allow-Credentials'
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  /**
   * @static
   * @param {IServer} server
   * @memberof Middleware
   */
  static initExceptionHandler(server: IServer): void {
    server.app.use(
      (
        error: Error,
        req: express.Request,
        res: CustomResponse,
        next: express.NextFunction
      ) => {
        if (typeof error === 'number') {
          error = new HttpException(error); // next(404)
        }
        if (error instanceof HttpException) {
          res.status(error.status).json({
            error: {
              message: error.message,
              type: error.name
            },
            httpStatus: error.status
          });
        } else {
          if (server.app.get('env') === 'development') {
            error = new HttpException(500, error.message);
            res.status(500).json({
              error: {
                message: error.message,
                type: error.name
              },
              httpStatus: 500
            });
          } else {
            error = new HttpException(500);
            res.status(500).json({
              error: {
                message: error.message,
                type: error.name
              },
              httpStatus: 500
            });
          }
        }

        console.error(error);
      }
    );
  }
}
