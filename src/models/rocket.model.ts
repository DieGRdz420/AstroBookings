import { randomUUID } from 'node:crypto';
import type {
  CreateRocketInput,
  Rocket,
  RocketRepository,
  UpdateRocketInput,
} from '../types/rocket.types.js';

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
    return rocket;
  }

  update(id: string, input: UpdateRocketInput): Rocket | undefined {
    const existing = this.rockets.get(id);
    if (!existing) {
      return undefined;
    }
    const updated: Rocket = { ...existing, ...input };
    this.rockets.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.rockets.delete(id);
  }
}
