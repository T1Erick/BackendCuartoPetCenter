import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateBillsDto } from './dto/update.bills.dto';
import { BillsService } from './bills.service';
import { billEventoDto } from './dto/bills.dto';

@Controller('bills')
export class BillsController {

    constructor(private readonly billService: BillsService) {}

    @Post()
    async create(@Body() CreatebillDto:billEventoDto){
        return await this.billService.create(CreatebillDto);
    }


    @Get()
    async findAll(){
        return await this.billService.findAll()
    }
    @Patch(':id')
    async update(@Param('id') id:string,@Body() updatebillDto: UpdateBillsDto){
        return await this.billService.update(id, updatebillDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.billService.remove(id);
    }


}
