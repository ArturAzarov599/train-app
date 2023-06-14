import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { EOrder } from '@enums/order.enum';

import { TrainEntity } from '@entities/train.entity';

import { CreateTrainDto } from '@train/dtos/create-train.dto';
import { ITrainRepository } from '@train/interfaces/train-repository.interface';
import { GetTrainsDataDto } from '@train/dtos/get-trains-data.dto';
import { TrainPaginationDto } from '@train/dtos/train-pagination.dto';

@Injectable()
export class TrainRepository implements ITrainRepository {
  constructor(
    @InjectRepository(TrainEntity)
    readonly trainRepository: Repository<TrainEntity>,
  ) {}

  find(code: string): Promise<TrainEntity> {
    try {
      return this.trainRepository.findOne({ where: { code } });
    } catch (error) {
      throw error;
    }
  }

  async findAll({
    skip,
    limit,
    order = EOrder.ASC,
    orderBy,
  }: TrainPaginationDto): Promise<GetTrainsDataDto> {
    try {
      const queryBuilder = this.trainRepository
        .createQueryBuilder('train')
        .orderBy(`train.${orderBy}`, order)
        .skip(skip)
        .take(limit);
      const count = await queryBuilder.getCount();
      const data = await queryBuilder.getMany();

      return {
        data,
        count,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(dto: CreateTrainDto): Promise<TrainEntity> {
    try {
      const train = await this.find(dto.code);

      if (train) {
        console.log(`Duplicate train code!`);
        throw new BadRequestException(
          'Train with this code is already existed',
        );
      }

      return this.trainRepository.save(dto);
    } catch (error) {
      throw error;
    }
  }

  async update(dto: Partial<CreateTrainDto>): Promise<TrainEntity> {
    try {
      const train = await this.find(dto.code);

      if (!train)
        throw new NotFoundException('Can`t find train with this code');

      return this.trainRepository.save(dto);
    } catch (error) {
      throw error;
    }
  }

  async delete(code: string): Promise<TrainEntity> {
    try {
      const train = await this.find(code);

      if (!train)
        throw new NotFoundException('Can`t find train with this code');

      return this.trainRepository.remove(train);
    } catch (error) {
      throw error;
    }
  }
}
