import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { ManyToOne } from "typeorm";

export class CreateIndicatorDto {
    
    @IsString ()
    @MinLength (1)
    name: string;

    @IsString ()
    @MaxLength (200)
    description: string;

    @Type (() => Number)
    @IsNumber ()
    measurementunit: number;

   /* @Type (() => Number)
    @IsNumber ()
    direction: number;

    @IsArray()
    @IsNotEmpty()
    readonly directionsIds: number[];*/

}

