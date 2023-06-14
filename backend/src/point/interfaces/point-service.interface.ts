import { PointDto } from '@point/dtos/point.dto';
import { CreatePointDto } from '@point/dtos/create-point.dto';

export interface IPointService {
  get(dto: CreatePointDto): Promise<CreatePointDto>;
  getAll(): Promise<CreatePointDto[]>;
  create(dto: CreatePointDto): Promise<CreatePointDto>;
  delete(dto: CreatePointDto): Promise<CreatePointDto>;
  update(dto: PointDto): Promise<CreatePointDto>;
}
