import { Module } from '@nestjs/common';

import { imports } from '@train-schedule/module/imports';
import { providers } from '@train-schedule/module/providers';

import { TrainScheduleController } from '@train-schedule/controllers/train-schedule.controller';

@Module({
  imports,
  controllers: [TrainScheduleController],
  providers,
  exports: providers,
})
export class TrainScheduleModule {}
