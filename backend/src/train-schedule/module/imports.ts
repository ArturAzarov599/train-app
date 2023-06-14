import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common/interfaces/modules/dynamic-module.interface';

import { TrainScheduleEntity } from '@entities/train-schedule.entity';

export const imports: DynamicModule[] = [
  TypeOrmModule.forFeature([TrainScheduleEntity]),
];
