import {
  Document,
  HydratedDocument,
  LeanDocument,
  Model,
  ObjectId,
} from 'mongoose';

export abstract class Repo<
  T extends { _id: ObjectId },
  CreateT extends Partial<Omit<T, '_id'>> = Partial<Omit<T, '_id'>>,
> {
  constructor(protected model: Model<Document<T>>) {}

  async insert(data: CreateT, mongooseDoc?: false): Promise<T>;
  async insert(data: CreateT, mongooseDoc: true): Promise<HydratedDocument<T>>;
  async insert(data: CreateT, mongooseDoc = false) {
    const res = await this.model.create(data);

    if (mongooseDoc) return res;

    return res.toObject();
  }

  getById<S extends (keyof T)[]>(_id: string, select = ['_id']) {
    return this.model.findById(_id, select).lean() as LeanDocument<
      Pick<T, S[number]>
    >;
  }
}
