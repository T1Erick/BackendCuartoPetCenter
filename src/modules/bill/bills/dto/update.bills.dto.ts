import { PartialType } from "@nestjs/swagger";
import { CreateBillDto } from "./create.bills.dto";
import { IsDate, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateBillsDto extends PartialType(CreateBillDto){


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