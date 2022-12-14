import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { Unique } from "typeorm";

export class CreateCompanyDto {

    @IsString ()
    @MinLength (1)
    name: string;

    /*@IsArray()    
    readonly directionsIds: number[];
    
    @Type (() => Number)
    @IsNumber ()
    direction: number;*/
}
