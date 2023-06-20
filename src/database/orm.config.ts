import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm"

export const dataSourceOptions: DataSourceOptions = 
{
    type: "postgres",
    username:"postgres",
    password:"1234",
    host:"localhost",
    port: 5432,
    database:"Pet_Center",
    entities: [__dirname + '../modules/**/**/entities/*.entity.{ts,js}'],
    migrations: ["./migrations"],
    migrationsRun: true,
    synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;