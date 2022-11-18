import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString, MinLength } from "class-validator";

export class CreateIndicatorcompanydirectionDto {
   
    @Type (() => Number)
    @IsNumber ()
    value: number;

    @Type (()=> Date)
    @IsDate ()
    date: Date;

    @Type (() => Number)
    @IsNumber ()
    company: number;

    @Type (() => Number)
    @IsNumber ()
    indicator: number;

    @Type (() => Number)
    @IsNumber ()
    direction: number;
}
