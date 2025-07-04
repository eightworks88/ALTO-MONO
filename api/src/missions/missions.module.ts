import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from './mission.entity';
import { MissionsService } from './missions.service';
import {
  CompanyMissionsController,
  FreelanceMissionsController,
} from './missions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])],
  controllers: [CompanyMissionsController, FreelanceMissionsController],
  providers: [MissionsService],
  exports: [MissionsService],
})
export class MissionsModule {}
