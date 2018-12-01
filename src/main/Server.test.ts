import Server from './Server';
import request = require('supertest');

describe('Server', () => {
  it('serves a root site', async (done) => {
    const server = new Server();
    await server.start(3001);
    request(server['server']!.listener)
      .get('/')
      .expect(200, (error) => {
        if (error) {
          done.fail(error);
        } else {
          done();
        }
      });
  });
});
