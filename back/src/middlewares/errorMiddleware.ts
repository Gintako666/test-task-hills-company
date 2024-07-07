import { NextFunction, Request, Response } from 'express';

import { ApiError } from '../exceptions/ApiError';

export function errorMiddleware(
  error: ApiError,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error) {
    const { status, message, errors } = error;

    res.status(status).send({
      message,
      errors,
    });

    return;
  }

  res.status(500).send({
    massage: 'Error',
  });
}
