import { IsOptional, IsString } from "class-validator";

export class sectionEventoDto{
    @IsOptional()
    @IsString()
    namesection: string;
}