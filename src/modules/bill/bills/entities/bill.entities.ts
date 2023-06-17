import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { detailbillsEntity } from "../../detailbills/entities/detailbills.entities";
import { usersEntity } from "src/modules/users/user/entities/users.entities";
//import { ProductEntity } from "./product.model";

@Entity('bill', { schema: 'detailbills' })

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
    dateAT: Date;

    @Column('varchar', {
        name: 'total',
        nullable: false,
        comment: 'valor total de la factura',

    })
    totalAT: number;

    @Column('varchar', {
        name: 'waytopay',
        nullable: false,
        comment: 'forma de pago de la factura',

    })
    waytopayAT: string;
}