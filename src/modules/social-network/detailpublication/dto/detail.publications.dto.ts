import {  IsDate, IsNotEmpty } from "class-validator";

export class detailpublicationEventoDto {
  @IsNotEmpty()
  @IsDate()
  fecha_publicacion: Date;
}
