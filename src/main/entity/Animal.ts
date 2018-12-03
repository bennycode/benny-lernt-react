import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = '';
}
