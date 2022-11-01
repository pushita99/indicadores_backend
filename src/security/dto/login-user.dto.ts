import { IsBoolean, IsEmail, IsNumber, IsString, MinLength } from "class-validator";
import { IsNull } from "typeorm";

export class LoginUserDto {

    @IsString ()
    @MinLength (4)
    password: string
        
    @IsEmail ()
    email: string

}
