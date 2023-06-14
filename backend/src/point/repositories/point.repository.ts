import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import { PointEntity } from '@entities/point.entity';

import { PointDto } from '@point/dtos/point.dto';
import { CreatePointDto } from '@point/dtos/create-point.dto';

import { IPointRepository } from '@point/interfaces/point-repository.interface';

@Injectable()
export class PointRepository implements IPointRepository {
  constructor(
    @InjectRepository(PointEntity)
    private readonly pointRepository: Repository<PointEntity>,
  ) {}

  get(dto: CreatePointDto): Promise<PointEntity> {
    try {
      return this.pointRepository.findOne({ where: { name: dto.name } });
    } catch (error) {
      throw error;
    }
  }

  getAll(): Promise<PointEntity[]> {
    try {
      return this.pointRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async create(dto: CreatePointDto): Promise<PointEntity> {
    try {
      const point = await this.get(dto);

      if (point)
        throw new BadRequestException(
          'Point with this name is already in database!',
        );

      const pointInstance = this.pointRepository.create(dto);

      return this.pointRepository.save(pointInstance);
    } catch (error) {
      throw error;
    }
  }

  async delete(dto: CreatePointDto): Promise<PointEntity> {
    try {
      const point = await this.get(dto);

      if (!point)
        throw new NotFoundException(
          `Can't delete point with name: ${dto.name}`,
        );

      return this.pointRepository.remove(point);
    } catch (error) {
      throw error;
    }
  }

  async update(dto: PointDto): Promise<PointEntity> {
    try {
      const newPoint = await this.get({ name: dto.name });

      if (newPoint)
        throw new BadRequestException(`Point ${dto.name} is already exists!`);

      const oldPoint = await this.pointRepository.findOne({
        where: { id: dto.id },
      });

      if (!oldPoint)
        throw new NotFoundException(`Can't find ${dto.name} point`);

      await this.pointRepository.update(dto.id, dto);

      return dto;
    } catch (error) {
      throw error;
    }
  }
}
