import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { UpdateDirectionDto } from './dto/update-direction.dto';
import { Direction } from './entities/direction.entity';

@Injectable()
export class DirectionService {
  
  private readonly logger = new Logger('Direction');
  
  constructor (
    @InjectRepository (Direction)
    private readonly directionRepository: Repository<Direction>
  ) {}
  async create(createDirectionDto: CreateDirectionDto) {
   
   try {
    const direction = this.directionRepository.create( createDirectionDto );
    await this.directionRepository.save(direction);
    return direction;
  } catch (error) {
    this.handleDBExceptions(error);
    }   
  }

  findAll() {
    return this.directionRepository.find({});
  }
  async findOne(id: number) {    
    const direction = await this.directionRepository.findOneBy({id});
    if (!direction) throw new NotFoundException ('La dirección no fue encontrada');
    return direction;
  }

  update(id: number, updateDirectionDto: UpdateDirectionDto) {
    return `This action updates a #${id} direction`;
  }

  async remove(id: number) {
    const direction = await this.findOne( id );
    await this.directionRepository.remove ( direction );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }
}
