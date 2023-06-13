import { PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { detailbillsEntity } from "./detailbills.entities";
//import { ProductEntity } from "./product.model";

@Entity('bill', { schema: 'detailbills' })

export class billEntity {
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

    @OneToMany(() => detailbillsEntity, detailbills => detailbills.bill)
    detailbills: detailbillsEntity[]; //atributo de tipo arreglo

    @Column('varchar', {
        name: 'date',
        nullable: false,
        comment: 'fecha de la factura',

    })
    dateAT: number;

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