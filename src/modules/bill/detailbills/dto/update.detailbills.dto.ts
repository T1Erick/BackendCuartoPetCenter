import { PartialType } from "@nestjs/swagger";
import { CreatedetailbillsEventoDto } from "./create.detailbills.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdatedetailbillsEventoDto extends PartialType(CreatedetailbillsEventoDto){
    @IsOptional()
    @IsString()
    amount: number;
}