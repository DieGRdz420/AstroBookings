import type {
  CreateRocketInput,
  Rocket,
  RocketRange,
  RocketRepository,
  UpdateRocketInput,
} from '../types/rocket.types.js';
import { logger } from '../utils/logger.js';

const VALID_RANGES: readonly RocketRange[] = ['suborbital', 'orbital', 'moon', 'mars'];
const MIN_CAPACITY = 1;
const MAX_CAPACITY = 10;

export class RocketValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RocketValidationError';
  }
}

export class RocketNotFoundError extends Error {
  constructor(id: string) {
    super(`Rocket with id '${id}' not found`);
    this.name = 'RocketNotFoundError';
  }
}

export class RocketService {
  constructor(private readonly repository: RocketRepository) {}

  getAll(): Rocket[] {
    return this.repository.findAll();
  }

  getById(id: string): Rocket {
    const rocket = this.repository.findById(id);
    if (!rocket) {
      throw new RocketNotFoundError(id);
    }
    return rocket;
  }

  create(input: CreateRocketInput): Rocket {
    this.validateName(input.name);
    this.validateRange(input.range);
    this.validateCapacity(input.capacity);
    const rocket = this.repository.create(input);
    logger.info(`Rocket registered: ${rocket.name} (${rocket.id})`);
    return rocket;
  }

  update(id: string, input: UpdateRocketInput): Rocket {
    if (input.name !== undefined) {
      this.validateName(input.name);
    }
    if (input.range !== undefined) {
      this.validateRange(input.range);
    }
    if (input.capacity !== undefined) {
      this.validateCapacity(input.capacity);
    }
    const updated = this.repository.update(id, input);
    if (!updated) {
      throw new RocketNotFoundError(id);
    }
    logger.info(`Rocket updated: ${id}`);
    return updated;
  }

  delete(id: string): void {
    if (!this.repository.delete(id)) {
      throw new RocketNotFoundError(id);
    }
    logger.info(`Rocket deleted: ${id}`);
  }

  private validateName(name: string): void {
    if (typeof name !== 'string' || name.trim().length === 0) {
      logger.warn('Validation failed: rocket name is required');
      throw new RocketValidationError('Rocket name is required and must be a non-empty string');
    }
  }

  private validateRange(range: RocketRange): void {
    if (!VALID_RANGES.includes(range)) {
      logger.warn(`Validation failed: invalid range '${range}'`);
      throw new RocketValidationError(
        `Rocket range must be one of: ${VALID_RANGES.join(', ')}`
      );
    }
  }

  private validateCapacity(capacity: number): void {
    if (
      typeof capacity !== 'number' ||
      !Number.isInteger(capacity) ||
      capacity < MIN_CAPACITY ||
      capacity > MAX_CAPACITY
    ) {
      logger.warn(`Validation failed: invalid capacity '${capacity}'`);
      throw new RocketValidationError(
        `Rocket capacity must be an integer between ${MIN_CAPACITY} and ${MAX_CAPACITY}`
      );
    }
  }
}
