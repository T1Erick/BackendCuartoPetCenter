import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { CreateUserEventoDto } from "./create.users.dto";

export class UpdateUserEventoDto extends PartialType(CreateUserEventoDto){
    @IsOptional()
    @IsString()
    amount: number;
}