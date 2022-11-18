import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direction } from 'src/direction/entities/direction.entity';
import { Indicator } from 'src/indicator/entities/indicator.entity';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [TypeOrmModule.forFeature([Direction, Indicator])],
})
export class ReportsModule {}
