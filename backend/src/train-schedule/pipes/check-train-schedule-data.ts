import { BadRequestException, PipeTransform } from '@nestjs/common';

import { CreateTrainScheduleDto } from '@train-schedule/dtos/create-train-schedule.dto';

export class CheckTrainScheduleData implements PipeTransform {
  transform(value: CreateTrainScheduleDto) {
    if (value.startDate > value.endDate)
      throw new BadRequestException(
        `End date can't be smaller than start date`,
      );

    if (value.startDate === value.endDate)
      throw new BadRequestException(`Start date can't be equal to end date`);

    if (value.endPoint === value.startPoint)
      throw new BadRequestException(
        `Start point can't be the same as end point`,
      );

    return value;
  }
}
