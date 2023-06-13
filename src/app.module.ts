import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionModule } from './modules/store/section/section.module';
import { CategoryModule } from './modules/store/category/category.module';
import { ProductsController } from './modules/store/products/products.controller';

import { ProductsModule } from './modules/store/products/products.module';
import { BillsModule } from './modules/bill/bills/bills.module';
import { DetailModule } from './modules/bill/detailbills/detailbills.module';
import { UserModule } from './modules/users/user/user.module';
import { RolModule } from './modules/users/rol/rol.module';
import { PublicationModule } from './modules/social-network/publication/publication.module';
import { DetailpublicationModule } from './modules/social-network/detailpublication/detailpublication.module';

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
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
