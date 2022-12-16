import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectionDto } from './create-direction.dto';
import { IsArray, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Company } from 'src/company/entities/company.entity';
import { Type } from 'class-transformer';
import { Indicator } from 'src/indicator/entities/indicator.entity';


export class UpdateDirectionDto extends PartialType(CreateDirectionDto) {
    // @ValidateNested({ each: true })
    @IsArray()
    @IsOptional()
    companies?: Company[];

    @IsArray()
    @IsOptional()
    indicators?: Indicator[];
}
