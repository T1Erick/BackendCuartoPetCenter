import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { publicationEntity } from './entities/publication.entity';
import { publicationEventoDto } from './dto/publication.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdatepublicationEventoDto } from './dto/update.publication.dto';

@Injectable()
export class PublicationService {
    constructor(
        @InjectRepository(publicationEntity) private publicationEntityDto: Repository<publicationEntity>
    ){}

    async create(createpublicationeventDto: publicationEventoDto):Promise<publicationEntity>{
        try {
            
            const publicationcreate: publicationEntity = await this.publicationEntityDto.save(createpublicationeventDto);
            return publicationcreate;
        }
            catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<publicationEntity[]>{
        try{
            const publicationall: publicationEntity[]= await this.publicationEntityDto.find();
            if(publicationall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen publicaciones registradas'
                });

            }
            return publicationall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async findOne(id:string): Promise<publicationEntity>{
        try{
            return await this.publicationEntityDto.createQueryBuilder('publication').where({id}).getOne();
        }
        catch(e){
            throw new Error(e)
        }
    }

    async update(id:string, updatepublicationdto: UpdatepublicationEventoDto):Promise<UpdateResult| undefined>{
        try{
            const updatepublication: UpdateResult= await this.publicationEntityDto.update(id,updatepublicationdto);
            if(updatepublication.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'La publicacion  no se pudo actualizar',
                });
            }
            return updatepublication;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deletepublication: DeleteResult = await this.publicationEntityDto.delete(id);
            if(deletepublication.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'La publicacion no se pudo eliminar',

                })
            }
            return deletepublication;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
