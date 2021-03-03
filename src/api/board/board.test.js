const supertest = require('supertest');

const app = require('../../app');

describe('boards endpoint', () => {
  it('should respond with something', async () => {
    const response = await supertest(app)
      .get('/api/v1/boards/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
