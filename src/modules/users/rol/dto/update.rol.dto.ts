import { PartialType } from "@nestjs/swagger";
import { CreateRolDto } from "./create.rol.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdateRolDto extends PartialType(CreateRolDto){

    @IsOptional()
    @IsString()
    nameRolAT: string;
}