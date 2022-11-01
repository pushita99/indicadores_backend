import { PartialType } from '@nestjs/mapped-types';
import { CreateMeasurementunitDto } from './create-measurementunit.dto';

export class UpdateMeasurementunitDto extends PartialType(CreateMeasurementunitDto) {}
