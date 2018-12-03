import {createConnection} from 'typeorm';
import Server from './Server';

(async () => {
  await createConnection();
  const server = new Server();
  server.start();
})();
