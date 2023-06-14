import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('point')
export class PointEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
