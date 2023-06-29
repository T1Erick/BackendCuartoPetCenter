import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { AuthBody } from "../interfaces/login.interface";

export class UserAuthDto implements AuthBody {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}