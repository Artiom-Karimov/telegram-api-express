/** default port for http server */
const port = +process.env.PORT || 3000;

/** set 'true' if you need to allow CORS */
const useCors = process.env.ENABLE_CORS === 'true' || false;

/** set 'true' if you need to allow proxy */
const trustProxy = process.env.TRUST_PROXY === 'true' || false;

/** you probably don't need to change this */
const telegramBaseUrl =
  process.env.TELEGRAM_BASE_URL || 'https://api.telegram.org';

/** secret token from BotFather */
const telegramToken = process.env.TELEGRAM_TOKEN;

/** set this to your host if it is available from the internet */
const baseUrl = process.env.BASE_URL;

/** used for reset-hook and delete-hook endpoints */
const adminPass = process.env.PASSWORD || 'admin';

export const config = {
  port,
  useCors,
  trustProxy,
  telegramBaseUrl,
  telegramToken,
  baseUrl,
  adminPass,
};
