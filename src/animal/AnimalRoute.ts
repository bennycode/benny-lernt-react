import * as Joi from 'joi';
import AnimalController from './AnimalController';

export const AnimalRoute = [
  {
    method: 'POST',
    path: '/rest/animals',
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
    path: '/rest/animals',
    options: {
      handler: AnimalController.get,
      tags: ['api']
    },
  },
  {
    method: 'GET',
    path: '/rest/animals/{id}',
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
