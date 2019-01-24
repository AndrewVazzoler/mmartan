import express from 'express';
import UserRouter from './UserRouter';
import ProductRouter from './ProductRouter';
import { IServer } from '@mmartan/Domains/Interfaces/ServerInterface';

/**
 * @export
 * @class Routes
 */
export default class Routes {
  /**
   * @static
   * @param {IServer} server
   * @memberof Routes
   */
  static init(server: IServer): void {
    const router: express.Router = express.Router();

    // users
    server.app.use('/api/v1/users', UserRouter);
    server.app.use('/api/v1/products', ProductRouter);

    // index
    server.app.use('/*', router);
    server.app.get('/', (req, res, next) => {
      res.status(200).json({ title: 'Hey', message: 'Hello there!' });
    });

    server.app.use(/^\/(.*)/, (req, res, next) => {
      res.error('Rota não localizada!', 'Not found', 404);
    });
  }
}
