import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { detailbillsEntity } from './detailbills.entities';
//import { ProductEntity } from "./product.model";

@Entity('bill', { schema: 'detailbills' })
export class productsEntity {
  @PrimaryGeneratedColumn('uuid') //uuid es para indicar que el id es el primarykey
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

  @OneToMany(() => detailbillsEntity, (detailbills) => detailbills.products)
  detailbills: detailbillsEntity[]; //atributo de tipo arreglo

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'Nombre del producto',
  })
  titleAT: string;

  @Column('integer', {
    name: 'price',
    nullable: false,
    comment: 'Precio del producto',
  })
  priceAT: number;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'Descripcion del producto',
  })
  descriptionAT: string;
  @Column('varchar', {
    name: 'images',
    nullable: true,
    comment: 'Imagen del producto',
  })
  imagesAT: string;

  @Column('varchar', {
    name: 'dateofexpiry',
    nullable: false,
    comment: 'fecha de caducidad del producto',
  })
  dateofexpiryAT: number;

}
