import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { detailpublicationsEntity } from './entities/detailpublication.entity';
import { detailpublicationEventoDto } from './dto/detail.publications.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdateDetailpublicationEventoDto } from './dto/update.detailpublications.dto';

@Injectable()
export class DetailpublicationService {

    constructor(
        @InjectRepository(detailpublicationsEntity) private detailpublicationsEntityDto: Repository<detailpublicationsEntity>
    ){}

    async create(createdetailpublicationseventDto: detailpublicationEventoDto):Promise<detailpublicationsEntity>{
        try {
            
            const detailpublicationscreate: detailpublicationsEntity = await this.detailpublicationsEntityDto.save(createdetailpublicationseventDto);
            return detailpublicationscreate;
        }
            catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<detailpublicationsEntity[]>{
        try{
            const detailpublicationsall: detailpublicationsEntity[]= await this.detailpublicationsEntityDto.find();
            if(detailpublicationsall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen detalles de factura registradas'
                });

            }
            return detailpublicationsall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async findOne(id:string): Promise<detailpublicationsEntity>{
        try{
            return await this.detailpublicationsEntityDto.createQueryBuilder('detailpublication').where({id}).getOne();
        }
        catch(e){
            throw new Error(e)
        }
    }

    async update(id:string, updatedetailpublicationsdto: UpdateDetailpublicationEventoDto):Promise<UpdateResult| undefined>{
        try{
            const updatedetailpublications: UpdateResult= await this.detailpublicationsEntityDto.update(id,updatedetailpublicationsdto);
            if(updatedetailpublications.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'El detalle de publicacion no se pudo actualizar',
                });
            }
            return updatedetailpublications;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deletedetailpublications: DeleteResult = await this.detailpublicationsEntityDto.delete(id);
            if(deletedetailpublications.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'El detalle de publicacion no se pudo eliminar',

                })
            }
            return deletedetailpublications;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
