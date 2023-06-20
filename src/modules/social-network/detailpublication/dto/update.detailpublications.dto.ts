import { PartialType } from "@nestjs/swagger";

import { IsOptional, IsString } from "class-validator";
import { CreateDetailpublicationEventoDto } from "./create.detailpublications.dto";

export class UpdateDetailpublicationEventoDto extends PartialType(CreateDetailpublicationEventoDto){
    @IsOptional()
    @IsString()
    fecha_publicacion: Date;
}