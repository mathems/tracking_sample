import { Types } from 'mongoose';

export interface IModel {
  _id: Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}
