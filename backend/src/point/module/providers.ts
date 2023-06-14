import { Provider } from '@nestjs/common/interfaces/modules';

import { PointService } from '@point/services/point.service';
import { PointRepository } from '@point/repositories/point.repository';
import { SeedingPointService } from '@point/services/seeding-point.service';

import {
  POINT_REPOSITORY_TOKEN,
  POINT_SERVICE_TOKEN,
  SEEDING_POINT_SERVICE_TOKEN,
} from '@injection-tokens';

export const providers: Provider[] = [
  {
    useClass: PointService,
    provide: POINT_SERVICE_TOKEN,
  },
  {
    useClass: SeedingPointService,
    provide: SEEDING_POINT_SERVICE_TOKEN,
  },
  {
    useClass: PointRepository,
    provide: POINT_REPOSITORY_TOKEN,
  },
];
