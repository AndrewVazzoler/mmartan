import HttpException from './HttpException';
import { NextFunction, Request, Response } from 'express';

/**
 * @exports
 * @param {Request} req
 * @param {*} res
 * @param {NextFunction} next
 */
export const SendHttpException: (
  req: any,
  res: any,
  next: NextFunction
) => void = (req: Request, res: any, next: NextFunction): void => {
  res.sendHttpException = (error: HttpException): void => {
    res.status(error.status).json({
      error: {
        message: error.message,
        type: error.name,
        status: error.status
      }
    });
  };

  next();
};
