import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';

import { EArrivalStatus } from '@enums/arrival-status.enum';

import { IdNameDto } from '@common/dtos/id-name.dto';

export class FullTrainScheduleDto {
  @ApiProperty({ type: String })
  @IsString()
  train: string;

  @ApiProperty({ type: IdNameDto })
  startPoint: IdNameDto;

  @ApiProperty({ type: IdNameDto })
  endPoint: IdNameDto;

  @ApiProperty({ type: String })
  @IsDateString()
  startDate: string;

  @ApiProperty({ type: String })
  @IsDateString()
  endDate: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  distance: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  duration: number;

  @ApiProperty({ enum: EArrivalStatus })
  @IsEnum(EArrivalStatus)
  status: EArrivalStatus;
}
