import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainEntity } from '@entities/train.entity';

export const imports: DynamicModule[] = [
  TypeOrmModule.forFeature([TrainEntity]),
];
