import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanificationService } from './planification.service';
import { CreatePlanificationDto } from './dto/create-planification.dto';
import { UpdatePlanificationDto } from './dto/update-planification.dto';

@Controller('planification')
export class PlanificationController {
  constructor(private readonly planificationService: PlanificationService) {}

  @Post()
  create(@Body() createPlanificationDto: CreatePlanificationDto) {
    return this.planificationService.create(createPlanificationDto);
  }

  @Get()
  findAll() {
    return this.planificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanificationDto: UpdatePlanificationDto) {
    return this.planificationService.update(+id, updatePlanificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planificationService.remove(+id);
  }
}
