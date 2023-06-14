import { Provider } from '@nestjs/common';

import { TrainService } from '@train/services/train.service';
import { TrainRepository } from '@train/repositories/train.repository';
import { SeedingTrainService } from '@train/services/seeding-train.service';

import {
  SEEDING_TRAIN_SERVICE_TOKEN,
  TRAIN_REPOSITORY_TOKEN,
  TRAIN_SERVICE_TOKEN,
} from '@injection-tokens';

export const providers: Provider[] = [
  {
    useClass: TrainService,
    provide: TRAIN_SERVICE_TOKEN,
  },
  {
    useClass: TrainRepository,
    provide: TRAIN_REPOSITORY_TOKEN,
  },
  {
    useClass: SeedingTrainService,
    provide: SEEDING_TRAIN_SERVICE_TOKEN,
  },
];
