import 'reflect-metadata';
import { injectable } from 'inversify';
import { connect } from 'ngrok';
import { Logger } from '../interfaces/logger';
import { config } from '../common/config';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { SetWebhookType } from './models/set-webhook-type';

@injectable()
export class TelegramHookSetup {
  public readonly token = uuid();

  constructor(private readonly logger: Logger) { }

  public async setupDevelopment() {
    const url = await connect(config.port);
    this.logger.log(`ngrok connected to ${url}`);
    return this.setHook(url);
  }

  public async setupProduction() {
    return this.setHook(config.baseUrl);
  }

  public async deleteHook() {
    const result = await axios.post(
      `https://api.telegram.org/bot${config.telegramToken}/deleteWebhook`,
      {},
    );

    this.logger.log(`webhook was deleted`);
    this.logger.log(`telegram response:\n${JSON.stringify(result.data)}`);
  }

  private async setHook(baseUrl: string) {
    const data: SetWebhookType = {
      url: `${baseUrl}/telegram/hook`,
      secret_token: this.token,
    };

    const result = await axios.post(
      `https://api.telegram.org/bot${config.telegramToken}/setWebhook`,
      data,
    );

    this.logger.log(`webhook was set`);
    this.logger.log(`telegram response:\n${JSON.stringify(result.data)}`);
  }
}
