import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreatePointDto } from '@point/dtos/create-point.dto';

export class PointDto extends CreatePointDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;
}
