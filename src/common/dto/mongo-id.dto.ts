import { isValidObjectId, ObjectId, mongo } from 'mongoose';
import { Transform } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';

export class MongoIdDto {
  @Transform(({ value }) => {
    if (isValidObjectId(value))
      return mongo.ObjectId.createFromHexString(value);

    throw new BadRequestException('_id should be a valid mongo-id string');
  })
  _id: ObjectId;
}
