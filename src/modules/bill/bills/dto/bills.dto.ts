import { IsDate, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class billEventoDto{

    @IsNotEmpty()
    @IsDate()
    dateAT: Date;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    totalAT: number;


    @IsNotEmpty()
    @IsString()
    waytopayAT: string;
}