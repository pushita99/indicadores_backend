import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Measurementunit } from 'src/measurementunit/entities/measurementunit.entity';
import { Repository } from 'typeorm';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { Indicator } from './entities/indicator.entity';

@Injectable()
export class IndicatorService {

  private readonly logger = new Logger('Indicator');
 
  constructor (
    @InjectRepository (Indicator)
    private readonly indicatorRepository: Repository<Indicator>
  ) {}

  async create(createIndicatorDto: CreateIndicatorDto) {
    
    try {
      const indicator = this.indicatorRepository.create( createIndicatorDto );
      await this.indicatorRepository.save(indicator);

      return indicator;
    } catch (error) {
      this.handleDBExceptions(error);
    } 
  }

  findAll() {
    return this.indicatorRepository.find({});
  }

  async findOne(id: number) {
    const indicator = await this.indicatorRepository.findOneBy({id});
    if (!indicator) throw new NotFoundException ('El tipo de indicador no fue encontrado');
    return indicator;
  }

  update(id: number, updateIndicatorDto: UpdateIndicatorDto) {
    return `This action updates a #${id} indicator`;
  }

  async remove(id: number) {
    const indicator = await this.findOne( id );
    await this.indicatorRepository.remove ( indicator );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }
}
