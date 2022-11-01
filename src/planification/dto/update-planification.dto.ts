import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanificationDto } from './create-planification.dto';

export class UpdatePlanificationDto extends PartialType(CreatePlanificationDto) {}
