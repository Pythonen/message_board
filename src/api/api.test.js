const supertest = require('supertest');

const app = require('../app');

describe('GET /api/v1', () => {
  it('should respond with something', async () => {
    const response = await supertest(app)
      .get('/api/v1')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
    expect(response.body).toBeDefined();
  });
});
