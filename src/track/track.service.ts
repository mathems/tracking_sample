import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { NotExistsException } from '../common/exceptions/not-exists.exception';
import { TrackStatus } from '../common/types/track/track-status-enum.type';
import { CreateTrackDto } from './dto/create-track.dto';
import { FindManyTracksDto } from './dto/find-many-tracks.dto';
import { FindManyTracksResDto } from './dto/find-many-tracks.res-dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackModel } from './schemas/track.model';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(TrackModel.name) private trackModel: Model<TrackModel>,
  ) {}

  async changeStatus(_id: ObjectId, status: TrackStatus) {
    return this.updateTrack(_id, { status });
  }

  async updateTrack(_id: ObjectId, updateData: UpdateTrackDto) {
    const updated = await this.trackModel.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updated) throw new NotExistsException();

    return updated;
  }

  insert(data: CreateTrackDto) {
    return this.trackModel.create(data);
  }

  rm(_id: ObjectId) {
    return this.trackModel.findByIdAndDelete(_id).lean();
  }

  async getById(_id: ObjectId) {
    const track = await this.trackModel.findById(_id).lean();

    if (!track) throw new NotExistsException();

    return track;
  }

  async getMany(options: FindManyTracksDto) {
    const { limit, skip, sortBy, sortByType, status } = options;
    const find = status ? { status } : {};
    const query = this.trackModel.find(find).skip(skip).limit(limit);

    sortBy && query.sort({ [sortBy]: sortByType });

    const tracks = await query.lean();

    return new FindManyTracksResDto(tracks, {
      pagination: { skip, limit },
      sort: { sortBy, sortByType },
      filter: { status },
    });
  }
}
