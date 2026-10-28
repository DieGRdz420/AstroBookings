import express from 'express';
import { apiRoutes } from './routes/index.js';
import { errorHandler } from './middlewares/error-handler.js';

export const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

app.use(errorHandler);
