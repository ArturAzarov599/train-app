import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TrainEntity } from '@entities/train.entity';

import { TrainDto } from '@train/dtos/train.dto';
import { ErrorDto } from '@common/dtos/error.dto';
import { CreateTrainDto } from '@train/dtos/create-train.dto';
import { GetTrainsDataDto } from '@train/dtos/get-trains-data.dto';
import { TrainPaginationDto } from '@train/dtos/train-pagination.dto';

import { ITrainService } from '@train/interfaces/train-service.interface';

import { TRAIN_SERVICE_TOKEN } from '@injection-tokens';

@ApiTags('train')
@Controller('train')
export class TrainController {
  constructor(
    @Inject(TRAIN_SERVICE_TOKEN) private readonly trainService: ITrainService,
  ) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetTrainsDataDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorDto,
  })
  findAll(@Query() query: TrainPaginationDto): Promise<GetTrainsDataDto> {
    try {
      return this.trainService.findAll(query);
    } catch (error) {
      throw error;
    }
  }

  @Get('details')
  @ApiQuery({
    type: String,
    name: 'code',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TrainDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorDto,
  })
  find(@Query() query: { code: string }): Promise<TrainEntity> {
    try {
      return this.trainService.find(query.code);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @ApiBody({ type: CreateTrainDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: TrainDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorDto,
  })
  create(@Body() dto: CreateTrainDto): Promise<TrainEntity> {
    try {
      return this.trainService.create(dto);
    } catch (error) {
      throw error;
    }
  }

  @Put()
  @ApiBody({ type: CreateTrainDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TrainDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    type: ErrorDto,
  })
  update(@Body() dto: CreateTrainDto): Promise<TrainEntity> {
    try {
      return this.trainService.update(dto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':code')
  @ApiParam({
    name: 'code',
    required: true,
    description: 'The train code for delete train',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TrainDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    type: ErrorDto,
  })
  delete(@Param('code') code: string): Promise<TrainEntity> {
    try {
      return this.trainService.delete(code);
    } catch (error) {
      throw error;
    }
  }
}
