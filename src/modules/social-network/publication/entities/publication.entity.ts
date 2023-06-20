import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { detailpublicationsEntity } from "../../detailpublication/entities/detailpublication.entity";


@Entity('publication')

export class publicationEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;

    @CreateDateColumn({
        name: 'creted_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @OneToMany(() => detailpublicationsEntity, detailpublication => detailpublication.publication)
    detailpublication: detailpublicationsEntity []; //atributo de tipo arreglo


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'Titulo de la publicacion',

    })
    titleAT: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'Descripcion de la publicacion',
    })
    descriptionAT: string;

    @Column('varchar', {
        name: 'images',
        nullable: true,
        comment: 'Imagen de la publicacion',
    })
    imagesAT: string;
    
}