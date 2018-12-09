import * as Boom from 'boom';
import * as Hapi from 'hapi';
import * as Joi from 'joi';
import AnimalService from './AnimalService';
import RouteController from '../server/RouteController';
import {ServerRoute} from 'hapi';

class AnimalController implements RouteController {
  static get URL(): {[key: string]: string} {
    return {
      REST_ANIMALS: '/rest/animals',
    };
  }

  public async get() {
    return (new AnimalService).getAll();
  }

  public async getById(request: Hapi.Request) {
    const animal = await (new AnimalService).getById(parseInt(request.params.id, 10));
    return (animal) ? animal : Boom.notFound();
  }

  public async post(request: Hapi.Request) {
    const {name} = request.payload as { name: string };
    return (new AnimalService).save({name});
  }

  public getRoutes(): ServerRoute[] {
    return [
      {
        method: 'POST',
        path: AnimalController.URL.REST_ANIMALS,
        options: {
          handler: this.post,
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
        path: AnimalController.URL.REST_ANIMALS,
        options: {
          handler: this.get,
          tags: ['api']
        },
      },
      {
        method: 'GET',
        path: `${AnimalController.URL.REST_ANIMALS}/{id}`,
        options: {
          handler: this.getById,
          tags: ['api'],
          validate: {
            params: {
              id: Joi.number().required(),
            },
          },
        },
      }
    ];
  }
}

export default AnimalController;
