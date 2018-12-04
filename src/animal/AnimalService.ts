import {getManager} from 'typeorm';
import AnimalEntity from './AnimalEntity';

class AnimalService {
  public static getAll(): Promise<AnimalEntity[]> {
    const animalRepository = getManager().getRepository(AnimalEntity);
    return animalRepository.find();
  }

  public static getById(id: number): Promise<AnimalEntity | undefined> {
    const animalRepository = getManager().getRepository(AnimalEntity);
    return animalRepository.findOne(id);
  }

  public static save(name: string): Promise<AnimalEntity> {
    const postRepository = getManager().getRepository(AnimalEntity);
    const animal = postRepository.create({name});
    return postRepository.save(animal);
  }
}

export default AnimalService;
