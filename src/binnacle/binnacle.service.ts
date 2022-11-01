import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBinnacleDto } from './dto/create-binnacle.dto';
import { UpdateBinnacleDto } from './dto/update-binnacle.dto';
import { Binnacle } from './entities/binnacle.entity';

@Injectable()
export class BinnacleService {
  constructor (
    @InjectRepository (Binnacle)
    private readonly binnacleRepository: Repository<Binnacle>
  ) {}
  async create(createBinnacleDto: CreateBinnacleDto) {
   const binnacle = this.binnacleRepository.create( createBinnacleDto );
   await this.binnacleRepository.save(binnacle);
   return binnacle;

  }

  findAll() {
    return this.binnacleRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} binnacle`;
  }

  update(id: number, updateBinnacleDto: UpdateBinnacleDto) {
    return `This action updates a #${id} binnacle`;
  }

  remove(id: number) {
    return `This action removes a #${id} binnacle`;
  }
}
