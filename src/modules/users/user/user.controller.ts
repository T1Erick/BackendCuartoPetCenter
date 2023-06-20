import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userEventoDto } from './dto/users.dto';
import { UpdateUserEventoDto } from './dto/update.users.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() userRolDto:userEventoDto){
        return await this.userService.create(userRolDto);
    }


    @Get()
    async findAll(){
        return await this.userService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        return await this.userService.findOne(id)
    }
    
    @Patch(':id')
    async update(@Param('id') id:string,@Body() updateUserDto: UpdateUserEventoDto){
        return await this.userService.update(id, updateUserDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.userService.remove(id);
    }
}
