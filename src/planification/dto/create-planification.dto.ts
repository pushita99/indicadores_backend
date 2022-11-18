import { Type } from "class-transformer";
import { IsDate, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePlanificationDto {
    
    @Type (() => Number)
    @IsNumber()
    january: number;
    @Type (() => Number)
    @IsNumber ()
    february: number;
    @Type (() => Number)
    @IsNumber ()
    march: number;
    @Type (() => Number)
    @IsNumber ()
    april: number;
    @Type (() => Number)
    @IsNumber ()
    may: number;
    @Type (() => Number)
    @IsNumber ()
    june: number;
    @Type (() => Number)
    @IsNumber ()
    july: number;
    @Type (() => Number)
    @IsNumber ()
    august: number;
    @Type (() => Number)
    @IsNumber ()
    september: number;
    @Type (() => Number)
    @IsNumber ()
    october: number;
    @Type (() => Number)
    @IsNumber ()
    november: number;
    @Type (() => Number)
    @IsNumber ()
    december: number;

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