import { Chat } from './chat';
import {
  Animation,
  Audio,
  Contact,
  Dice,
  Document,
  ForumTopicClosed,
  ForumTopicCreated,
  ForumTopicEdited,
  ForumTopicReopened,
  Game,
  GeneralForumTopicHidden,
  GeneralForumTopicUnhidden,
  Invoice,
  Location,
  MessageAutoDeleteTimerChanged,
  MessageEntity,
  PassportData,
  PhotoSize,
  Poll,
  ProximityAlertTriggered,
  Sticker,
  SuccessfulPayment,
  Venue,
  VideoChatEnded,
  VideoChatParticipantsInvited,
  VideoChatScheduled,
  VideoChatStarted,
  VideoNote,
  Video,
  Voice,
  WebAppData,
  WriteAccessAllowed,
} from './message-sub-types';
import { User } from '../user';
import { InlineKeyboardMarkup } from './reply-markup';

export type Message = {
  /** Unique message identifier inside this chat */
  message_id: number;

  /** Optional. Unique identifier of a message thread
   * to which the message belongs; for supergroups only */
  message_thread_id?: number;

  /**
   * Optional. Sender of the message; empty for messages
   * sent to channels. For backward compatibility, the field
   * contains a fake sender user in non-channel chats, if the
   * message was sent on behalf of a chat.
   */
  from?: User;

  /**
   * Optional. Sender of the message, sent on behalf of a chat.
   * For example, the channel itself for channel posts, the supergroup
   * itself for messages from anonymous group administrators,
   * the linked channel for messages automatically forwarded
   * to the discussion group. For backward compatibility,
   * the field from contains a fake sender user in non-channel chats,
   * if the message was sent on behalf of a chat.
   */
  sender_chat?: Chat;

  /** Date the message was sent in Unix time */
  date: number;

  /** Conversation the message belongs to */
  chat: Chat;

  /** Optional. For forwarded messages, sender of the original message */
  forward_from?: User;

  /** Optional. For messages forwarded from channels or from anonymous
   * administrators, information about the original sender chat */
  forward_from_chat?: Chat;

  /**
   * Optional. For messages forwarded from channels,
   * identifier of the original message in the channel
   */
  forward_from_message_id?: number;

  /**
   * 	Optional. For forwarded messages that were originally sent
   * in channels or by an anonymous chat administrator,
   * signature of the message sender if present
   */
  forward_signature?: string;

  /**
   * Optional. Sender's name for messages forwarded from
   * users who disallow adding a link to their account in forwarded messages
   */
  forward_sender_name?: string;

  /** Optional. For forwarded messages, date the original message was sent in Unix time */
  forward_date?: number;

  /** Optional. True, if the message is sent to a forum topic */
  is_topic_message?: boolean;

  /** Optional. True, if the message is a channel post that
   * was automatically forwarded to the connected discussion group */
  is_automatic_forward?: boolean;

  /** Optional. For replies, the original message. Note that the Message object in this
   * field will not contain further reply_to_message fields even if it itself is a reply. */
  reply_to_message?: Message;

  /** Optional. Bot through which the message was sent */
  via_bot?: User;

  /** Optional. Date the message was last edited in Unix time */
  edit_date?: number;

  /** Optional. True, if the message can't be forwarded */
  has_protected_content?: boolean;

  /** Optional. The unique identifier of a media message group this message belongs to */
  media_group_id?: string;

  /** Optional. Signature of the post author for messages in channels,
   * or the custom title of an anonymous group administrator */
  author_signature?: string;

  /** 	Optional. For text messages, the actual UTF-8 text of the message */
  text?: string;

  /** Optional. For text messages, special entities like usernames,
   * URLs, bot commands, etc. that appear in the text */
  entities?: MessageEntity[];

  /** Optional. Message is an animation, information about the animation.
   * For backward compatibility, when this field is set, the document field will also be set */
  animation?: Animation;

  /** Optional. Message is an audio file, information about the file */
  audio?: Audio;

  /** Optional. Message is a general file, information about the file */
  document?: Document;

  /** Optional. Message is a photo, available sizes of the photo */
  photo?: PhotoSize[];

  /** Optional. Message is a sticker, information about the sticker */
  sticker?: Sticker;

  /** Optional. Message is a video, information about the video */
  video?: Video;

  /** 	Optional. Message is a video note, information about the video message */
  video_note?: VideoNote;

  /** Optional. Message is a voice message, information about the file */
  voice?: Voice;

  /** Optional. Caption for the animation, audio, document, photo, video or voice */
  caption?: string;

  /** Optional. For messages with a caption, special entities like usernames,
   * URLs, bot commands, etc. that appear in the caption */
  caption_entities?: MessageEntity[];

  /** Optional. True, if the message media is covered by a spoiler animation */
  has_media_spoiler?: boolean;

  /** Optional. Message is a shared contact, information about the contact */
  contact?: Contact;

  /** Optional. Message is a dice with random value */
  dice?: Dice;

  /** Optional. Message is a game, information about the game. */
  game?: Game;

  /** Optional. Message is a native poll, information about the poll */
  poll?: Poll;

  /** Optional. Message is a venue, information about the venue.
   * For backward compatibility, when this field is set, the location field will also be set */
  venue?: Venue;

  /** Optional. Message is a shared location, information about the location */
  location?: Location;

  /** Optional. New members that were added to the group or supergroup and
   * information about them (the bot itself may be one of these members) */
  new_chat_members?: User[];

  /** Optional. A member was removed from the group, information about them
   * (this member may be the bot itself) */
  left_chat_member?: User;

  /** Optional. A chat title was changed to this value */
  new_chat_title?: string;

  /** Optional. A chat photo was change to this value */
  new_chat_photo?: PhotoSize[];

  /** Optional. Service message: the chat photo was deleted */
  delete_chat_photo?: boolean;

  /** Optional. Service message: the group has been created */
  group_chat_created?: boolean;

  /** Optional. Service message: the supergroup has been created.
   * This field can't be received in a message coming through updates,
   * because bot can't be a member of a supergroup when it is created.
   * It can only be found in reply_to_message if someone replies to a
   * very first message in a directly created supergroup. */
  supergroup_chat_created?: boolean;

  /** Optional. Service message: the channel has been created.
   * This field can't be received in a message coming through updates,
   * because bot can't be a member of a channel when it is created.
   * It can only be found in reply_to_message if someone replies to a
   * very first message in a channel. */
  channel_chat_created?: boolean;

  /** Optional. Service message: auto-delete timer settings changed in the chat */
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;

  /** Optional. The group has been migrated to a supergroup with the specified identifier.
   * This number may have more than 32 significant bits and some programming languages may
   * have difficulty/silent defects in interpreting it. But it has at most 52
   * significant bits, so a signed 64-bit integer or double-precision
   * float type are safe for storing this identifier. */
  migrate_to_chat_id?: number;

  /** Optional. The supergroup has been migrated from a group with the specified identifier.
   * This number may have more than 32 significant bits and some programming languages may
   * have difficulty/silent defects in interpreting it. But it has at most 52 significant bits,
   * so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
  migrate_from_chat_id?: number;

  /** Optional. Specified message was pinned. Note that the Message object in this field will
   * not contain further reply_to_message fields even if it is itself a reply. */
  pinned_message?: Message;

  /** Optional. Message is an invoice for a payment, information about the invoice. */
  invoice?: Invoice;

  /** Optional. Message is a service message about a successful payment,
   * information about the payment. */
  successful_payment?: SuccessfulPayment;

  /** 	Optional. The domain name of the website on which the user has logged in. */
  connected_website?: string;

  /** Optional. Service message: the user allowed the bot added to
   * the attachment menu to write messages */
  write_access_allowed?: WriteAccessAllowed;

  /** Optional. Telegram Passport data */
  passport_data?: PassportData;

  /** Optional. Service message. A user in the chat triggered another
   * user's proximity alert while sharing Live Location. */
  proximity_alert_triggered?: ProximityAlertTriggered;

  /** Optional. Service message: forum topic created */
  forum_topic_created?: ForumTopicCreated;

  /** Optional. Service message: forum topic edited */
  forum_topic_edited?: ForumTopicEdited;

  /** Optional. Service message: forum topic closed */
  forum_topic_closed?: ForumTopicClosed;

  /** Optional. Service message: forum topic reopened */
  forum_topic_reopened?: ForumTopicReopened;

  /** Optional. Service message: the 'General' forum topic hidden */
  general_forum_topic_hidden?: GeneralForumTopicHidden;

  /** Optional. Service message: the 'General' forum topic unhidden */
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;

  /** Optional. Service message: video chat scheduled */
  video_chat_scheduled?: VideoChatScheduled;

  /** Optional. Service message: video chat started */
  video_chat_started?: VideoChatStarted;

  /** Optional. Service message: video chat ended */
  video_chat_ended?: VideoChatEnded;

  /** Optional. Service message: new participants invited to a video chat */
  video_chat_participants_invited?: VideoChatParticipantsInvited;

  /** Optional. Service message: data sent by a Web App */
  web_app_data?: WebAppData;

  /** Optional. Inline keyboard attached to the message.
   * login_url buttons are represented as ordinary url buttons. */
  reply_markup?: InlineKeyboardMarkup;
};
