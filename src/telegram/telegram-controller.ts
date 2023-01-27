import 'reflect-metadata';
import { injectable } from 'inversify';
import { Controller } from '../interfaces/controller';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '../interfaces/logger';
import { TelegramService } from './telegram-service';
import { TelegramHookSetup } from './telegram-hook-setup';
import { adminPassMiddleware } from '../common/admin-pass-middleware';

@injectable()
export class TelegramController extends Controller {
  constructor(
    private readonly logger: Logger,
    private readonly service: TelegramService,
    private readonly setup: TelegramHookSetup,
  ) {
    super();
    this.assignRoutes();
  }

  private assignRoutes() {
    this.router.post(
      '/hook',
      this.checkToken,
      async (req: Request, res: Response) => {
        try {
          await this.service.message(req.body);
          res.sendStatus(200);
        } catch (error) {
          this.logger.error(error);
          res.sendStatus(500);
        }
      },
    );

    /** use this when you need to reset webhook.
     * expample: <yourhost.com>/telegram/reset-hook?pass=<env.PASSWORD>
     */
    this.router.get(
      '/reset-hook',
      adminPassMiddleware,
      async (req: Request, res: Response) => {
        try {
          await this.setup.setHook();
          res.status(200).send('hook was reset');
        } catch (err) {
          res.status(400).send(JSON.stringify(err));
        }
      },
    );

    /** use this when you need to unassign webhook.
     * expample: <yourhost.com>/telegram/delete-hook?pass=<env.PASSWORD>
     */
    this.router.get(
      '/delete-hook',
      adminPassMiddleware,
      async (req: Request, res: Response) => {
        try {
          await this.setup.deleteHook();
          res.status(200).send('hook was deleted');
        } catch (err) {
          res.status(400).send(JSON.stringify(err));
        }
      },
    );
  }

  private checkToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-telegram-bot-api-secret-token'];
    if (!token || token !== this.setup.token) {
      res.status(403).send('wrong token');
      this.logger.error(`received wrong token: ${token}`);
      this.logger.log(`headers: ${JSON.stringify(req.headers)}`);
      return;
    }
    next();
  };
}
