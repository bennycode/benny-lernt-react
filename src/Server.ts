import * as Hapi from 'hapi';
import * as Inert from 'inert';
import * as logdown from 'logdown';
import * as path from 'path';
import * as Vision from 'vision';
import AnimalController from './animal/AnimalController';
import RouteController from './server/RouteController';

class Server {
  private readonly controllers: RouteController[] = [];

  private readonly logger = logdown('prefix:Server', {
    logger: console,
    markdown: false,
  });
  private server: Hapi.Server | undefined;

  constructor() {
    this.controllers.push(new AnimalController());
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
        options: {
          info: {
            title: 'API Documentation',
          },
        },
        plugin: require('hapi-swagger'),
      },
    ]);
  }

  private initRoutes(server: Hapi.Server): void {
    let routes: Hapi.ServerRoute[] = [
      {
        handler: {
          directory: {
            index: true,
            path: '.',
            redirectToSlash: true,
          },
        },
        method: 'GET',
        path: '/{param*}',
      },
    ];

    this.controllers.forEach(controller => (routes = routes.concat(controller.getRoutes())));

    server.route(routes);
  }

  async start(port: number = 3000): Promise<void> {
    this.server = new Hapi.Server({
      port,
      routes: {
        files: {
          relativeTo: path.join(__dirname, 'view'),
        },
      },
    });
    await this.initPlugins(this.server);
    this.initRoutes(this.server);
    await this.server.start();
    this.logger.info(`Server running at "${this.server.info.uri}".`);
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
