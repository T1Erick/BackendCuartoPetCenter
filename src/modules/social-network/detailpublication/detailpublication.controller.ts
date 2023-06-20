import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { detailpublicationEventoDto } from './dto/detail.publications.dto';
import { DetailpublicationService } from './detailpublication.service';
import { UpdateDetailpublicationEventoDto } from './dto/update.detailpublications.dto';

@Controller('detailpublication')
export class DetailpublicationController {
    constructor(private readonly detailpublicationsService: DetailpublicationService) {}

    @Post()
    async create(@Body() detailpublicationsRolDto:detailpublicationEventoDto){
        return await this.detailpublicationsService.create(detailpublicationsRolDto);
    }


    @Get()
    async findAll(){
        return await this.detailpublicationsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        return await this.detailpublicationsService.findOne(id)
    }
    @Patch(':id')
    async update(@Param('id') id:string,@Body() updatedetailpublicationsDto: UpdateDetailpublicationEventoDto){
        return await this.detailpublicationsService.update(id, updatedetailpublicationsDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.detailpublicationsService.remove(id);
    }
}
