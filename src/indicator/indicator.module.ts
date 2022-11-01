import { Module } from '@nestjs/common';
import { IndicatorService } from './indicator.service';
import { IndicatorController } from './indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicator } from './entities/indicator.entity';

@Module({
  controllers: [IndicatorController],
  providers: [IndicatorService],
  imports: [
    TypeOrmModule.forFeature([Indicator])
  ]
})
export class IndicatorModule {}
