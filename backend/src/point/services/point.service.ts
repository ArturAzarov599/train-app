import { Inject, Injectable } from '@nestjs/common';

import { PointDto } from '@point/dtos/point.dto';
import { CreatePointDto } from '@point/dtos/create-point.dto';

import { IPointService } from '@point/interfaces/point-service.interface';
import { IPointRepository } from '@point/interfaces/point-repository.interface';

import { POINT_REPOSITORY_TOKEN } from '@injection-tokens';

@Injectable()
export class PointService implements IPointService {
  constructor(
    @Inject(POINT_REPOSITORY_TOKEN)
    private readonly pointRepository: IPointRepository,
  ) {}

  get(dto: CreatePointDto): Promise<CreatePointDto> {
    try {
      return this.pointRepository.get(dto);
    } catch (error) {
      throw error;
    }
  }

  getAll(): Promise<CreatePointDto[]> {
    try {
      return this.pointRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  create(dto: CreatePointDto): Promise<CreatePointDto> {
    try {
      return this.pointRepository.create(dto);
    } catch (error) {
      throw error;
    }
  }

  update(dto: PointDto): Promise<CreatePointDto> {
    try {
      return this.pointRepository.update(dto);
    } catch (error) {
      throw error;
    }
  }

  delete(dto: CreatePointDto): Promise<CreatePointDto> {
    try {
      return this.pointRepository.delete(dto);
    } catch (error) {
      throw error;
    }
  }
}
