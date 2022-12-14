import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Direction } from 'src/direction/entities/direction.entity';
import { Repository } from 'typeorm';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { Indicator } from './entities/indicator.entity';

@Injectable()
export class IndicatorService {

  private readonly logger = new Logger('Indicator');
 
  constructor (
    @InjectRepository (Indicator)
    private readonly indicatorRepository: Repository<Indicator>,
    @InjectRepository(Direction) private directionRepository: Repository<Direction>
  ) {}

  async create(createIndicatorDto: CreateIndicatorDto) {
    
    const {measurementunit, ...data} = createIndicatorDto;
    try {
      const indicator = this.indicatorRepository.create({
        ...data,
        measurementunit:  {id: measurementunit},
        
      });

      await this.indicatorRepository.save(indicator);
      return indicator;
    } catch (error) {
      this.handleDBExceptions(error);
    } 
  }
  
  async addDirectionToIndicator(id: number, directionId: number) {
    const indicator = await this.indicatorRepository.findOne({
      where: {id},      
      relations: {
        directions: true,
      }
    });
    const direction = await this.directionRepository.findOneBy({id:directionId});
    indicator.directions.push(direction);
    return this.indicatorRepository.save(indicator);
  }

  findAll() {
    return this.indicatorRepository.find({});
  }

  async findOne(id: number) {
    const indicator = await this.indicatorRepository.findOneBy({id});
    if (!indicator) throw new NotFoundException ('El tipo de indicador no fue encontrado');
    return indicator;
  }
  
  async findByDirection(direction: number) {    
    const indicator = await this.indicatorRepository.find({
      relations: {
        directions: true,
      }
    });
    if (!indicator) throw new NotFoundException ('El indicador no fue encontrado');
    return indicator.filter(c=> {
      if(c.directions){
        const directions = c.directions.map(d => d.id);
      return directions.includes(direction);
      }else {
        return false
      }
      
    });
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
