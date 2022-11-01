import { IsString, MaxLength, MinLength } from "class-validator";
import { ManyToOne } from "typeorm";

export class CreateIndicatorDto {
    
    @IsString ()
    @MinLength (1)
    name: string;

    @IsString ()
    @MinLength (1)
    @MaxLength (200)
    description: string;

}
