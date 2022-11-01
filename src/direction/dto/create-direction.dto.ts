import { IsString, MinLength } from "class-validator";
import { ManyToMany } from "typeorm";


export class CreateDirectionDto {

    @IsString ()
    @MinLength (1)
    name: string;
       
}
