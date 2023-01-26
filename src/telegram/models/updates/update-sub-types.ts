/** This object represents an incoming inline query.
 * When the user sends an empty query, your bot could
 * return some default or trending results. */
export type InlineQuery = {};

/** Represents a result of an inline query that was
 * chosen by the user and sent to their chat partner. */
export type ChosenInlineResult = {};

/** This object represents an incoming callback query from
 * a callback button in an inline keyboard. If the button
 * that originated the query was attached to a message sent
 * by the bot, the field message will be present. If the
 * button was attached to a message sent via the bot
 * (in inline mode), the field inline_message_id will be present.
 * Exactly one of the fields data or game_short_name will be present. */
export type CallbackQuery = {};

/** This object contains information about an incoming shipping query. */
export type ShippingQuery = {};

/** This object contains information about an incoming pre-checkout query. */
export type PreCheckoutQuery = {};

/** This object represents changes in the status of a chat member. */
export type ChatMemberUpdated = {};

/** Represents a join request sent to a chat. */
export type ChatJoinRequest = {};
