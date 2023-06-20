
import { IsNotEmpty,  IsString } from "class-validator";

export class sectionEventoDto{
    @IsNotEmpty()
    @IsString()
    namesection: string;
}