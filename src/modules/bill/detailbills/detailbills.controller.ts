import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DetailbillsService } from './detailbills.service';
import { detailbillsEventoDto } from './dto/detailbills.dto';
import { UpdatedetailbillsEventoDto } from './dto/update.detailbills.dto';

@Controller('detailbills')
export class DetailbillsController {

    constructor(private readonly detailbillsService: DetailbillsService) {}

    @Post()
    async create(@Body() detailbillsDto:detailbillsEventoDto){
        return await this.detailbillsService.create(detailbillsDto);
    }


    @Get()
    async findAll(){
        return await this.detailbillsService.findAll()
    }
    @Get(':id')
    async findOne(@Param('id') id:string){
        return await this.detailbillsService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id:string,@Body() updatedetailbillsDto: UpdatedetailbillsEventoDto){
        return await this.detailbillsService.update(id, updatedetailbillsDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.detailbillsService.remove(id);
    }
}
