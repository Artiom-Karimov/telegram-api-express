import { User } from '../user';

/** This object represents one special entity in a text message.
 * For example, hashtags, usernames, URLs, etc. */
export type MessageEntity = {
  /** Type of the entity. Currently, can be “mention” (@username),
   * “hashtag” (#hashtag), “cashtag” ($USD), “bot_command”
   * (/start@jobs_bot), “url” (https://telegram.org), “email”
   * (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123),
   * “bold” (bold text), “italic” (italic text), “underline”
   * (underlined text), “strikethrough” (strikethrough text),
   * “spoiler” (spoiler message), “code” (monowidth string),
   * “pre” (monowidth block), “text_link” (for clickable text URLs),
   * “text_mention” (for users without usernames), “custom_emoji”
   * (for inline custom emoji stickers) */
  type: string;

  /** Offset in UTF-16 code units to the start of the entity */
  offset: number;

  /** Length of the entity in UTF-16 code units */
  length: number;

  /** Optional. For “text_link” only,
   * URL that will be opened after user taps on the text */
  url?: string;

  /** Optional. For “text_mention” only, the mentioned user */
  user?: User;

  /** Optional. For “pre” only, the programming
   * language of the entity text */
  language?: string;

  /** Optional. For “custom_emoji” only, unique identifier of the
   * custom emoji. Use getCustomEmojiStickers to get full information
   * about the sticker */
  custom_emoji_id?: string;
};

/** This object represents an animation file
 * (GIF or H.264/MPEG-4 AVC video without sound). */
export type Animation = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

/** This object represents an audio
 * file to be treated as music by the Telegram clients. */
export type Audio = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: string;
  thunb?: PhotoSize;
};

/** This object represents a general file
 * (as opposed to photos, voice messages and audio files). */
export type Document = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: string;
};

/** This object represents one size of a
 * photo or a file / sticker thumbnail. */
export type PhotoSize = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  width: number;
  height: number;
  file_size: number;
};

/** This object represents a file ready to be downloaded.
 * The file can be downloaded via the link
 * https://api.telegram.org/file/bot<token>/<file_path>.
 * It is guaranteed that the link will be valid for at least
 * 1 hour. When the link expires, a new one can be
 * requested by calling getFile. */
export type File = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  /** Optional. File size in bytes. It can be bigger than
   * 2^31 and some programming languages may have
   * difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a
   * signed 64-bit integer or double-precision float
   * type are safe for storing this value. */
  file_size?: number;

  /** Optional. File path. Use
   * https://api.telegram.org/file/bot<token>/<file_path>
   * to get the file. */
  file_path?: string;
};

/** This object describes the position on faces
 * where a mask should be placed by default. */
export type MaskPosition = {
  /** The part of the face relative to which the
   * mask should be placed. One of “forehead”,
   * “eyes”, “mouth”, or “chin”. */
  point: string;

  /** Shift by X-axis measured in widths of the
   * mask scaled to the face size, from left to right.
   * For example, choosing -1.0 will place mask just to
   * the left of the default mask position. */
  x_shift: number;

  /** Shift by Y-axis measured in heights of the mask
   * scaled to the face size, from top to bottom.
   * For example, 1.0 will place the mask just below
   * the default mask position. */
  y_shift: number;

  /** Mask scaling coefficient.For example, 2.0 means double size. */
  scale: number;
};

/** This object represents a sticker. */
export type Sticker = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  /** Type of the sticker, currently one of “regular”, “mask”,
   * “custom_emoji”. The type of the sticker is independent from
   * its format, which is determined by the fields
   * is_animated and is_video. */
  type: 'regular' | 'mask' | 'custom_emoji';

  width: number;
  height: number;
  is_animated: boolean;
  is_video: boolean;

  /** Optional. Sticker thumbnail in the .WEBP or .JPG format */
  thumb?: PhotoSize;

  /** Optional. Emoji associated with the sticker */
  emoji?: string;

  /** Optional. Name of the sticker set to
   * which the sticker belongs */
  set_name?: string;

  /** Optional. For premium regular stickers,
   * premium animation for the sticker */
  premium_animation?: File;

  /** Optional. For mask stickers, the position
   * where the mask should be placed */
  mask_position?: MaskPosition;

  /** Optional. For custom emoji stickers,
   * unique identifier of the custom emoji */
  custom_emoji_id?: string;

  file_size?: number;
};

/** This object represents a video file. */
export type Video = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: string;
};

/** This object represents a video message
 * (available in Telegram apps as of v.4.0). */
export type VideoNote = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  /** Video width and height
   * (diameter of the video message) as defined by sender */
  length: number;

  duration: number;
  thumb?: PhotoSize;
  file_size?: string;
};

/** This object represents a voice note. */
export type Voice = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  duration: number;
  mime_type?: string;
  file_size?: string;
};

/** This object represents a phone contact. */
export type Contact = {
  phone_number: string;
  first_name: string;
  last_name: string;

  /** Optional. Contact's user identifier in Telegram.
   * This number may have more than 32 significant bits
   * and some programming languages may have difficulty/silent
   * defects in interpreting it. But it has at most 52 significant
   * bits, so a 64-bit integer or double-precision float type are
   * safe for storing this identifier. */
  user_id?: number;

  /** Optional. Additional data about the contact
   * in the form of a vCard */
  vcard?: string;
};

/** This object represents an animated emoji that displays a random value. */
export type Dice = {
  /** Emoji on which the dice throw animation is based */
  emoji: string;

  /** Value of the dice, 1-6 for “🎲”, “🎯” and “🎳” base emoji, 1-5 for “🏀”
   * and “⚽” base emoji, 1-64 for “🎰” base emoji */
  value: number;
};

/** This object contains information about one answer option in a poll. */
export type PollOption = {
  text: string;
  voter_count: number;
};

/** This object represents an answer of a user in a non-anonymous poll. */
export type PollAnswer = {
  poll_id: string;
  user: User;

  /** 0-based identifiers of answer options, chosen by the user.
   * May be empty if the user retracted their vote. */
  option_ids: number[];
};

/** This object contains information about a poll. */
export type Poll = {
  /** Unique poll identifier */
  id: string;

  /** Poll question, 1-300 characters */
  question: string;

  /** List of poll options */
  options: PollOption[];

  /** Total number of users that voted in the poll */
  total_voter_count: number;

  is_closed: boolean;
  is_anonymous: boolean;

  /** Poll type, currently can be “regular” or “quiz” */
  type: 'regular' | 'quiz';

  allows_multiple_answers: boolean;

  /** Optional. 0-based identifier of the correct answer option.
   * Available only for polls in the quiz mode, which are closed,
   * or was sent (not forwarded) by the bot or to the
   * private chat with the bot. */
  correct_option_id?: number;

  /** 	Optional. Text that is shown when a user chooses an
   * incorrect answer or taps on the lamp icon in a
   * quiz-style poll, 0-200 characters */
  explanation?: string;

  /** Optional. Special entities like usernames,
   *  URLs, bot commands, etc. that appear in the explanation */
  explanation_entities?: MessageEntity[];

  /** Optional. Amount of time in seconds the
   * poll will be active after creation */
  open_period?: number;

  /** 	Optional. Point in time (Unix timestamp)
   * when the poll will be automatically closed */
  close_date?: number;
};

/** This object represents a venue. */
export type Venue = {
  /** Venue location. Can't be a live location */
  location: Location;

  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
};

/** This object represents a point on the map. */
export type Location = {
  longtitude: number;
  latitude: number;

  /** Optional. The radius of uncertainty for
   * the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;

  /** Optional. Time relative to the message sending
   * date, during which the location can be updated;
   * in seconds. For active live locations only. */
  live_period?: number;

  /** Optional.The direction in which user is moving,
   * in degrees; 1 - 360. For active live locations only. */
  heading?: number;

  /** Optional. The maximum distance for proximity alerts
   * about approaching another chat member, in meters.
   * For sent live locations only. */
  proximity_alert_radius?: number;
};

/** This object represents a service message
 * about a change in auto-delete timer settings. */
export type MessageAutoDeleteTimerChanged = {
  /** New auto-delete time for messages in the chat; in seconds */
  message_auto_delete_time: number;
};

/** This object contains basic information about an invoice. */
export type Invoice = {
  title: string;
  description: string;

  /** Unique bot deep-linking parameter
   * that can be used to generate this invoice */
  start_parameter: string;

  /** Three-letter ISO 4217 currency code */
  currency: string;

  /** Total price in the smallest units of the currency
   * (integer, not float/double). For example, for a price
   * of US$ 1.45 pass amount = 145. See the exp parameter
   * in https://core.telegram.org/bots/payments/currencies.json
   * , it shows the number of digits
   * past the decimal point for each currency
   * (2 for the majority of currencies). */
  total_amount: number;
};

/** This object contains basic information about a successful payment. */
export type SuccessfulPayment = {
  /** Three-letter ISO 4217 currency code */
  currency: string;

  /** Total price in the smallest units of the currency
   * (integer, not float/double). For example, for a price
   * of US$ 1.45 pass amount = 145. See the exp parameter
   * in https://core.telegram.org/bots/payments/currencies.json
   * , it shows the number of digits
   * past the decimal point for each currency
   * (2 for the majority of currencies). */
  total_amount: number;

  /** Bot specified invoice payload */
  invoice_payload: string;

  /** Optional. Identifier of the shipping option chosen by the user */
  shipping_option_id?: string;

  /** Optional. Order information provided by the user */
  order_info?: OrderInfo;

  /** Telegram payment identifier */
  telegram_payment_charge_id?: string;

  /** Provider payment identifier */
  provider_payment_charge_id?: string;
};

/** This object represents information about an order. */
export type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
};

export type ShippingAddress = {
  country_code: string;
  state?: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};

export type Game = {};

/** This object represents a service message about a user
 * allowing a bot added to the attachment menu to write
 * messages. Currently holds no information. */
export type WriteAccessAllowed = {};

/** Describes Telegram Passport data shared with the bot by the user. */
export type PassportData = {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
};

// At this point I've lost my patience, sorry :(
export type EncryptedPassportElement = {};
export type EncryptedCredentials = {};
export type ProximityAlertTriggered = {};
export type ForumTopicCreated = {};
export type ForumTopicEdited = {};
export type ForumTopicClosed = {};
export type ForumTopicReopened = {};
export type GeneralForumTopicHidden = {};
export type GeneralForumTopicUnhidden = {};
export type VideoChatScheduled = {};
export type VideoChatStarted = {};
export type VideoChatEnded = {};
export type VideoChatParticipantsInvited = {};
export type WebAppData = {};
