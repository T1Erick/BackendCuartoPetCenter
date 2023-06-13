import { IsOptional, IsString } from "class-validator";

export class detailbillsEventoDto{
    @IsOptional()
    @IsString()
    amount: number;
}