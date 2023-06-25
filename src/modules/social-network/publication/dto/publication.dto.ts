import { IsNotEmpty, IsString } from "class-validator";

export class publicationEventoDto{
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    images:string;
}