import { usersEntity } from 'src/modules/users/user/entities/users.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToOne,
} from 'typeorm';
import { publicationEntity } from '../../publication/entities/publication.entity';

@Entity('detailpublications')
export class detailpublicationsEntity {
  @PrimaryGeneratedColumn('uuid') //uuid es para indicar que el id es el primarykey
  id: string;


  //relacion de detail_publications (muchos-many) a users (1-one)
  @ManyToOne(() => usersEntity, (user) => user.detailpublications)
  user: usersEntity;
  //relacion de detail_publications (muchos-many) a publications (1-one)
  @ManyToOne(() => publicationEntity, (publication) => publication.detailpublication)
  publication: publicationEntity;
  
  //Columnas detailpublication
  @Column({
    type: 'timestamp',
    name: 'fecha_publicacion',
    nullable: false,
    comment: 'fecha de publicación',
  })
  fecha_publicacion: Date;
  
}
