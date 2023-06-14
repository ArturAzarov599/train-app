import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { ETrainKeys } from '@train/enum/train-keys.enum';

import { BasePaginationDto } from '@common/dtos/base-pagination.dto';

export class TrainPaginationDto extends BasePaginationDto {
  @ApiProperty({ enum: ETrainKeys })
  @IsEnum(ETrainKeys)
  orderBy: ETrainKeys;
}
