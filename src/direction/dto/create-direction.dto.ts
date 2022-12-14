import { IsString, MinLength } from "class-validator";


export class CreateDirectionDto {

    @IsString ()
    @MinLength (1)
    name: string;
       
}
