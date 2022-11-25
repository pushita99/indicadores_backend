import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Direction } from 'src/direction/entities/direction.entity';
import { Indicator } from 'src/indicator/entities/indicator.entity';
import { Indicatorcompanydirection } from 'src/indicatorcompanydirection/entities/indicatorcompanydirection.entity';
import { Planification } from 'src/planification/entities/planification.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Direction)
    private readonly directionRepository: Repository<Direction>,
    @InjectRepository(Indicator)
    private readonly indicatorRepository: Repository<Indicator>,
  ) { }

  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  async generalReport(id: number) {
    let mes = 11;

    try {

      const direction = await this.directionRepository.findOne({
         where: { id }, 
         relations: {
           planifications: true, 
           indicatorcompanydirections: true,
           companies: true,
           indicators: true,         
          }
          });
          console.log(direction);
          
         const {companies, planifications, indicatorcompanydirections, indicators} = direction;
         const indicadores = [];
         indicators.forEach(element => {
          indicadores.push({
            name: element?.name || 'hola',
            measurementunit: element.measurementunit?.name || '',
            companies: companies.map(company => {
              const value = this.getIndicator(indicatorcompanydirections, mes, element, company );;
              const planification = this.getPlanifications(planifications, mes, element, company ); 
              return {
                name: company.name,
                planification: planification || '',
                value: value || '',
              }
            })

          });
         });
         
  // console.log(JSON.stringify(direction));
   return indicadores;
    } catch (e) {
      console.log(e);
    }


   
  }

private getPlanifications(planifications: Planification[], date, indicator, company) {
  const dateT = new Date();
 
  const plan = planifications.filter((p)=>{
    // console.log('year>',   p.date.getFullYear() === dateT.getFullYear());
    // console.log('year>',   p.date.getFullYear() , dateT.getFullYear());
      return p.indicator.id === indicator.id && p.company.id === company.id /*&& p.date.getFullYear() === dateT.getFullYear()*/;
    })
      return plan[0] && plan[0]['november'];
  }


  private getIndicator(indicadors: Indicatorcompanydirection[], date, indicator, company) {
    const ind = indicadors.filter((i)=>{
    
      console.log('------Indicadores---------');
      console.log('indicator>',  i.indicator.id === indicator.id);
      console.log('indicator>',  i.indicator.id, indicator.id);
      console.log('company>',  i.company.id === company.id);
      console.log('company>',  i.company.id, company.id);
      // console.log('year>',   p.date.getFullYear() === dateT.getFullYear());
       console.log('year>', typeof  i.date );
        return i.indicator.id === indicator.id && i.company.id === company.id /*&& p.date.getFullYear() === dateT.getFullYear()*/;
      })
      console.log('lista>',  ind );
      console.log('objeto>',ind[0] );
        return ind[0]?.value;
    }
    
  

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}
