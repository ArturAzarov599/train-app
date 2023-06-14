import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';

import { EOrder } from '@enums/order.enum';

export class BasePaginationDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  @Type(() => Number)
  skip: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Type(() => Number)
  limit: number;

  @ApiProperty({ enum: EOrder })
  @IsEnum(EOrder)
  order: EOrder;
}
