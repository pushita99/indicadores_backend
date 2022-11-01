import { IsString, MinLength } from "class-validator";
import { Unique } from "typeorm";

export class CreateCompanyDto {

    @IsString ()
    @MinLength (1)
    name: string;
    
}
