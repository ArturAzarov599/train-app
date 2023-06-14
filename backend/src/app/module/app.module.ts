import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PointModule } from '@point/module/point.module';
import { TrainModule } from '@train/module/train.module';
import { TrainScheduleModule } from '@train-schedule/module/train-schedule.module';

import { getEnvPath } from '@config/environment.config';
import { databaseConfig } from '@config/database.config';

import { TrainEntity } from '@entities/train.entity';
import { SeedService } from 'src/console/seed.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvPath(),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig,
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([TrainEntity]),
    TrainModule,
    PointModule,
    TrainScheduleModule,
    ConsoleModule,
  ],
  providers: [SeedService],
})
export class AppModule {}
