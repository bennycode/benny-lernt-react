import * as Joi from 'joi';
import AnimalController from './AnimalController';
import AnimalResource from './AnimalResource';

export const AnimalRoute = [
  {
    method: 'POST',
    path: AnimalResource.URL.REST_ANIMALS,
    options: {
      handler: AnimalController.post,
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
      handler: AnimalController.get,
      tags: ['api']
    },
  },
  {
    method: 'GET',
    path: `${AnimalResource.URL.REST_ANIMALS}/{id}`,
    options: {
      handler: AnimalController.getById,
      tags: ['api'],
      validate: {
        params: {
          id: Joi.number().required(),
        },
      },
    },
  }
];
