import { Chat, ChatInviteLink, ChatMember } from '../messages/chat';
import { Message } from '../messages/message';
import { OrderInfo, ShippingAddress } from '../messages/message-sub-types';
import { User } from '../user';

/** This object represents an incoming inline query.
 * When the user sends an empty query, your bot could
 * return some default or trending results. */
export type InlineQuery = {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: string;
  location?: Location;
};

/** Represents a result of an inline query that was
 * chosen by the user and sent to their chat partner. */
export type ChosenInlineResult = {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
};

/** This object represents an incoming callback query from
 * a callback button in an inline keyboard. If the button
 * that originated the query was attached to a message sent
 * by the bot, the field message will be present. If the
 * button was attached to a message sent via the bot
 * (in inline mode), the field inline_message_id will be present.
 * Exactly one of the fields data or game_short_name will be present. */
export type CallbackQuery = {
  id: string;
  from: User;
  message?: Message;
  inline_message_id: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
};

/** This object contains information about an incoming shipping query. */
export type ShippingQuery = {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
};

/** This object contains information about an incoming pre-checkout query. */
export type PreCheckoutQuery = {
  id: string;
  from: User;
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
};

/** This object represents changes in the status of a chat member. */
export type ChatMemberUpdated = {
  chat: Chat;
  from: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
};

/** Represents a join request sent to a chat. */
export type ChatJoinRequest = {
  chat: Chat;
  from: User;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
};
