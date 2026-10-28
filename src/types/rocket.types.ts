export type RocketRange = 'suborbital' | 'orbital' | 'moon' | 'mars';

export type Rocket = {
  id: string;
  name: string;
  range: RocketRange;
  capacity: number;
};

export type CreateRocketInput = Omit<Rocket, 'id'>;

export type UpdateRocketInput = Partial<CreateRocketInput>;

export interface RocketRepository {
  findAll(): Rocket[];
  findById(id: string): Rocket | undefined;
  create(input: CreateRocketInput): Rocket;
  update(id: string, input: UpdateRocketInput): Rocket | undefined;
  delete(id: string): boolean;
}
