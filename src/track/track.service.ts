import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { PaginationResDto } from '../common/dto/pagination.res-dto';
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

  async getById(_id: ObjectId) {
    const track = (await this.trackModel.findById(_id).lean()) || {};

    return track;
  }

  async getMany(options: PaginationQueryDto) {
    const { limit, skip } = options;
    const tracks = await this.trackModel
      .find({})
      .skip(skip)
      .limit(limit)
      .lean();

    return new PaginationResDto(tracks, {
      limit,
      skip,
    });
  }
}
