import {getManager} from 'typeorm';
import {Animal} from '../entity/Animal';

class AnimalService {
  public static getAll(): Promise<Animal[]> {
    const animalRepository = getManager().getRepository(Animal);
    return animalRepository.find();
  }

  public static getById(id: number): Promise<Animal | undefined> {
    const animalRepository = getManager().getRepository(Animal);
    return animalRepository.findOne(id);
  }

  public static save(name: string): Promise<Animal> {
    const postRepository = getManager().getRepository(Animal);
    const animal = postRepository.create({name});
    return postRepository.save(animal);
  }
}

export default AnimalService;
