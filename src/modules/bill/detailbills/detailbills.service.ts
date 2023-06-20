import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { detailbillsEntity } from './entities/detailbills.entity';
import { detailbillsEventoDto } from './dto/detailbills.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdatedetailbillsEventoDto } from './dto/update.detailbills.dto';

@Injectable()
export class DetailbillsService {

    constructor(
        @InjectRepository(detailbillsEntity) private detailbillsEntityDto: Repository<detailbillsEntity>
    ){}

    async create(createdetailbillseventDto: detailbillsEventoDto):Promise<detailbillsEntity>{
        try {
            const detailbillscreate: detailbillsEntity = await this.detailbillsEntityDto.save(createdetailbillseventDto);
            return detailbillscreate;}catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<detailbillsEntity[]>{
        try{
            const detailbillsall: detailbillsEntity[]= await this.detailbillsEntityDto.find();
            if(detailbillsall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen detalles defacturas registradas'
                });

            }
            return detailbillsall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async update(id:string, updatedetailbillsdto: UpdatedetailbillsEventoDto):Promise<UpdateResult| undefined>{
        try{
            const updatedetailbills: UpdateResult= await this.detailbillsEntityDto.update(id,updatedetailbillsdto);
            if(updatedetailbills.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'El detalle factura no se pudo actualizar',
                });
            }
            return updatedetailbills;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deletedetailbills: DeleteResult = await this.detailbillsEntityDto.delete(id);
            if(deletedetailbills.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'El detalle factura no se pudo eliminar',

                })
            }
            return deletedetailbills;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
