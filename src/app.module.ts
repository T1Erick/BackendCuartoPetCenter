import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionModule } from './modules/store/section/section.module';
import { CategoryModule } from './modules/store/category/category.module';


import { ProductsModule } from './modules/store/products/products.module';
import { BillsModule } from './modules/bill/bills/bills.module';
import { DetailModule } from './modules/bill/detailbills/detailbills.module';
import { UserModule } from './modules/users/user/user.module';
import { RolModule } from './modules/users/rol/rol.module';
import { PublicationModule } from './modules/social-network/publication/publication.module';
import { DetailpublicationModule } from './modules/social-network/detailpublication/detailpublication.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.key';
import { join } from 'path';
import { LoginModule } from './auth/login/login.module';

@Module({
  imports: [
    SectionModule,
    CategoryModule,
    ProductsModule,
    BillsModule,
    DetailModule,
    UserModule,
    RolModule,
    PublicationModule,
    DetailpublicationModule,
    ConfigModule,
    DatabaseModule,
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config:ConfigService){
            return {
                type: 'postgres',
                username: config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                host:config.get(Configuration.HOST),
                port: 5432,
                database:config.get(Configuration.DATABASE),
                entities: [join(__dirname, '**', '*.entity.{ts,js}')],
                migrations: [__dirname + '/migrations/*.{.ts,.js}'],
                synchronize: true,
            }
        }
    }
    ),
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
    constructor(private readonly _configService: ConfigService){
        AppModule.port = this._configService.get(Configuration['PORT'])
    }
}
