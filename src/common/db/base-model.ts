import { Prop, Schema } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';
import { IModel } from '../types/model-interface.type';

@Schema({ timestamps: true })
export class BaseModel implements IModel {
  created_at: Date;
  updated_at: Date;

  @Prop({
    type: Types.ObjectId,
    required: true,
    default: Types.ObjectId,
  })
  _id: ObjectId;
}
