import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsDateString } from 'class-validator';

import { ETrainType } from '@enums/train-types.enum';

export class CreateTrainDto {
  @IsString()
  @ApiProperty({ type: String })
  code: string;

  @IsString()
  @ApiProperty({ type: String })
  description: string;

  @IsEnum(ETrainType)
  @ApiProperty({ enum: ETrainType })
  type: ETrainType;

  @IsDateString()
  @ApiProperty({ type: String })
  created: string;
}
