import { Module } from '@nestjs/common';
import { PlanificationService } from './planification.service';
import { PlanificationController } from './planification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planification } from './entities/planification.entity';

@Module({
  controllers: [PlanificationController],
  providers: [PlanificationService],
  imports: [
    TypeOrmModule.forFeature([Planification])
  ]
})
export class PlanificationModule {}
