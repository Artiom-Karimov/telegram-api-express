export type UpdateType =
  | 'message'
  | 'edited_message'
  | 'channel_post'
  | 'edited_channel_post'
  | 'inline_query'
  | 'chosen_inline_result'
  | 'callback_query'
  | 'shipping_query'
  | 'pre_checkout_query'
  | 'poll'
  | 'poll_answer'
  | 'my_chat_member'
  | 'chat_member'
  | 'chat_join_request';

export type SetWebhookModel = {
  url?: string;
  certificate?: string;
  ip_address?: string;
  max_connections?: number;
  allowed_updates?: UpdateType[];
  drop_pending_updates?: boolean;
  secret_token?: string;
};
