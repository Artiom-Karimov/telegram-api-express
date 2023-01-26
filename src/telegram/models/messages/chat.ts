import { User } from '../user';
import { Location } from './message-sub-types';

/** This object represents a chat. */
export type Chat = {
  /** Unique identifier for this chat. This number may have more than 32
   * significant bits and some programming languages may have difficulty/silent
   * defects in interpreting it. But it has at most 52 significant bits, so a
   * signed 64-bit integer or double-precision float type are safe for storing
   * this identifier. */
  id: number;

  /** Type of chat, can be either “private”, “group”, “supergroup”
   * or “channel” */
  type: 'private' | 'group' | 'supergroup' | 'channel';
  title?: string;

  /** Optional. Title, for supergroups, channels and group chats */
  username?: string;

  /** Optional. Username, for private chats, supergroups and channels if
   * available */
  first_name?: string;

  /** Optional. Last name of the other party in a private chat */
  last_name?: string;

  /** Optional. True, if the supergroup chat is a forum (has topics
   * enabled) */
  is_forum?: true;

  /** Optional. Chat photo. Returned only in getChat. */
  photo?: ChatPhoto;

  /** Optional. If non-empty, the list of all active chat usernames; for
   * private chats, supergroups and channels. Returned only in getChat. */
  active_usernames?: string[];

  /** Optional. Custom emoji identifier of emoji status of the other party
   * in a private chat. Returned only in getChat. */
  emoji_status_custom_emoji_id?: string;

  /** Optional. Bio of the other party in a private chat. Returned only
   * in getChat. */
  bio?: string;

  /** Optional. True, if privacy settings of the other party in the private
   * chat allows to use tg://user?id=<user_id> links only in chats with the
   * user. Returned only in getChat. */
  has_private_forwards?: true;

  /** Optional. True, if the privacy settings of the other party restrict
   * sending voice and video note messages in the private chat. Returned only
   * in getChat. */
  has_restricted_voice_and_video_messages?: true;

  /** Optional. True, if users need to join the supergroup before they can
   * send messages. Returned only in getChat. */
  join_to_send_messages?: true;

  /** Optional. True, if all users directly joining the supergroup need to
   * be approved by supergroup administrators. Returned only in getChat. */
  join_by_request?: true;

  /** Optional. Description, for groups, supergroups and channel chats.
   * Returned only in getChat. */
  description?: string;

  /** Optional. Primary invite link, for groups, supergroups and channel
   * chats. Returned only in getChat. */
  invite_link?: string;

  /** Optional. The most recent pinned message (by sending date). Returned
   * only in getChat. */
  pinned_message?: string;

  /** Optional. Default chat member permissions, for groups and supergroups.
   * Returned only in getChat. */
  permissions?: ChatPermissions;

  /** Optional. For supergroups, the minimum allowed delay between consecutive
   * messages sent by each unpriviledged user; in seconds. Returned only in
   * getChat. */
  slow_mode_delay?: number;

  /** Optional. The time after which all messages sent to the chat will be
   * automatically deleted; in seconds. Returned only in getChat. */
  message_auto_delete_time?: number;

  /** Optional. True, if aggressive anti-spam checks are enabled in the
   * supergroup. The field is only available to chat administrators. Returned
   * only in getChat. */
  has_aggressive_anti_spam_enabled?: true;

  /** Optional. True, if non-administrators can only get the list of bots and
   * administrators in the chat. Returned only in getChat. */
  has_hidden_members?: true;

  /** 	Optional. True, if messages from the chat can't be forwarded to other
   * chats. Returned only in getChat. */
  has_protected_content?: true;

  /** Optional. For supergroups, name of group sticker set. Returned only in
   * getChat. */
  sticker_set_name?: string;

  /** Optional. True, if the bot can change the group sticker set. Returned
   * only in getChat. */
  can_set_sticker_set?: true;

  /** Optional. Unique identifier for the linked chat, i.e. the discussion
   * group identifier for a channel and vice versa; for supergroups and
   * channel chats. This identifier may be greater than 32 bits and some
   * programming languages may have difficulty/silent defects in interpreting
   * it. But it is smaller than 52 bits, so a signed 64 bit integer or
   * double-precision float type are safe for storing this identifier.
   * Returned only in getChat. */
  linked_chat_id?: number;

  /** Optional. For supergroups, the location to which the supergroup is
   * connected. Returned only in getChat. */
  location?: ChatLocation;
};

/** This object represents a chat photo. */
export type ChatPhoto = {
  /** File identifier of small (160x160) chat photo. This file_id can be
   * used only for photo download and only for as long as the photo is not
   * changed. */
  small_file_id: string;

  /** Unique file identifier of small (160x160) chat photo, which is supposed
   * to be the same over time and for different bots. Can't be used to
   * download or reuse the file. */
  small_file_unique_id: string;

  /** File identifier of big (640x640) chat photo. This file_id can be used
   * only for photo download and only for as long as the photo is not
   * changed. */
  big_file_id: string;

  /** Unique file identifier of big (640x640) chat photo, which is supposed
   * to be the same over time and for different bots. Can't be used to
   * download or reuse the file. */
  big_file_unique_id: string;
};

/** Describes actions that a non-administrator user is allowed to take in a
 * chat. */
export type ChatPermissions = {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
  can_manage_topics?: boolean;
};

/** Represents a location to which a chat is connected. */
export type ChatLocation = {
  /** The location to which the supergroup is connected. Can't be a live
   * location. */
  location: Location;

  /** Location address; 1-64 characters, as defined by the chat owner */
  address: string;
};

/** This object contains information about one member of a chat. Currently, the
 *  following 6 types of chat members are supported:
 * ChatMemberOwner
 * ChatMemberAdministrator
 * ChatMemberMember
 * ChatMemberRestricted
 * ChatMemberLeft
 * ChatMemberBanned */
export type ChatMember = {};

/** Represents an invite link for a chat. */
export type ChatInviteLink = {
  /** The invite link. If the link was created by another chat administrator,
   * then the second part of the link will be replaced with “…”. */
  invite_link: string;

  creator: User;

  /** True, if users joining the chat via the link need to be approved by chat
   * administrators */
  creates_join_request: boolean;

  is_primary: boolean;
  is_revoked: boolean;
  name?: string;

  /** Optional. Point in time (Unix timestamp) when the link will expire or
   * has been expired */
  expire_date?: number;

  /** Optional. The maximum number of users that can be members of the chat
   * simultaneously after joining the chat via this invite link; 1-99999 */
  member_limit?: number;

  /** Optional. Number of pending join requests created using this link */
  pending_join_request_count?: number;
};
