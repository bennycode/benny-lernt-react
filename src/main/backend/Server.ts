import * as Hapi from 'hapi';

class Server {
  private server: Hapi.Server | undefined;

  constructor() {
  }

  private initRoutes(server: Hapi.Server): void {
    server.route({
      method: 'GET',
      path: '/',
      handler: () => ('Hello, World!')
    });

    server.route({
      method: 'GET',
      path: '/rest/animals',
      handler: () => {
        return ['Alligator', 'Bat', 'Chicken', 'Dolphin', 'Eagle', 'Flamingo', 'Guppy', 'Hedgehog', 'Iguana', 'Jaguar', 'Koala', 'Lion', 'Monkey', 'Narwhal', 'Owl', 'Peacock', 'Queen Bee', 'Rat', 'Sheep', 'Turtle', 'Unicorn', 'Vulture', 'Whale', 'Xantus', 'Yorkshire Terrier', 'Zebra'];
      }
    });
  }

  async start(port: number = 3000): Promise<void> {
    this.server = new Hapi.Server({port});
    this.initRoutes(this.server);
    await this.server.start();
  }

  async stop(): Promise<boolean> {
    if (this.server) {
      await this.server.stop();
      this.server = undefined;
    }

    return true;
  }
}

export default Server;
