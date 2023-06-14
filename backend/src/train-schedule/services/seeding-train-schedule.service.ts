import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import { TrainEntity } from '@entities/train.entity';
import { PointEntity } from '@entities/point.entity';
import { TrainScheduleEntity } from '@entities/train-schedule.entity';

import { ISeedingService } from '@common/interfaces/seeding-service.interface';

import { mockTrainScheduleRecords } from '@train-schedule/mocks/mock-train-schedule';

@Injectable()
export class SeedingTrainScheduleService implements ISeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async populateDatabase(): Promise<void> {
    try {
      const recordsCount = await this.entityManager.count(TrainScheduleEntity);

      if (recordsCount === 0) {
        const tRInstances = mockTrainScheduleRecords.flatMap((mTSR) =>
          this.entityManager.create(TrainScheduleEntity, {
            ...mTSR,
            train: mTSR.train as unknown as TrainEntity,
            startPoint: mTSR.startPoint as unknown as PointEntity,
            endPoint: mTSR.endPoint as unknown as PointEntity,
          }),
        );

        await this.entityManager.save(tRInstances);

        console.log(
          `\n Population of train-schedule table successfully finished!`,
        );
      } else {
        console.log(`\n There is no need to populate train-schedule table!`);
      }
    } catch (error) {
      throw error;
    }
  }
}
