import { injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from '../interfaces/logger';
import { Update } from './models/updates/update';
import { Message } from './models/messages/message';
import { TelegramSender } from './telegram-sender';
import { CommandProcessor } from './command-processor';

@injectable()
export class TelegramService {
  constructor(
    private readonly logger: Logger,
    private readonly sender: TelegramSender,
    private readonly processor: CommandProcessor,
  ) { }

  public async message(body: Update): Promise<void> {
    // not awaiting here, sending success response immediately
    if (body.message) this.processMessage(body.message);
  }

  protected async processMessage(message: Message): Promise<void> {
    try {
      const msg = this.processor.makeReply(message.chat.id, message.text);
      await this.sender.send(msg);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
