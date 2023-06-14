import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreateTrainScheduleDto } from '@train-schedule/dtos/create-train-schedule.dto';

export class TrainScheduleDto extends CreateTrainScheduleDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;
}
