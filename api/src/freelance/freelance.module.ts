import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { UsersModule } from '../users/users.module';
import { FreelanceService } from './freelance.service';
import { FreelanceController } from './freelance.controller';

@Module({
  imports: [UsersModule],
  controllers: [ProfileController, FreelanceController],
  providers: [FreelanceService],
})
export class FreelanceModule {}
