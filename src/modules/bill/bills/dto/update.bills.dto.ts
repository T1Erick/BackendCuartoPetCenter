import { PartialType } from "@nestjs/swagger";

import {  IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { billEventoDto } from "./bills.dto";

export class UpdateBillsDto extends PartialType(billEventoDto){


    @IsOptional()
    @IsString()
    date: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    total: number;


    @IsOptional()
    @IsString()
    waytopay: string;



}