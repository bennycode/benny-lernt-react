import * as Boom from 'boom';
import * as Hapi from 'hapi';
import * as Joi from 'joi';
import AnimalResource from './AnimalResource';
import AnimalService from './AnimalService';
import RouteController from '../server/RouteController';
import {ServerRoute} from 'hapi';

class AnimalController implements RouteController {
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

  getRoutes(): ServerRoute[] {
    return [
      {
        method: 'POST',
        path: AnimalResource.URL.REST_ANIMALS,
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
        path: AnimalResource.URL.REST_ANIMALS,
        options: {
          handler: this.get,
          tags: ['api']
        },
      },
      {
        method: 'GET',
        path: `${AnimalResource.URL.REST_ANIMALS}/{id}`,
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
