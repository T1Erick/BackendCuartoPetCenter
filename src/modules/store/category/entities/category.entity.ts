import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sectionEntity } from "../../section/entities/section.entity";
import { productsEntity } from "../../products/entities/products.entity";

@Entity('category')

export class categoryEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;

    

    @ManyToOne(() => sectionEntity, section => section.category)
    section: sectionEntity ; //atributo de tipo arreglo

    @OneToMany(() =>productsEntity,products=> products.category)
    products: productsEntity[];


    @Column('varchar', {
        name: 'namecategory',
        nullable: false,
        comment: 'Nombre de la categoria',

    })
    namecategory: string;


    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'Descripcion de la categoria',
    })
    description: string;


   
    
}