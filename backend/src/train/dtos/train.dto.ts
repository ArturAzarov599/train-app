import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

import { CreateTrainDto } from '@train/dtos/create-train.dto';

export class TrainDto extends CreateTrainDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;
}
