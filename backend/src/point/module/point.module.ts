import { Module } from '@nestjs/common';

import { PointController } from '@point/controllers/point.controller';

import { imports } from '@point/module/imports';
import { providers } from '@point/module/providers';

@Module({
  imports,
  controllers: [PointController],
  providers,
  exports: providers,
})
export class PointModule {}
