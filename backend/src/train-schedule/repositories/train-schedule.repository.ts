import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PointEntity } from '@entities/point.entity';
import { TrainEntity } from '@entities/train.entity';
import { TrainScheduleEntity } from '@entities/train-schedule.entity';

import { TrainScheduleDto } from '@train-schedule/dtos/train-schedule.dto';
import { CreateTrainScheduleDto } from '@train-schedule/dtos/create-train-schedule.dto';
import { GetTrainScheduleDataDto } from '@train-schedule/dtos/get-train-schedule-data.dto';
import { TrainSchedulePaginateDto } from '@train-schedule/dtos/train-schedule-padinate.dto';

import { ITrainScheduleRepository } from '@train-schedule/interfaces/train-schedule-repository.interface';

@Injectable()
export class TrainScheduleRepository implements ITrainScheduleRepository {
  constructor(
    @InjectRepository(TrainScheduleEntity)
    private readonly trainScheduleRepository: Repository<TrainScheduleEntity>,
  ) {}

  get(id: number): Promise<TrainScheduleEntity> {
    try {
      return this.trainScheduleRepository.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async getAll({
    limit,
    order,
    orderBy,
    skip,
    code,
  }: TrainSchedulePaginateDto): Promise<GetTrainScheduleDataDto> {
    try {
      let queryBuilder = this.trainScheduleRepository
        .createQueryBuilder('tSR')
        .leftJoinAndSelect('tSR.startPoint', 'sP')
        .leftJoinAndSelect('tSR.endPoint', 'eP')
        .orderBy(`tSR.${orderBy}`, order)
        .skip(skip)
        .take(limit);

      if (code) {
        queryBuilder = queryBuilder.where('tSR.trainCode = :code', { code });
      }

      const count = await queryBuilder.getCount();
      const data = await queryBuilder.getMany();

      return {
        data,
        count,
      } as unknown as GetTrainScheduleDataDto;
    } catch (error) {
      throw error;
    }
  }

  async create(dto: CreateTrainScheduleDto): Promise<TrainScheduleEntity> {
    try {
      const tSInstance = this.trainScheduleRepository.create({
        ...dto,
        startPoint: dto.startPoint as unknown as PointEntity,
        endPoint: dto.endPoint as unknown as PointEntity,
        train: dto.train as unknown as TrainEntity,
      });

      return this.trainScheduleRepository.save(tSInstance);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<TrainScheduleEntity> {
    try {
      const trainSchedule = await this.get(id);

      if (!trainSchedule)
        throw new NotFoundException(`Can't find current train schedule`);

      return this.trainScheduleRepository.remove(trainSchedule);
    } catch (error) {
      throw error;
    }
  }

  async update(dto: TrainScheduleDto): Promise<TrainScheduleEntity> {
    try {
      const trainSchedule = await this.get(dto.id);

      if (!trainSchedule)
        throw new NotFoundException(`Can't find current train schedule`);

      return this.trainScheduleRepository.save({
        ...dto,
        startPoint: dto.startPoint as unknown as PointEntity,
        endPoint: dto.endPoint as unknown as PointEntity,
        train: dto.train as unknown as TrainEntity,
      });
    } catch (error) {
      throw error;
    }
  }
}
