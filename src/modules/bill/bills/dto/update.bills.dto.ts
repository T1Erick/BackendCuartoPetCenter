import { PartialType } from "@nestjs/swagger";

import { IsDate, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { billEventoDto } from "./bills.dto";

export class UpdateBillsDto extends PartialType(billEventoDto){


    @IsOptional()
    @IsDate()
    date: Date;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    total: number;


    @IsOptional()
    @IsString()
    waytopay: string;



}