import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { CreateProductEventoDto } from "./create.products.dto";

export class UpdateProductEventoDto extends PartialType(CreateProductEventoDto){
    @IsOptional()
    @IsString()
    amount: number;
}