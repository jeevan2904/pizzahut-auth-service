import app from './app.ts';
import { Config } from './config/index.ts';

const startServer = () => {
  const PORT = Number(Config.PORT) || 8080;
  try {
    app.listen(PORT, () =>
      console.log(`Auth Service listening on port: ${PORT}`),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
