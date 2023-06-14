import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CheckTrainScheduleData } from '@train-schedule/pipes/check-train-schedule-data';

import { TrainScheduleEntity } from '@entities/train-schedule.entity';

import { TrainScheduleDto } from '@train-schedule/dtos/train-schedule.dto';
import { CreateTrainScheduleDto } from '@train-schedule/dtos/create-train-schedule.dto';
import { GetTrainScheduleDataDto } from '@train-schedule/dtos/get-train-schedule-data.dto';
import { TrainSchedulePaginateDto } from '@train-schedule/dtos/train-schedule-padinate.dto';

import { ITrainScheduleService } from '@train-schedule/interfaces/train-schedule-service.interface';

import { TRAIN_SCHEDULE_SERVICE_TOKEN } from '@injection-tokens';

@ApiTags('train-schedule')
@Controller('train-schedule')
export class TrainScheduleController {
  constructor(
    @Inject(TRAIN_SCHEDULE_SERVICE_TOKEN)
    private readonly trainScheduleService: ITrainScheduleService,
  ) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TrainScheduleDto,
  })
  get(@Param('id', ParseIntPipe) id: number): Promise<TrainScheduleEntity> {
    try {
      return this.trainScheduleService.get(id);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetTrainScheduleDataDto,
  })
  getAll(
    @Query() query: TrainSchedulePaginateDto,
  ): Promise<GetTrainScheduleDataDto> {
    try {
      return this.trainScheduleService.getAll(query);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @ApiBody({ type: CreateTrainScheduleDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: TrainScheduleDto,
  })
  create(
    @Body(new CheckTrainScheduleData()) dto: CreateTrainScheduleDto,
  ): Promise<TrainScheduleEntity> {
    try {
      return this.trainScheduleService.create(dto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TrainScheduleDto,
  })
  delete(@Param('id', ParseIntPipe) id: number): Promise<TrainScheduleEntity> {
    try {
      return this.trainScheduleService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Put()
  @ApiBody({ type: CreateTrainScheduleDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TrainScheduleDto,
  })
  update(@Body() dto: TrainScheduleDto): Promise<TrainScheduleEntity> {
    try {
      return this.trainScheduleService.update(dto);
    } catch (error) {
      throw error;
    }
  }
}
