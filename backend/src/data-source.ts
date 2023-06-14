import { PointEntity } from '@entities/point.entity';
import { TrainScheduleEntity } from '@entities/train-schedule.entity';
import { TrainEntity } from '@entities/train.entity';
import { DataSource } from 'typeorm';

const entities = [PointEntity, TrainScheduleEntity, TrainEntity];
const entitiesPath = ['dist/entities/*.entity.js'];

const DataSourceConfig = new DataSource({
  type: 'mysql',
  username: 'root',
  password: 'password',
  database: 'train-app',
  synchronize: false,
  entities: entitiesPath,
  migrations: ['dist/migrations/*.js'],
  port: 3306,
  migrationsRun: true,
});

export default DataSourceConfig;
