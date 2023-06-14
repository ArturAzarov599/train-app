import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { ETrainScheduleFields } from '@train-schedule/enums/train-schedule-fields';

import { BasePaginationDto } from '@common/dtos/base-pagination.dto';

export class TrainSchedulePaginateDto extends BasePaginationDto {
  @ApiProperty({ enum: ETrainScheduleFields })
  @IsEnum(ETrainScheduleFields)
  orderBy: ETrainScheduleFields;

  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  code: string;
}
