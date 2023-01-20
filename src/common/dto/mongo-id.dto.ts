import { isValidObjectId, ObjectId, mongo } from 'mongoose';
import { Transform } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';
import { IsDefined } from 'class-validator';

export class MongoIdDto {
  @Transform(({ value }) => {
    if (isValidObjectId(value))
      return mongo.ObjectId.createFromHexString(value);

    throw new BadRequestException('_id should be a valid mongo-id string');
  })
  @IsDefined()
  _id: ObjectId;
}
