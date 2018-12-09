import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import AnimalController from './AnimalController';
import AnimalEntity from './AnimalEntity';

class AnimalResource {
  public static getAnimals(): Promise<AnimalEntity[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      params: {},
      url: AnimalController.URL.REST_ANIMALS,
    };

    return axios.request<AnimalEntity[]>(config).then(function (response: AxiosResponse) {
      return response.data;
    });
  }
}

export default AnimalResource;
