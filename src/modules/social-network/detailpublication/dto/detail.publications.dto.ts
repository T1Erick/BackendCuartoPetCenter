import { IsOptional, IsString } from "class-validator";

export class detailpublicationEventoDto{
    @IsOptional()
    @IsString()
    amount: number;
}