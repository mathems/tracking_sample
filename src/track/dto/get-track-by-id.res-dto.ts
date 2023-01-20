import { Schema } from 'mongoose';
import { ITrack } from '../../common/types/track/track-interface.type';
import { TrackStatus } from '../../common/types/track/track-status-enum.type';

export class GetTrackByIdResDto implements ITrack {
  needle: string;
  status: TrackStatus;
  options: Record<string, unknown>;
  _id: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
