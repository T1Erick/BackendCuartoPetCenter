import { IsDate, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class billEventoDto{

    @IsNotEmpty()
    @IsString()
    date: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    total: number;


    @IsNotEmpty()
    @IsString()
    waytopay: string;
}