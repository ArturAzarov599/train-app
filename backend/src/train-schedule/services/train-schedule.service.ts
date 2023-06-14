import { Inject, Injectable } from '@nestjs/common';

import { TrainScheduleEntity } from '@entities/train-schedule.entity';

import { TrainScheduleDto } from '@train-schedule/dtos/train-schedule.dto';
import { CreateTrainScheduleDto } from '@train-schedule/dtos/create-train-schedule.dto';
import { GetTrainScheduleDataDto } from '@train-schedule/dtos/get-train-schedule-data.dto';
import { TrainSchedulePaginateDto } from '@train-schedule/dtos/train-schedule-padinate.dto';

import { ITrainScheduleService } from '@train-schedule/interfaces/train-schedule-service.interface';
import { ITrainScheduleRepository } from '@train-schedule/interfaces/train-schedule-repository.interface';

import { TRAIN_SCHEDULE_REPOSITORY_TOKEN } from '@injection-tokens';

@Injectable()
export class TrainScheduleService implements ITrainScheduleService {
  constructor(
    @Inject(TRAIN_SCHEDULE_REPOSITORY_TOKEN)
    private readonly trainRepository: ITrainScheduleRepository,
  ) {}

  get(id: number): Promise<TrainScheduleEntity> {
    try {
      return this.trainRepository.get(id);
    } catch (error) {
      throw error;
    }
  }

  getAll(query: TrainSchedulePaginateDto): Promise<GetTrainScheduleDataDto> {
    try {
      return this.trainRepository.getAll(query);
    } catch (error) {
      throw error;
    }
  }

  create(dto: CreateTrainScheduleDto): Promise<TrainScheduleEntity> {
    try {
      return this.trainRepository.create(dto);
    } catch (error) {
      throw error;
    }
  }

  delete(id: number): Promise<TrainScheduleEntity> {
    try {
      return this.trainRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

  update(dto: TrainScheduleDto): Promise<TrainScheduleEntity> {
    try {
      return this.trainRepository.update(dto);
    } catch (error) {
      throw error;
    }
  }
}
