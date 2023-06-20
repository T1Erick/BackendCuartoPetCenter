import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";
import { ConnectOptions} from "typeorm"

export const databaseProviders= [
    TypeOrmModule.forRootAsync(
        {
            imports: [ConfigModule],
            inject: [ConfigService],
            async useFactory(config:ConfigService){
                return {
                    type: "postgres",
                    username:"postgres",
                    password:"1234",
                    host:"localhost",
                    port: 5432,
                    database:"Pet_Center",
                    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
                    migrations: [__dirname + '/migrations/*.{.ts,.js}'],
                    synchronize: true,
                }as ConnectOptions
            }
        }
    )
]