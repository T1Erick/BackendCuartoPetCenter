import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SectionService } from './section.service';
import { sectionEventoDto } from './dto/section.dto';
import { UpdatesectionEventoDto } from './dto/update.section.dto';

@Controller('section')
export class SectionController {

    constructor(private readonly sectionService: SectionService) {}

    @Post()
    async create(@Body() sectionRolDto:sectionEventoDto){
        return await this.sectionService.create(sectionRolDto);
    }


    @Get()
    async findAll(){
        return await this.sectionService.findAll()
    }
    @Patch(':id')
    async update(@Param('id') id:string,@Body() updatesectionDto: UpdatesectionEventoDto){
        return await this.sectionService.update(id, updatesectionDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.sectionService.remove(id);
    }
}
