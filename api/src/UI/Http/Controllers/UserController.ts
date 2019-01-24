import express from 'express';
import User from '@mmartan/Domains/Models/User';
import UserValidate from '@mmartan/Domains/Validators/User';

/**
 * @class UserController
 */
class UserController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @memberof UserController
   */
  public async getUser(req: express.Request, res: express.Response) {
    const body = req.query;

    const validate = UserValidate.getUser(body);

    if (validate.error)
      return res.error(validate.error.message, validate.error.name);

    try {
      const data = await User.paginate();
      res.ok(data);
    } catch (error) {
      res.error(error.message, error.name, 500);
    }
  }

  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   * @memberof UserController
   */
  public async createUser(req: express.Request, res: express.Response) {
    const body = req.body;

    const validate = UserValidate.getUser(body);

    if (validate.error)
      return res.error(validate.error.message, validate.error.name);

    try {
      const data = await User.create(body);
      res.ok(data, 201);
    } catch (error) {
      res.error(error.message, error.name, 500);
    }
  }
}

export default new UserController();
