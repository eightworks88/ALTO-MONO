import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Company } from 'src/companies/companies.entity';
import { Freelance } from 'src/freelance/freelance.entity';

export enum MissionStatus {
  PROCESSING = 'processing',
  REVIEW = 'review',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum UrgencyLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum LocationType {
  REMOTE = 'remote',
  HYBRID = 'hybrid',
  ONSITE = 'onsite',
}

@Entity('missions')
export class Mission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  duration: string;

  @Column({ nullable: true })
  skills: string;

  @Column({
    type: 'enum',
    enum: UrgencyLevel,
    default: UrgencyLevel.MEDIUM,
  })
  urgency: UrgencyLevel;

  @Column({
    type: 'enum',
    enum: LocationType,
    default: LocationType.REMOTE,
  })
  location: LocationType;

  @Column({
    type: 'enum',
    enum: MissionStatus,
    default: MissionStatus.PROCESSING,
  })
  status: MissionStatus;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @ManyToOne(() => Company, (company) => company.missions)
  company: Company;

  @ManyToOne(() => Freelance, (freelance) => freelance.missions, { nullable: true })
  selectedFreelance: Freelance;
}
