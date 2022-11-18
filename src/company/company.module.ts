import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Direction } from 'src/direction/entities/direction.entity';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [TypeOrmModule.forFeature([Company, Direction])]
})
export class CompanyModule {}
