import {  IsString, IsNumber, IsDate, IsNotEmpty } from "class-validator";

export class productEventoDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsString()
  foto: string;

  @IsNotEmpty()
  @IsDate()
  fechaVencimiento: Date;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
