import { Router } from 'express';
import { getHealth } from '../controllers/health.controller.js';
import rocketRoutes from './rocket.routes.js';

const router = Router();

router.get('/health', getHealth);
router.use('/rockets', rocketRoutes);

export default router;
