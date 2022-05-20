import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dbConfig } from './config/db.config';

export const AppDataSource = new DataSource({
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.userName,
  password: dbConfig.userPassword,
  database: dbConfig.databaseName,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/../entities/**/*{.ts,.js}`],
  migrations: [`${__dirname}/../migration/**/*{.ts,.js}`],
  subscribers: [`${__dirname}/../subscriber/**/*{.ts,.js}`],
});
