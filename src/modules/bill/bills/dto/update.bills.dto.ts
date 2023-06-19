import { PartialType } from "@nestjs/swagger";

import { IsDate, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { billEventoDto } from "./bills.dto";

export class UpdateBillsDto extends PartialType(billEventoDto){


    @IsOptional()
    @IsDate()
    dateAT: Date;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    totalAT: number;


    @IsOptional()
    @IsString()
    waytopayAT: string;



}