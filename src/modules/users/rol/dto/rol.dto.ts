import { IsNotEmpty, IsString } from "class-validator";

export class RolEventDto{
    @IsNotEmpty()
    @IsString()
    namerol: string;

}