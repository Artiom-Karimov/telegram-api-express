/** This object represents an inline keyboard
 * that appears right next to the message it belongs to. */
export type InlineKeyboardMarkup = {
  /** Array of button rows, each represented
   * by an Array of InlineKeyboardButton objects */
  inline_keyboard: InlineKeyboardButton[][];
};

/** This object represents one button of an
 * inline keyboard. You must use exactly one of
 * the optional fields. */
export type InlineKeyboardButton = {
  /** Label text on the button */
  text: string;

  /** Optional. HTTP or tg:// URL to be opened when the button
   * is pressed. Links tg://user?id=<user_id> can be used to
   * mention a user by their ID without using a username, if
   * this is allowed by their privacy settings. */
  url: string;

  /** Optional. Data to be sent in a callback query \
   * o the bot when button is pressed, 1-64 bytes */
  callback_data?: string;

  /** Optional. Description of the Web App that will be launched
   * when the user presses the button. The Web App will be able
   * to send an arbitrary message on behalf of the user using the
   * method answerWebAppQuery. Available only in private chats
   * between a user and the bot. */
  web_app?: WebAppInfo;

  /** 	Optional. An HTTPS URL used to automatically authorize
   * the user. Can be used as a replacement for the Telegram
   * Login Widget. */
  login_url?: LoginUrl;

  /** 	Optional. If set, pressing the button will prompt the
   * user to select one of their chats, open that chat and
   * insert the bot's username and the specified inline query
   * in the input field. May be empty, in which case just the
   * bot's username will be inserted.
   * Note: This offers an easy way for users to start using your
   * bot in inline mode when they are currently in a private
   * chat with it. Especially useful when combined with
   * switch_pm… actions - in this case the user will be
   * automatically returned to the chat they switched from,
   * skipping the chat selection screen.*/
  switch_inline_query?: string;

  /** Optional. If set, pressing the button will insert the bot's
   * username and the specified inline query in the current
   * chat's input field. May be empty, in which case only the
   * bot's username will be inserted.
   * This offers a quick way for the user to open your bot in
   * inline mode in the same chat - good for selecting something
   * from multiple options. */
  switch_inline_query_current_chat?: string;

  /** Optional. Description of the game that will be launched when
   * the user presses the button.
   * NOTE: This type of button must always be the first button in
   * the first row. */
  callback_game?: CallbackGame;

  /** Optional. Specify True, to send a Pay button.
   * NOTE: This type of button must always be the
   * first button in the first row and can only be used in
   * invoice messages.
   */
  pay?: boolean;
};

/** Describes a Web App. */
export type WebAppInfo = {
  /** An HTTPS URL of a Web App to be opened with additional
   * data as specified in Initializing Web Apps */
  url: string;
};

/** This object represents a parameter of the inline keyboard button
 * used to automatically authorize a user. Serves as a great
 * replacement for the Telegram Login Widget when the user is
 * coming from Telegram. All the user needs to do is tap/click a
 * button and confirm that they want to log in: */
export type LoginUrl = {
  /** An HTTPS URL to be opened with user authorization data added
   * to the query string when the button is pressed. If the user
   * refuses to provide authorization data, the original URL without
   * information about the user will be opened. The data added is
   * the same as described in Receiving authorization data.
   * NOTE: You must always check the hash of the received data to
   * verify the authentication and the integrity of the data as
   * described in Checking authorization.*/
  url: string;

  /** 	Optional. New text of the button in forwarded messages. */
  forward_text?: string;

  /** Optional. Username of a bot, which will be used for user
   * authorization. See Setting up a bot for more details. If not
   * specified, the current bot's username will be assumed. The
   * url's domain must be the same as the domain linked with the
   * bot. See Linking your domain to the bot for more details. */
  bot_username?: string;

  /** Optional. Pass True to request the permission for your bot
   * to send messages to the user. */
  request_write_access?: boolean;
};

/** A placeholder, currently holds no information. Use BotFather
 * to set up your game. */
export type CallbackGame = {};

/** This object represents a custom keyboard with reply options
 * (see Introduction to bots for details and examples). */
export type ReplyKeyboardMarkup = {
  /** Array of button rows, each represented by an Array of
   * KeyboardButton objects */
  keyboard: KeyboardButton[][];

  /** Optional. Requests clients to always show the keyboard when
   * the regular keyboard is hidden. Defaults to false, in which
   * case the custom keyboard can be hidden and opened with a
   * keyboard icon. */
  is_persistent?: boolean;

  /** Optional. Requests clients to resize the keyboard vertically
   * for optimal fit (e.g., make the keyboard smaller if there are
   * just two rows of buttons). Defaults to false, in which case
   * the custom keyboard is always of the same height as the app's
   * standard keyboard. */
  resize_keyboard?: boolean;

  /** Optional. Requests clients to hide the keyboard as soon as
   * it's been used. The keyboard will still be available, but
   * clients will automatically display the usual letter-keyboard
   * in the chat - the user can press a special button in the input
   * field to see the custom keyboard again. Defaults to false. */
  one_time_keyboard?: boolean;

  /** Optional. The placeholder to be shown in the input field when
   * the keyboard is active; 1-64 characters */
  input_field_placeholder?: string;

  /** Optional. Use this parameter if you want to show the keyboard
   * to specific users only. Targets: 1) users that are @mentioned
   * in the text of the Message object; 2) if the bot's message
   * is a reply (has reply_to_message_id), sender of the original
   * message.
   * Example: A user requests to change the bot's language, bot
   * replies to the request with a keyboard to select the new language.
   * Other users in the group don't see the keyboard.*/
  selective?: boolean;
};

/** This object represents one button of the reply keyboard. For simple
 * text buttons String can be used instead of this object to specify
 * text of the button. Optional fields web_app, request_contact,
 * request_location, and request_poll are mutually exclusive. */
export type KeyboardButton = {
  /** Text of the button. If none of the optional fields are used,
   * it will be sent as a message when the button is pressed */
  text: string;

  /** Optional. If True, the user's phone number will be sent as
   * a contact when the button is pressed. Available in private chats
   * only. */
  request_contact?: boolean;

  /** Optional. If True, the user's current location will be sent when
   * the button is pressed. Available in private chats only. */
  request_location?: boolean;

  /** Optional. If specified, the user will be asked to create a poll
   * and send it to the bot when the button is pressed. Available in
   * private chats only. */
  request_poll?: KeyboardButtonPollType;

  /** Optional. If specified, the described Web App will be launched
   * when the button is pressed. The Web App will be able to send a
   * “web_app_data” service message. Available in private chats only. */
  web_app?: WebAppInfo;
};

/** This object represents type of a poll, which is allowed to be
 * created and sent when the corresponding button is pressed. */
export type KeyboardButtonPollType = {
  /** Optional. If quiz is passed, the user will be allowed to create
   * only polls in the quiz mode. If regular is passed, only regular
   * polls will be allowed. Otherwise, the user will be allowed to
   * create a poll of any type. */
  type?: string;
};

/** Upon receiving a message with this object, Telegram clients will
 * remove the current custom keyboard and display the default
 * letter-keyboard. By default, custom keyboards are displayed until
 * a new keyboard is sent by a bot. An exception is made for one-time
 * keyboards that are hidden immediately after the user presses a
 * button (see ReplyKeyboardMarkup). */
export type ReplyKeyboardRemove = {
  /** Requests clients to remove the custom keyboard (user will not be
   * able to summon this keyboard; if you want to hide the keyboard
   * from sight but keep it accessible, use one_time_keyboard in
   * ReplyKeyboardMarkup) */
  remove_keyboard: true;

  /** Optional. Use this parameter if you want to remove the keyboard
   * for specific users only. Targets: 1) users that are @mentioned in
   * the text of the Message object; 2) if the bot's message is a
   * reply (has reply_to_message_id), sender of the original message.
   * Example: A user votes in a poll, bot returns confirmation message
   * in reply to the vote and removes the keyboard for that user, while
   * still showing the keyboard with poll options to users who haven't
   * voted yet.*/
  selective?: boolean;
};

/** Upon receiving a message with this object, Telegram clients will
 * display a reply interface to the user (act as if the user has
 * selected the bot's message and tapped 'Reply'). This can be extremely
 * useful if you want to create user-friendly step-by-step interfaces
 * without having to sacrifice privacy mode. */
export type ForceReply = {
  /** Shows reply interface to the user, as if they manually selected
   * the bot's message and tapped 'Reply' */
  force_reply: true;

  /** Optional. The placeholder to be shown in the input field when
   * the reply is active; 1-64 characters */
  input_field_placeholder?: string;

  /** Optional. Use this parameter if you want to force reply from
   * specific users only. Targets: 1) users that are @mentioned in
   * the text of the Message object; 2) if the bot's message is a reply
   * (has reply_to_message_id), sender of the original message. */
  selective: boolean;
};
