import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, ManyToOne } from "typeorm";

import { billEntity } from "../../bills/entities/bill.entities";
import { productsEntity } from "src/modules/store/products/entities/products.entities";

//import { ProductEntity } from "./product.model";

@Entity('bill', { schema: 'detailbills' })

export class detailbillsEntity {
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

    @ManyToOne(() => billEntity, bill => bill.detailbills)
    bill: billEntity; //atributo de tipo arreglo

    @Column('varchar', {
        name: 'amount',
        nullable: false,
        comment: 'cantidad del detalle de la factura',

    })
    amountAT: number;


    //relacon de  detallefactura a productos
    @ManyToOne(() => productsEntity, products => products.detailbills)
    products: productsEntity;

    @Column('varchar', {
        name: 'amount',
        nullable: false,
        comment: 'cantidad del detalle de la factura',

    })
    amount1AT: number;
}