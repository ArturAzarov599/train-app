import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ETrainType } from '@enums/train-types.enum';

import { TrainScheduleEntity } from '@entities/train-schedule.entity';

@Entity('train')
export class TrainEntity {
  @PrimaryColumn()
  code: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ enum: ETrainType, type: 'enum' })
  type: ETrainType;

  @Column({ type: 'date' })
  created: Date;

  @OneToMany(
    () => TrainScheduleEntity,
    (trainSchedule) => trainSchedule.train,
    { onDelete: 'CASCADE' },
  )
  trainSchedules: TrainScheduleEntity[];
}
