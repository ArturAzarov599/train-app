import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { EArrivalStatus } from '@enums/arrival-status.enum';

import { TrainEntity } from '@entities/train.entity';
import { PointEntity } from '@entities/point.entity';

@Entity('train-schedule')
export class TrainScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TrainEntity, (train) => train.trainSchedules, {
    onDelete: 'CASCADE',
  })
  train: TrainEntity;

  @ManyToOne(() => PointEntity)
  startPoint: PointEntity;

  @ManyToOne(() => PointEntity)
  endPoint: PointEntity;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  distance: number;

  @Column()
  duration: number;

  @Column({
    type: 'enum',
    enum: EArrivalStatus,
    default: EArrivalStatus.WAITING_FOR_TRIP,
  })
  status: EArrivalStatus;
}
