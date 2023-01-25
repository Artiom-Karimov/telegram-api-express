import { UserType } from './user-type';

/** This object represents one special entity in a text message.
 * For example, hashtags, usernames, URLs, etc. */
export type MessageEntityType = {
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
  user?: UserType;

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
export type AnimationType = {
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
  thumb?: PhotoSizeType;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

/** This object represents an audio
 * file to be treated as music by the Telegram clients. */
export type AudioType = {
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
  thunb?: PhotoSizeType;
};

/** This object represents a general file
 * (as opposed to photos, voice messages and audio files). */
export type DocumentType = {
  /** Identifier for this file, which can be
   * used to download or reuse the file */
  file_id: string;

  /** Unique identifier for this file, which is supposed to be
   * the same over time and for different bots. Can't be used
   * to download or reuse the file. */
  file_unique_id: string;

  thumb?: PhotoSizeType;
  file_name?: string;
  mime_type?: string;
  file_size?: string;
};

/** This object represents one size of a
 * photo or a file / sticker thumbnail. */
export type PhotoSizeType = {
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
export type StickerType = {};

/** This object represents a video file. */
export type VideoType = {
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
  thumb?: PhotoSizeType;
  file_name?: string;
  mime_type?: string;
  file_size?: string;
};

/** This object represents a video message
 * (available in Telegram apps as of v.4.0). */
export type VideoNoteType = {
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
  thumb?: PhotoSizeType;
  file_size?: string;
};

/** This object represents a voice note. */
export type VoiceType = {
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
export type ContactType = {
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
export type DiceType = {
  /** Emoji on which the dice throw animation is based */
  emoji: string;

  /** Value of the dice, 1-6 for “🎲”, “🎯” and “🎳” base emoji, 1-5 for “🏀”
   * and “⚽” base emoji, 1-64 for “🎰” base emoji */
  value: number;
};

export type GameType = {};

/** This object contains information about one answer option in a poll. */
export type PollOptionType = {
  text: string;
  voter_count: number;
};

/** This object represents an answer of a user in a non-anonymous poll. */
export type PollAnswerType = {
  poll_id: string;
  user: UserType;

  /** 0-based identifiers of answer options, chosen by the user.
   * May be empty if the user retracted their vote. */
  option_ids: number[];
};

/** This object contains information about a poll. */
export type PollType = {
  /** Unique poll identifier */
  id: string;

  /** Poll question, 1-300 characters */
  question: string;

  /** List of poll options */
  options: PollOptionType[];

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
  explanation_entities?: MessageEntityType[];

  /** Optional. Amount of time in seconds the
   * poll will be active after creation */
  open_period?: number;

  /** 	Optional. Point in time (Unix timestamp)
   * when the poll will be automatically closed */
  close_date?: number;
};
export type VenueType = {};
export type LocationType = {};
export type MessageAutoDeleteTimerChangedType = {};
export type InvoiceType = {};
export type SuccessfulPaymentType = {};
export type WriteAccessAllowedType = {};
export type PassportDataType = {};
export type ProximityAlertTriggeredType = {};
export type ForumTopicCreatedType = {};
export type ForumTopicEditedType = {};
export type ForumTopicClosedType = {};
export type ForumTopicReopenedType = {};
export type GeneralForumTopicHiddenType = {};
export type GeneralForumTopicUnhiddenType = {};
export type VideoChatScheduledType = {};
export type VideoChatStartedType = {};
export type VideoChatEndedType = {};
export type VideoChatParticipantsInvitedType = {};
export type WebAppDataType = {};
export type InlineKeyboardMarkupType = {};
