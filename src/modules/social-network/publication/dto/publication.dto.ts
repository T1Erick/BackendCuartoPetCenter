import { IsOptional, IsString } from "class-validator";

export class publicationEventoDto{
    @IsOptional()
    @IsString()
    titlepublication: string;
    description: string;
    image:string;
}