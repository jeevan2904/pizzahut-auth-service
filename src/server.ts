import app from './app.ts';
import { Config } from './config/index.ts';
import logger from './config/logger.ts';

const startServer = () => {
  const PORT = Number(Config.PORT) || 8080;
  try {
    app.listen(PORT, () => {
      logger.info('Auth Service listening on port: ', { port: PORT });
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
