import { Module } from '@nestjs/common';
import { MeasurementunitService } from './measurementunit.service';
import { MeasurementunitController } from './measurementunit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Measurementunit } from './entities/measurementunit.entity';

@Module({
  controllers: [MeasurementunitController],
  providers: [MeasurementunitService],
  imports: [TypeOrmModule.forFeature([Measurementunit])]
})
export class MeasurementunitModule {}
