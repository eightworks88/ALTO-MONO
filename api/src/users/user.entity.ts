import { Exclude } from 'class-transformer';
import { Company } from 'src/companies/companies.entity';
import { Freelance } from 'src/freelance/freelance.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  COMPANY = 'company',
  FREELANCE = 'freelance',
  ADMIN = 'admin'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @ManyToOne(() => Company, company => company.users, { nullable: true, onDelete: 'SET NULL' })
  company: Company;

  @OneToOne(() => Freelance, freelance => freelance.user, { nullable: true, onDelete: 'SET NULL' })
  freelance: Freelance;

}
