import { billEntity } from 'src/modules/bill/bills/entities/bill.entity';
import { detailpublicationsEntity } from 'src/modules/social-network/detailpublication/entities/detailpublication.entity';
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
import { rolEntity } from '../../rol/entities/rol.entity';
  
  @Entity('user')
  export class usersEntity {
    @PrimaryGeneratedColumn('uuid') //uuid es para indicar que el id es el primarykey
    id: string;
  
  
    
    //relacion de users (1-one) a bills (muchos-many)
    @OneToMany(() => billEntity, (bill) => bill.user)
    bills: billEntity[];
  
    //relacion de users (1-one) a detailbills (muchos-many)
    @OneToMany(() => detailpublicationsEntity, (detailpublication) => detailpublication.user)
    detailpublications: detailpublicationsEntity[];
  
    //relacion de users (muchos-many) a rol (1-one)
    @ManyToOne(() => rolEntity, (rol) => rol.users)
    rol: rolEntity;
  
    //Columnas users
    @Column({
      type: 'varchar',
      name: 'name',
      nullable: false,
      comment: 'nombre del usuario',
    })
    name: string;
  
    @Column({
      type: 'varchar',
      name: 'lastname',
      nullable: false,
      comment: 'apellido del usuario',
    })
    lastname: string;
  
    @Column({
      type: 'varchar',
      name: 'photo',
      nullable: true,
      comment: 'foto del usuario',
    })
    photo: string;
  
    @Column({
      type: 'varchar',
      name: 'email',
      nullable: false,
      comment: 'correo electrónico del usuario',
    })
    email: string;
  
    @Column({
      type: 'varchar',
      name: 'password',
      nullable: false,
      comment: 'contraseña del usuario',
    })
    password: string;
  }
  