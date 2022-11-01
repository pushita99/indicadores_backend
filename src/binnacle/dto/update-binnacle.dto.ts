import { PartialType } from '@nestjs/mapped-types';
import { CreateBinnacleDto } from './create-binnacle.dto';

export class UpdateBinnacleDto extends PartialType(CreateBinnacleDto) {}
