import * as Hapi from 'hapi';
import * as Inert from 'inert';
import * as logdown from 'logdown';
import * as path from 'path';
import * as Vision from 'vision';

class Server {
  private readonly logger = logdown('prefix:Server', {
    logger: console,
    markdown: false,
  });
  private server: Hapi.Server | undefined;

  constructor() {
  }

  private initPlugins(server: Hapi.Server): Promise<void> {
    return server.register([
      {
        plugin: Inert,
      },
      {
        plugin: Vision,
      },
      {
        plugin: require('hapi-swagger'),
        options: {
          info: {
            title: 'API Documentation'
          }
        },
      },
    ]);
  }

  private initRoutes(server: Hapi.Server): void {
    server.route([
      {
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: '.',
            redirectToSlash: true,
            index: true,
          }
        }
      },
      {
        method: 'GET',
        path: '/rest/animals',
        options: {
          handler: () => {
            return ['Alligator', 'Bat', 'Chicken', 'Dolphin', 'Eagle', 'Flamingo', 'Guppy', 'Hedgehog', 'Iguana', 'Jaguar', 'Koala', 'Lion', 'Monkey', 'Narwhal', 'Owl', 'Peacock', 'Queen Bee', 'Rat', 'Sheep', 'Turtle', 'Unicorn', 'Vulture', 'Whale', 'Xantus', 'Yorkshire Terrier', 'Zebra'];
          },
          tags: ['api']
        },
      }
    ]);
  }

  async start(port: number = 3000): Promise<void> {
    this.server = new Hapi.Server({
      port,
      routes: {
        files: {
          relativeTo: path.join(__dirname, 'frontend')
        }
      }
    });
    await this.initPlugins(this.server);
    this.initRoutes(this.server);
    await this.server.start();
    this.logger.info(`Server running at: ${this.server.info.uri}`);
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
