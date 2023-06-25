import { PartialType } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateProductEventoDto } from "./create.products.dto";

export class UpdateProductEventoDto extends PartialType(CreateProductEventoDto){
  @IsOptional()
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsNumber()
  precio: number;

  @IsOptional()
  @IsString()
  foto: string;

  @IsOptional()
  @IsDate()
  fechaVencimiento: string;

  
}