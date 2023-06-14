import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class IdNameDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;
}
