import { ObjectId } from 'mongoose';

export interface IModel {
  _id: ObjectId;
  created_at: Date;
  updated_at: Date;
}
