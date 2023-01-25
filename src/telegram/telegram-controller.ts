import 'reflect-metadata';
import { injectable } from 'inversify';
import { Controller } from '../interfaces/controller';
import { Request, Response } from 'express';
import { Logger } from '../interfaces/logger';
import { TelegramService } from './telegram-service';

@injectable()
export class TelegramController extends Controller {
  constructor(
    private readonly logger: Logger,
    private readonly service: TelegramService,
  ) {
    super();
    this.assignRoutes();
  }

  private assignRoutes() {
    this.router.post('/hook', async (req: Request, res: Response) => {
      try {
        await this.service.message(req.body);
        res.sendStatus(200);
      } catch (error) {
        this.logger.error(error);
        res.sendStatus(500);
      }
    });
  }
}
