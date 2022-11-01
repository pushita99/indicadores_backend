import { IsString, MinLength } from "class-validator";

export class CreateMeasurementunitDto {
    @IsString ()
    @MinLength (1)
    name: string;
}
