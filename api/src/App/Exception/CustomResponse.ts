import HttpException from './HttpException';
import { NextFunction, Request, Response } from 'express';

/**
 * @exports
 * @param {Request} req
 * @param {*} res
 * @param {NextFunction} next
 */
export const CustomResException: (
  req: any,
  res: any,
  next: NextFunction
) => void = (req: Request, res: any, next: NextFunction): void => {
  res.error = (message: any, type: string, status: number = 400): void => {
    res.status(status).json({
      error: {
        message: message,
        type: type
      },
      httpStatus: status
    });
  };

  res.ok = (data: any, status: number = 200): void => {
    if (data) {
      let NewData = {
        body: {
          result: data
        },
        httpStatus: status
      };

      if (data.result) {
        NewData = {
          body: data,
          httpStatus: status
        };
      }
      res.status(status).json(NewData);
    } else {
      res.status(204).json({});
    }
  };

  next();
};
