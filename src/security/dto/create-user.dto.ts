import { IsBoolean, IsEmail, IsNumber, IsString, MinLength } from "class-validator";
import { IsNull } from "typeorm";

export class CreateUserDto {

    @IsString ()
    @MinLength (1)
    name: string;

    @IsString ()
    @MinLength (1)
    lastname: string;

    @IsString ()
    @MinLength (1)
    username: string

    @IsString ()
    @MinLength (4)
    password: string

    @IsBoolean ()
    status: boolean  
        
    @IsEmail ()
    email: string

    @IsNumber ()
    created_at: Date

    @IsString ()
    @MinLength (1)
    role: string
}
