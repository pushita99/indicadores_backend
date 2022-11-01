import { IsDate, IsNumber, IsString, MinLength } from "class-validator";

export class CreateIndicatorcompanydirectionDto {
   
    @IsString ()
    @MinLength (1)
    value: string;

    @IsDate ()
    date: Date;
}
