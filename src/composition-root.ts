import { Container } from 'inversify';
import { AppController } from './app/app-controller';
import { AppService } from './app/app-service';
import { App } from './app';
import { Logger } from './interfaces/logger';
import { ConsoleLogger } from './common/console-logger';
import { ErrorHandler } from './common/error-handler';
import { TelegramController } from './telegram/telegram-controller';
import { TelegramService } from './telegram/telegram-service';
import { TelegramHookSetup } from './telegram/telegram-hook-setup';
import { TelegramSender } from './telegram/telegram-sender';
import { CommandProcessor } from './telegram/command-processor';

export class CompositionRoot {
  private readonly container = new Container({ defaultScope: 'Singleton' });

  constructor() {
    this.container.bind<Logger>(Logger).to(ConsoleLogger);
    this.container.bind<ErrorHandler>(ErrorHandler).toSelf();

    this.container.bind<AppController>(AppController).toSelf();
    this.container.bind<AppService>(AppService).toSelf();

    this.container.bind<TelegramController>(TelegramController).toSelf();
    this.container.bind<TelegramService>(TelegramService).toSelf();
    this.container.bind<TelegramHookSetup>(TelegramHookSetup).toSelf();
    this.container.bind<TelegramSender>(TelegramSender).toSelf();
    this.container.bind<CommandProcessor>(CommandProcessor).toSelf();

    this.container.bind<App>(App).toSelf();
  }

  public getHookSetup(): TelegramHookSetup {
    return this.container.resolve(TelegramHookSetup);
  }
  public getApp(): App {
    return this.container.resolve(App);
  }
  public getErrorHandler(): ErrorHandler {
    return this.container.resolve(ErrorHandler);
  }
}
