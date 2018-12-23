import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import AnimalEntity from './AnimalEntity';

class AnimalResource {
  static get URL() {
    return {
      REST_ANIMALS: '/rest/animals',
    };
  }

  public static getAnimals(): Promise<AnimalEntity[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      params: {},
      url: AnimalResource.URL.REST_ANIMALS,
    };

    return axios.request<AnimalEntity[]>(config).then(function(response: AxiosResponse) {
      return response.data;
    });
  }
}

export default AnimalResource;
