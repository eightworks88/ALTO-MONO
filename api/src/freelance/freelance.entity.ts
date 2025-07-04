import { Mission } from "src/missions/mission.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('freelance')
export class Freelance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    title: string;

    @Column({ type: 'text', nullable: true })
    bio: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    rate: number;

    @Column('simple-array', { nullable: true })
    skills: string[];

    @Column({ nullable: true })
    experience: number;

    @Column({ nullable: true })
    availability: string;

    @Column({ nullable: true })
    location: string;

    @Column({ default: true })
    isAvailable: boolean;

    @Column({ nullable: true })
    profilePicture: string;

    @OneToOne(() => User, user => user.freelance)
    user: Freelance;

    @OneToMany(() => Mission, mission => mission.selectedFreelance)
    missions: Mission[];
}