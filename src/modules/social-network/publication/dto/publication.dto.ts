import { IsNotEmpty, IsString } from "class-validator";

export class publicationEventoDto{
    @IsNotEmpty()
    @IsString()
    titlepublication: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    image:string;
}