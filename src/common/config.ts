const port = +process.env.PORT || 3000;
const useCors = process.env.ENABLE_CORS === 'true' || false;
const trustProxy = process.env.TRUST_PROXY === 'true' || false;
const telegramBaseUrl =
  process.env.TELEGRAM_BASE_URL || 'https://api.telegram.org';
const telegramToken = process.env.TELEGRAM_TOKEN;
const baseUrl = process.env.BASE_URL;

export const config = {
  port,
  useCors,
  trustProxy,
  telegramBaseUrl,
  telegramToken,
  baseUrl,
};
