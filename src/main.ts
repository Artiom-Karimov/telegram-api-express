import { config } from 'dotenv';
config();
import { CompositionRoot } from './composition-root';

const root = new CompositionRoot();
const handler = root.getErrorHandler();
handler.bindUncaught();

const run = async () => {
  const app = root.getApp();
  app.start();

  const setup = root.getHookSetup();
  await setup.setHook();
};

run();
