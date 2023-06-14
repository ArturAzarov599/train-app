import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

import { TrainEntity } from '@entities/train.entity';

export class GetTrainsDataDto {
  @ApiProperty({ type: TrainEntity, isArray: true })
  @IsArray()
  data: TrainEntity[];

  @ApiProperty({ type: Number })
  @IsNumber()
  count: number;
}
