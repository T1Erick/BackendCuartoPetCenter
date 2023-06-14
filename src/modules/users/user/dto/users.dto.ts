import { IsOptional, IsString } from "class-validator";

export class userEventoDto{
    @IsOptional()
    @IsString()
    amount: number;
}