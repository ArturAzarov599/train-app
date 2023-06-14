import { Module } from '@nestjs/common';

import { TrainController } from '@train/controllers/train.controller';

import { imports } from '@train/module/imports';
import { providers } from '@train/module/providers';

@Module({
  imports,
  controllers: [TrainController],
  providers,
  exports: providers,
})
export class TrainModule {}
