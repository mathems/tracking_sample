import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackModel } from './schemas/track.model';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(TrackModel.name) private trackModel: Model<TrackModel>,
  ) {}

  insert(data: CreateTrackDto) {
    return this.trackModel.create(data);
  }

  rm(_id: ObjectId) {
    return this.trackModel.findByIdAndDelete(_id).lean();
  }

  getById(_id: ObjectId) {
    return this.trackModel.findById(_id).lean();
  }
}
