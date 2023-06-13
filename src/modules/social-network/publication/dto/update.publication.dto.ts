import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { CreatepublicationEventoDto } from "./create.publication.dto";

export class UpdatepublicationEventoDto extends PartialType(CreatepublicationEventoDto){
    @IsOptional()
    @IsString()
    titlepublication: string;
    description: string;
    image:string;
}