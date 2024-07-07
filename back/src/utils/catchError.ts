import { NextFunction, Request, Response } from 'express';

export function catchError(
  action: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await action(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
