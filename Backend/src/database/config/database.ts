import { Options } from 'sequelize';

const config: Options = {
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_DATABASE || 'app_medicamentos',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 3306,
    dialect: 'mysql',
}

export = config;