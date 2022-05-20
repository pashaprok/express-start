import 'express-async-errors';
import { appConfig } from './config/app.config';

import app from './app';
import { AppDataSource } from './data-source';
import { appWorkLogger } from './utils/logger';

AppDataSource.initialize()
  .then(async () => {
    app.listen(appConfig.port, () => {
      appWorkLogger.info(`App running on port ${appConfig.port}...`);
    });
  })
  .catch((error) => appWorkLogger.error('Error: ', error));
