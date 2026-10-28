import type { Request, Response } from 'express';
import { InMemoryRocketRepository } from '../models/rocket.model.js';
import {
  RocketNotFoundError,
  RocketService,
  RocketValidationError,
} from '../services/rocket.service.js';
import type { CreateRocketInput, UpdateRocketInput } from '../types/rocket.types.js';

const rocketService = new RocketService(new InMemoryRocketRepository());

const getId = (req: Request): string => String(req.params.id);

const handleError = (res: Response, error: unknown): void => {
  if (error instanceof RocketValidationError) {
    res.status(400).json({ error: error.message });
    return;
  }
  if (error instanceof RocketNotFoundError) {
    res.status(404).json({ error: error.message });
    return;
  }
  throw error;
};

export const getRockets = (_req: Request, res: Response): void => {
  res.json(rocketService.getAll());
};

export const getRocketById = (req: Request, res: Response): void => {
  try {
    res.json(rocketService.getById(getId(req)));
  } catch (error) {
    handleError(res, error);
  }
};

export const createRocket = (req: Request, res: Response): void => {
  try {
    const input = req.body as CreateRocketInput;
    res.status(201).json(rocketService.create(input));
  } catch (error) {
    handleError(res, error);
  }
};

export const updateRocket = (req: Request, res: Response): void => {
  try {
    const input = req.body as UpdateRocketInput;
    res.json(rocketService.update(getId(req), input));
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteRocket = (req: Request, res: Response): void => {
  try {
    rocketService.delete(getId(req));
    res.json({ message: 'Rocket deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};
