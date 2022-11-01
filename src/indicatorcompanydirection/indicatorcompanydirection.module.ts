import { Module } from '@nestjs/common';
import { IndicatorcompanydirectionService } from './indicatorcompanydirection.service';
import { IndicatorcompanydirectionController } from './indicatorcompanydirection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicatorcompanydirection } from './entities/indicatorcompanydirection.entity';

@Module({
  controllers: [IndicatorcompanydirectionController],
  providers: [IndicatorcompanydirectionService],
  imports : [TypeOrmModule.forFeature([Indicatorcompanydirection])]
})
export class IndicatorcompanydirectionModule {}
