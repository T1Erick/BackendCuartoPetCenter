import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class detailpublicationEventoDto{
    @IsNotEmpty()
    @IsString()
    amount: number;
}