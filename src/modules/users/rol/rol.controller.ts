import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolEventDto } from './dto/rol.dto';
import { UpdateRolDto } from './dto/update.rol.dto';

@Controller('rol')
export class RolController {
    constructor(private readonly rolService: RolService) {}

    @Post()
    async create(@Body() CreateRolDto:RolEventDto){
        return await this.rolService.create(CreateRolDto);
    }


    @Get()
    async findAll(){
        return await this.rolService.findAll()
    }
    @Patch(':id')
    async update(@Param('id') id:string,@Body() updateRolDto: UpdateRolDto){
        return await this.rolService.update(id, updateRolDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.rolService.remove(id);
    }
}
