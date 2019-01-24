import ProductController from '@mmartan/UI/Http/Controllers/ProductController';
import { Router } from 'express';

/**
 * @export
 * @class ProductRouter
 */
class ProductRouter {
  public router: Router;

  /**
   * Cria uma instância do ProductRouter.
   * @memberof UserRouter
   */
  constructor() {
    this.router = Router();
    this.routes();
  }

  /**
   * @memberof ProductRouter
   */
  public routes(): void {
    this.router.get('/', ProductController.getProducts);
    this.router.post('/', ProductController.createProduct);
  }
}

export default new ProductRouter().router;
