import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePointDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
