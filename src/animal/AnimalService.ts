import {Repository, getManager} from 'typeorm';
import AnimalEntity from './AnimalEntity';

class AnimalService {
  private readonly animalRepository: Repository<AnimalEntity>;

  constructor() {
    this.animalRepository = getManager().getRepository(AnimalEntity);
  }

  public getAll(): Promise<AnimalEntity[]> {
    return this.animalRepository.find();
  }

  public getById(id: number): Promise<AnimalEntity | undefined> {
    return this.animalRepository.findOne(id);
  }

  public save(attributes: Object): Promise<AnimalEntity> {
    const animal = this.animalRepository.create(attributes);
    return this.animalRepository.save(animal);
  }
}

export default AnimalService;
