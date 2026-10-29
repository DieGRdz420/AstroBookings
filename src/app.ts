import express from 'express';
import { apiRoutes } from './routes/index.js';
import { errorHandler } from './middlewares/error-handler.js';
import { requestLogger } from './middlewares/request-logger.js';

export const app = express();

app.use(express.json());

app.use(requestLogger);

app.use('/api', apiRoutes);

app.use(errorHandler);
