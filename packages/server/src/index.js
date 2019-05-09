import app from './app';
import config from './config';
import logger from './logger';

app.listen(config.PORT, () => {
  logger.info('Hello Koa');
  Object.keys(config).map((key) => logger.info(`${key}: ${config[key]}`));
});
