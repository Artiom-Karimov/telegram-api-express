import 'reflect-metadata';
import { injectable } from 'inversify';
import { connect, disconnect } from 'ngrok';
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
  private _token: string;

  /** You should check  x-telegram-bot-api-secret-token header
   * when receiving updates from telegram. Values should be equal
   */
  get token() {
    return this._token;
  }

  constructor(private readonly logger: Logger) { }

  /** Set or reset webhook for telegram API.
   * If env.BASE_URL is present, it will be used, otherwise
   * the hook will be connected through Ngrok.
   */
  public async setHook() {
    this._token = uuid();
    if (config.baseUrl) return this.setupProduction();
    return this.setupDevelopment();
  }

  /** Hook will be removed, you will be able to receive updates by polling */
  public async deleteHook() {
    const result = await axios.post(
      `${config.telegramBaseUrl}/bot${config.telegramToken}/deleteWebhook`,
      {},
    );

    this.logger.log(`webhook was deleted`);
    this.logger.log(`telegram response:\n${JSON.stringify(result.data)}`);
  }

  private async setupDevelopment() {
    await disconnect();
    const url = await connect(config.port);
    this.logger.log(`ngrok connected to ${url}`);
    return this.sendHook(url);
  }

  private async setupProduction() {
    return this.sendHook(config.baseUrl);
  }

  private async sendHook(baseUrl: string) {
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
