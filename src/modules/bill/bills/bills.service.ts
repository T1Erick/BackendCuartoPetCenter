import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { billEntity } from './entities/bill.entity';
import { billEventoDto } from './dto/bills.dto';
import { ErrorManager } from 'src/utils/error.manage';

import { UpdateBillsDto } from './dto/update.bills.dto';

@Injectable()
export class BillsService {
    constructor(
        @InjectRepository(billEntity) private billEntityDto: Repository<billEntity>
    ){}

    async create(createbilleventDto: billEventoDto):Promise<billEntity>{
        try {
            const billcreate: billEntity = await this.billEntityDto.save(createbilleventDto);
            return billcreate;}catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<billEntity[]>{
        try{
            const billall: billEntity[]= await this.billEntityDto.find();
            if(billall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen facturas registradas'
                });

            }
            return billall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id:string): Promise<billEntity>{
        try{
            return await this.billEntityDto.createQueryBuilder('bill').where({id}).getOne();
        }
        catch(e){
            throw new Error(e)
        }
    }

    async update(id:string, updatebilldto: UpdateBillsDto):Promise<UpdateResult| undefined>{
        try{
            const updatebill: UpdateResult= await this.billEntityDto.update(id,updatebilldto);
            if(updatebill.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'La categoria no se pudo actualizar',
                });
            }
            return updatebill;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deletebill: DeleteResult = await this.billEntityDto.delete(id);
            if(deletebill.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'La factura no se pudo eliminar',

                })
            }
            return deletebill;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
