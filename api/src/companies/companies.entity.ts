import { Exclude } from 'class-transformer';
import { Mission } from 'src/missions/mission.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  COMPANY = 'company',
  FREELANCE = 'freelance',
  ADMIN = 'admin'
}

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  siret: string;

  @Column()
  sector: string;

  @Column()
  logo: string;

  @OneToMany(() => User, user => user.company)
  users: User[];

  @OneToMany(() => Mission, mission => mission.company)
  missions: Mission[];

}