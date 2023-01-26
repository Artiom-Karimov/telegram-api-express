import { injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from '../interfaces/logger';
import { Update } from './models/updates/update';
import { Message } from './models/messages/message';
import { config } from '../common/config';
import axios from 'axios';

@injectable()
export class TelegramService {
  constructor(private readonly logger: Logger) { }

  public async message(body: Update): Promise<void> {
    this.logger.log(`Msg received: ${JSON.stringify(body)}`);

    // not awaiting here, sending success response immediately
    if (body.message) this.processMessage(body.message);

  }

  protected async processMessage(message: Message): Promise<void> {
    try {
      const result = await axios.post(
        `https://api.telegram.org/bot${config.telegramToken}/deleteWebhook`,
        {},
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
