import express from 'express';
import Routes from '@mmartan/UI/Routes';
import Middleware from '@mmartan/App/Middleware';
// import Cron from './config/cron';

/**
 * @export
 * @class Server
 */
export class Server {
  // definir aplicativo para ser do tipo express.Application
  public app: express.Application;

  /**
   * Cria uma instância do servidor.
   * @memberof Server
   */
  constructor() {
    this.app = express();
    // Cron.init();
    Middleware.init(this);
    Routes.init(this);
    Middleware.initExceptionHandler(this);
  }
}

export default new Server().app;
