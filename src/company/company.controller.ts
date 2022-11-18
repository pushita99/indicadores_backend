import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.companyService.findOne(+id);
  }

  @Put(':id/direction/:directionId')
  addDirectionToCompany(
    @Param('id') id: number,
    @Param('directionId', ParseIntPipe) directionId: number,
  ) {
    return this.companyService.addDirectionToCompany(id, directionId);
  }
  
  @Get('/direction/:direction')
  findByDirection(@Param('direction') direction: number) {
    return this.companyService.findByDirection(+direction);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateCompanyDto: UpdateCompanyDto
    ) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log(id);
    return this.companyService.remove(+id);  
  }
}
