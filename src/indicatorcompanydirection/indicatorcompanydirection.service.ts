import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIndicatorcompanydirectionDto } from './dto/create-indicatorcompanydirection.dto';
import { UpdateIndicatorcompanydirectionDto } from './dto/update-indicatorcompanydirection.dto';
import { Indicatorcompanydirection } from './entities/indicatorcompanydirection.entity';

@Injectable()
export class IndicatorcompanydirectionService {

  private readonly logger = new Logger('Indicatorcompanydirection');

  constructor (
    @InjectRepository (Indicatorcompanydirection)
    private readonly indicatorcompanydirectionRepository: Repository<Indicatorcompanydirection>
  ) {}

  async create(createIndicatorcompanydirectionDto: CreateIndicatorcompanydirectionDto) {
    
    try {
      const indicatorcompanydirection = this.indicatorcompanydirectionRepository.create (createIndicatorcompanydirectionDto);
      await this.indicatorcompanydirectionRepository.save(indicatorcompanydirection);
      return indicatorcompanydirection;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.indicatorcompanydirectionRepository.find({});
  }

  async findOne(id: number) {
    const indicatorcompanydirection = await this.indicatorcompanydirectionRepository.findOneBy({id});
    if (!indicatorcompanydirection) throw new NotFoundException ('La combinación mes-año-empresa-dirección-tipodeindicaro no fue encontrado');
    return indicatorcompanydirection;
  }

  update(id: number, updateIndicatorcompanydirectionDto: UpdateIndicatorcompanydirectionDto) {
    return `This action updates a #${id} indicatorcompanydirection`;
  }

  async remove(id: number) {
    const indicatorcompanydirection = await this.findOne( id );
    await this.indicatorcompanydirectionRepository.remove ( indicatorcompanydirection );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }
}
