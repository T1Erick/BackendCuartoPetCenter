import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { detailpublicationsEntity } from "../../detailpublication/entities/detailpublication.entity";


@Entity('publication')

export class publicationEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;


    @OneToMany(() => detailpublicationsEntity, detailpublication => detailpublication.publication)
    detailpublication: detailpublicationsEntity []; //atributo de tipo arreglo


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'Titulo de la publicacion',

    })
    title: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'Descripcion de la publicacion',
    })
    description: string;

    @Column('varchar', {
        name: 'images',
        nullable: true,
        comment: 'Imagen de la publicacion',
    })
    images: string;
    
}