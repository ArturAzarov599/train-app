import { Inject, Injectable } from '@nestjs/common';

import { TrainEntity } from '@entities/train.entity';

import { CreateTrainDto } from '@train/dtos/create-train.dto';
import { GetTrainsDataDto } from '@train/dtos/get-trains-data.dto';
import { TrainPaginationDto } from '@train/dtos/train-pagination.dto';

import { ITrainService } from '@train/interfaces/train-service.interface';
import { ITrainRepository } from '@train/interfaces/train-repository.interface';

import { TRAIN_REPOSITORY_TOKEN } from '@injection-tokens';

@Injectable()
export class TrainService implements ITrainService {
  constructor(
    @Inject(TRAIN_REPOSITORY_TOKEN) readonly trainRepository: ITrainRepository,
  ) {
    this.trainRepository = trainRepository;
  }

  find(code: string): Promise<TrainEntity> {
    try {
      return this.trainRepository.find(code);
    } catch (error) {
      throw error;
    }
  }

  findAll(query: TrainPaginationDto): Promise<GetTrainsDataDto> {
    try {
      return this.trainRepository.findAll(query);
    } catch (error) {
      throw error;
    }
  }

  update(dto: Partial<CreateTrainDto>): Promise<TrainEntity> {
    try {
      return this.trainRepository.update(dto);
    } catch (error) {
      throw error;
    }
  }

  delete(code: string): Promise<TrainEntity> {
    try {
      return this.trainRepository.delete(code);
    } catch (error) {
      throw error;
    }
  }

  create(dto: CreateTrainDto): Promise<TrainEntity> {
    try {
      return this.trainRepository.create(dto);
    } catch (error) {
      throw error;
    }
  }
}
