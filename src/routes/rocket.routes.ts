import { Router } from 'express';
import {
  createRocket,
  deleteRocket,
  getRocketById,
  getRockets,
  updateRocket,
} from '../controllers/rocket.controller.js';

const router = Router();

router.get('/', getRockets);
router.get('/:id', getRocketById);
router.post('/', createRocket);
router.put('/:id', updateRocket);
router.delete('/:id', deleteRocket);

export default router;
