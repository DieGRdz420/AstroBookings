import { Router } from 'express';
import {
  createRocket,
  deleteRocket,
  getRocketById,
  getRockets,
  updateRocket,
} from '../controllers/rocket.controller.js';

export const rocketRoutes = Router();

rocketRoutes.get('/', getRockets);
rocketRoutes.get('/:id', getRocketById);
rocketRoutes.post('/', createRocket);
rocketRoutes.put('/:id', updateRocket);
rocketRoutes.delete('/:id', deleteRocket);
