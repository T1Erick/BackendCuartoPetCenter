import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { detailbillsEntity } from "../../detailbills/entities/detailbills.entity";
import { usersEntity } from "src/modules/users/user/entities/users.entity";
//import { ProductEntity } from "./product.model";

@Entity('bill')

export class billEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;


    @OneToMany(() => detailbillsEntity, detailbills => detailbills.bill)
    detailbills: detailbillsEntity[]; //atributo de tipo arreglo

    @ManyToOne(()=> usersEntity, user => user.bills)
    user: usersEntity;

    @Column('varchar', {
        name: 'date',
        nullable: false,
        comment: 'fecha de la factura',

    })
    date: string;

    @Column('varchar', {
        name: 'total',
        nullable: false,
        comment: 'valor total de la factura',

    })
    total: number;

    @Column('varchar', {
        name: 'waytopay',
        nullable: false,
        comment: 'forma de pago de la factura',

    })
    waytopay: string;
}