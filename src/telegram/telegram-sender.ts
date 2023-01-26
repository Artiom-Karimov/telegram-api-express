import 'reflect-metadata';
import { injectable } from 'inversify';
import { config } from '../common/config';
import axios from 'axios';
import { SendMessage } from './models/messages/send-message';

@injectable()
export class TelegramSender {
  constructor() { }

  public async sendText(chatId: number, text: string): Promise<void> {
    const msg: SendMessage = {
      chat_id: chatId,
      text,
    };
    return this.send(msg);
  }

  protected async send(msg: SendMessage): Promise<void> {
    const result = await axios.post(
      `${config.telegramBaseUrl}/bot${config.telegramToken}/sendMessage`,
      msg,
    );

    if (result.status >= 400)
      throw new Error(
        `response ${result.status}, ${JSON.stringify(result.data)}`,
      );
  }
}
