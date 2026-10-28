import request from 'supertest';
import app from '../src/app.js';
import type { Rocket } from '../src/types/rocket.types.js';

describe('Rocket Management API - Acceptance Criteria (specs/rockets.spec.md)', () => {
  describe('AC1: unique identifier per rocket', () => {
    it('assigns a unique id to each registered rocket', async () => {
      const first = await request(app)
        .post('/api/rockets')
        .send({ name: 'Falcon 9', range: 'orbital', capacity: 7 });
      const second = await request(app)
        .post('/api/rockets')
        .send({ name: 'Starship', range: 'mars', capacity: 10 });

      expect(first.status).toBe(201);
      expect(second.status).toBe(201);
      expect(first.body.id).toBeDefined();
      expect(second.body.id).toBeDefined();
      expect(first.body.id).not.toBe(second.body.id);
    });
  });

  describe('AC2: valid rocket creation', () => {
    it('responds 201 with the created rocket when a valid rocket is created', async () => {
      const response = await request(app)
        .post('/api/rockets')
        .send({ name: 'New Shepard', range: 'suborbital', capacity: 6 });

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        name: 'New Shepard',
        range: 'suborbital',
        capacity: 6,
      });
      expect(response.body.id).toBeDefined();
    });
  });

  describe('AC3: capacity validation', () => {
    it.each([0, 11, -1, 2.5, 'ten'])(
      'responds 400 with an error message when capacity is %s',
      async (capacity) => {
        const response = await request(app)
          .post('/api/rockets')
          .send({ name: 'Bad Capacity', range: 'orbital', capacity });

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
      }
    );

    it('responds 400 when updating with an invalid capacity', async () => {
      const created = await request(app)
        .post('/api/rockets')
        .send({ name: 'Vostok', range: 'orbital', capacity: 1 });

      const response = await request(app)
        .put(`/api/rockets/${created.body.id}`)
        .send({ capacity: 99 });

      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('AC4: range validation', () => {
    it('responds 400 with an error message when range is invalid', async () => {
      const response = await request(app)
        .post('/api/rockets')
        .send({ name: 'Bad Range', range: 'pluto', capacity: 5 });

      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });

    it('responds 400 when updating with an invalid range', async () => {
      const created = await request(app)
        .post('/api/rockets')
        .send({ name: 'Soyuz', range: 'orbital', capacity: 3 });

      const response = await request(app)
        .put(`/api/rockets/${created.body.id}`)
        .send({ range: 'jupiter' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('AC5: name validation', () => {
    it.each(['', '   '])(
      'responds 400 with an error message when name is "%s"',
      async (name) => {
        const response = await request(app)
          .post('/api/rockets')
          .send({ name, range: 'moon', capacity: 4 });

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
      }
    );

    it('responds 400 when name is missing', async () => {
      const response = await request(app)
        .post('/api/rockets')
        .send({ range: 'moon', capacity: 4 });

      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('AC6: list all rockets', () => {
    it('responds 200 with the complete list of rockets', async () => {
      const response = await request(app).get('/api/rockets');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('AC7: get rocket by id', () => {
    it('responds 200 with the rocket data when the id exists', async () => {
      const created = await request(app)
        .post('/api/rockets')
        .send({ name: 'Ariane 6', range: 'orbital', capacity: 4 });

      const response = await request(app).get(`/api/rockets/${created.body.id}`);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        id: created.body.id,
        name: 'Ariane 6',
        range: 'orbital',
        capacity: 4,
      });
    });
  });

  describe('AC8: non-existent identifier', () => {
    it('responds 404 when getting a non-existent rocket', async () => {
      const response = await request(app).get('/api/rockets/does-not-exist');

      expect(response.status).toBe(404);
      expect(response.body.error).toBeDefined();
    });

    it('responds 404 when updating a non-existent rocket', async () => {
      const response = await request(app)
        .put('/api/rockets/does-not-exist')
        .send({ capacity: 5 });

      expect(response.status).toBe(404);
      expect(response.body.error).toBeDefined();
    });

    it('responds 404 when deleting a non-existent rocket', async () => {
      const response = await request(app).delete('/api/rockets/does-not-exist');

      expect(response.status).toBe(404);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('AC9: update and delete existing rockets', () => {
    it('updates name, range and capacity of an existing rocket with 200', async () => {
      const created = await request(app)
        .post('/api/rockets')
        .send({ name: 'Long March', range: 'orbital', capacity: 3 });

      const response = await request(app)
        .put(`/api/rockets/${created.body.id}`)
        .send({ name: 'Long March 5', range: 'moon', capacity: 6 });

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        id: created.body.id,
        name: 'Long March 5',
        range: 'moon',
        capacity: 6,
      });
    });

    it('deletes an existing rocket with 200 and it is no longer available', async () => {
      const created = await request(app)
        .post('/api/rockets')
        .send({ name: 'Vulcan', range: 'orbital', capacity: 5 });
      const id = (created.body as Rocket).id;

      const deleted = await request(app).delete(`/api/rockets/${id}`);
      expect(deleted.status).toBe(200);

      const afterDelete = await request(app).get(`/api/rockets/${id}`);
      expect(afterDelete.status).toBe(404);
    });
  });
});
