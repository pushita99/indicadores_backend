import { Module } from '@nestjs/common';
import { BinnacleService } from './binnacle.service';
import { BinnacleController } from './binnacle.controller';
import { Binnacle } from './entities/binnacle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BinnacleController],
  providers: [BinnacleService],
  imports: [
    TypeOrmModule.forFeature([Binnacle])
  ]
})
export class BinnacleModule {}
