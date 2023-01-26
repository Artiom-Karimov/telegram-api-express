import 'reflect-metadata';
import { injectable } from 'inversify';
import { SendMessage } from './models/messages/send-message';
import { ReplyKeyboardMarkup } from './models/messages/reply-markup';

@injectable()
export class CommandProcessor {
  public makeReply(chatId: number, command: string): SendMessage {
    command = command.trim().toLowerCase();
    const msg: SendMessage = {
      chat_id: chatId,
      text: '',
    };

    if (command === 'flip coin') return this.flipCoin(msg);
    if (command === 'random 1-10') return this.random(msg);
    return this.start(msg);
  }

  flipCoin(msg: SendMessage): SendMessage {
    const rnd = Math.random() >= 0.5;
    msg.text = rnd ? `It's heads!` : `It's tails!`;
    return msg;
  }
  random(msg: SendMessage): SendMessage {
    const rnd = Math.ceil(Math.random() * 10);
    msg.text = `Your number is ${rnd}!`;
    return msg;
  }

  private start(msg: SendMessage): SendMessage {
    msg.text = 'Hey there! 👋 Here is your menu.';
    msg.reply_markup = {
      keyboard: [
        [
          {
            text: 'flip coin',
          },
          {
            text: 'random 1-10',
          },
        ],
      ],
    } as ReplyKeyboardMarkup;
    return msg;
  }
}
