
import { detailbillsEntity } from 'src/modules/bill/detailbills/entities/detailbills.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { categoryEntity } from '../../category/entities/category.entity';

@Entity('products')
export class productsEntity {
  @PrimaryGeneratedColumn('uuid') //uuid es para indicar que el id es el primarykey
  id: string;

  //relacion de products (1-one) a detailbills (muchos-many)
  @OneToMany(() => detailbillsEntity, (detailbill) => detailbill.products)
  detailbills: detailbillsEntity[];
  
  //relacion de products (muchos-many) a categories (1-one)
  @ManyToOne(() => categoryEntity, (category) => category.products)
  category: categoryEntity;
  
  
  //Columnas detailpublication
  @Column({
    type: 'varchar',
    name: 'titulo',
    nullable: false,
    comment: 'título del producto',
  })
  titulo: string;
  
  @Column({
    type: 'text',
    name: 'descripcion',
    nullable: true,
    comment: 'descripción del producto',
  })
  descripcion: string;
  
  @Column({
    type: 'decimal',
    name: 'precio',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: 'precio del producto',
  })
  precio: number;
  
  @Column({
    type: 'varchar',
    name: 'foto',
    nullable: true,
    comment: 'URL de la foto del producto',
  })
  foto: string;
  
  @Column({
    type: 'date',
    name: 'fecha_vencimiento',
    nullable: true,
    comment: 'fecha de vencimiento del producto',
  })
  fechaVencimiento: Date;
  
}
