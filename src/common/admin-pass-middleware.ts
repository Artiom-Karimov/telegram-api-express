import { Request, Response, NextFunction } from 'express';
import { config } from './config';

export const adminPassMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const pass = req.query.pass;
  if (!pass || pass !== config.adminPass) {
    res.sendStatus(401);
    return;
  }
  next();
};
