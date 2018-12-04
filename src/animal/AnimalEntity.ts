import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class AnimalEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = '';
}

export default AnimalEntity;
