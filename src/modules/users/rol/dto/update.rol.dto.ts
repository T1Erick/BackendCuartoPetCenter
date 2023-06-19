import { PartialType } from "@nestjs/swagger";

import { IsOptional, IsString } from "class-validator";
import { RolEventDto } from "./rol.dto";

export class UpdateRolDto extends PartialType(RolEventDto){

    @IsOptional()
    @IsString()
    nameRolAT: string;
}