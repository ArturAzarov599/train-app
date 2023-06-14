import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { PointEntity } from '@entities/point.entity';

import { ISeedingService } from '@common/interfaces/seeding-service.interface';

import { mockPointsRecords } from '@point/mocks/mock-point-data';

@Injectable()
export class SeedingPointService implements ISeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async populateDatabase(): Promise<void> {
    try {
      const recordsCount = await this.entityManager.count(PointEntity);

      if (recordsCount === 0) {
        const pRInstances = mockPointsRecords.flatMap((mPR) =>
          this.entityManager.create(PointEntity, mPR),
        );

        await this.entityManager.save(pRInstances);

        console.log(`\n Population of points table successfully finished!`);
      } else {
        console.log(`\n There is no need to populate point table!`);
      }
    } catch (error) {
      throw error;
    }
  }
}
