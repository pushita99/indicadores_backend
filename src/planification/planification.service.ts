import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanificationDto } from './dto/create-planification.dto';
import { UpdatePlanificationDto } from './dto/update-planification.dto';
import { Planification } from './entities/planification.entity';

@Injectable()
export class PlanificationService {

  private readonly logger = new Logger('Planification');

  constructor (
    @InjectRepository (Planification)
    private readonly planificationRepository: Repository<Planification>
  ) {}
  
  async create(createPlanificationDto: CreatePlanificationDto) {
 
    const {company,direction ,indicator, ...data} = createPlanificationDto;
   try {
    const planification = this.planificationRepository.create({
      ...data,
      indicator: {id: indicator},
      company:  {id:company},
      direction: {id: direction},
    });

    await this.planificationRepository.save(planification);
    return planification;
  } catch (error) {    
    this.handleDBExceptions(error);
    } 
  }

  findAll() {
    return this.planificationRepository.find({});
  }

  async findOne(id: number) {
    const planification = await this.planificationRepository.findOneBy({id});
    if (!planification) throw new NotFoundException ('La planificación no fue encontrada no fue encontrado');
    return planification;
  }

  update(id: number, updatePlanificationDto: UpdatePlanificationDto) {
    return `This action updates a #${id} planification`;
  }

  async remove(id: number) {
    const planification = await this.findOne( id );
    await this.planificationRepository.remove ( planification );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }
}
