import { ObjectId } from 'mongoose';

export interface IModel {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
