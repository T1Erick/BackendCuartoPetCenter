import { PrimaryGeneratedColumn, Entity,  Column, OneToMany } from "typeorm";
import { categoryEntity } from "../../category/entities/category.entity";

@Entity('section')

export class sectionEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;


    @OneToMany(() => categoryEntity, category => category.section)
    category: categoryEntity []; //atributo de tipo arreglo


    @Column('varchar', {
        name: 'namesection',
        nullable: false,
        comment: 'Nombre de la seccion',

    })
    namesection: string;

}