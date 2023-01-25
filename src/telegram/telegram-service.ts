import { injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from '../interfaces/logger';

@injectable()
export class TelegramService {
  constructor(private readonly logger: Logger) { }

  public async message(body: any): Promise<void> {
    this.logger.log(`Msg received: ${JSON.stringify(body)}`);
  }
}
