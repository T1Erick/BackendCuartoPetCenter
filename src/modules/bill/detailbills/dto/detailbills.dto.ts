import { IsNotEmpty, IsString } from "class-validator";

export class detailbillsEventoDto{
    @IsNotEmpty()
    @IsString()
    amount: number;
}