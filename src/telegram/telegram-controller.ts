import 'reflect-metadata';
import { injectable } from 'inversify';
import { Controller } from '../interfaces/controller';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '../interfaces/logger';
import { TelegramService } from './telegram-service';
import { TelegramHookSetup } from './telegram-hook-setup';

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
