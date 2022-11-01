import { Module } from '@nestjs/common';
import { DirectionService } from './direction.service';
import { DirectionController } from './direction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direction } from './entities/direction.entity';

@Module({
  controllers: [DirectionController],
  providers: [DirectionService],
  imports: [TypeOrmModule.forFeature([Direction])]
})
export class DirectionModule {}
