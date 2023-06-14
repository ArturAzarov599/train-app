import { Inject } from '@nestjs/common';
import { Console, Command, createSpinner } from 'nestjs-console';

import { ISeedingService } from '@common/interfaces/seeding-service.interface';

import {
  SEEDING_POINT_SERVICE_TOKEN,
  SEEDING_TRAIN_SERVICE_TOKEN,
  TRAIN_SCHEDULE_SEEDING_SERVICE_TOKEN,
} from '@injection-tokens';

@Console()
export class SeedService {
  constructor(
    @Inject(SEEDING_TRAIN_SERVICE_TOKEN)
    private readonly seedingTrainService: ISeedingService,
    @Inject(SEEDING_POINT_SERVICE_TOKEN)
    private readonly seedingPointService: ISeedingService,
    @Inject(TRAIN_SCHEDULE_SEEDING_SERVICE_TOKEN)
    private readonly seedingTrainScheduleService: ISeedingService,
  ) {}

  @Command({
    command: 'seed',
    description: 'Seed DB',
  })
  async seed(): Promise<void> {
    try {
      const spin = createSpinner();
      spin.start(`Start seeding database`);
      await this.seedingTrainService.populateDatabase();
      await this.seedingPointService.populateDatabase();
      await this.seedingTrainScheduleService.populateDatabase();
      spin.succeed(`Stop seeding database`);
    } catch (error) {
      console.log(`Error:`, error);
    }
  }
}
