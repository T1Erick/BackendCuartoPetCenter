import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { CreatesectionEventoDto } from "./create.section.dto";

export class UpdatesectionEventoDto extends PartialType(CreatesectionEventoDto){
    @IsOptional()
    @IsString()
    namesection: string;
}