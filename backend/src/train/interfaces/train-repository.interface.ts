import { TrainEntity } from '@entities/train.entity';

import { CreateTrainDto } from '@train/dtos/create-train.dto';
import { GetTrainsDataDto } from '@train/dtos/get-trains-data.dto';
import { TrainPaginationDto } from '@train/dtos/train-pagination.dto';

export interface ITrainRepository {
  find(code: string): Promise<TrainEntity>;
  findAll(query: TrainPaginationDto): Promise<GetTrainsDataDto>;
  create(dto: CreateTrainDto): Promise<TrainEntity>;
  update(dto: Partial<CreateTrainDto>): Promise<TrainEntity>;
  delete(code: string): Promise<TrainEntity>;
}
