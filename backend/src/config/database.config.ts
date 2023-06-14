import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const username = configService.get<string>('DB_USERNAME');
  const password = configService.get<string>('DB_PASSWORD');
  const port = parseInt(configService.get<string>('DB_PORT'));
  const host = configService.get<string>('DB_HOST');
  const database = configService.get<string>('DB_NAME');
  const entitiesPath = configService.get<string>('DB_ENTITIES_PATH');
  const migrationsPath = configService.get<string>('DB_MIGRATIONS_PATH');

  return {
    type: 'mysql',
    port,
    host,
    database,
    entities: [entitiesPath],
    username,
    password,
    synchronize: false,
    autoLoadEntities: true, // use only for seed
    migrations: [migrationsPath],
    migrationsRun: true,
  };
};
