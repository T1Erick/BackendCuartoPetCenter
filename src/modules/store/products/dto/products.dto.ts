import { IsOptional, IsString, IsNumber, IsDate } from "class-validator";

export class productEventoDto {
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
  fechaVencimiento: Date;

  @IsOptional()
  @IsNumber()
  amount: number;
}
