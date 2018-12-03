import Server from './Server';
import * as http from "http";
import request = require('supertest');

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

    it('serves a root site', (done) => {
      request(listener)
        .get('/')
        .expect(200, (error) => {
          if (error) {
            done.fail(error);
          } else {
            done();
          }
        });
    });

    it('serves an API documentation', (done) => {
      request(listener)
        .get('/documentation')
        .expect(220, (error) => {
          if (error) {
            done.fail(error);
          } else {
            done();
          }
        });
    });
  });
});
