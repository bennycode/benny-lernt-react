import Server from './Server';
import * as http from "http";
import request = require('supertest');

const failOnError = (error: Error) => (error ? fail(error) : undefined);

describe('Server', () => {
  describe('Routing', () => {
    let server: Server;
    let listener: http.Server;

    beforeEach(async function () {
      server = new Server();
      await server.start(3001);
      listener = server['server']!.listener;
    });

    afterEach(async () => {
      if (server) {
        await server.stop();
      }
    });

    it('serves a root site', async () => {
      request(listener)
        .get('/')
        .expect(200, failOnError);
    });

    it('serves an API documentation', async () => {
      request(listener)
        .get('/documentation')
        .expect(200, failOnError);
    });
  });
});
