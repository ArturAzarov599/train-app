import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { FullTrainScheduleDto } from '@train-schedule/dtos/full-train-schedule.dto';

export class GetTrainScheduleDataDto {
  @ApiProperty({ type: FullTrainScheduleDto, isArray: true })
  data: FullTrainScheduleDto[];

  @ApiProperty({ type: Number })
  @IsNumber()
  count: number;
}
