import * as Boom from 'boom';
import * as Hapi from 'hapi';
import * as Inert from 'inert';
import * as Joi from 'joi';
import * as logdown from 'logdown';
import * as path from 'path';
import * as Vision from 'vision';
import AnimalService from './service/AnimalService';

class Server {
  private readonly logger = logdown('prefix:Server', {
    logger: console,
    markdown: false,
  });
  private server: Hapi.Server | undefined;

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
            index: true,
            path: '.',
            redirectToSlash: true,
          }
        }
      },
      {
        method: 'POST',
        path: '/rest/animals',
        options: {
          handler: async (request) => {
            const {name} = request.payload as { name: string };
            return AnimalService.save(name);
          },
          tags: ['api'],
          validate: {
            payload: {
              name: Joi.string().required(),
            },
          },
        },
      },
      {
        method: 'GET',
        path: '/rest/animals',
        options: {
          handler: async () => {
            return AnimalService.getAll();
          },
          tags: ['api']
        },
      },
      {
        method: 'GET',
        path: '/rest/animals/{id}',
        options: {
          handler: async (request) => {
            const animal = await AnimalService.getById(parseInt(request.params.id, 10));
            return (animal) ? animal : Boom.notFound();
          },
          tags: ['api'],
          validate: {
            params: {
              id: Joi.number().required(),
            },
          },
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
