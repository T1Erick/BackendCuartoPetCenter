import { IsOptional, IsDate } from "class-validator";

export class detailpublicationEventoDto {
  @IsOptional()
  @IsDate()
  fechaPublicacion: Date;
}
