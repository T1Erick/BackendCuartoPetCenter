import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { categoryEventoDto } from "./category.dto";

export class UpdateCategoryDto extends PartialType(categoryEventoDto){

    @IsOptional()
    @IsString()
    namecategory:string;

    @IsOptional()
    @IsString()
    description:string



}