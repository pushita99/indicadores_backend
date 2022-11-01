import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndicatorcompanydirectionService } from './indicatorcompanydirection.service';
import { CreateIndicatorcompanydirectionDto } from './dto/create-indicatorcompanydirection.dto';
import { UpdateIndicatorcompanydirectionDto } from './dto/update-indicatorcompanydirection.dto';

@Controller('indicatorcompanydirection')
export class IndicatorcompanydirectionController {
  constructor(private readonly indicatorcompanydirectionService: IndicatorcompanydirectionService) {}

  @Post()
  create(@Body() createIndicatorcompanydirectionDto: CreateIndicatorcompanydirectionDto) {
    return this.indicatorcompanydirectionService.create(createIndicatorcompanydirectionDto);
  }

  @Get()
  findAll() {
    return this.indicatorcompanydirectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicatorcompanydirectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndicatorcompanydirectionDto: UpdateIndicatorcompanydirectionDto) {
    return this.indicatorcompanydirectionService.update(+id, updateIndicatorcompanydirectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicatorcompanydirectionService.remove(+id);
  }
}
