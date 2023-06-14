import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common/interfaces/modules';

import { PointEntity } from '@entities/point.entity';

export const imports: DynamicModule[] = [
  TypeOrmModule.forFeature([PointEntity]),
];
