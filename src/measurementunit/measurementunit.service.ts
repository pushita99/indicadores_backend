import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeasurementunitDto } from './dto/create-measurementunit.dto';
import { UpdateMeasurementunitDto } from './dto/update-measurementunit.dto';
import { Measurementunit } from './entities/measurementunit.entity';

@Injectable()
export class MeasurementunitService {
 
  private readonly logger = new Logger('Measurementunit');
  
  constructor (
    @InjectRepository (Measurementunit)
    private readonly measurementunitRepository: Repository<Measurementunit>
  ) {}

  async create(createMeasurementunitDto: CreateMeasurementunitDto) {
 
   try {
    const measurementunit = this.measurementunitRepository.create( createMeasurementunitDto );
    await this.measurementunitRepository.save(measurementunit);
    return measurementunit;
  } catch (error) {
    this.handleDBExceptions(error);
  } 
  }

  findAll() {
    return this.measurementunitRepository.find({});
  }

  async findOne(id: number) {
    const measurementunit = await this.measurementunitRepository.findOneBy({id});
    if (!measurementunit) throw new NotFoundException ('La unidad de medida no fue encontrada');
    return measurementunit;
  }

  update(id: number, updateMeasurementunitDto: UpdateMeasurementunitDto) {
    return `This action updates a #${id} measurementunit`;
  }

  async remove(id: number) {
    const measurementunit = await this.findOne( id );
    await this.measurementunitRepository.remove ( measurementunit );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }
}
