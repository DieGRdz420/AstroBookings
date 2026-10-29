import type { Request, Response } from 'express';
import { InMemoryRocketRepository } from '../repositories/rocket.repository.js';
import {
  RocketNotFoundError,
  RocketService,
  RocketValidationError,
} from '../services/rocket.service.js';
import type { CreateRocketInput, UpdateRocketInput } from '../types/rocket.types.js';
import { logger } from '../utils/logger.js';

const rocketService = new RocketService(new InMemoryRocketRepository());

const getId = (req: Request): string => String(req.params.id);

const handleError = (res: Response, error: unknown): void => {
  if (error instanceof RocketValidationError) {
    logger.warn(`Validation failed: ${error.message}`);
    res.status(400).json({ error: error.message });
    return;
  }
  if (error instanceof RocketNotFoundError) {
    logger.warn(error.message);
    res.status(404).json({ error: error.message });
    return;
  }
  throw error;
};

export const getRockets = (_req: Request, res: Response): void => {
  logger.info('Listing all rockets');
  res.json(rocketService.getAll());
};

export const getRocketById = (req: Request, res: Response): void => {
  try {
    logger.info(`Fetching rocket: ${getId(req)}`);
    res.json(rocketService.getById(getId(req)));
  } catch (error) {
    handleError(res, error);
  }
};

export const createRocket = (req: Request, res: Response): void => {
  try {
    const input = req.body as CreateRocketInput;
    logger.info(`Creating rocket: ${input.name}`);
    const rocket = rocketService.create(input);
    logger.info(`Rocket created: ${rocket.id}`);
    res.status(201).json(rocket);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateRocket = (req: Request, res: Response): void => {
  try {
    const input = req.body as UpdateRocketInput;
    logger.info(`Updating rocket: ${getId(req)}`);
    res.json(rocketService.update(getId(req), input));
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteRocket = (req: Request, res: Response): void => {
  try {
    logger.info(`Deleting rocket: ${getId(req)}`);
    rocketService.delete(getId(req));
    res.json({ message: 'Rocket deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};
