import { User } from '../../users/entities/user.entity.js';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,} from 'typeorm';
import type { Relation } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @OneToOne(() => User, (user) => user.persona)
  @JoinColumn()
  user: Relation<User>;
}