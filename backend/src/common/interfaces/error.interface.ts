import { HttpStatus } from '@nestjs/common';

export interface IDefaultError {
  statusCode: HttpStatus;
  message: string;
  error: string;
}
