import { PointEntity } from '@entities/point.entity';

import { CreatePointDto } from '@point/dtos/create-point.dto';

export interface IPointRepository {
  get(dto: CreatePointDto): Promise<PointEntity>;
  getAll(): Promise<PointEntity[]>;
  create(dto: CreatePointDto): Promise<PointEntity>;
  delete(dto: CreatePointDto): Promise<PointEntity>;
  update(dto: CreatePointDto): Promise<PointEntity>;
}
