import { Prop } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';
import { IModel } from '../types/model-interface.type';

export abstract class BaseModel implements IModel {
  createdAt: Date;
  updatedAt: Date;

  @Prop({
    type: Types.ObjectId,
    required: true,
    default: Types.ObjectId,
  })
  _id: ObjectId;
}
