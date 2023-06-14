import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PointDto } from '@point/dtos/point.dto';
import { ErrorDto } from '@common/dtos/error.dto';
import { CreatePointDto } from '@point/dtos/create-point.dto';

import { IPointService } from '@point/interfaces/point-service.interface';

import { POINT_SERVICE_TOKEN } from '@injection-tokens';

@ApiTags('point')
@Controller('point')
export class PointController {
  constructor(
    @Inject(POINT_SERVICE_TOKEN) private readonly pointService: IPointService,
  ) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: PointDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorDto,
  })
  getAll(): Promise<CreatePointDto[]> {
    try {
      return this.pointService.getAll();
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @ApiBody({ type: CreatePointDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PointDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorDto,
  })
  create(@Body() dto: CreatePointDto): Promise<CreatePointDto> {
    try {
      return this.pointService.create(dto);
    } catch (error) {
      throw error;
    }
  }

  @Delete()
  @ApiBody({ type: CreatePointDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PointDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    type: ErrorDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorDto,
  })
  delete(@Body() dto: CreatePointDto): Promise<CreatePointDto> {
    try {
      return this.pointService.delete(dto);
    } catch (error) {
      throw error;
    }
  }

  @Put()
  @ApiBody({ type: PointDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ErrorDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    type: ErrorDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: ErrorDto,
  })
  update(@Body() dto: PointDto): Promise<CreatePointDto> {
    try {
      return this.pointService.update(dto);
    } catch (error) {
      throw error;
    }
  }
}
