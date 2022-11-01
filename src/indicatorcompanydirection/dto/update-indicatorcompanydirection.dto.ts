import { PartialType } from '@nestjs/mapped-types';
import { CreateIndicatorcompanydirectionDto } from './create-indicatorcompanydirection.dto';

export class UpdateIndicatorcompanydirectionDto extends PartialType(CreateIndicatorcompanydirectionDto) {}
