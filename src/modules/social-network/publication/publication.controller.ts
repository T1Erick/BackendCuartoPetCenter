import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { UpdatepublicationEventoDto } from './dto/update.publication.dto';
import { publicationEventoDto } from './dto/publication.dto';

@Controller('publication')
export class PublicationController {
    constructor(private readonly publicationService: PublicationService) {}

    @Post()
    async create(@Body() publicationRolDto:publicationEventoDto){
        return await this.publicationService.create(publicationRolDto);
    }


    @Get()
    async findAll(){
        return await this.publicationService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id:string){
        return await this.publicationService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id:string,@Body() updatepublicationDto: UpdatepublicationEventoDto){
        return await this.publicationService.update(id, updatepublicationDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.publicationService.remove(id);
    }
}
