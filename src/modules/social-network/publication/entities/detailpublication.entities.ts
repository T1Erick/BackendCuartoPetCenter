import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { publicationEntity } from "./publication.entities";

@Entity('publication', { schema: 'detailpublication' })

export class detailpublicationEntity {
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

    @ManyToOne(() => publicationEntity, publication => publication.detailpublication)
    publication: publicationEntity ; //atributo de tipo arreglo

    @Column('varchar', {
        name: 'datepublication',
        nullable: false,
        comment: 'fecha de la publicacion'
    })
    datepublicationAT: number;
}