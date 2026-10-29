import { randomUUID } from 'node:crypto';
import type {
  CreateRocketInput,
  Rocket,
  RocketRepository,
  UpdateRocketInput,
} from '../types/rocket.types.js';
import { logger } from '../utils/logger.js';

export class InMemoryRocketRepository implements RocketRepository {
  private readonly rockets = new Map<string, Rocket>();

  findAll(): Rocket[] {
    return [...this.rockets.values()];
  }

  findById(id: string): Rocket | undefined {
    return this.rockets.get(id);
  }

  create(input: CreateRocketInput): Rocket {
    const rocket: Rocket = { id: randomUUID(), ...input };
    this.rockets.set(rocket.id, rocket);
    logger.debug(`Repository: saved rocket ${rocket.id}`);
    return rocket;
  }

  update(id: string, input: UpdateRocketInput): Rocket | undefined {
    const existing = this.rockets.get(id);
    if (!existing) {
      return undefined;
    }

    const updated: Rocket = { ...existing, ...input };
    this.rockets.set(id, updated);
    logger.debug(`Repository: updated rocket ${id}`);
    return updated;
  }

  delete(id: string): boolean {
    const deleted = this.rockets.delete(id);
    if (deleted) {
      logger.debug(`Repository: deleted rocket ${id}`);
    }
    return deleted;
  }
}
