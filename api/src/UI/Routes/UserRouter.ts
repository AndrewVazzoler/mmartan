import UserController from '@mmartan/UI/Http/Controllers/UserController';
import { Router } from 'express';

/**
 * @export
 * @class UserRouter
 */
class UserRouter {
  public router: Router;

  /**
   * Cria uma instância do UserRouter.
   * @memberof UserRouter
   */
  constructor() {
    this.router = Router();
    this.routes();
  }

  /**
   * @memberof UserRouter
   */
  public routes(): void {
    this.router.get('/', UserController.getUser);
    this.router.post('/', UserController.createUser);
  }
}

export default new UserRouter().router;
