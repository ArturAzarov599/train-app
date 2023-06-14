import { CreateTrainDto } from '@train/dtos/create-train.dto';

import { ETrainType } from '@enums/train-types.enum';

const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam commodi magnam provident exercitationem temporibus quos maiores dolor molestiae quisquam, excepturi architecto ab ea molestias numquam eveniet voluptatum officiis beatae officia recusandae inventore fuga nemo. Quisquam totam consectetur quibusdam nostrum iste nulla mollitia laboriosam quas in asperiores at aliquam dignissimos, magnam maxime fugit sequi quidem impedit saepe harum ratione possimus libero. Cum fuga, excepturi sunt similique dicta amet corporis, non corrupti laboriosam totam odio consequatur laudantium ipsum debitis architecto maxime inventore labore nam aspernatur repellendus nulla, reiciendis est neque. Facilis modi ipsa assumenda praesentium repudiandae itaque labore quam quidem provident!';

export const mockTrainRecords: CreateTrainDto[] = [
  {
    code: '059L',
    description,
    type: ETrainType.IC,
    created: '2001-05-04',
  },
  {
    code: '1279Q',
    description,
    type: ETrainType.SB,
    created: '1997-02-01',
  },
  {
    code: '070M',
    description,
    type: ETrainType.RE,
    created: '2019-10-28',
  },
  {
    code: '049AL',
    description,
    type: ETrainType.RB,
    created: '1997-08-24',
  },
  {
    code: '068NQ',
    description,
    type: ETrainType.ECE,
    created: '1999-02-14',
  },
  {
    code: '080LI',
    description,
    type: ETrainType.RB,
    created: '2015-09-18',
  },
  {
    code: '121DS',
    description,
    type: ETrainType.IRE,
    created: '2011-11-12',
  },
  {
    code: '698MN',
    description,
    type: ETrainType.SB,
    created: '2014-11-09',
  },
  {
    code: '888GN',
    description,
    type: ETrainType.IRE,
    created: '2019-10-28',
  },
  {
    code: '259LF',
    description,
    type: ETrainType.IC,
    created: '2001-05-04',
  },
  {
    code: '4180D',
    description,
    type: ETrainType.ICE,
    created: '2004-12-21',
  },
  {
    code: '070XM',
    description,
    type: ETrainType.IRE,
    created: '2009-12-24',
  },
];
