import { IsString, MinLength } from "class-validator";

export class CreateBinnacleDto {

    @IsString ()
    @MinLength (1)
    action: string;
    
}
