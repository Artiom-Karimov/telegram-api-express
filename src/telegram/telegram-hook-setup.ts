import 'reflect-metadata';
import { injectable } from 'inversify';
import { connect } from 'ngrok';
import { Logger } from '../interfaces/logger';
import { config } from '../common/config';
import axios from 'axios';

@injectable()
export class TelegramHookSetup {
  constructor(private readonly logger: Logger) { }

  public async setupDevelopment() {
    const url = await connect(config.port);
    this.logger.log(`ngrok connected to ${url}`);
    return this.setHook(url);
  }

  public async setupProduction() {
    return this.setHook(config.baseUrl);
  }

  private async setHook(baseUrl: string) {
    const result = await axios.post(
      `https://api.telegram.org/bot${config.telegramToken}/setWebhook`,
      {
        url: `${baseUrl}/telegram/hook`,
      },
    );
    this.logger.log(`webhook has been set`);
    this.logger.log(`telegram response:\n${JSON.stringify(result.data)}`);
  }
}
