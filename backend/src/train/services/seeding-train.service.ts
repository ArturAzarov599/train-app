import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { TrainEntity } from '@entities/train.entity';

import { ISeedingService } from '@common/interfaces/seeding-service.interface';

import { mockTrainRecords } from '@train/mocks/mock-train-data';

@Injectable()
export class SeedingTrainService implements ISeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async populateDatabase(): Promise<void> {
    try {
      const recordsCount = await this.entityManager.count(TrainEntity);

      if (recordsCount === 0) {
        const tRInstances = mockTrainRecords.flatMap((mTR) =>
          this.entityManager.create(TrainEntity, mTR),
        );

        await this.entityManager.save(tRInstances);

        console.log(`\n Population of train table successfully finished!`);
      } else {
        console.log(`\n There is no need to populate train table!`);
      }
    } catch (error) {
      throw error;
    }
  }
}
