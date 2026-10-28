import { Router } from 'express';
import { getHealth } from '../controllers/health.controller.js';
import { rocketRoutes } from './rocket.routes.js';

export const apiRoutes = Router();

apiRoutes.get('/health', getHealth);
apiRoutes.use('/rockets', rocketRoutes);
