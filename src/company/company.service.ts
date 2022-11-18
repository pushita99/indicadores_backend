import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Direction } from 'src/direction/entities/direction.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {

  private readonly logger = new Logger('Company');

  constructor (
    @InjectRepository (Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Direction) private directionRepository: Repository<Direction>

  ) {}

  async create(createCompanyDto: CreateCompanyDto) {    
    try {
      const company =  this.companyRepository.create(createCompanyDto)
      await this.companyRepository.save(company);
      return company;
    } catch (error) {
      this.handleDBExceptions(error);
      }    
  }
  
  async addDirectionToCompany(id: number, directionId: number) {
    const company = await this.companyRepository.findOne({
      where: {id},      
      relations: {
        directions: true,
      }
    });
    const direction = await this.directionRepository.findOneBy({id:directionId});
    company.directions.push(direction);
    return this.companyRepository.save(company);
  }

  findAll() {
    return this.companyRepository.find({});
  }

  async findOne(id: number) {    
    const company = await this.companyRepository.findOneBy({id});
    if (!company) throw new NotFoundException ('La empresa no fue encontrada');
    return company;
  }
  
  async findByDirection(direction: number) {    
    const company = await this.companyRepository.find({
      relations: {
        directions: true,
      }
    });
    if (!company) throw new NotFoundException ('La empresa no fue encontrada');
    return company.filter(c=> {
      if(c.directions){
        const directions = c.directions.map(d => d.id);
      return directions.includes(direction);
      }else {
        return false
      }
      
    });
  }
  async update(id: number, updateCompanyDto: UpdateCompanyDto) {

    const company = await this.companyRepository.preload ({
      id:id,
      ...updateCompanyDto
    });

    if (!company) throw new NotFoundException('Empresa no encontrada')
    
    try {
      await this.companyRepository.save (company);
      return company;
    }
    catch (error){
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const company = await this.findOne( id );
    await this.companyRepository.remove ( company );
  }

  private handleDBExceptions( error: any){   
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)
    throw new InternalServerErrorException ('Error inesperado');   
  }
}
