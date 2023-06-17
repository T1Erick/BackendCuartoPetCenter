import { IsNotEmpty, IsString } from "class-validator";


export class categoryEventoDto{
    @IsNotEmpty()
    @IsString()
    namecategoryAT:string;

    @IsNotEmpty()
    @IsString()
    descriptionAT:string


}