import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";

import { billEntity } from "../../bills/entities/bill.entity";
import { productsEntity } from "src/modules/store/products/entities/products.entity";

//import { ProductEntity } from "./product.model";

@Entity('detailbill')

export class detailbillsEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;


    @ManyToOne(() => billEntity, bill => bill.detailbills)
    bill: billEntity; //atributo de tipo arreglo

    @Column('varchar', {
        name: 'amount',
        nullable: false,
        comment: 'cantidad del detalle de la factura',

    })
    amount: number;


    //relacon de  detallefactura a productos
    @ManyToOne(() => productsEntity, products => products.detailbills)
    products: productsEntity;

   
}