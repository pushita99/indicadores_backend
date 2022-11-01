import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeasurementunitService } from './measurementunit.service';
import { CreateMeasurementunitDto } from './dto/create-measurementunit.dto';
import { UpdateMeasurementunitDto } from './dto/update-measurementunit.dto';

@Controller('measurementunit')
export class MeasurementunitController {
  constructor(private readonly measurementunitService: MeasurementunitService) {}

  @Post()
  create(@Body() createMeasurementunitDto: CreateMeasurementunitDto) {
    return this.measurementunitService.create(createMeasurementunitDto);
  }

  @Get()
  findAll() {
    return this.measurementunitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measurementunitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeasurementunitDto: UpdateMeasurementunitDto) {
    return this.measurementunitService.update(+id, updateMeasurementunitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementunitService.remove(+id);
  }
}
