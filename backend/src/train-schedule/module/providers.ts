import { Provider } from '@nestjs/common';

import { TrainScheduleService } from '@train-schedule/services/train-schedule.service';
import { TrainScheduleRepository } from '@train-schedule/repositories/train-schedule.repository';
import { SeedingTrainScheduleService } from '@train-schedule/services/seeding-train-schedule.service';

import {
  TRAIN_SCHEDULE_REPOSITORY_TOKEN,
  TRAIN_SCHEDULE_SEEDING_SERVICE_TOKEN,
  TRAIN_SCHEDULE_SERVICE_TOKEN,
} from '@injection-tokens';

export const providers: Provider[] = [
  {
    useClass: TrainScheduleService,
    provide: TRAIN_SCHEDULE_SERVICE_TOKEN,
  },
  {
    useClass: TrainScheduleRepository,
    provide: TRAIN_SCHEDULE_REPOSITORY_TOKEN,
  },
  {
    useClass: SeedingTrainScheduleService,
    provide: TRAIN_SCHEDULE_SEEDING_SERVICE_TOKEN,
  },
];
