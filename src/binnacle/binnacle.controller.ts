import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BinnacleService } from './binnacle.service';
import { CreateBinnacleDto } from './dto/create-binnacle.dto';
import { UpdateBinnacleDto } from './dto/update-binnacle.dto';

@Controller('binnacle')
export class BinnacleController {
  constructor(private readonly binnacleService: BinnacleService) {}

  @Post()
  create(@Body() createBinnacleDto: CreateBinnacleDto) {
    return this.binnacleService.create(createBinnacleDto);
  }

  @Get()
  findAll() {
    return this.binnacleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.binnacleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBinnacleDto: UpdateBinnacleDto) {
    return this.binnacleService.update(+id, updateBinnacleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.binnacleService.remove(+id);
  }
}
