import { IsOptional, IsString } from "class-validator";

export class productEventoDto{
    @IsOptional()
    @IsString()
    amount: number;
}