import 'reflect-metadata';
import { injectable } from 'inversify';
import { connect } from 'ngrok';
import { Logger } from '../interfaces/logger';
import { config } from '../common/config';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { SetWebhookModel } from './models/set-webhook-model';

@injectable()
export class TelegramHookSetup {
  /** This uuid can be an issue if you decide to replicate your app.
   * If this is a case, consider storing token in db or environment vars.
   * Token is being sent to telegram on hook setup.
   * On message this token is included in headers, so you can be sure that
   * only telegram updates will be processed */
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
      `${config.telegramBaseUrl}/bot${config.telegramToken}/deleteWebhook`,
      {},
    );

    this.logger.log(`webhook was deleted`);
    this.logger.log(`telegram response:\n${JSON.stringify(result.data)}`);
  }

  private async setHook(baseUrl: string) {
    const data: SetWebhookModel = {
      url: `${baseUrl}/telegram/hook`,
      secret_token: this.token,
    };

    const result = await axios.post(
      `${config.telegramBaseUrl}/bot${config.telegramToken}/setWebhook`,
      data,
    );

    this.logger.log(`webhook was set`);
    this.logger.log(`telegram response:\n${JSON.stringify(result.data)}`);
  }
}
