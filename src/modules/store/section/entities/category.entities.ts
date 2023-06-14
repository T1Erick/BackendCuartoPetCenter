import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sectionEntity } from "./section.entities";

@Entity('section', { schema: 'category' })

export class categoryEntity {
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

    @ManyToOne(() => sectionEntity, section => section.category)
    section: sectionEntity ; //atributo de tipo arreglo


    @Column('varchar', {
        name: 'namecategory',
        nullable: false,
        comment: 'Nombre de la categoria',

    })
    namecategoryAT: string;


    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'Descripcion de la categoria',
    })
    descriptionAT: string;


    @Column('varchar', {
        name: 'images',
        nullable: true,
        comment: 'Imagen del producto',
    })
    imagesAT: string;
    
}