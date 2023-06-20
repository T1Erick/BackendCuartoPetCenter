import { IsNotEmpty, IsString } from "class-validator";


export class categoryEventoDto{
    
    @IsNotEmpty()
    @IsString()
    namecategory:string;

    @IsNotEmpty()
    @IsString()
    description:string


}