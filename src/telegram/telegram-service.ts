import { injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from '../interfaces/logger';
import { Update } from './models/updates/update';
import { Message } from './models/messages/message';
import { TelegramSender } from './telegram-sender';

@injectable()
export class TelegramService {
  constructor(
    private readonly logger: Logger,
    private readonly sender: TelegramSender,
  ) { }

  public async message(body: Update): Promise<void> {
    this.logger.log(`Msg received: ${JSON.stringify(body)}`);

    // not awaiting here, sending success response immediately
    if (body.message) this.processMessage(body.message);
  }

  protected async processMessage(message: Message): Promise<void> {
    try {
      await this.sender.sendText(message.chat.id, message.text);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
