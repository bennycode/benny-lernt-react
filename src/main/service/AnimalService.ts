import {getManager} from "typeorm";
import {Animal} from "../entity/Animal";

class AnimalService {
  public static getAll(): Promise<Animal[]> {
    const animalRepository = getManager().getRepository(Animal);
    return animalRepository.find();
  }

  public static getById(id: number): Promise<Animal | undefined> {
    const animalRepository = getManager().getRepository(Animal);
    return animalRepository.findOne(id);
  }
}

export default AnimalService;
