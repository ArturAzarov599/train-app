import { TrainScheduleEntity } from '@entities/train-schedule.entity';

import { TrainScheduleDto } from '@train-schedule/dtos/train-schedule.dto';
import { CreateTrainScheduleDto } from '@train-schedule/dtos/create-train-schedule.dto';
import { GetTrainScheduleDataDto } from '@train-schedule/dtos/get-train-schedule-data.dto';
import { TrainSchedulePaginateDto } from '@train-schedule/dtos/train-schedule-padinate.dto';

export interface ITrainScheduleService {
  get(id: number): Promise<TrainScheduleEntity>;
  getAll(query: TrainSchedulePaginateDto): Promise<GetTrainScheduleDataDto>;
  create(dto: CreateTrainScheduleDto): Promise<TrainScheduleEntity>;
  delete(id: number): Promise<TrainScheduleEntity>;
  update(dto: TrainScheduleDto): Promise<TrainScheduleEntity>;
}
