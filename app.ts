import express from 'express';
import expressWinston from 'express-winston';
import bodyParser from 'body-parser';

import Router from './src/controller/router';
import { expressErrorHandler } from './src/utils/errorHandler';
import { expressWinstonConfig } from './src/utils/logger';

export const expressApp = () => {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());

  app.use('/', Router);

  app.use(expressWinston.errorLogger(expressWinstonConfig('error')));
  app.use(expressErrorHandler);

  app.listen(port, () => console.log(`App listening on port: ${port}`));
};

export default { expressApp };
