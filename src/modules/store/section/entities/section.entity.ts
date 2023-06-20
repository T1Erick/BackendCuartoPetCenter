import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { categoryEntity } from "../../category/entities/category.entity";

@Entity('section')

export class sectionEntity {
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

    @OneToMany(() => categoryEntity, category => category.section)
    category: categoryEntity []; //atributo de tipo arreglo


    @Column('varchar', {
        name: 'namesection',
        nullable: false,
        comment: 'Nombre de la seccion',

    })
    namesectionAT: string;

}